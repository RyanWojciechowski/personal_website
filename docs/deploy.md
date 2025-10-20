# Deployment Guide

## GitHub Pages Deployment

### Prerequisites
- GitHub account
- Node.js and npm installed
- Git configured

### Steps

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**
   - Go to GitHub and create a new repository named `PersonalWebsite`
   - Don't initialize with README (we already have one)

3. **Connect Local Repository to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/PersonalWebsite.git
   git branch -M main
   git push -u origin main
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Build the Project**
   ```bash
   npm run build
   ```

6. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

7. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Select "/ (root)" folder
   - Save

### Custom Domain (Optional)
1. Add a `CNAME` file to the root with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Local Development

### Development Server
```bash
npm run dev
```
This will start a local development server at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
This creates optimized files in the `dist/` directory

### Preview Production Build
```bash
npm run preview
```

## Content Management

### Adding New Projects
1. Edit the projects section in `index.html`
2. Add new project cards following the existing structure
3. Update project data in the HTML

### Updating Personal Information
1. Edit the relevant sections in `index.html`:
   - Hero section for name and title
   - Experience section for work history
   - Certifications section for credentials
   - Skills section for technical abilities

### Adding New Sections
1. Create new section in `index.html`
2. Add navigation link in the nav bar
3. Update the navigation JavaScript if needed

## Security Considerations

### For Penetration Testing
- The contact form is intentionally basic for testing purposes
- Security headers are included in the HTML head
- No intentional vulnerabilities are present
- All user inputs should be validated server-side in production

### Production Security
- Implement proper form validation and sanitization
- Add CSRF protection
- Use HTTPS only
- Implement rate limiting
- Add proper error handling

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (requires 16+)
   - Clear node_modules and reinstall
   - Check for syntax errors in files

2. **GitHub Pages Not Updating**
   - Wait 5-10 minutes for deployment
   - Check GitHub Actions tab for errors
   - Verify gh-pages branch exists

3. **Styling Issues**
   - Clear browser cache
   - Check Tailwind CSS CDN connection
   - Verify custom CSS is loading

### Performance Optimization
- Images should be optimized (WebP format recommended)
- Use lazy loading for images
- Minimize external dependencies
- Enable gzip compression on server

## Maintenance

### Regular Updates
- Keep dependencies updated
- Review and update content regularly
- Monitor website performance
- Check for broken links

### Security Updates
- Regularly update dependencies
- Monitor for security advisories
- Review and update security headers
- Test contact form functionality
