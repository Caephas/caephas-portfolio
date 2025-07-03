import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Navbar from "@/components/layouts/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arinze Obidiegwu | Software Engineer, ML Engineer & Researcher",
  description:
    "Arinze Obidiegwu is a Software Engineer, Machine Learning Engineer, and Researcher specializing in Quantum Algorithms & Machine Learning. Explore his portfolio for projects, research insights, and more.",
  openGraph: {
    images: [
      {
        url: "/logo.jpeg", // Replace with your actual logo URL if needed
        alt: "Caephas Portfolio Logo",
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
        className={`${inter.className} lg:px-10 lg:py-10 bg-background text-foreground duration-300 ease-linear`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
