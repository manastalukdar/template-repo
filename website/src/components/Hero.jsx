import Link from 'next/link';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800'>
      {/* Background decoration */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-40'></div>
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32'>
        <div className='text-center'>
          {/* Badge */}
          <div className='mb-8'>
            <span className='inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200'>
              <Zap className='h-4 w-4 mr-1' />
              Modern Development Template
            </span>
          </div>

          {/* Heading */}
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white'>
            Build Better{' '}
            <span className='text-gradient'>Software Projects</span>
          </h1>

          {/* Description */}
          <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            A comprehensive template repository with modern development tools,
            CI/CD pipelines, code quality checks, and best practices to
            kickstart your next project.
          </p>

          {/* Feature highlights */}
          <div className='mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400'>
            <div className='flex items-center'>
              <Code className='h-4 w-4 mr-1 text-primary-600' />
              Multi-language support
            </div>
            <div className='flex items-center'>
              <Shield className='h-4 w-4 mr-1 text-primary-600' />
              Security best practices
            </div>
            <div className='flex items-center'>
              <Zap className='h-4 w-4 mr-1 text-primary-600' />
              Modern tooling
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
            <a
              href={process.env.GITHUB_REPO || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary text-base px-8 py-3'
            >
              Get Started
              <ArrowRight className='h-5 w-5 ml-2' />
            </a>
            <Link href='/docs' className='btn-secondary text-base px-8 py-3'>
              View Documentation
            </Link>
          </div>

          {/* Stats */}
          <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-gray-900 dark:text-white'>
                50+
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Pre-configured tools
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-gray-900 dark:text-white'>
                100%
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Open source
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-gray-900 dark:text-white'>
                10min
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Setup time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}