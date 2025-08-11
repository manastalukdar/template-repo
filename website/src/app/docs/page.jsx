import Layout from '@/components/Layout';
import Link from 'next/link';
import {
  BookOpen,
  Code,
  Settings,
  Zap,
  Shield,
  GitBranch,
  FileText,
  ExternalLink,
} from 'lucide-react';

const docSections = [
  {
    title: 'Getting Started',
    description: 'Quick setup and installation guide',
    icon: Zap,
    links: [
      { name: 'Installation', href: '/docs/installation' },
      { name: 'Quick Start', href: '/docs/quick-start' },
      { name: 'Configuration', href: '/docs/configuration' },
    ],
  },
  {
    title: 'Development',
    description: 'Development workflow and best practices',
    icon: Code,
    links: [
      { name: 'Development Guide', href: '/docs/development' },
      { name: 'Code Quality', href: '/docs/code-quality' },
      { name: 'Testing', href: '/docs/testing' },
    ],
  },
  {
    title: 'CI/CD & Deployment',
    description: 'Continuous integration and deployment',
    icon: GitBranch,
    links: [
      { name: 'GitHub Actions', href: '/docs/github-actions' },
      { name: 'Deployment', href: '/docs/deployment' },
      { name: 'Environment Setup', href: '/docs/environments' },
    ],
  },
  {
    title: 'Configuration',
    description: 'Tool configuration and customization',
    icon: Settings,
    links: [
      { name: 'Docker Setup', href: '/docs/docker' },
      { name: 'VS Code Integration', href: '/docs/vscode' },
      { name: 'Pre-commit Hooks', href: '/docs/pre-commit' },
    ],
  },
  {
    title: 'Security',
    description: 'Security best practices and tools',
    icon: Shield,
    links: [
      { name: 'Security Scanning', href: '/docs/security' },
      { name: 'Dependency Management', href: '/docs/dependencies' },
      { name: 'Secrets Management', href: '/docs/secrets' },
    ],
  },
  {
    title: 'Reference',
    description: 'API references and advanced topics',
    icon: FileText,
    links: [
      { name: 'Makefile Reference', href: '/docs/makefile' },
      { name: 'Template Variables', href: '/docs/variables' },
      { name: 'Troubleshooting', href: '/docs/troubleshooting' },
    ],
  },
];

const quickLinks = [
  {
    name: 'Customization Guide',
    href: '/TEMPLATE_CUSTOMIZATION.md',
    external: true,
    description: 'Learn how to customize the template for your project',
  },
  {
    name: 'Contributing Guidelines',
    href: '/.github/CONTRIBUTING.md',
    external: true,
    description: 'How to contribute to the template repository',
  },
  {
    name: 'GitHub Repository',
    href: process.env.GITHUB_REPO || '#',
    external: true,
    description: 'View the source code and latest updates',
  },
];

export const metadata = {
  title: 'Documentation',
  description: 'Comprehensive documentation for the Template Repository including setup guides, best practices, and API references.',
};

export default function DocsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='flex items-center justify-center mb-4'>
              <BookOpen className='h-12 w-12 text-primary-600 dark:text-primary-400' />
            </div>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white'>
              Documentation
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Everything you need to know to get started with the Template Repository,
              from basic setup to advanced customization.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className='py-16 bg-white dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
            Quick Links
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {quickLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className='card-hover p-6 group'
              >
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400'>
                    {link.name}
                  </h3>
                  {link.external && (
                    <ExternalLink className='h-5 w-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400' />
                  )}
                </div>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className='py-24 bg-gray-50 dark:bg-gray-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
              Documentation Sections
            </h2>
            <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
              Explore our comprehensive guides and references
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {docSections.map(section => (
              <div key={section.title} className='card p-8'>
                <div className='flex items-center mb-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center'>
                    <section.icon className='h-6 w-6 text-primary-600 dark:text-primary-400' />
                  </div>
                  <h3 className='ml-4 text-xl font-semibold text-gray-900 dark:text-white'>
                    {section.title}
                  </h3>
                </div>
                <p className='text-gray-600 dark:text-gray-300 mb-6'>
                  {section.description}
                </p>
                <ul className='space-y-2'>
                  {section.links.map(link => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium'
                      >
                        {link.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Help */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8'>
              Need Help?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <div className='card p-8 text-center'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                  Community Support
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-6'>
                  Join our community discussions and get help from other developers.
                </p>
                <a
                  href={`${process.env.GITHUB_REPO || '#'}/discussions`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-secondary'
                >
                  GitHub Discussions
                  <ExternalLink className='h-4 w-4 ml-2' />
                </a>
              </div>
              <div className='card p-8 text-center'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                  Report Issues
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-6'>
                  Found a bug or have a feature request? Let us know on GitHub.
                </p>
                <a
                  href={`${process.env.GITHUB_REPO || '#'}/issues`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-primary'
                >
                  Create Issue
                  <ExternalLink className='h-4 w-4 ml-2' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}