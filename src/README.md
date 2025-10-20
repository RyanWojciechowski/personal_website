# Website Structure

This directory contains the modular structure of your personal website. Each section is in its own file for easy editing and maintenance.

## Directory Structure

```
src/
├── components/          # Reusable components
│   ├── header.html     # Navigation header
│   └── footer.html     # Footer with social links
├── sections/           # Main content sections
│   ├── home.html       # Hero/landing section
│   ├── projects.html   # Projects showcase
│   ├── skills.html     # Technical skills
│   ├── experience.html # Work experience & education
│   ├── certifications.html # Certifications
│   ├── coursework.html # Academic coursework
│   └── contact.html    # Contact form & info
├── css/               # Custom styles
│   └── custom.css     # Additional CSS
├── js/                # JavaScript functionality
│   └── main.js        # Main JavaScript file
└── data/              # Content data
    └── content.json   # Structured content data
```

## How to Edit Content

### 1. Personal Information
Edit the following files to update your personal information:
- `sections/home.html` - Your name, title, and tagline
- `components/footer.html` - Social media links
- `sections/contact.html` - Contact information

### 2. Projects
Edit `sections/projects.html` to:
- Add new project cards
- Update project descriptions
- Change technologies used
- Add GitHub/demo links

### 3. Skills
Edit `sections/skills.html` to:
- Update skill categories
- Add new skills
- Modify skill descriptions

### 4. Experience
Edit `sections/experience.html` to:
- Add new work experience
- Update job descriptions
- Add achievements
- Update education information

### 5. Certifications
Edit `sections/certifications.html` to:
- Add new certifications
- Update certification details
- Add progress bars for in-progress certs

### 6. Coursework
Edit `sections/coursework.html` to:
- Add new courses
- Update grades and descriptions
- Add academic projects

### 7. Contact Form
Edit `sections/contact.html` to:
- Update contact information
- Modify form fields
- Add new social links

## Adding New Sections

1. Create a new HTML file in `src/sections/`
2. Add the section to `index.html` in the loading script
3. Add navigation link in `src/components/header.html`

## Styling

- Main styles are in the `<style>` section of `index.html`
- Additional custom styles are in `src/css/custom.css`
- Tailwind CSS classes are used throughout

## Development

1. **Local Development**: Use `npm run dev` or `npm run serve`
2. **Build**: Use `npm run build` to create production files
3. **Deploy**: Use `npm run deploy` to deploy to GitHub Pages

## Tips

- Keep section files focused on their specific content
- Use consistent class names and structure
- Test changes locally before deploying
- Use the content.json file for data-driven content if needed
