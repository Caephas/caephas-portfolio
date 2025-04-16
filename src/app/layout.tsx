import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const inter = Inter({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Arinze Obidiegwu | Software Engineer, ML Engineer & Researcher',
  description:
    'Arinze Obidiegwu is a Software Engineer, Machine Learning Engineer, and Researcher specializing in Quantum Algorithms & Machine Learning. Explore his portfolio for projects, research insights, and more.',
  openGraph: {
    images: [
      {
        url: '/logo.jpeg', // Replace with your actual logo URL if needed
        alt: 'Caephas Portfolio Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Script to manage theme on page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                const storedTheme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = storedTheme || systemTheme;
                document.documentElement.classList.add(theme);
              } catch (e) {}
            })();
            `,
          }}
        />
        {/* Instagram Embed Script */}
        <script async src="https://www.instagram.com/embed.js"></script>
      </head>
      <body
        className={`${inter.className} bg-light dark:bg-dark text-black dark:text-white duration-300 ease-linear`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Nav className={inter.className} />
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}