
# Majd Alsurihi - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🎯 Quick Start

```bash
npm install
npm run dev
```

## 📝 How to Customize Your Portfolio

All content and styling can be easily modified through the configuration file:

### 🔧 Main Configuration File
**Location**: `src/config/portfolio.ts`

This is your central control panel for all portfolio content and styling.

### 👤 Personal Information
```typescript
personal: {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  description: "Your description...",
  image: "/path-to-your-image.png",
  logo: "/path-to-your-logo.png"
}
```

### 🔗 Social Links
```typescript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "#contact"
}
```

### 🧭 Navigation Menu
```typescript
navigation: [
  { name: "Home", href: "#", id: "home" },
  { name: "Skills", href: "#tech-stack", id: "skills" },
  // Add more navigation items...
]
```

### 💻 Technologies/Skills
```typescript
technologies: [
  { name: "Technology Name", icon: "/path-to-icon.svg" },
  // Add more technologies...
]
```

### 📋 Projects
```typescript
projects: [
  {
    title: "Project Title",
    hook: "Brief engaging description",
    challenge: "What problem did this solve?",
    role: "Your role and process",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/..."
  }
  // Add more projects...
]
```

### 🏆 Certifications
```typescript
certifications: [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "Year",
    logo: "/path-to-cert-logo.png"
  }
  // Add more certifications...
]
```

### 🎨 Styling Configuration
```typescript
styling: {
  titleSizes: {
    mainName: "4xl",        // Your main name
    sectionTitles: "4xl",   // Section titles (About Me, Projects, etc.)
    badges: "2xl",          // Badge text (IoT Engineer, etc.)
    subtitles: "xl",        // Secondary text
    cardTitles: "xl",       // Project card titles
    bodyText: "base"        // Regular text
  },
  glassBlur: {
    hero: "backdrop-blur-3xl",     // Hero section blur
    sections: "backdrop-blur-3xl", // Other sections blur
    cards: "backdrop-blur-sm"      // Individual cards blur
  },
  glassOpacity: {
    hero: "bg-white/1",      // Hero transparency
    sections: "bg-white/1",  // Sections transparency
    cards: "bg-white/5"      // Cards transparency
  }
}
```

## 🎨 Customizing Styles

### Title Sizes
Available sizes: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`

### Glass Effect Blur Levels
- `backdrop-blur-none` - No blur
- `backdrop-blur-sm` - Small blur
- `backdrop-blur` - Default blur
- `backdrop-blur-md` - Medium blur
- `backdrop-blur-lg` - Large blur
- `backdrop-blur-xl` - Extra large blur
- `backdrop-blur-2xl` - 2x extra large blur
- `backdrop-blur-3xl` - 3x extra large blur

### Opacity Levels
- `bg-white/0` - Completely transparent
- `bg-white/5` - Very transparent
- `bg-white/10` - Light transparency
- `bg-white/20` - Medium transparency
- `bg-white/30` - Higher transparency
- `bg-white/50` - Half transparent

## 📱 Components Structure

### Main Components
- `PortfolioHero.tsx` - Hero section with your introduction
- `AboutSection.tsx` - About me with expandable content
- `TechStackSlider.tsx` - Animated technology showcase
- `ProjectsSection.tsx` - Projects grid with detailed cards
- `CertificationsSection.tsx` - Certifications display
- `ContactSection.tsx` - Contact information
- `Navbar.tsx` - Navigation bar

### Component Customization
Each component automatically reads from the `portfolioConfig` object, so most changes only require updating the config file.

## 🖼️ Adding Images

1. Upload images to the `public/` folder or use the Lovable uploader
2. Reference them in the config file: `/your-image.png` or `/lovable-uploads/...`

## 🔧 Advanced Customization

### About Me Content
The About Me section supports expandable content. Edit the content directly in `src/components/AboutSection.tsx`:

```typescript
// Always visible content
<p>Your always visible content...</p>

// Expandable content (hidden by default)
<div className={/* expansion logic */}>
  <p>Your expandable content...</p>
</div>
```

### Tech Stack Animation
The technology slider automatically creates a smooth infinite scroll. Add more technologies to the config file to see them in the animation.

### Project Cards
Projects automatically generate detailed cards with:
- Title and hook
- Challenge description
- Your role and process
- Technologies used
- GitHub link

## 🚀 Deployment

This project can be deployed on any static hosting service:

1. **Lovable**: Click the "Publish" button
2. **Netlify**: Connect your GitHub repo
3. **Vercel**: Import your project
4. **GitHub Pages**: Enable in repository settings

## 🛠️ Development

### Tech Stack
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📄 File Structure
```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── ...             # Page-specific components
├── config/
│   └── portfolio.ts    # Main configuration file
├── lib/
│   └── utils.ts        # Utility functions
└── pages/
    └── Index.tsx       # Main page
```

## 💡 Tips

1. **Start with the config file** - Most changes can be made there
2. **Use consistent image sizes** - For best results in the tech stack
3. **Keep project descriptions concise** - Use the hook for engagement
4. **Test on mobile** - The design is fully responsive
5. **Use high-quality images** - Especially for your profile photo and logo

## 🐛 Troubleshooting

### Images not loading
- Check file path in config
- Ensure image is in `public/` folder
- Verify file extension matches

### Styles not applying
- Check Tailwind class names
- Verify config values are valid
- Clear browser cache

### Animation issues
- Ensure all technologies have valid icons
- Check for JavaScript errors in console
- Verify smooth scrolling is enabled

## 📞 Support

For questions about customization or issues, refer to the component documentation or check the browser console for errors.
