# Project Structure

## 📁 Current Organization

```
PersonalWebsite/
├── public/                     # Static assets
│   └── images/
│       └── logos/
│           ├── isc2_logo.jpg
│           └── cisco_academy_logo.png
├── src/                       # Source files
│   ├── components/
│   │   ├── header.html
│   │   └── footer.html
│   ├── sections/
│   │   ├── home.html
│   │   ├── projects.html
│   │   ├── skills.html
│   │   ├── experience.html
│   │   ├── certifications.html
│   │   ├── coursework.html
│   │   └── contact.html
│   ├── data/
│   │   └── content.json
│   ├── js/
│   │   └── main.js
│   ├── css/
│   │   └── custom.css
│   └── templates/
│       └── flip-card-template.html
├── backend/                   # Backend server
│   ├── server.js             # Express server
│   ├── package.json          # Dependencies
│   ├── env.example           # Environment template
│   └── README.md             # Backend documentation
├── index.html                # Main HTML file
├── package.json              # Frontend dependencies
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js           # Vite configuration
├── setup-backend.md         # Backend setup instructions
└── PROJECT_STRUCTURE.md     # This file
```

## 🚀 Backend Features

### ✅ Implemented:
- **Express.js server** with security middleware
- **Nodemailer** for email sending
- **Rate limiting** (5 requests per 15 minutes)
- **CORS protection**
- **Input validation**
- **Error handling**
- **Health check endpoint**

### 📧 Contact Form API:
- **Endpoint**: `POST /api/contact`
- **Email**: Sends to `wojcier2@tcnj.edu`
- **Features**: HTML email template, reply-to functionality
- **Security**: Rate limiting, validation, CORS

## 🔧 Setup Instructions

1. **Backend Setup:**
   ```bash
   cd backend
   npm install
   cp env.example .env
   # Configure .env with your email settings
   npm run dev
   ```

2. **Frontend Setup:**
   ```bash
   npm install
   npm run dev
   ```

## 📧 Email Configuration

The contact form will send emails to `wojcier2@tcnj.edu` with:
- **From**: Contact form user's email
- **Reply-To**: User's email address
- **Subject**: "Portfolio Contact: [user's subject]"
- **Content**: Formatted HTML email with all form data

## 🔒 Security Features

- **Rate Limiting**: Prevents spam (5 requests per 15 minutes)
- **CORS**: Restricts cross-origin requests
- **Helmet**: Security headers
- **Input Validation**: Email format, required fields
- **Error Handling**: Graceful error responses

## 🌐 Deployment

- **Frontend**: Can be deployed to any static hosting (Netlify, Vercel, etc.)
- **Backend**: Requires Node.js hosting (Heroku, DigitalOcean, etc.)
- **Environment**: Update CORS_ORIGIN for production domain

