import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import QuickStart from '@/components/QuickStart';
import Stats from '@/components/Stats';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Stats />
      <QuickStart />
    </Layout>
  );
}