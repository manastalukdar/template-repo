import Layout from '@/components/Layout';
import { Mail, MessageSquare, Github, ExternalLink, Users, Bug } from 'lucide-react';

const contactMethods = [
  {
    title: 'GitHub Discussions',
    description: 'Join our community discussions for general questions and ideas.',
    icon: MessageSquare,
    href: process.env.GITHUB_REPO ? `${process.env.GITHUB_REPO}/discussions` : '#',
    external: true,
    color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'GitHub Issues',
    description: 'Report bugs, request features, or suggest improvements.',
    icon: Bug,
    href: process.env.GITHUB_REPO ? `${process.env.GITHUB_REPO}/issues` : '#',
    external: true,
    color: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
  },
  {
    title: 'Contributing',
    description: 'Want to contribute? Check out our contributing guidelines.',
    icon: Users,
    href: process.env.GITHUB_REPO ? `${process.env.GITHUB_REPO}/blob/main/.github/CONTRIBUTING.md` : '#',
    external: true,
    color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
  },
  {
    title: 'GitHub Repository',
    description: 'View the source code, releases, and project updates.',
    icon: Github,
    href: process.env.GITHUB_REPO || '#',
    external: true,
    color: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
  },
];

const faqItems = [
  {
    question: 'How do I get started with the template?',
    answer: 'Clone the repository, run `make all` to install dependencies, and follow our customization guide to adapt it to your project needs.',
  },
  {
    question: 'Can I use this template for commercial projects?',
    answer: 'Yes! The template is released under the MIT license, which allows for both commercial and non-commercial use.',
  },
  {
    question: 'How do I contribute to the project?',
    answer: 'We welcome contributions! Please read our contributing guidelines, fork the repository, make your changes, and submit a pull request.',
  },
  {
    question: 'What languages and frameworks are supported?',
    answer: 'The template supports Python, JavaScript/Node.js, Java, and includes configurations for popular frameworks and tools.',
  },
  {
    question: 'How often is the template updated?',
    answer: 'We regularly update the template to include the latest versions of tools and incorporate community feedback and contributions.',
  },
  {
    question: 'Can I request new features or tools to be added?',
    answer: 'Absolutely! Please create a GitHub issue with your feature request and provide details about why it would be beneficial.',
  },
];

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the Template Repository community. Find support, report issues, or contribute to the project.',
};

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='flex items-center justify-center mb-4'>
              <Mail className='h-12 w-12 text-primary-600 dark:text-primary-400' />
            </div>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white'>
              Get in Touch
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Have questions, feedback, or want to contribute? We&apos;d love to hear from you.
              Choose the best way to reach out below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
              How Can We Help?
            </h2>
            <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
              Choose the best way to get in touch based on your needs
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {contactMethods.map(method => (
              <a
                key={method.title}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className='card-hover p-8 group'
              >
                <div className='flex items-start'>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${method.color}`}>
                    <method.icon className='h-6 w-6' />
                  </div>
                  <div className='ml-4 flex-1'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400'>
                        {method.title}
                      </h3>
                      {method.external && (
                        <ExternalLink className='h-5 w-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400' />
                      )}
                    </div>
                    <p className='mt-2 text-gray-600 dark:text-gray-300'>
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-gray-50 dark:bg-gray-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
              Frequently Asked Questions
            </h2>
            <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
              Quick answers to common questions about the Template Repository
            </p>
          </div>

          <div className='max-w-4xl mx-auto space-y-8'>
            {faqItems.map((item, index) => (
              <div key={index} className='card p-8'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                  {item.question}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {item.answer}
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
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8'>
              Join Our Community
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12'>
              Template Repository is built by developers, for developers. Join our
              growing community of contributors and users who are passionate about
              modern development practices.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto'>
              <div className='p-6'>
                <div className='text-3xl font-bold text-primary-600 dark:text-primary-400'>
                  50+
                </div>
                <div className='text-lg font-medium text-gray-900 dark:text-white mt-2'>
                  Contributors
                </div>
                <div className='text-gray-600 dark:text-gray-400 text-sm'>
                  Active community members
                </div>
              </div>
              <div className='p-6'>
                <div className='text-3xl font-bold text-primary-600 dark:text-primary-400'>
                  1.2k+
                </div>
                <div className='text-lg font-medium text-gray-900 dark:text-white mt-2'>
                  GitHub Stars
                </div>
                <div className='text-gray-600 dark:text-gray-400 text-sm'>
                  Developers who love our work
                </div>
              </div>
              <div className='p-6'>
                <div className='text-3xl font-bold text-primary-600 dark:text-primary-400'>
                  350+
                </div>
                <div className='text-lg font-medium text-gray-900 dark:text-white mt-2'>
                  Projects Built
                </div>
                <div className='text-gray-600 dark:text-gray-400 text-sm'>
                  Using our template
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
                View on GitHub
                <ExternalLink className='h-5 w-5 ml-2' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}