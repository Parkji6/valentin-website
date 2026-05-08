'use client';

import { useEffect, useState } from 'react';
import './globals.css';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#upcoming', label: "What's next" },
  { href: '/setup', label: 'Setup guide', highlight: true },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    if (newDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Practical AI 101 | Shipping AI Products in Public</title>
        <meta name="description" content="Building practical AI tools from scratch — no hype, no shortcuts. Documenting everything honestly." />
      </head>
      <body className={isDark ? 'dark' : ''}>
        <header className="sticky top-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 z-50">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">

            {/* Logo */}
            <div className="font-bold text-xl">
              <a href="/" className="no-underline text-gray-900 dark:text-gray-50 hover:text-blue-500">
                Practical AI 101
              </a>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`no-underline text-sm ${
                    link.highlight
                      ? 'text-blue-500 dark:text-blue-400 font-medium hover:underline'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
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

            {/* Mobile: theme toggle + hamburger */}
            <div className="flex md:hidden items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50"
                  aria-label="Toggle theme"
                >
                  {isDark ? '☀️' : '🌙'}
                </button>
              )}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
              <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`no-underline text-sm py-1 ${
                      link.highlight
                        ? 'text-blue-500 dark:text-blue-400 font-medium'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        {children}

        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-50">Navigate</h3>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-50">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://github.com/Parkji6" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/valentin-houssais/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="mailto:valentin.houssais@gmail.com" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
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
                © 2025 Practical AI 101 — by{' '}
                <a href="https://www.linkedin.com/in/valentin-houssais/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 no-underline">
                  Valentin Houssais
                </a>
                . Built with Next.js & deployed on Vercel.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
