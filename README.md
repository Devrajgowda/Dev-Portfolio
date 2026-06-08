# Dev-Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool and dev server
- **React Router v7** — client-side routing
- **Tailwind CSS** — utility-first styling

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # Navbar, Hero, About, Projects, Blogs, Contact, Footer
│   ├── pages/          # BlogsPage, BlogArticlePage, ProjectDetail
│   ├── context/        # React context providers
│   ├── hooks/          # Custom hooks
│   ├── data/           # Static data files
│   └── main.jsx        # App entry point
├── index.html
├── vite.config.js
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
cd portfolio
npm install
```

### Run in development

```bash
cd portfolio
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for production

```bash
cd portfolio
npm run build
```

### Preview production build

```bash
cd portfolio
npm run preview
```
