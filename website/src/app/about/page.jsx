import Layout from '@/components/Layout';
import { Code, Users, Zap, Shield, Heart, Target } from 'lucide-react';

const values = [
  {
    name: 'Developer Experience',
    description: 'We prioritize tools and practices that make development enjoyable and productive.',
    icon: Code,
  },
  {
    name: 'Community Driven',
    description: 'Built by developers, for developers, with community feedback at the core.',
    icon: Users,
  },
  {
    name: 'Modern & Fast',
    description: 'Always up-to-date with the latest tools and best practices in software development.',
    icon: Zap,
  },
  {
    name: 'Security First',
    description: 'Security is not an afterthought - it\'s built into every aspect of the template.',
    icon: Shield,
  },
];

const features = [
  'Multi-language support (Python, JavaScript, Java, Go, Rust)',
  'Comprehensive CI/CD pipelines with GitHub Actions',
  'Pre-configured development environments with Docker',
  'Code quality tools and pre-commit hooks',
  'Security scanning and dependency management',
  'VS Code integration with extensions and settings',
  'Comprehensive documentation templates',
  'Community health files and contribution guidelines',
];

export const metadata = {
  title: 'About',
  description: 'Learn about the Template Repository project, its mission, values, and the community behind it.',
};

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white'>
              About Template Repository
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Empowering developers to build better software faster with modern tools,
              best practices, and a supportive community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div>
              <div className='flex items-center mb-4'>
                <Target className='h-8 w-8 text-primary-600 mr-3' />
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
                  Our Mission
                </h2>
              </div>
              <div className='prose prose-lg text-gray-600 dark:text-gray-300'>
                <p>
                  Template Repository was created to solve a common problem in software
                  development: the time-consuming process of setting up new projects with
                  modern tooling and best practices.
                </p>
                <p>
                  We believe that developers should spend their time solving unique problems,
                  not configuring build systems, setting up CI/CD pipelines, or wrestling
                  with linting configurations.
                </p>
                <p>
                  Our mission is to provide a comprehensive, battle-tested template that
                  incorporates industry best practices, modern tooling, and security
                  considerations from day one.
                </p>
              </div>
            </div>
            <div className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-8'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
                What&apos;s Included
              </h3>
              <ul className='space-y-3'>
                {features.map((feature, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='flex-shrink-0 w-5 h-5 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mt-0.5'>
                      <div className='w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full'></div>
                    </div>
                    <span className='ml-3 text-gray-600 dark:text-gray-300'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-24 bg-gray-50 dark:bg-gray-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
              Our Values
            </h2>
            <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
              The principles that guide our development and community
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {values.map(value => (
              <div key={value.name} className='card p-8'>
                <div className='flex items-center mb-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center'>
                    <value.icon className='h-6 w-6 text-primary-600 dark:text-primary-400' />
                  </div>
                  <h3 className='ml-4 text-xl font-semibold text-gray-900 dark:text-white'>
                    {value.name}
                  </h3>
                </div>
                <p className='text-gray-600 dark:text-gray-300'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='flex items-center justify-center mb-4'>
              <Heart className='h-8 w-8 text-red-500 mr-3' />
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
                Community Driven
              </h2>
            </div>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12'>
              Template Repository is built and maintained by a community of developers
              who believe in sharing knowledge and making development better for everyone.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
              <div>
                <div className='text-4xl font-bold text-primary-600 dark:text-primary-400'>
                  50+
                </div>
                <div className='text-lg font-medium text-gray-900 dark:text-white mt-2'>
                  Contributors
                </div>
                <div className='text-gray-600 dark:text-gray-400'>
                  Amazing developers from around the world
                </div>
              </div>
              <div>
                <div className='text-4xl font-bold text-primary-600 dark:text-primary-400'>
                  1.2k+
                </div>
                <div className='text-lg font-medium text-gray-900 dark:text-white mt-2'>
                  GitHub Stars
                </div>
                <div className='text-gray-600 dark:text-gray-400'>
                  Developers who love our work
                </div>
              </div>
              <div>
                <div className='text-4xl font-bold text-primary-600 dark:text-primary-400'>
                  350+
                </div>
                <div className='text-lg font-medium text-gray-900 dark:text-white mt-2'>
                  Projects Built
                </div>
                <div className='text-gray-600 dark:text-gray-400'>
                  Using our template as foundation
                </div>
              </div>
            </div>

            <div className='mt-12'>
              <a
                href={process.env.GITHUB_REPO || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary text-lg px-8 py-3'
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}