import { Star, GitFork, Download, Users } from 'lucide-react';

const stats = [
  {
    name: 'GitHub Stars',
    value: '1.2k+',
    icon: Star,
    description: 'Developers love our template',
  },
  {
    name: 'Forks',
    value: '350+',
    icon: GitFork,
    description: 'Projects built with this template',
  },
  {
    name: 'Downloads',
    value: '10k+',
    icon: Download,
    description: 'Template downloads this month',
  },
  {
    name: 'Contributors',
    value: '50+',
    icon: Users,
    description: 'Community contributors',
  },
];

export default function Stats() {
  return (
    <section className='py-24 sm:py-32 bg-gray-50 dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
            Trusted by developers worldwide
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
            Join thousands of developers who have accelerated their projects
            with our template.
          </p>
        </div>

        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {stats.map(stat => (
            <div key={stat.name} className='text-center'>
              <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900'>
                <stat.icon className='h-8 w-8 text-primary-600 dark:text-primary-400' />
              </div>
              <div className='mt-6'>
                <div className='text-3xl font-bold text-gray-900 dark:text-white'>
                  {stat.value}
                </div>
                <div className='text-lg font-medium text-gray-900 dark:text-white mt-2'>
                  {stat.name}
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}