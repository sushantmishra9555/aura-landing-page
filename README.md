Aura Landing Page - SkillCraft Technology
A modern, responsive landing page showcasing cutting-edge web development skills with smooth animations, glassmorphism effects, and premium design.

🚀 Features
Modern Design: Beautiful glassmorphism UI with gradient effects
Fully Responsive: Optimized for all devices (mobile, tablet, desktop)
Dark/Light Mode: Theme toggle with smooth transitions
Smooth Animations: Enhanced user experience with fluid animations
SEO Optimized: Proper meta tags and semantic HTML
Type Safe: Built with TypeScript for robust code
Fast Performance: Powered by Vite for lightning-fast development
🛠️ Tech Stack
Framework: React 18 with TypeScript
Build Tool: Vite
Styling: Tailwind CSS
UI Components: shadcn/ui + Radix UI
Icons: Lucide React
Animations: CSS transitions and transforms
📦 Installation
Prerequisites
Node.js 18+ and npm installed
Git installed
Setup
Clone the repository

git clone https://github.com/YOUR_USERNAME/aura-landing-page.git
cd aura-landing-page
Install dependencies

npm install
Start development server

npm run dev
Open in browser

Navigate to http://localhost:5173/
📜 Available Scripts
npm run dev - Start development server with hot reload
npm run build - Build for production
npm run preview - Preview production build locally
npm run lint - Run ESLint to check code quality
📁 Project Structure
aura-landing-page/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Navbar.tsx  # Navigation component
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── App.tsx          # Main app component
│   ├── App.css          # Global styles
│   └── main.tsx         # Entry point
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
🎨 Customization
Change Branding
Update branding in:

src/components/Navbar.tsx
 (line 51)
src/components/Footer.tsx
 (lines 35, 76)
index.html
 (lines 6, 11)
Modify Colors
Edit tailwind.config.ts to change the color scheme.

Add/Remove Sections
Components are modular - simply import/remove from 
App.tsx
.

🚀 Deployment
Vercel (Recommended)
Push code to GitHub
Go to Vercel
Import your repository
Deploy with one click
Netlify
Push code to GitHub
Go to Netlify
Click "New site from Git"
Select your repository and deploy
GitHub Pages
npm run build
# Deploy the 'dist' folder to GitHub Pages
📄 License
This project is part of a technology internship evaluation.

👨‍💻 Author
SkillCraft Technology
