'use client';

import { useState } from 'react';

const EMAIL = 'valentin.houssais@gmail.com';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Message from ${name || 'your website'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="min-h-screen">
      <section className="max-w-2xl mx-auto px-4 py-16">
        <a href="/" className="text-blue-600 dark:text-blue-400 text-sm no-underline hover:underline">
          ← Back to home
        </a>
        <h1 className="text-4xl font-bold mt-6 mb-2 text-gray-900 dark:text-white">Get in touch</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Have a question, a suggestion, or just want to say hi? Fill in the form and it&apos;ll open
          in your email app — or email me directly at{' '}
          <a href={`mailto:${EMAIL}`} className="text-blue-600 dark:text-blue-400 no-underline hover:underline">
            {EMAIL}
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-ink-700 rounded-xl bg-white dark:bg-ink-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-ink-700 rounded-xl bg-white dark:bg-ink-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              placeholder="What's on your mind?"
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-ink-700 rounded-xl bg-white dark:bg-ink-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors"
          >
            Open in email app →
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            This opens your default email app with the message pre-filled.
          </p>
        </form>
      </section>
    </main>
  );
}
