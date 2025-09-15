#!/usr/bin/env python3
"""
SiliconApps Backend Server
Run this file to start the Flask backend server
"""

from app import app

if __name__ == '__main__':
    print("Starting SiliconApps Backend Server...")
    print("Server will be available at: http://localhost:5000")
    print("API endpoints:")
    print("  - POST /api/contact - Submit contact message")
    print("  - GET  /api/contact - Get contact messages")
    print("  - POST /api/callback - Submit callback request")
    print("  - GET  /api/callback - Get callback requests")
    print("  - POST /api/project - Submit project request")
    print("  - GET  /api/project - Get project requests")
    print("  - GET  /api/legal/<page_type> - Get legal content")
    print("  - PUT  /api/legal/<page_type> - Update legal content")
    print("  - GET  /api/stats - Get dashboard statistics")
    print("\nPress Ctrl+C to stop the server")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
