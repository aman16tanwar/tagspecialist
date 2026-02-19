import os
import asyncio
import logging
from datetime import datetime, timezone
from typing import List, Optional
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# MongoDB setup
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "tagspecialist")

client: MongoClient = None
db = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global client, db
    client = MongoClient(MONGO_URL)
    db = client[DB_NAME]
    logger.info(f"Connected to MongoDB: {DB_NAME}")
    yield
    if client:
        client.close()
        logger.info("MongoDB connection closed")

app = FastAPI(title="TagSpecialist Lead API", lifespan=lifespan)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Models
class LeadCreate(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    service_type: Optional[str] = None  # 'tracking' or 'data-engineering'
    services: Optional[List[str]] = []
    channels: Optional[List[str]] = []
    pain_point: Optional[str] = None
    budget: Optional[str] = None
    timeline: Optional[str] = None
    message: Optional[str] = None
    source: Optional[str] = "website"  # 'quick_form', 'exit_intent', 'footer', 'hero', etc.
    lead_type: Optional[str] = "Client"  # 'Client' or 'Partner'

class LeadResponse(BaseModel):
    lead_id: str
    name: str
    email: str
    phone: Optional[str] = None
    company: Optional[str] = None
    service_type: Optional[str] = None
    services: List[str] = []
    channels: List[str] = []
    pain_point: Optional[str] = None
    budget: Optional[str] = None
    timeline: Optional[str] = None
    message: Optional[str] = None
    source: str = "website"
    lead_type: str = "Client"
    status: str = "new"
    created_at: str

class LeadListResponse(BaseModel):
    leads: List[LeadResponse]
    total: int

# Email notification helper
async def send_lead_notification(lead_data: dict):
    """Send email notification for new lead (if Resend API key is configured)"""
    try:
        import resend
        api_key = os.environ.get("RESEND_API_KEY")
        sender_email = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
        notification_email = os.environ.get("NOTIFICATION_EMAIL", "aman16tanwar@gmail.com")
        
        if not api_key:
            logger.warning("RESEND_API_KEY not configured, skipping email notification")
            return
        
        resend.api_key = api_key
        
        # Build email HTML
        services = ", ".join(lead_data.get("services", [])) or "Not specified"
        channels = ", ".join(lead_data.get("channels", [])) or "Not specified"
        
        html_content = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0a192f; padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0;">🔔 New Lead Alert</h1>
            </div>
            <div style="padding: 30px; background: #f9fafb;">
                <h2 style="color: #0a192f; margin-top: 0;">Lead Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">{lead_data.get('name', 'N/A')}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:{lead_data.get('email', '')}">{lead_data.get('email', 'N/A')}</a></td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">{lead_data.get('phone', 'Not provided')}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Company:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">{lead_data.get('company', 'Not provided')}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Service Type:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">{lead_data.get('service_type', 'Not specified')}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Services Interested:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">{services}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Marketing Channels:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">{channels}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Budget:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">{lead_data.get('budget', 'Not specified')}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Timeline:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">{lead_data.get('timeline', 'Not specified')}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Source:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">{lead_data.get('source', 'website')}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Lead Type:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">{lead_data.get('lead_type', 'Client')}</td></tr>
                </table>
                
                <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #2563eb;">
                    <strong>Challenge/Message:</strong>
                    <p style="margin: 10px 0 0 0; color: #4b5563;">{lead_data.get('pain_point', lead_data.get('message', 'No message provided'))}</p>
                </div>
            </div>
            <div style="background: #0a192f; padding: 15px; text-align: center;">
                <p style="color: #9ca3af; margin: 0; font-size: 12px;">TagSpecialist Lead Management System</p>
            </div>
        </div>
        """
        
        params = {
            "from": sender_email,
            "to": [notification_email],
            "subject": f"🔔 New Lead: {lead_data.get('name')} ({lead_data.get('source', 'website')})",
            "html": html_content
        }
        
        # Run sync SDK in thread to keep non-blocking
        await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Lead notification email sent to {notification_email}")
        
    except Exception as e:
        logger.error(f"Failed to send lead notification: {str(e)}")

# API Endpoints
@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "TagSpecialist Lead API"}

@app.post("/api/leads", response_model=LeadResponse)
async def create_lead(lead: LeadCreate):
    """Create a new lead and optionally send email notification"""
    try:
        # Generate lead ID
        import uuid
        lead_id = str(uuid.uuid4())[:8]
        
        # Prepare document
        lead_doc = {
            "lead_id": lead_id,
            "name": lead.name,
            "email": lead.email,
            "phone": lead.phone,
            "company": lead.company,
            "service_type": lead.service_type,
            "services": lead.services or [],
            "channels": lead.channels or [],
            "pain_point": lead.pain_point,
            "budget": lead.budget,
            "timeline": lead.timeline,
            "message": lead.message,
            "source": lead.source or "website",
            "lead_type": lead.lead_type or "Client",
            "status": "new",
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        
        # Insert into MongoDB
        db.leads.insert_one(lead_doc)
        logger.info(f"New lead created: {lead_id} - {lead.name} ({lead.email})")
        
        # Send email notification (fire and forget)
        asyncio.create_task(send_lead_notification(lead_doc))
        
        # Return response (excluding MongoDB _id)
        return LeadResponse(**{k: v for k, v in lead_doc.items() if k != "_id"})
        
    except Exception as e:
        logger.error(f"Failed to create lead: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to create lead: {str(e)}")

@app.get("/api/leads", response_model=LeadListResponse)
async def get_leads(skip: int = 0, limit: int = 50, status: Optional[str] = None):
    """Get all leads with optional filtering"""
    try:
        query = {}
        if status:
            query["status"] = status
        
        total = db.leads.count_documents(query)
        leads_cursor = db.leads.find(query, {"_id": 0}).sort("created_at", -1).skip(skip).limit(limit)
        leads = [LeadResponse(**lead) for lead in leads_cursor]
        
        return LeadListResponse(leads=leads, total=total)
        
    except Exception as e:
        logger.error(f"Failed to get leads: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to get leads: {str(e)}")

@app.patch("/api/leads/{lead_id}/status")
async def update_lead_status(lead_id: str, status: str):
    """Update lead status"""
    valid_statuses = ["new", "contacted", "qualified", "proposal", "won", "lost"]
    if status not in valid_statuses:
        raise HTTPException(status_code=400, detail=f"Invalid status. Must be one of: {valid_statuses}")
    
    result = db.leads.update_one({"lead_id": lead_id}, {"$set": {"status": status}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Lead not found")
    
    return {"message": "Status updated", "lead_id": lead_id, "new_status": status}

@app.get("/api/leads/stats")
async def get_lead_stats():
    """Get lead statistics"""
    try:
        total = db.leads.count_documents({})
        new_leads = db.leads.count_documents({"status": "new"})
        
        # Source breakdown
        sources = list(db.leads.aggregate([
            {"$group": {"_id": "$source", "count": {"$sum": 1}}}
        ]))
        
        return {
            "total_leads": total,
            "new_leads": new_leads,
            "by_source": {s["_id"]: s["count"] for s in sources if s["_id"]}
        }
    except Exception as e:
        logger.error(f"Failed to get stats: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
