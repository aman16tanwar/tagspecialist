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

# Email notification helper via Web3Forms (called from frontend)
# Note: Web3Forms requires client-side calls, so we return a flag for frontend to handle
async def send_lead_notification(lead_data: dict):
    """Log lead notification - actual email sent from frontend via Web3Forms"""
    logger.info(f"Lead notification logged for {lead_data.get('name')} ({lead_data.get('email')})")
    # Frontend will handle Web3Forms notification since it requires client-side calls

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
