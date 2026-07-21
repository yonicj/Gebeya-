# Batu Gebeya

A modern, responsive frontend for **Batu Gebeya** — a local marketplace and delivery platform showcasing products from shops in Batu town.

## Features

- **Home** — Hero, featured categories, products, how it works, why choose us, testimonials
- **Products** — Grid with search, category filters, and pagination
- **Product Detail** — Gallery, info, contact CTA, suggested products
- **About** — Story, mission, vision, service overview, benefits
- **Contact** — Info, social links, validated contact form

## Tech Stack

- React 19 (functional components)
- React Router 7
- Tailwind CSS 4
- Framer Motion
- Vite 6

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (includes npm)

### Install & Run

```bash
cd batu-gebeya
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── contact/     ContactForm
│   ├── home/        Hero, FeaturedCategories, etc.
│   ├── layout/      Navbar, Footer, Layout
│   ├── products/    ProductCard, CategoryCard, Pagination
│   └── ui/          Button, SearchBar, SectionHeading, PageHeader
├── data/            products.js (dummy data)
├── pages/           Home, Products, ProductDetail, About, Contact
├── utils/           icons.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Design

- Sage green & emerald accent palette
- DM Sans + Playfair Display typography
- Mobile-first responsive layout
- Subtle Framer Motion animations

## Note

This is a **frontend-only** showcase. The contact form displays a success message locally; connect it to a backend API for production use.
