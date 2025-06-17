
# Portfolio Project Documentation

## Overview
This is a modern React portfolio website for Majd Alsurihi, an IoT Engineer specializing in system automation and technical solutions.

## Project Structure

### Core Configuration File
- **`src/config/portfolio.ts`** - Centralized configuration for all content and styling

### Components
- **`src/components/Navbar.tsx`** - Navigation bar with pill-shaped design
- **`src/components/PortfolioHero.tsx`** - Hero section with animated photo
- **`src/components/AboutSection.tsx`** - About section with personal information
- **`src/components/ProjectsSection.tsx`** - Projects showcase
- **`src/components/TechStackSlider.tsx`** - Technologies slider
- **`src/components/ProjectCard.tsx`** - Individual project cards
- **`src/components/ParticleBackground.tsx`** - Animated background particles

## Easy Editing Guide

### 1. Personal Information
Edit `src/config/portfolio.ts` in the `personal` section:
```typescript
personal: {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  description: "Your description...",
  image: "/path/to/your/image.png",
  logo: "/path/to/your/logo.png"
}
```

### 2. Adding/Removing Technologies
Edit the `technologies` array in `src/config/portfolio.ts`:
```typescript
technologies: [
  { name: "Python", icon: "/Icons/python.svg" },
  { name: "New Tech", icon: "/Icons/new-tech.svg" },
  // Add or remove technologies here
]
```

### 3. Adding/Removing Projects
Edit the `projects` array in `src/config/portfolio.ts`:
```typescript
projects: [
  {
    title: "Your Project Title",
    hook: "Short engaging description",
    challenge: "What problem did this solve?",
    role: "Your role and process",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/your-repo"
  },
  // Add more projects here
]
```

### 4. Adding Certifications
Edit the `certifications` array in `src/config/portfolio.ts`:
```typescript
certifications: [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "2023",
    logo: "/path/to/cert-logo.png"
  },
  // Add more certifications here
]
```

### 5. Adjusting Font Sizes
Edit the `styling.titleSizes` section in `src/config/portfolio.ts`:
```typescript
titleSizes: {
  mainName: "4xl",        // Your main name size
  sectionTitles: "4xl",   // "About Me", "Featured Projects" etc.
  badges: "2xl",          // "IoT Engineer" badge, section badges
  subtitles: "xl",        // Secondary text
  cardTitles: "xl",       // Project card titles
  bodyText: "base"        // Regular paragraph text
}
```

Available sizes: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`

### 6. Adjusting Glass Effect Blur
Edit the `styling.glassBlur` section in `src/config/portfolio.ts`:
```typescript
glassBlur: {
  hero: "backdrop-blur-3xl",      // Hero section blur
  sections: "backdrop-blur-3xl",  // Other sections blur
  cards: "backdrop-blur-sm"       // Individual cards blur
}
```

Available blur levels: `backdrop-blur-none`, `backdrop-blur-sm`, `backdrop-blur`, `backdrop-blur-md`, `backdrop-blur-lg`, `backdrop-blur-xl`, `backdrop-blur-2xl`, `backdrop-blur-3xl`

### 7. Navigation Items
Edit the `navigation` array in `src/config/portfolio.ts`:
```typescript
navigation: [
  { name: "Home", href: "#", id: "home" },
  { name: "Skills", href: "#tech-stack", id: "skills" },
  // Add or modify navigation items here
]
```

### 8. Social Links
Edit the `social` section in `src/config/portfolio.ts`:
```typescript
social: {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  email: "#contact"
}
```

## Features

### Design Elements
- **Pill-shaped Navigation**: Modern, rounded navigation bar with blur effect
- **Glass Morphism**: Blurred glass cards throughout the site
- **Particle Background**: Animated particles for visual appeal
- **Enhanced Photo**: Your photo with particle background and stroke border
- **Responsive Design**: Works on all device sizes

### Animations
- Fade-in animations for sections
- Hover effects on interactive elements
- Smooth scrolling navigation
- Particle movement animations

### Technical Features
- TypeScript for type safety
- Tailwind CSS for styling
- React components for modularity
- Centralized configuration for easy editing

## Adding Icons
1. Place icon files in the `public/Icons/` folder
2. Add them to the technologies array in the config file
3. Use the path format: `/Icons/filename.svg`

## Color Scheme
The site uses a warm color palette with orange/amber accents:
- Primary: Orange (#FE5C02)
- Glass effects: White with transparency
- Text: Gray scale for readability

## Performance
- Optimized images
- Tree-shaking for unused code
- Efficient animations
- Mobile-first responsive design

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari and Chrome
- Responsive design for all screen sizes
