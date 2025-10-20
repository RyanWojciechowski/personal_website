# Personal Website Backend

Backend server for handling contact form submissions and sending emails.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `env.example` to `.env`
   - Fill in your email configuration

3. **Email Setup (Gmail):**
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password:
     - Go to Google Account settings
     - Security → 2-Step Verification → App passwords
     - Generate password for "Mail"
   - Use your Gmail address and the app password in `.env`

4. **Start the server:**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## Environment Variables

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=wojcier2@tcnj.edu

# Server Configuration
PORT=3001
NODE_ENV=development

# Security
CORS_ORIGIN=http://localhost:3000
```

## API Endpoints

### POST /api/contact
Submit contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "Your message here",
  "consent": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon."
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Security Features

- Rate limiting (5 requests per 15 minutes per IP)
- CORS protection
- Helmet security headers
- Input validation
- Email format validation

## Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Update `CORS_ORIGIN` to your domain
3. Use a process manager like PM2
4. Set up SSL/HTTPS
5. Configure reverse proxy (nginx)
