# Template Repository

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
    1. [Frontend](#frontend)
    2. [Backend](#backend)
    3. [Development Tools](#development-tools)
3. [Project](#project)
    1. [Project Management](#project-management)
4. [Product](#product)
5. [Website](#website)
    1. [Website Development](#website-development)
6. [Development](#development)
    1. [Contributing](#contributing)
    2. [Other](#other)
7. [Quick Start](#quick-start)
    1. [Using as Template](#using-as-template)
    2. [Development Setup](#development-setup)
8. [Links](#links)
9. [Project Structure](#project-structure)
10. [Notes](#notes)
11. [References](#references)
12. [License](#license)

A comprehensive template repository with modern web development tools, featuring a React/Next.js website, Python backend support, Docker containerization, and extensive documentation structure.

## Overview

This template repository provides a complete foundation for modern software projects, combining:

- **React/Next.js Website**: Modern, responsive web application with Tailwind CSS
- **Python Backend**: Scalable backend application structure
- **Docker Support**: Containerized development and deployment
- **Comprehensive Documentation**: Structured project documentation
- **CI/CD Pipeline**: GitHub Actions for automated testing and deployment
- **Code Quality Tools**: Linting, formatting, and testing setup

**Build Status:**

[![build-test-deploy](https://github.com/manastalukdar/template-repo/actions/workflows/main.yml/badge.svg)](https://github.com/manastalukdar/template-repo/actions/workflows/main.yml)
[![Lint Code Base](https://github.com/manastalukdar/template-repo/actions/workflows/linter.yml/badge.svg)](https://github.com/manastalukdar/template-repo/actions/workflows/linter.yml)

## Technology Stack

### Frontend
- **React 18.2+**: Modern React with hooks and functional components
- **Next.js 14+**: Full-stack React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Beautiful, customizable icons

### Backend
- **Python 3.12+**: Modern Python with type hints support
- **Docker**: Containerized development and deployment
- **Make**: Build automation and task management

### Development Tools
- **Jest**: Testing framework with coverage reporting
- **ESLint + Prettier**: Code linting and formatting
- **GitHub Actions**: Automated CI/CD pipeline
- **Storybook**: Component development and documentation
- **Renovate**: Automated dependency updates

[More project metadata badges [here](./documentation/project/metadata.md). More CI/CD badges [here](./documentation/development/ci-cd.md#current-status).]

## Project

| Document | Link                                                                       |
| -------- | -------------------------------------------------------------------------- |
| Metadata | [./documentation/project/metadata.md](./documentation/project/metadata.md) |

### Project Management

[GitHub Projects](https://github.com/manastalukdar/template-repo/projects)

## Product

| Document     | Link                                                                               |
| ------------ | ---------------------------------------------------------------------------------- |
| Installation | [./documentation/product/installation.md](./documentation/product/installation.md) |
| Usage        | [./documentation/product/usage.md](./documentation/product/usage.md)               |

## Website

The repository includes a modern React/Next.js website located in the `website/` directory:

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with responsive design
- **Components**: Modular React components with Jest testing
- **Development**: Hot reload, ESLint, Prettier, and Storybook
- **Build**: Optimized production builds and static export

### Website Development

```bash
cd website
npm install
npm run dev    # Start development server
npm run build  # Build for production
npm run test   # Run tests
```

## Development

| Document                | Link                                                                                                     |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| Design and Architecture | [./documentation/development/design-architecture.md](./documentation/development/design-architecture.md) |
| Requirements            | [./documentation/development/requirements.md](./documentation/development/requirements.md)               |
| Development             | [./documentation/development/development.md](./documentation/development/development.md)                 |
| Testing                 | [./documentation/development/testing.md](./documentation/development/testing.md)                         |
| CI/CD                   | [./documentation/development/ci-cd.md](./documentation/development/ci-cd.md)                             |

### Contributing

[./.github/CONTRIBUTING.md](./.github/CONTRIBUTING.md)

### Other

## Quick Start

### Using as Template

1. **Create from template**: Click "Use this template" on GitHub
2. **Clone your new repository**:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

3. **Customize**: Follow the [Template Customization Guide](./TEMPLATE_CUSTOMIZATION.md)

### Development Setup

1. **Prerequisites**: Docker, Node.js 18+, Python 3.12+
2. **Install dependencies**:

   ```bash
   # Website dependencies
   cd website && npm install
   
   # Python dependencies (if using backend)
   pip install -r requirements.txt
   ```

3. **Start development**:

   ```bash
   # Website development server
   cd website && npm run dev
   
   # Or use Docker
   docker-compose -f docker-compose.dev.yml up
   ```

## Links

- [Sourcegraph](https://sourcegraph.com/github.com/manastalukdar/template-repo/)

## Project Structure

```plaintext
template-repo/
├── app/                    # Application/Product
├── website/                # React/Next.js static website for product
│   ├── src/
│   │   ├── app/           # Next.js App Router pages
│   │   └── components/    # React components
│   ├── package.json       # Node.js dependencies
│   └── tailwind.config.js # Tailwind CSS configuration
├── documentation/          # Project documentation
│   ├── development/       # Development guides
│   ├── product/          # Product documentation
│   └── project/          # Project metadata
├── .github/               # GitHub workflows and templates
├── docker-compose.yml     # Docker services configuration
├── Dockerfile            # Container definition
├── Makefile              # Build automation
└── requirements.txt      # Python dependencies
```

## Notes

## References

## License

[MIT](https://github.com/manastalukdar/template-repo/blob/main/LICENSE)
