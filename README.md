# Lans Villena - Portfolio Website

A clean, technical, and recruiter-friendly portfolio website built with Next.js, React, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Ready for Vercel/Netlify

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Responsive one-page design** - Mobile-first approach with smooth animations
- **Smooth scroll navigation** - Active section tracking in navbar
- **Animated background** - Subtle gradient effects with animated orbs
- **Interactive project showcase** - Clickable cards with modal details
- **Certification viewer** - Display certificates with expandable images
- **Professional contact section** - Footer with social links and contact info
- **Dark theme** - Consistent dark aesthetic throughout
- **Optimized images** - Next.js Image component for performance
- **SEO-friendly** - Proper meta tags and semantic HTML

## Sections

1. **Hero** - Landing page with profile picture, name, and CTA buttons
2. **About Me** - Brief introduction and background
3. **Skills & Tech Stack** - Backend skills, soft skills, and technologies with icons
4. **Projects** - WorkAble and BaybayInscribe with detailed modals
5. **Certifications** - IT and HR certifications with viewable certificates
6. **Education** - Academic background
7. **Contact/Footer** - Email, phone, LinkedIn, and GitHub links

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   └── Footer.tsx
└── public/
    ├── add_ons/
    │   └── UPDATED - VILLENA_LANS_RESUME_ATS.pdf
    ├── profile_pic/
    │   └── linkedin_profpic_whitebg.png
    ├── baybayinscribe_photos/
    ├── workable_screenshots/
    ├── database_cert/
    ├── hr_essential/
    └── hr_resource_management/
```

## Build for Production

```bash
npm run build
npm start
```

## License

© 2026 Lans Villena. All rights reserved.
