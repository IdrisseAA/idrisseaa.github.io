# Portfolio - Abdallah Idrisse

Personal portfolio website showcasing ML, Software Engineering projects and research.

## Features

- 🎨 Glassmorphic UI with smooth animations
- 📱 Fully responsive design
- 🚀 Fast performance with Vite
- 📧 Contact form with EmailJS integration
- ♿ Keyboard navigation support
- 🔍 SEO optimized

## Tech Stack

- **React** 19.1.0
- **Vite** 6.3.2
- **EmailJS** - Contact form
- **CSS3** - Custom styling with variables
- **GitHub Pages** - Deployment

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Set up email service and template
3. Update credentials in `src/utils/constants.js`:

```javascript
export const EMAILJS_CONFIG = {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key",
};
```

## Deployment

Deploys automatically to GitHub Pages on push to `main` branch.

Manual deployment:

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## License

MIT License - feel free to use this as a template for your own portfolio.
