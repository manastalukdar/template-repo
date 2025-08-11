'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, GitHub, ExternalLink } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 dark:bg-gray-900/95 dark:border-gray-700'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='h-8 w-8 bg-gradient-primary rounded-md flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>TR</span>
              </div>
              <span className='text-xl font-bold text-gray-900 dark:text-white'>
                Template Repo
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors'
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <a
              href={process.env.GITHUB_REPO || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-ghost'
            >
              <GitHub className='h-4 w-4 mr-2' />
              GitHub
            </a>
            <a
              href={process.env.GITHUB_REPO || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary'
            >
              Get Started
              <ExternalLink className='h-4 w-4 ml-2' />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              className='btn-ghost p-2'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              {mobileMenuOpen ? (
                <X className='h-6 w-6' aria-hidden='true' />
              ) : (
                <Menu className='h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className='md:hidden'>
            <div className='space-y-1 pb-3 pt-2'>
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className='flex flex-col space-y-2 px-3 pt-4'>
                <a
                  href={process.env.GITHUB_REPO || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-ghost justify-center'
                >
                  <GitHub className='h-4 w-4 mr-2' />
                  GitHub
                </a>
                <a
                  href={process.env.GITHUB_REPO || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-primary justify-center'
                >
                  Get Started
                  <ExternalLink className='h-4 w-4 ml-2' />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}