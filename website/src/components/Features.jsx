import {
  Code,
  GitBranch,
  Shield,
  Zap,
  Settings,
  Users,
  Layers,
  CheckCircle,
} from 'lucide-react';

const features = [
  {
    name: 'Multi-Language Support',
    description:
      'Pre-configured for Python, Node.js, Java, and more with proper tooling and dependencies.',
    icon: Code,
  },
  {
    name: 'CI/CD Ready',
    description:
      'GitHub Actions workflows for testing, linting, building, and deployment out of the box.',
    icon: GitBranch,
  },
  {
    name: 'Security First',
    description:
      'Built-in security scanning, dependency updates, and best practices for secure development.',
    icon: Shield,
  },
  {
    name: 'Modern Tooling',
    description:
      'Latest versions of popular tools like ESLint, Prettier, Black, and pre-commit hooks.',
    icon: Zap,
  },
  {
    name: 'Docker Ready',
    description:
      'Complete Docker setup with multi-stage builds and development containers.',
    icon: Layers,
  },
  {
    name: 'VS Code Integration',
    description:
      'Optimized settings, extensions, and debugging configurations for VS Code.',
    icon: Settings,
  },
  {
    name: 'Community Driven',
    description:
      'Comprehensive contributing guidelines and community health files included.',
    icon: Users,
  },
  {
    name: 'Quality Assurance',
    description:
      'Automated code quality checks, testing frameworks, and coverage reporting.',
    icon: CheckCircle,
  },
];

export default function Features() {
  return (
    <section className='py-24 sm:py-32 bg-white dark:bg-gray-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base font-semibold leading-7 text-primary-600 dark:text-primary-400'>
            Everything you need
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
            Modern development, simplified
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300'>
            Start your project with industry best practices and modern tooling
            already configured.
          </p>
        </div>

        <div className='mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {features.map(feature => (
            <div
              key={feature.name}
              className='card-hover p-6 text-center group'
            >
              <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-primary-100 dark:bg-primary-900 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors'>
                <feature.icon
                  className='h-6 w-6 text-primary-600 dark:text-primary-400'
                  aria-hidden='true'
                />
              </div>
              <h3 className='mt-6 text-lg font-semibold text-gray-900 dark:text-white'>
                {feature.name}
              </h3>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}