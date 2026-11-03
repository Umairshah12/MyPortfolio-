# Syed Umair Shah — Personal Portfolio & Operations Showcase

A luxury, Awwwards-inspired, high-performance personal portfolio website built for **Syed Umair Shah**, bridging enterprise IT systems, full-stack software development, and international aviation customer experience (Etihad Airways & Dubai International Airport).

---

## 🌟 Live Features & Architecture

- **Next.js 14 App Router** with React 18, TypeScript, Tailwind CSS, and Framer Motion.
- **Cinematic Dark Luxury Aesthetic**: Obsidian backdrops (`#030712`), ambient radial mesh glows, responsive glassmorphism, and dynamic accent switcher (**Electric Cyan**, **Neon Blue**, **Cyber Violet**, **Emerald Matrix**).
- **Hero Section**:
  - Rotating animated professional roles typewriter.
  - Headline: *"Turning Technology Into Meaningful Experiences."*
  - Dual CTAs (*"Let's Work Together"* and *"Download My CV"*).
  - Verified candidate badge and avatar frame placeholder.
  - Social connectivity strip (LinkedIn, GitHub, Email).
- **About Me Section**:
  - Split-screen layout with portrait placeholder.
  - Narrative spanning IT Support, Software Development, System Administration, and Airport Operations (Etihad AUH & Dubai DXB).
  - Core philosophy & operational competencies cards.
- **Interactive Skills Section**:
  - Filter tabs (*All*, *Software & Web Dev*, *IT & Systems Admin*, *Aviation & CX*).
  - Search filter input for instant lookup.
  - Authentic competency badges (*Advanced*, *Proficient*, *Operational*, *Core Competency*).
  - **No invented percentages**.
- **Professional Experience Timeline**:
  - **Guest Service Agent** — Etihad Airways (DCS check-in, boarding reconciliation, transfer desk, operational coordination).
  - **Customer Service Agent** — Dubai International Airport (DXB terminal logistics, Al Majlis VIP care).
  - **IT Support & Software Development** — Buraq Technologies (Active Directory, Windows/Linux triage, C#, SQL web solutions).
  - All employment dates marked as editable placeholders.
- **Project Showcase**:
  - Interactive categories (*Web Development*, *Software Development*, *IT Solutions*, *Creative Projects*).
  - Deep-dive architectural inspection modal.
  - Live demo & GitHub repository action buttons.
- **Education & Certifications**:
  - **Bachelor of Science in Information Technology (BS IT)**.
  - Industry certifications: Microsoft 365 (MS-900), CompTIA Network+/A+, IATA Aviation DCS standards.
- **Working Contact Section**:
  - Server-side Next.js route handler (`/api/contact`) with validation and spam honeypot.
  - Authentic transmission receipt with unique `submissionId`.
  - Direct contact options, one-click email copy, response SLA badge.
- **Advanced Micro-Interactions**:
  - Monogram preloader animation with progress counter.
  - Desktop custom cursor ambient glow follower.
  - Sticky glassmorphic navbar with section scroll spy.
  - Mobile responsive drawer navigation.
  - Custom 404 page (`/app/not-found.tsx`).
  - Native downloadable resume (`/public/resume.pdf`).
  - Search Engine Optimization: OpenGraph tags, JSON-LD Schema markup, `robots.txt`, and `sitemap.xml`.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js LTS (v18+ or v20+)
- npm or pnpm

### Running the Server
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Or build and run production server
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Server-side contact validation & handler
│   ├── globals.css               # Obsidian dark luxury theme & animations
│   ├── layout.tsx                # Metadata, JSON-LD schema, Font & Providers
│   ├── not-found.tsx             # Futuristic 404 error page
│   └── page.tsx                  # Master page assembling all sections
├── components/
│   ├── About.tsx                 # Split-screen bio & aviation operations
│   ├── Contact.tsx               # Functional contact form with receipt ID
│   ├── CustomCursor.tsx          # Smooth ambient cursor glow follower
│   ├── Education.tsx             # BS IT degree & professional credentials
│   ├── Experience.tsx            # Interactive career timeline (Etihad, DXB, Buraq)
│   ├── Footer.tsx                # Luxury footer, quick links, back-to-top
│   ├── Hero.tsx                  # Cinematic hero, rotating roles, CTAs
│   ├── Navbar.tsx                # Glassmorphic header, accent picker, mobile menu
│   ├── Preloader.tsx             # Animated monogram loader with progress counter
│   ├── ProjectModal.tsx          # Deep-dive project architecture modal
│   ├── Projects.tsx              # Filterable engineering showcase
│   ├── Skills.tsx                # Categorized technical & operational skills
│   └── ThemeAccentContext.tsx    # Dynamic accent glow switcher
├── data/
│   └── portfolio-data.ts         # Central typed source of truth for all content
├── public/
│   ├── resume.pdf                # Verified downloadable PDF resume
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # XML sitemap for SEO
├── scripts/
│   ├── generate-resume.js        # Automated vector PDF resume generator
│   └── test-endpoints.js         # Automated end-to-end endpoint test runner
├── types/
│   └── index.ts                  # TypeScript data contracts & interfaces
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 How to Customize Content

### 1. Replacing Profile Photos
1. Add your high-resolution portrait headshot to the `public/` directory (e.g. `public/avatar.jpg`).
2. Open `components/Hero.tsx` or `components/About.tsx`.
3. Replace the placeholder container with Next.js `<Image src="/avatar.jpg" alt="Syed Umair Shah" ... />` or standard `<img>` tag.

### 2. Updating Resume (CV)
- **Automatic PDF Generation**: Edit `scripts/generate-resume.js` and execute `node scripts/generate-resume.js` to automatically recompile a clean vector PDF.
- **Manual Replacement**: Simply overwrite `public/resume.pdf` with your own existing PDF file.

### 3. Editing Personal Details, Experiences & Projects
All text, experiences, employment dates, skills, contact numbers, and projects live in **one single typed file**:
👉 `data/portfolio-data.ts`

---

## 🌐 Deployment to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Syed Umair Shah portfolio"
   git remote add origin https://github.com/your-username/syed-umair-shah-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework preset will automatically be detected as **Next.js**.
5. Click **Deploy**. Your portfolio will be live worldwide on an edge CDN with zero config!

