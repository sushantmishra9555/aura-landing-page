✨ Aura Landing Page

SkillCraft Technology – Internship Project

A modern, premium, and fully responsive landing page built to showcase cutting-edge web development skills. Designed with smooth animations, glassmorphism effects, and performance-focused architecture to deliver a professional, production-ready experience.

🚀 Features

Modern UI/UX
Elegant glassmorphism design
Gradient effects with a premium look

Fully Responsive
Optimized for mobile, tablet, and desktop devices

Dark / Light Mode
Smooth theme toggle with seamless transitions

Smooth Animations
Fluid UI animations and transitions for enhanced user experience

SEO Optimized
Semantic HTML and proper meta tags

Type-Safe Codebase
Built with TypeScript for scalability and maintainability

High Performance
Powered by Vite for lightning-fast development and builds

🛠 Tech Stack

Framework: React 18 + TypeScript
Build Tool: Vite
Styling: Tailwind CSS
UI Components: shadcn/ui, Radix UI
Icons: Lucide React
Animations: CSS Transitions & Transforms

📦 Installation & Setup

Prerequisites
Node.js 18+
npm installed

Clone the Repository
git clone https://github.com/YOUR_USERNAME/aura-landing-page.git
cd aura-landing-page

Install Dependencies
npm install

Start Development Server
npm run dev

Open your browser and navigate to:
👉 http://localhost:8080

📜 Available Scripts

npm run dev – Start development server with hot reload
npm run build – Build for production
npm run preview – Preview production build locally
npm run lint – Run ESLint to check code quality

aura-landing-page/
├── public/                # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── components/ui/     # shadcn/ui components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── App.css            # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json


🎨 Customization

Branding Text
src/components/Navbar.tsx (line 51)
src/components/Footer.tsx (lines 35, 76)

Page Content
index.html (lines 6, 11)

Color Theme
Modify tailwind.config.ts to update the color scheme

➕ Add / Remove Sections
All sections are modular.
Simply import or remove components inside App.tsx.

🌐 Deployment
Recommended: Vercel

Push code to GitHub
Go to Vercel
Import repository
Deploy with one click

Alternative Options

Netlify – New site → Import from Git → Deploy
GitHub Pages – Deploy the dist folder after running:

npm run build
