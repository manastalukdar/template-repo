import { Copy, Terminal, ExternalLink } from 'lucide-react';

const steps = [
  {
    step: '1',
    title: 'Clone the repository',
    description: 'Get started by cloning the template repository to your local machine.',
    code: 'git clone https://github.com/manastalukdar/template-repo.git',
  },
  {
    step: '2',
    title: 'Install dependencies',
    description: 'Use our Makefile to install all required dependencies across languages.',
    code: 'make all',
  },
  {
    step: '3',
    title: 'Customize for your project',
    description: 'Follow our customization guide to adapt the template to your needs.',
    code: './customize.sh your-project-name your-username',
  },
  {
    step: '4',
    title: 'Start developing',
    description: 'Begin coding with all the modern tooling and best practices in place.',
    code: 'make dev',
  },
];

export default function QuickStart() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className='py-24 sm:py-32 bg-white dark:bg-gray-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
            Get started in minutes
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
            Follow these simple steps to set up your development environment.
          </p>
        </div>

        <div className='mt-16 space-y-8'>
          {steps.map((step, index) => (
            <div
              key={step.step}
              className='flex flex-col lg:flex-row items-start lg:items-center gap-8'
            >
              {/* Step number and content */}
              <div className='flex-1'>
                <div className='flex items-center mb-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                    {step.step}
                  </div>
                  <h3 className='ml-4 text-xl font-semibold text-gray-900 dark:text-white'>
                    {step.title}
                  </h3>
                </div>
                <p className='text-gray-600 dark:text-gray-300 ml-12'>
                  {step.description}
                </p>
              </div>

              {/* Code block */}
              <div className='flex-1 w-full lg:max-w-md'>
                <div className='relative'>
                  <div className='bg-gray-900 rounded-lg p-4 font-mono text-sm'>
                    <div className='flex items-center justify-between mb-2'>
                      <div className='flex space-x-2'>
                        <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                        <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(step.code)}
                        className='text-gray-400 hover:text-white transition-colors'
                        title='Copy to clipboard'
                      >
                        <Copy className='h-4 w-4' />
                      </button>
                    </div>
                    <div className='flex items-center text-green-400'>
                      <Terminal className='h-4 w-4 mr-2' />
                      <span className='text-gray-300'>{step.code}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-16 text-center'>
          <div className='card p-8 max-w-2xl mx-auto'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
              Need help getting started?
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-6'>
              Check out our comprehensive documentation and customization guide.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/docs'
                className='btn-primary'
              >
                View Documentation
              </a>
              <a
                href='/docs/customization'
                className='btn-secondary'
              >
                Customization Guide
                <ExternalLink className='h-4 w-4 ml-2' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}