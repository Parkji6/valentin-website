'use client';

import { useEffect, useState } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Valentin Houssais | Shipping AI Products</title>
        <meta
          name="description"
          content="Building and shipping AI products. Learning in public."
        />
      </head>
      <body className={isDark ? 'dark' : ''}>
        <header className="sticky top-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 z-50">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bold text-xl">
              <a href="/" className="no-underline text-gray-900 dark:text-gray-50 hover:text-blue-500">
                Valentin Houssais
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="/#about" className="no-underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50">
                About
              </a>
              <a href="/#projects" className="no-underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50">
                Projects
              </a>
              <a href="/#blog" className="no-underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50">
                Blog
              </a>
              <a href="/#upcoming" className="no-underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50">
                What's next
              </a>
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50"
                  aria-label="Toggle theme"
                >
                  {isDark ? '☀️' : '🌙'}
                </button>
              )}
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-50">Navigate</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/#about" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/#projects" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/#blog" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-50">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/Parkji6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/valentin-houssais/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:valentin.houssais@gmail.com"
                      className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-50">Made with</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Markdown</li>
                  <li>Vercel</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                © 2025 Valentin Houssais. Built with Next.js & deployed on Vercel.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
