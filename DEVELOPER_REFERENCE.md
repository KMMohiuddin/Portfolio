# 📚 Developer Quick Reference

## Project Overview

**Portfolio Type**: Professional Data Analyst  
**Technology**: React 18 + Tailwind CSS 3 + Framer Motion  
**Status**: Production Ready  
**Hosting**: GitHub Pages  

---

## 📁 File Structure Map

```
e:\Portfolio\
├── public/
│   ├── index.html           # Main HTML entry point
│   └── new_img/             # Image assets (logos, achievements, profile)
│
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Sticky navigation with mobile menu
│   │   ├── HeroSection.jsx  # Landing hero section
│   │   ├── AboutSection.jsx # About & profile
│   │   ├── ExperienceSection.jsx  # Work experience
│   │   ├── SkillsSection.jsx       # Skills with ratings
│   │   ├── EducationSection.jsx    # Education timeline
│   │   ├── ToolsSection.jsx        # Tech stack
│   │   ├── AchievementsSection.jsx # Certifications
│   │   ├── Footer.jsx       # Footer with contact
│   │   ├── Button.jsx       # Reusable button component
│   │   └── Card.jsx         # Reusable card component
│   │
│   ├── data/
│   │   └── content.js       # ⭐ All portfolio content (centralized)
│   │
│   ├── App.jsx              # Main app layout
│   ├── index.jsx            # React entry point
│   └── index.css            # Global styles + Tailwind imports
│
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions CI/CD workflow
│
├── tailwind.config.js       # Tailwind CSS theme configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies & scripts
├── .gitignore              # Git ignore rules
├── .env.example            # Environment variables template
├── PORTFOLIO_README.md     # Full documentation
└── SETUP_INSTRUCTIONS.md   # Installation & deployment guide
```

---

## 🎨 Design System

### Colors
```javascript
primary: {      // Slate Blue
  50: '#f8fafc',   900: '#0f172a'
  600: '#475569',  700: '#334155'  // Most used
}
accent: {       // Cyan
  500: '#0ea5e9',  600: '#0284c7'  // Most used
}
```

### Tailwind Classes Used

**Typography**:
```css
text-primary-900    /* Headings */
text-primary-600    /* Body text */
text-accent-500     /* Links/highlights */
text-primary-300    /* Footer text */
```

**Components**:
```css
btn-primary         /* Primary buttons */
btn-secondary       /* Secondary buttons */
btn-outline         /* Outline buttons */
card                /* Card containers */
gradient-text       /* Gradient text effect */
```

---

## 🔄 Component Usage

### Button Component
```jsx
import Button from './components/Button';

<Button variant="primary" size="lg">Click Me</Button>
<Button variant="outline" size="md">Outline</Button>
```

**Variants**: `primary`, `secondary`, `outline`, `outlineLight`  
**Sizes**: `sm`, `md`, `lg`

### Card Component
```jsx
import Card from './components/Card';

<Card hover={true} className="custom-class">
  Content here
</Card>
```

---

## 📝 Adding Content

### Add Experience
Edit `src/data/content.js`:
```javascript
experience: [
  {
    company: "Company Name",
    companyLogo: "/new_img/logo.jpg",
    role: "Job Title",
    period: "Jan 2023 - Present",
    duration: "2 years",
    description: "...",
    responsibilities: ["item1", "item2", ...]
  }
]
```

### Add Achievement
```javascript
achievements: [
  {
    title: "Achievement Name",
    image: "/new_img/achievement.jpg",
    category: "Award" // or "Competition", "Training", etc.
  }
]
```

### Add Education
```javascript
education: [
  {
    degree: "Bachelor of Science",
    major: "Data Science",
    institution: "University Name",
    cgpa: "3.92 / 4.00",
    year: "2019 - 2023"
  }
]
```

---

## 🎬 Animation Patterns

### Scroll-triggered Animation
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Hover Animation
```jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Button
</motion.button>
```

### Staggered Children
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

<motion.div variants={containerVariants}>
  {items.map((item) => (
    <motion.div key={item} variants={childVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 🔗 Navigation Setup

Smooth scroll navigation is handled by `react-scroll`:

```jsx
import { Link as ScrollLink } from 'react-scroll';

<ScrollLink to="about" smooth={true} duration={500}>
  About
</ScrollLink>
```

Section IDs must match:
```jsx
<section id="about">...</section>
```

---

## 🌈 Tailwind Customization

### Add Custom Color
Edit `tailwind.config.js`:
```javascript
colors: {
  custom: {
    light: '#e6f7ff',
    main: '#1890ff',
    dark: '#0050b3'
  }
}
```

### Add Custom Animation
```javascript
animation: {
  'custom-spin': 'customSpin 2s linear infinite'
},
keyframes: {
  customSpin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  }
}
```

---

## 📦 Build & Deploy Scripts

```bash
npm start          # Dev server on localhost:3000
npm run build      # Production build to /build folder
npm run deploy     # Deploy to GitHub Pages (runs build first)
npm run eject      # ⚠️ Permanent - exposes CRA config (don't use)
```

---

## 🔍 Debugging

### Check Errors
```bash
# Terminal/Console during npm start
# Browser DevTools: F12 > Console tab
# Check for React warnings: orange/red messages
```

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Images not showing | Wrong path | Use `/new_img/name.jpg` not `./new_img/` |
| Scrolling doesn't work | Section ID mismatch | Check `<section id="...">` matches `to="..."` |
| Animations not playing | Wrong import | Import from `framer-motion` not elsewhere |
| Styles not applying | Typo in class | Use Tailwind classes from `tailwind.config.js` |

---

## 🚀 Deployment Checklist

- [ ] `npm run build` succeeds without errors
- [ ] No console warnings/errors
- [ ] All images present
- [ ] Links work (email, phone, social)
- [ ] Responsive on mobile (use DevTools)
- [ ] Lighthouse score 90+
- [ ] Meta tags updated in `public/index.html`
- [ ] package.json homepage correct
- [ ] `.gitignore` includes `node_modules/` and `build/`
- [ ] GitHub Pages enabled in repo settings

---

## 📊 Performance Metrics

**Target Goals**:
- Lighthouse Score: 90+
- Bundle Size: <60KB gzipped
- Time to Interactive: <2s
- First Contentful Paint: <1s

**Monitor**:
```bash
npm run build  # Check bundle size
# Then open build/index.html in browser
# Use Chrome DevTools > Lighthouse
```

---

## 🔐 Security Notes

- No sensitive data in frontend code
- CV link uses Google Drive sharing
- Email links are user-friendly (open mail client)
- No API keys exposed
- GitHub Pages HTTPS by default

---

## 📚 Resources

- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion/
- **React Scroll**: https://github.com/fisshy/react-scroll

---

## 👨‍💻 Code Style

- **Naming**: camelCase for variables/functions, PascalCase for components
- **Structure**: Functional components with hooks only
- **Comments**: Add comments for complex logic
- **Props**: Destructure props in function parameters
- **Imports**: Sort alphabetically

---

## 📞 Contact & Questions

Portfolio Owner: K.M. Mohiuddin  
Email: kmmohiuddin.1@gmail.com  
LinkedIn: linkedin.com/in/kmmohiuddin  
GitHub: github.com/KMMohiuddin  

---

**Last Updated**: April 2026  
**Quick Reference Version**: 1.0.0
