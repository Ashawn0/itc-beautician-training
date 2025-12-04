# ITC Beautician Training Institute

Welcome to the official repository for the ITC Beautician Training Institute website. This modern, responsive web application is built to showcase our comprehensive beauty courses, expert trainers, and student achievements.

## 🚀 Project Overview

This project is a high-performance **Next.js 15** application designed to provide a premium digital presence for the institute. It leverages the latest web technologies to ensure speed, SEO optimization, and a seamless user experience across all devices.

### Key Features
-   **Dynamic Course Catalog**: Data-driven course pages with detailed curriculums and career scopes.
-   **Premium UI/UX**: Custom design system using Tailwind CSS v4 with glassmorphism and parallax effects.
-   **Interactive Components**: Animated sections, scroll-triggered reveals, and responsive mobile navigation.
-   **Localization Ready**: Architecture prepared for multi-language support (English/Nepali) via dictionary pattern.
-   **SEO Optimized**: Semantic HTML, metadata management, and fast core web vitals.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router & Server Components)
-   **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Fonts**: [Google Fonts](https://fonts.google.com/) (Playfair Display & Inter)
-   **Icons**: Custom SVG & Heroicons
-   **Linting**: ESLint

## 📂 Project Structure

The project follows a modular, scalable structure:

```
src/
├── app/              # Next.js App Router (Pages, Layouts, API routes)
│   ├── contact/      # Contact page
│   ├── courses/      # Course listing & dynamic [id] pages
│   ├── gallery/      # Gallery page
│   ├── trainer/      # Trainer profile page
│   ├── globals.css   # Global styles & Tailwind directives
│   ├── layout.tsx    # Root layout with SEO metadata
│   └── page.tsx      # Homepage
├── components/       # Reusable UI components (Header, Footer, Cards, etc.)
├── data/             # Static data sources (Courses, Testimonials)
├── hooks/            # Custom React hooks (e.g., useScrollAnimation)
├── lib/              # Core libraries & utilities (i18n dictionary)
├── locales/          # JSON translation files (en.json, np.json)
├── types/            # TypeScript interfaces & type definitions
└── utils/            # Helper functions (Image assets, formatting)
public/
├── images/           # Optimized static images
├── logos/            # Brand assets
└── ...
```

## ⚡ Getting Started

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd beauticiantraining
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Build & Deployment

To create a production build optimized for performance:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🤝 Contributing

We welcome contributions! Please ensure you follow the project's coding standards:
-   Use TypeScript for all new files.
-   Follow the existing component structure.
-   Ensure responsive design for all UI changes.

---

© 2025 ITC Beautician Training Institute. Powered by [Ashawn](https://github.com/Ashawn0).
