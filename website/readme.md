# Template Repository Website

A modern, responsive website built with Next.js, React, and Tailwind CSS for the Template Repository project.

## Features

- **Modern React with Next.js 14** - Latest App Router with server-side rendering
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Responsive Design** - Mobile-first approach with dark mode support
- **SEO Optimized** - Meta tags, structured data, and performance optimized
- **Accessibility** - WCAG 2.1 AA compliant with semantic HTML
- **Testing** - Jest and React Testing Library setup
- **Code Quality** - ESLint, Prettier, and pre-commit hooks
- **Storybook** - Component documentation and development
- **Static Export** - GitHub Pages ready with static site generation

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

### Building

```bash
# Build for production
npm run build

# Build and export static site
npm run export

# Start production server
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Storybook

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook
```

## Project Structure

```
website/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── images/
│   └── icons/
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.jsx     # Root layout
│   │   ├── page.jsx       # Home page
│   │   ├── globals.css    # Global styles
│   │   ├── about/
│   │   ├── docs/
│   │   └── contact/
│   ├── components/        # React components
│   │   ├── Layout.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── __tests__/     # Component tests
│   └── lib/               # Utility functions
├── jest.config.js         # Jest configuration
├── jest.setup.js          # Jest setup file
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
└── package.json
```

## Customization

### Design System

The website uses a custom design system built with Tailwind CSS. Key customizations include:

- **Colors**: Custom color palette with primary, secondary, and accent colors
- **Typography**: Inter font family with custom font sizes and weights
- **Spacing**: Extended spacing scale for consistent layouts
- **Components**: Pre-built component classes for buttons, cards, and layouts

### Content

Update the content by modifying the React components in `src/components/` and pages in `src/app/`.

### Styling

- Global styles: `src/app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes in JSX

### Environment Variables

Create a `.env.local` file for development:

```bash
GITHUB_REPO=https://github.com/yourusername/your-repo
SITE_NAME=Your Project Name
SITE_DESCRIPTION=Your project description
```

## Deployment

### GitHub Pages

The website is configured for static export and GitHub Pages deployment:

1. Update `next.config.js` with your repository name
2. Run `npm run export`
3. Deploy the `out/` directory to GitHub Pages

### Vercel

Deploy directly to Vercel (recommended for Next.js):

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms

The static export (`npm run export`) can be deployed to any static hosting service:

- Netlify
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## Performance

The website is optimized for performance with:

- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Next.js Image component (disabled for static export)
- **Bundle Analysis**: Built-in bundle analyzer
- **Lighthouse Scores**: 90+ scores across all metrics

## SEO

SEO optimization includes:

- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD structured data
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## Accessibility

Accessibility features:

- **Semantic HTML**: Proper HTML structure and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color contrast
- **Focus Management**: Visible focus indicators

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License - see the main repository LICENSE file for details.