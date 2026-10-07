# Portfolio Project Documentation

> Complete reference guide for updating and maintaining this portfolio website.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Project Structure](#2-project-structure)
3. [Pages/Sections Detailed Guide](#3-pagessections-detailed-guide)
   - [Navigation](#navigation)
   - [Hero Section](#hero-section)
   - [About Section](#about-section)
   - [Skills Section](#skills-section)
   - [Projects Section](#projects-section)
   - [Achievements Section](#achievements-section)
   - [Contact Section](#contact-section)
   - [Footer](#footer)
4. [How to Update Each Section](#4-how-to-update-each-section)
5. [Assets & Images](#5-assets--images)
6. [Technical Details](#6-technical-details)
7. [Deployment](#7-deployment)

---

## 1. Project Overview

This is a **personal portfolio website** built with:
- **Pure JavaScript** (ES Modules) - No frameworks
- **Vite** - Build tool and development server
- **EmailJS** - Contact form email functionality
- **CSS Variables** - Design system for easy theming

The portfolio showcases:
- Personal branding as a Backend Developer & AI Engineer
- Skills and expertise in Python, FastAPI, React, AI/ML
- Projects with problem/solution/impact structure
- Education and certifications

### Key Technologies Used

| Technology | Purpose |
|------------|---------|
| Vite | Build tool, dev server |
| EmailJS | Contact form email service |
| Google Fonts | Typography (Manrope, Space Grotesk, DM Sans, Chivo) |
| CSS Variables | Design system & theming |

---

## 2. Project Structure

```
My_Portfolio/
├── src/
│   ├── components/
│   │   ├── Nav.js         # Navigation bar
│   │   ├── Hero.js        # Hero section
│   │   ├── About.js       # About me section
│   │   ├── Skills.js      # Skills grid
│   │   ├── Projects.js    # Projects showcase
│   │   ├── Achievements.js # Education & certifications
│   │   ├── Contact.js     # Contact form
│   │   └── Footer.js      # Footer
│   ├── index.html         # Main HTML entry
│   ├── main.js           # JavaScript entry point
│   ├── styles.css        # All styles
│   ├── loader.js         # Loading screen
│   ├── snow.js           # Snow effect (decorative)
│   ├── floating-characters.js # Floating background effect
│   └── script.js         # Additional scripts
├── assets/
│   ├── images/           # Project images, profile photo
│   ├── certificates/      # Certification images
│   └── logo/             # Logo images
├── dist/                 # Production build output
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies
```

### File Descriptions

| File | Purpose |
|------|---------|
| `src/main.js` | Assembles all components, handles animations, scroll effects |
| `src/index.html` | HTML shell with meta tags, fonts, SEO |
| `src/styles.css` | All CSS including design system, components, animations |
| `src/components/*.js` | Individual section render functions |
| `src/snow.js` | Snow particle effect for winter ambiance |

---

## 3. Pages/Sections Detailed Guide

### Navigation

**File:** `src/components/Nav.js`

**What it contains:**
- Logo image (links to home)
- Navigation menu links: About, Skills, Projects, Contact
- Mobile hamburger toggle
- Active section highlighting on scroll

**Key Elements:**
```javascript
// Navigation links - update hrefs here
<a href="#about" class="nav-link">About</a>
<a href="#skills" class="nav-link">Skills</a>
<a href="#projects" class="nav-link">Projects</a>
<a href="#contact" class="nav-link nav-link--cta">Contact</a>

// Logo - update image source
<img src="./logo/llogo.png" alt="SARAN V A" class="logo-img"/>
```

**CSS Classes:**
- `.navbar` - Fixed navigation bar
- `.nav-link` - Navigation link style
- `.nav-link--cta` - Contact button style (highlighted)

---

### Hero Section

**File:** `src/components/Hero.js`

**What it contains:**
- Badge showing "Final Year • B.Tech IT"
- Main title with gradient highlight
- Description paragraph about the developer
- Call-to-action buttons (View Projects, GitHub, Contact)
- Tech stack summary
- Profile image with status indicator

**Key Elements:**
```javascript
// Badge text
<span>Final Year • B.Tech IT</span>

// Main title
<h1 class="hero-title">
  <span class="title-line">Building scalable</span>
  <span class="title-line title-highlight">software solutions</span>
</h1>

// Description - UPDATE YOUR INTRO HERE
<p class="hero-description">
  I'm <strong>SARAN V A</strong>, a backend-focused developer specializing in
  <strong>Python</strong>, <strong>FastAPI</strong>, and <strong>AI/ML integrations</strong>.
  I build production-ready APIs and intelligent applications that solve real problems.
</p>

// Tech stack displayed
<div class="tech-stack">
  <span class="tech-item">Python</span>
  <span class="tech-item">FastAPI</span>
  <span class="tech-item">React</span>
  <span class="tech-item">SQL</span>
  <span class="tech-item">ML/AI</span>
</div>

// Profile image
<img src="/images/profile-photo.png" alt="SARAN V A - Backend Developer" class="profile-image"/>

// Status indicator
<span>Open to opportunities</span>
```

**CTA Buttons:**
- View Projects → Links to `#projects`
- GitHub → Links to `https://github.com/SARAN006-pro`
- Contact → Links to `#contact`

---

### About Section

**File:** `src/components/About.js`

**What it contains:**
- Section header (title + subtitle)
- Main content area with:
  - Title heading
  - 3 paragraphs about background
  - Detail cards (CGPA, Graduation Year, Certifications)
- Sidebar with:
  - Experience timeline
  - Education information

**Key Elements:**
```javascript
// About paragraphs - UPDATE YOUR STORY HERE
<p class="about-paragraph">
  I'm a final year B.Tech IT student at Chennai Institute of Technology,
  passionate about building production-grade software that solves real problems.
  My expertise lies in <strong>Python</strong>, <strong>FastAPI</strong>, and
  <strong>AI/ML integrations</strong>.
</p>

// Detail cards - UPDATE NUMBERS
<div class="detail-card">
  <span class="detail-value">8.24</span>  // Your CGPA
  <span class="detail-label">Current CGPA</span>
</div>
<div class="detail-card">
  <span class="detail-value">2027</span>   // Graduation year
  <span class="detail-label">Graduation Year</span>
</div>
<div class="detail-card">
  <span class="detail-value">AWS</span>     // Certification
  <span class="detail-label">AI Practitioner</span>
</div>

// Experience timeline
<div class="timeline-item">
  <span class="timeline-role">Full Stack Developer</span>
  <span class="timeline-company">Freelance Projects</span>
  <span class="timeline-period">2023 - Present</span>
</div>

// Education
<div class="education-item">
  <span class="education-degree">B.Tech Information Technology</span>
  <span class="education-school">Chennai Institute of Technology</span>
  <span class="education-year">2023 - 2027</span>
</div>
```

---

### Skills Section

**File:** `src/components/Skills.js`

**What it contains:**
- Section header
- Grid of skill category cards (6 categories)
- Each card has: icon, category name, list of skills

**Skills Data Structure:**
```javascript
const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'SQL', 'JavaScript']
  },
  {
    name: 'Backend & APIs',
    skills: ['FastAPI', 'REST APIs', 'Node.js', 'Spring Boot']
  },
  {
    name: 'AI & ML',
    skills: ['Machine Learning', 'RAG Pipelines', 'LLM Integration', 'Pandas', 'NumPy']
  },
  {
    name: 'Frontend',
    skills: ['React.js', 'HTML/CSS', 'UI Development', 'Responsive Design']
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'SQLite', 'PostgreSQL', 'Database Design']
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'Git', 'GitHub', 'Docker Basics']
  }
];
```

**Category Icons:**
Icons are defined in `categoryIcons` object - uses SVG paths for different skill categories.

**How to Add/Remove Skills:**
```javascript
// To add a new skill category:
{
  name: 'New Category Name',
  skills: ['Skill 1', 'Skill 2', 'Skill 3']
}

// To add a skill to existing category:
skills: ['Existing Skill', 'New Skill']

// To remove a skill:
skills: ['Skill A', 'Skill B']  // remove 'Skill C'
```

---

### Projects Section

**File:** `src/components/Projects.js`

**What it contains:**
- Section header
- Grid of project cards (3 projects)
- Each card has: Problem → Solution → Impact structure
- Tech tags
- Links to GitHub and Demo

**Projects Data Structure:**
```javascript
const projects = [
  {
    title: 'AgriAssist – AI Smart Farming Platform',
    subtitle: 'End-to-End Agricultural AI Solution',
    problem: 'Farmers lacked access to real-time crop guidance...',
    solution: 'Built a full-stack AI platform combining RAG pipeline...',
    impact: 'Enabled farmers to make data-driven decisions...',
    tech: ['Python', 'FastAPI', 'React', 'Supabase', 'RAG', 'LLM'],
    github: 'https://github.com/SARAN006-pro',
    demo: '#',
    color: 'emerald'  // Color indicator: emerald, violet, blue, orange, rose
  },
  // ... more projects
];
```

**How to Add a New Project:**
```javascript
{
  title: 'Your Project Title',
  subtitle: 'Your Project Subtitle',
  problem: 'Describe the problem your project solves...',
  solution: 'Describe your solution approach...',
  impact: 'Describe the impact/outcome...',
  tech: ['Tech1', 'Tech2', 'Tech3'],  // List all technologies used
  github: 'https://github.com/yourusername/your-repo',
  demo: 'https://your-demo-link.com',  // or '#' if no demo
  color: 'emerald'  // Choose: emerald, violet, blue, orange, rose
}
```

**Project Card Structure:**
- **Header:** Title + colored indicator + subtitle
- **Content:** Problem, Solution, Impact sections
- **Footer:** Tech tags + GitHub link + Demo link

---

### Achievements Section

**File:** `src/components/Achievements.js`

**What it contains:**
- Section title: "Education & Certifications"
- Grid of achievement cards (flip cards on hover)
- Each card shows: icon, certificate image, title, description, link

**Achievements Data Structure:**
```javascript
const achievements = [
  {
    icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>...',  // SVG path
    image: '/certificates/cert1.jpg',     // Certificate image path
    imageAlt: 'Education Certificate',
    title: 'B.Tech Information Technology',
    description: 'Rathinam Technical Campus, Coimbatore (2023-2027)<br/>CGPA: 8.24<br/><br/>HSC: 83% - Sri Vidhya Mandir...',
    link: '#',                            // Link to view certificate
    linkText: 'View Certificate'
  },
  // ... more achievements
];
```

**How to Add an Achievement:**
```javascript
{
  icon: 'SVG_PATH',           // Get from icons in file or use existing pattern
  image: '/certificates/your-cert.jpg',  // Path to certificate image
  imageAlt: 'Description of image',
  title: 'Achievement Title',
  description: 'Description with <br/> line breaks',
  link: 'https://link-to-view.com',
  linkText: 'Button text'
}
```

**Certificate Image Sizes:**
- Store in `assets/certificates/` directory
- Recommended: 800x600px or similar aspect ratio
- Add to `dist/certificates/` after build

---

### Contact Section

**File:** `src/components/Contact.js`

**What it contains:**
- Section header
- Contact card (left side):
  - Profile avatar
  - Name and role
  - Social links (GitHub, LinkedIn, Email)
- Contact form (right side):
  - Name input
  - Email input
  - Subject input
  - Message textarea
  - Submit button
- Success toast notification

**EmailJS Configuration:**
```javascript
// Lines 88-90 in Contact.js
const SERVICE_ID = 'service_hjy3nq9';      // Your EmailJS service ID
const TEMPLATE_ID = 'template_b85pnte';     // Your EmailJS template ID
const PUBLIC_KEY = 'CayVo9gsnhKi96tad';     // Your EmailJS public key
```

**How to Update EmailJS:**
1. Go to [EmailJS](https://www.emailjs.com/)
2. Create account or sign in
3. Create an Email Service (e.g., Gmail)
4. Create an Email Template
5. Update the IDs in Contact.js

**Social Links:**
```javascript
// GitHub
<a href="https://github.com/SARAN006-pro" target="_blank"...>

// LinkedIn
<a href="https://www.linkedin.com/in/SARAN-VA/" target="_blank"...>

// Email
<a href="mailto:saran006va@gmail.com" ...>
```

---

### Footer

**File:** `src/components/Footer.js`

**What it contains:**
- Simple footer with copyright text
- "Designed and Built by SARAN V A"

**Update Copyright:**
```javascript
<p>&copy; 2025 All rights reserved.</p>  // Update year
<p>Designed and Built by SARAN V A</p>   // Update name
```

---

## 4. How to Update Each Section

### Update Personal Information

| What to Change | File | Look For |
|----------------|------|----------|
| Name in title | `index.html` | `<title>` tag |
| Name in hero | `Hero.js` | `hero-description` |
| Name in contact | `Contact.js` | `contact-name` |
| Copyright year | `Footer.js` | `&copy;` text |

### Update Profile Photo

1. Replace image at: `assets/images/profile-photo.png`
2. Recommended size: 400x400px or larger
3. Also update in `dist/images/` after build
4. Aspect ratio should be roughly 3:4 (portrait) for best display

### Update Projects

1. Open `src/components/Projects.js`
2. Modify the `projects` array
3. Add new project object following the structure
4. Update GitHub and demo links

### Update Skills

1. Open `src/components/Skills.js`
2. Modify the `skillCategories` array
3. Add/remove/modify skills as needed
4. Icons are predefined - may need to add new icon for new categories

### Update Achievements/Certifications

1. Add certificate images to `assets/certificates/`
2. Open `src/components/Achievements.js`
3. Add new achievement object
4. Update the description with HTML `<br/>` for line breaks

### Update Contact Form Email

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service
3. Create email template with variables:
   - `from_name` - sender name
   - `from_email` - sender email
   - `subject` - email subject
   - `message` - email message
4. Update constants in `src/components/Contact.js` (lines 88-90)

---

## 5. Assets & Images

### Required Images

| Image | Path | Recommended Size |
|-------|------|------------------|
| Logo | `assets/logo/llogo.png` | 200x40px |
| Profile Photo | `assets/images/profile-photo.png` | 400x400px+ |
| Certificate 1 | `assets/certificates/cert1.jpg` | 800x600px |
| Certificate 2 | `assets/certificates/cert2.jpg` | 800x600px |
| Certificate 3 | `assets/certificates/cert3.jpg` | 800x600px |

### Image Requirements

- **Format:** PNG (for transparency), JPG (for photos)
- **Quality:** Compressed but clear
- **File names:** Use descriptive names, no spaces

### Where Images are Used

```
Profile Photo:
- Hero section: /images/profile-photo.png
- Contact section: /images/profile-photo.png

Certificates:
- Achievements: /certificates/cert1.jpg, cert2.jpg, cert3.jpg

Logo:
- Navigation: ./logo/llogo.png
```

---

## 6. Technical Details

### Design System (CSS Variables)

**File:** `src/styles.css` (lines 677-789)

**Color Palette:**
```css
:root {
  --primary-accent: #3b82f6;      /* Main blue */
  --primary-hover: #60a5fa;      /* Lighter blue */
  --bg-primary: #0a0a0a;         /* Main background (dark) */
  --bg-secondary: #111111;       /* Secondary background */
  --text-primary: #ffffff;       /* Main text */
  --text-secondary: #a1a1aa;     /* Secondary text */
  /* ... more variables */
}
```

**To Change Colors:**
1. Modify CSS variable values in `:root`
2. Changes propagate to entire site

### Typography

**Fonts Used:**
| Font | Usage | Import |
|------|-------|--------|
| Manrope | Primary body text | Google Fonts |
| Space Grotesk | Headings | Google Fonts |
| DM Sans | Descriptions | Google Fonts |
| Chivo | Badges, labels, tags | Google Fonts |

**Font Sizes:**
- Defined in CSS variables (e.g., `--text-sm: 0.875rem`)
- Responsive: Uses `clamp()` for fluid sizing

### Animations

**Main Animations (in `main.js`):**
- Hero entrance animations (fadeInUp)
- Scroll-triggered reveal (IntersectionObserver)
- Skill bar fills
- Counter animations
- Smooth scroll

**Snow Effect:**
- `src/snow.js` - Optional winter ambiance
- Can be disabled by removing `initSnowEffect()` call in main.js

---

## 7. Deployment

### Development Server

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Output

After running `npm run build`:
- Output goes to `dist/` folder
- Images need to be copied to `dist/`:
  - `dist/images/`
  - `dist/certificates/`
  - `dist/logo/`

### Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite projects
4. Deploy!

### Deploy to Netlify

1. Build locally: `npm run build`
2. Upload `dist` folder
3. Or connect GitHub for auto-deploy

---

## Quick Reference Checklist

- [ ] Update name in Hero, Contact sections
- [ ] Update profile photo (hero + contact)
- [ ] Update projects with your work
- [ ] Update skills to reflect current tech stack
- [ ] Add new achievements/certificates
- [ ] Configure EmailJS for contact form
- [ ] Update social links (GitHub, LinkedIn)
- [ ] Update copyright year in footer

---

## Support

For issues or questions:
1. Check component files in `src/components/`
2. Review styles in `src/styles.css`
3. Check `main.js` for initialization logic

---

*Last updated: June 2026*
*Built with Vite + Pure JavaScript*