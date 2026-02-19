#!/usr/bin/env python3
"""
TagSpecialist Lead API Testing Script
Tests all lead generation endpoints and functionality
"""

import requests
import json
import sys
import uuid
from datetime import datetime
from typing import Dict, Any

class LeadAPITester:
    def __init__(self, base_url="http://localhost:8001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.created_lead_ids = []

    def log_test(self, test_name: str, passed: bool, details: str = ""):
        """Log test result"""
        self.tests_run += 1
        status = "✅ PASSED" if passed else "❌ FAILED"
        print(f"\n{status} - {test_name}")
        if details:
            print(f"   Details: {details}")
        
        if passed:
            self.tests_passed += 1

    def run_request(self, method: str, endpoint: str, data: Dict = None, expected_status: int = 200):
        """Run HTTP request and return response"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PATCH':
                response = requests.patch(url, json=data, headers=headers, timeout=10)
            else:
                raise ValueError(f"Unsupported method: {method}")
                
            return response, response.status_code == expected_status
            
        except requests.exceptions.RequestException as e:
            print(f"   Request failed: {str(e)}")
            return None, False

    def test_health_check(self):
        """Test API health endpoint"""
        response, success = self.run_request('GET', 'api/health')
        if success and response:
            data = response.json()
            passed = data.get('status') == 'healthy'
            self.log_test("Health Check", passed, f"Response: {data}")
        else:
            self.log_test("Health Check", False, "API not responding")

    def test_create_lead_quick_form(self):
        """Test creating lead from quick form"""
        lead_data = {
            "name": "John Doe",
            "email": f"john.doe+{uuid.uuid4().hex[:8]}@example.com",
            "phone": "+1-555-123-4567",
            "pain_point": "Need help with GA4 tracking setup",
            "source": "quick_form",
            "lead_type": "Client"
        }
        
        response, success = self.run_request('POST', 'api/leads', lead_data, 200)
        if success and response:
            data = response.json()
            lead_id = data.get('lead_id')
            if lead_id:
                self.created_lead_ids.append(lead_id)
                passed = (data.get('name') == lead_data['name'] and 
                         data.get('email') == lead_data['email'] and
                         data.get('source') == lead_data['source'])
                self.log_test("Create Lead - Quick Form", passed, f"Lead ID: {lead_id}")
            else:
                self.log_test("Create Lead - Quick Form", False, "No lead_id returned")
        else:
            self.log_test("Create Lead - Quick Form", False, "Failed to create lead")

    def test_create_lead_inline_capture(self):
        """Test creating lead from inline capture form"""
        lead_data = {
            "name": "Jane Smith", 
            "email": f"jane.smith+{uuid.uuid4().hex[:8]}@example.com",
            "source": "inline_capture",
            "lead_type": "Client"
        }
        
        response, success = self.run_request('POST', 'api/leads', lead_data, 200)
        if success and response:
            data = response.json()
            lead_id = data.get('lead_id')
            if lead_id:
                self.created_lead_ids.append(lead_id)
                passed = (data.get('name') == lead_data['name'] and 
                         data.get('source') == lead_data['source'])
                self.log_test("Create Lead - Inline Capture", passed, f"Lead ID: {lead_id}")
            else:
                self.log_test("Create Lead - Inline Capture", False, "No lead_id returned")
        else:
            self.log_test("Create Lead - Inline Capture", False, "Failed to create lead")

    def test_create_lead_book_audit(self):
        """Test creating lead from book audit form"""
        lead_data = {
            "name": "Mike Johnson",
            "email": f"mike.johnson+{uuid.uuid4().hex[:8]}@example.com",
            "phone": "+1-555-987-6543",
            "company": "Johnson Marketing",
            "service_type": "tracking",
            "services": ["server-side-gtm", "ga4-setup"],
            "channels": ["google-ads", "meta-ads"],
            "budget": "$5,000-$10,000",
            "timeline": "1-2 months", 
            "message": "Need complete tracking overhaul for ecommerce store",
            "source": "book_audit",
            "lead_type": "Client"
        }
        
        response, success = self.run_request('POST', 'api/leads', lead_data, 200)
        if success and response:
            data = response.json()
            lead_id = data.get('lead_id')
            if lead_id:
                self.created_lead_ids.append(lead_id)
                passed = (data.get('name') == lead_data['name'] and 
                         data.get('company') == lead_data['company'] and
                         data.get('source') == lead_data['source'])
                self.log_test("Create Lead - Book Audit", passed, f"Lead ID: {lead_id}")
            else:
                self.log_test("Create Lead - Book Audit", False, "No lead_id returned")
        else:
            self.log_test("Create Lead - Book Audit", False, "Failed to create lead")

    def test_get_leads(self):
        """Test retrieving leads"""
        response, success = self.run_request('GET', 'api/leads')
        if success and response:
            data = response.json()
            leads = data.get('leads', [])
            total = data.get('total', 0)
            passed = len(leads) >= len(self.created_lead_ids) and total > 0
            self.log_test("Get Leads", passed, f"Retrieved {len(leads)} leads, total: {total}")
        else:
            self.log_test("Get Leads", False, "Failed to retrieve leads")

    def test_lead_stats(self):
        """Test lead statistics endpoint"""
        response, success = self.run_request('GET', 'api/leads/stats')
        if success and response:
            data = response.json()
            total_leads = data.get('total_leads', 0)
            new_leads = data.get('new_leads', 0)
            by_source = data.get('by_source', {})
            passed = total_leads >= len(self.created_lead_ids) and isinstance(by_source, dict)
            self.log_test("Lead Statistics", passed, f"Total: {total_leads}, New: {new_leads}, Sources: {list(by_source.keys())}")
        else:
            self.log_test("Lead Statistics", False, "Failed to get statistics")

    def test_update_lead_status(self):
        """Test updating lead status"""
        if not self.created_lead_ids:
            self.log_test("Update Lead Status", False, "No leads to update")
            return
            
        lead_id = self.created_lead_ids[0]
        data = {"status": "contacted"}
        
        response, success = self.run_request('PATCH', f'api/leads/{lead_id}/status', data)
        if success and response:
            result = response.json()
            passed = result.get('new_status') == 'contacted'
            self.log_test("Update Lead Status", passed, f"Updated lead {lead_id} to 'contacted'")
        else:
            self.log_test("Update Lead Status", False, f"Failed to update lead {lead_id}")

    def test_invalid_lead_data(self):
        """Test API validation with invalid data"""
        # Test missing required fields
        invalid_data = {"name": "Test"}  # Missing email
        
        response, success = self.run_request('POST', 'api/leads', invalid_data, 422)
        passed = not success and response and response.status_code == 422
        self.log_test("Validation - Missing Email", passed, f"Got status code: {response.status_code if response else 'None'}")

        # Test invalid email format
        invalid_email_data = {"name": "Test", "email": "invalid-email"}
        
        response, success = self.run_request('POST', 'api/leads', invalid_email_data, 422)
        passed = not success and response and response.status_code == 422
        self.log_test("Validation - Invalid Email", passed, f"Got status code: {response.status_code if response else 'None'}")

    def run_all_tests(self):
        """Run all tests in sequence"""
        print("="*60)
        print("🧪 TagSpecialist Lead API Test Suite")
        print(f"🎯 Testing against: {self.base_url}")
        print(f"⏰ Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("="*60)
        
        # Basic connectivity test
        self.test_health_check()
        
        # Lead creation tests
        self.test_create_lead_quick_form()
        self.test_create_lead_inline_capture()  
        self.test_create_lead_book_audit()
        
        # Lead retrieval tests
        self.test_get_leads()
        self.test_lead_stats()
        
        # Lead management tests
        self.test_update_lead_status()
        
        # Validation tests
        self.test_invalid_lead_data()
        
        # Summary
        print("\n" + "="*60)
        print("📊 TEST SUMMARY")
        print("="*60)
        success_rate = (self.tests_passed / self.tests_run * 100) if self.tests_run > 0 else 0
        print(f"✅ Passed: {self.tests_passed}/{self.tests_run} ({success_rate:.1f}%)")
        
        if self.created_lead_ids:
            print(f"📝 Created {len(self.created_lead_ids)} test leads: {', '.join(self.created_lead_ids)}")
        
        if self.tests_passed == self.tests_run:
            print("🎉 ALL TESTS PASSED! Backend API is working correctly.")
            return 0
        else:
            print(f"⚠️  {self.tests_run - self.tests_passed} tests failed. Check the details above.")
            return 1

if __name__ == "__main__":
    tester = LeadAPITester()
    exit_code = tester.run_all_tests()
    sys.exit(exit_code)