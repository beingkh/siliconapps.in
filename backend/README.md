# SiliconApps Backend

This is the Python Flask backend for the SiliconApps website admin panel.

## Features

- **Contact Messages Management**: Store and manage contact form submissions
- **Callback Requests**: Handle callback request submissions
- **Project Requests**: Manage detailed project request forms
- **Legal Content Management**: Edit privacy policy and terms of service
- **Message Filtering**: Filter messages by read/unread status
- **Dashboard Statistics**: Get counts of messages and requests

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- MySQL server running locally
- pip (Python package installer)

### Installation

1. **Install Python dependencies:**
   \`\`\`bash
   cd backend
   pip install -r requirements.txt
   \`\`\`

2. **Setup MySQL Database:**
   - Make sure MySQL is running on your system
   - Create a database named `siliconapps_db`
   - Update the database connection string in `app.py` if needed:
     \`\`\`python
     app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/siliconapps_db'
     \`\`\`

3. **Run the database setup script:**
   \`\`\`bash
   mysql -u root -p < ../scripts/create_database.sql
   \`\`\`

4. **Start the server:**
   \`\`\`bash
   python run.py
   \`\`\`

The server will start on `http://localhost:5000`

## API Endpoints

### Contact Messages
- `POST /api/contact` - Submit a new contact message
- `GET /api/contact?filter=all|read|unread` - Get contact messages
- `PUT /api/contact/<id>/read` - Mark message as read

### Callback Requests
- `POST /api/callback` - Submit a new callback request
- `GET /api/callback?filter=all|read|unread` - Get callback requests
- `PUT /api/callback/<id>/read` - Mark callback as read

### Project Requests
- `POST /api/project` - Submit a new project request
- `GET /api/project?filter=all|read|unread` - Get project requests
- `PUT /api/project/<id>/read` - Mark project as read

### Legal Content
- `GET /api/legal/<page_type>` - Get legal content (privacy_policy, terms_of_service)
- `PUT /api/legal/<page_type>` - Update legal content

### Dashboard Statistics
- `GET /api/stats` - Get dashboard statistics (message counts, etc.)

## Database Schema

The backend uses the following tables:

- `contact_messages` - Contact form submissions
- `callback_requests` - Callback requests
- `project_requests` - Detailed project requests
- `legal_content` - Privacy policy and terms of service content

## Development

- The server runs in debug mode by default
- CORS is enabled for frontend integration
- All API responses are in JSON format
- Error handling is implemented for all endpoints

## Production Deployment

For production deployment:

1. Set `DEBUG = False` in the configuration
2. Use a production WSGI server like Gunicorn
3. Set up proper environment variables for database credentials
4. Configure proper CORS settings for your domain
5. Set up SSL/HTTPS
