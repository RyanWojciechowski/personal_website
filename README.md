# Ryan Wojciechowski - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing cybersecurity expertise, projects, and professional experience.

## 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with cyber-themed aesthetics
- **Interactive Elements**: Smooth animations, carousels, and dynamic content
- **Contact Form**: Fully functional contact form with email integration
- **Project Showcase**: Detailed project presentations with live demos
- **Skills & Certifications**: Comprehensive display of technical skills
- **Experience Timeline**: Professional experience with interactive carousel
- **Coursework Display**: Academic achievements and relevant coursework

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling with Tailwind CSS framework
- **JavaScript (ES6+)** - Interactive functionality and animations
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Particles.js** - Interactive background effects

### Backend
- **Node.js** - Server-side runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Rate Limiting** - API protection

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Gmail account with App Password

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RyanWojciechowski/personal-website.git
   cd personal-website
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Configure environment variables**
   ```bash
   cd backend
   cp env.example .env
   ```
   
   Edit `.env` file with your email configuration:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=your-recipient-email@domain.com
   PORT=3001
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend server**
   ```bash
   npx http-server -p 3000 -c-1
   ```

7. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
personal-website/
├── public/                 # Static assets
│   ├── images/            # Images and logos
│   ├── favicon-*.png      # Favicon files
│   └── manifest.json      # PWA manifest
├── src/                   # Source files
│   ├── components/        # Reusable components
│   ├── sections/          # Page sections
│   ├── css/              # Custom styles
│   ├── js/               # JavaScript files
│   ├── data/             # JSON data files
│   └── templates/        # HTML templates
├── backend/              # Backend server
│   ├── server.js         # Express server
│   ├── package.json      # Backend dependencies
│   └── .env             # Environment variables
├── config/              # Configuration files
├── scripts/             # Build scripts
├── docs/               # Documentation
└── index.html          # Main HTML file
```

## 🎨 Customization

### Adding New Projects
1. Edit `src/data/content.json`
2. Add project details in the `projects` array
3. Update project images in `public/images/`

### Modifying Content
- **Personal Info**: Update `src/data/content.json`
- **Styling**: Modify `src/css/custom.css`
- **Sections**: Edit files in `src/sections/`

### Email Configuration
The contact form uses Gmail SMTP. To set up:
1. Enable 2-Factor Authentication on your Gmail
2. Generate an App Password
3. Update the `.env` file with your credentials

## 🔧 Development

### Available Scripts
- `npm start` - Start the backend server
- `npx http-server -p 3000` - Start frontend server
- `npm run dev` - Start development mode (if configured)

### Building for Production
1. Optimize images and assets
2. Minify CSS and JavaScript
3. Update environment variables for production
4. Deploy to your hosting platform

## 📧 Contact

- **Email**: wojcier2@tcnj.edu
- **LinkedIn**: [Ryan Wojciechowski](https://www.linkedin.com/in/ryan-wojciechowski-494b452b3/)
- **GitHub**: [@RyanWojciechowski](https://github.com/RyanWojciechowski)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- AOS library for scroll animations
- Particles.js for interactive backgrounds
- All the open-source libraries and tools used in this project

---

**Note**: This website is actively maintained and updated. Feel free to reach out with any questions or suggestions!