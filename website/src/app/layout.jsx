import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Template Repository',
    template: '%s | Template Repository',
  },
  description:
    'A comprehensive template repository for modern software projects with best practices, CI/CD, and development tools.',
  keywords: [
    'template',
    'repository',
    'software',
    'development',
    'ci/cd',
    'best practices',
    'open source',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manastalukdar.github.io/template-repo/',
    title: 'Template Repository',
    description:
      'A comprehensive template repository for modern software projects',
    siteName: 'Template Repository',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Template Repository',
    description:
      'A comprehensive template repository for modern software projects',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} antialiased`}>
        <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors'>
          {children}
        </div>
      </body>
    </html>
  );
}