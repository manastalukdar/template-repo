import Link from 'next/link';
import { GitHub, ExternalLink, Heart } from 'lucide-react';

const footerNavigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: process.env.GITHUB_REPO || '#',
      icon: GitHub,
    },
  ],
};

export default function Footer() {
  return (
    <footer className='bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand */}
          <div className='col-span-1'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='h-8 w-8 bg-gradient-primary rounded-md flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>TR</span>
              </div>
              <span className='text-xl font-bold text-gray-900 dark:text-white'>
                Template Repo
              </span>
            </Link>
            <p className='mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-md'>
              A comprehensive template repository for modern software projects
              with best practices, CI/CD, and development tools.
            </p>
          </div>

          {/* Navigation */}
          <div className='col-span-1'>
            <h3 className='text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase'>
              Navigation
            </h3>
            <ul className='mt-4 space-y-3'>
              {footerNavigation.main.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className='col-span-1'>
            <h3 className='text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase'>
              Connect
            </h3>
            <div className='mt-4 flex space-x-4'>
              {footerNavigation.social.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' />
                </a>
              ))}
            </div>
            <div className='mt-4'>
              <a
                href={process.env.GITHUB_REPO || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors'
              >
                View on GitHub
                <ExternalLink className='h-4 w-4 ml-1' />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className='mt-8 pt-8 border-t border-gray-200 dark:border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              © {new Date().getFullYear()} Template Repository. All rights
              reserved.
            </p>
            <p className='flex items-center text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0'>
              Made with{' '}
              <Heart className='h-4 w-4 mx-1 text-red-500 fill-current' /> by
              the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}