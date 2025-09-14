# Modern Portfolio Website

A sleek, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

![Portfolio Preview](./public/preview.svg)

## Features

- **Modern Design**: Clean and professional design with custom color scheme
- **Responsive Layout**: Looks great on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Engaging animations using Framer Motion
- **Dark Theme**: Deep purple and black color scheme for a modern look
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Built with best practices for search engine optimization

## Tech Stack

- **Next.js**: React framework for production
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React

## Color Scheme

- **Primary**: Deep Purple (#6C63FF)
- **Background**: Black (#0E0E0E)
- **Text**: White (#FFFFFF) with occasional light-gray (#BFBFBF)
- **Accent/Highlight**: Neon Purple gradient (linear-gradient(135deg, #6C63FF, #A259FF))

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Edit the content in `src/app/page.tsx` to update:
- Your name and title
- About section content
- Projects information
- Contact details

### Profile Picture

Replace the placeholder image at `public/placeholder-profile.svg` with your own profile picture.

### Resume

Add your resume as a PDF file at `public/resume.pdf` to enable the resume download button.

## Deployment

This project can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-site)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
