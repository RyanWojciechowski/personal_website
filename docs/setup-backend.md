# Backend Setup Instructions

## Quick Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure email settings:**
   - Copy `env.example` to `.env`
   - Update the email configuration in `.env`

4. **Start the backend server:**
   ```bash
   npm run dev
   ```

## Email Configuration (Gmail)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate password
3. **Update `.env` file:**
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   EMAIL_TO=wojcier2@tcnj.edu
   ```

## Testing

1. **Start backend server** (port 3001)
2. **Open your website** (port 3000 or your hosting)
3. **Fill out contact form** and submit
4. **Check your email** (wojcier2@tcnj.edu) for the message

## Production Deployment

For production, update these environment variables:
- `NODE_ENV=production`
- `CORS_ORIGIN=https://yourdomain.com`
- Use a process manager like PM2
- Set up SSL/HTTPS

## Troubleshooting

- **"Connection refused"**: Make sure backend server is running on port 3001
- **"Email not sending"**: Check Gmail app password and 2FA settings
- **CORS errors**: Update CORS_ORIGIN in .env to match your frontend URL
