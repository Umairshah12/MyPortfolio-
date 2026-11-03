import type { Metadata } from 'next';
import './globals.css';
import { ThemeAccentProvider } from '@/components/ThemeAccentContext';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';

export const metadata: Metadata = {
  metadataBase: new URL('https://syedumairshah.dev'),
  title: 'Syed Umair Shah | IT Support, Software Developer & Aviation Operations',
  description:
    'Official portfolio of Syed Umair Shah — IT Support Specialist, Software Developer, and Aviation Customer Experience Professional with experience at Etihad Airways, Dubai International Airport, and Buraq Technologies.',
  keywords: [
    'Syed Umair Shah',
    'IT Support Specialist',
    'Software Developer',
    'Web Developer',
    'Dubai International Airport',
    'Etihad Airways',
    'Active Directory',
    'Microsoft 365',
    'Next.js Portfolio',
    'React Developer Dubai',
    'Aviation Customer Experience',
  ],
  authors: [{ name: 'Syed Umair Shah' }],
  creator: 'Syed Umair Shah',
  openGraph: {
    title: 'Syed Umair Shah | IT Support, Software Developer & Aviation Operations',
    description:
      'Bridging Technology, Innovation & Exceptional Customer Experience. Explore technical projects, enterprise IT support background, and international aviation credentials.',
    url: 'https://syedumairshah.dev',
    siteName: 'Syed Umair Shah Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Syed Umair Shah Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Umair Shah | IT Support, Software Developer & Aviation Operations',
    description: 'Bridging Technology, Innovation & Exceptional Customer Experience.',
    images: ['https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Syed Umair Shah',
    jobTitle: [
      'IT Support Specialist',
      'Software Developer',
      'Web Developer',
      'Aviation Customer Experience Professional',
    ],
    description:
      'I am a technology and customer service professional with experience in IT support, software development, technical troubleshooting, and international aviation operations.',
    url: 'https://syedumairshah.dev',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    knowsAbout: [
      'IT Support',
      'React.js',
      'Next.js',
      'C#',
      'Active Directory',
      'Microsoft 365',
      'Airport Operations',
      'Etihad Airways',
      'Dubai International Airport',
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#030712] text-slate-100 font-sans antialiased selection:bg-cyan-400 selection:text-black">
        <ThemeAccentProvider>
          <Preloader />
          <CustomCursor />
          {children}
        </ThemeAccentProvider>
      </body>
    </html>
  );
}
