import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const ibm_plex_mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Caephas Portfolio',
  description: 'AI and Cloud Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                const storedTheme = localStorage.getItem('theme')
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                const theme = storedTheme || systemTheme
                document.documentElement.classList.add(theme)
              } catch (e) {}
            })()
          `,
          }}
        />
      </head>
      <body
        className={`${ibm_plex_mono.className} bg-light dark:bg-dark text-black dark:text-white duration-300 ease-linear`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}>
          <Nav className={ibm_plex_mono.className} />
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
