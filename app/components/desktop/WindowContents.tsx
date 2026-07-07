'use client';

import { useEffect, useState } from 'react';
import type { Project, BlogPost } from '@/lib/markdown';

const EMAIL = 'valentin.houssais@gmail.com';

const statusStyles: Record<string, string> = {
  Shipped: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  'In progress': 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  Archived: 'bg-gray-100 dark:bg-ink-800 text-gray-500',
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

/* ---------- Intro (typewriter) ---------- */

const INTRO_TEXT = "Hey! I'm Valentin 👋 I build AI products in public — real tools, honest lessons. Open an app in the dock to see what I've built, or the journal to read the story.";

export function IntroContent() {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (chars >= INTRO_TEXT.length) return;
    const id = setTimeout(() => setChars((c) => c + 1), 28);
    return () => clearTimeout(id);
  }, [chars]);

  return (
    <p className="font-display text-2xl md:text-3xl font-bold leading-snug text-gray-900 dark:text-white m-0 min-h-[8rem]">
      {INTRO_TEXT.slice(0, chars)}
      <span className="animate-pulse text-blue-500">|</span>
    </p>
  );
}

/* ---------- App summary ---------- */

export function AppContent({ project }: { project: Project }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{project.icon ?? '📦'}</span>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">{project.title}</h2>
          <div className="flex items-center gap-2 mt-1 text-xs">
            <span className={`px-2 py-0.5 rounded-full font-medium ${statusStyles[project.status] ?? statusStyles['In progress']}`}>
              {project.status}
            </span>
            {project.category && <span className="text-gray-500 dark:text-gray-400">{project.category}</span>}
          </div>
        </div>
      </div>

      <h3 className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-1.5">What it does</h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">{project.tagline}</p>

      <h3 className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-1.5">Why I built it</h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">{project.problem}</p>

      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs rounded-md">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <a
          href={`/projects/${project.slug}`}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold no-underline hover:no-underline transition-colors"
        >
          Full case study →
        </a>
        <a
          href={`mailto:${EMAIL}?subject=Access request for ${project.title}`}
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-ink-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold no-underline hover:no-underline hover:border-blue-500 transition-colors"
        >
          Request access
        </a>
      </div>
    </div>
  );
}

/* ---------- Journal ---------- */

export function JournalContent({ posts }: { posts: BlogPost[] }) {
  return (
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
        <strong className="text-gray-900 dark:text-white">Practical AI 101</strong> — a journal of
        building AI products in public. {posts.length} entries.
      </p>
      <ul className="m-0 p-0 list-none space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/journal/${post.slug}`} className="group block no-underline hover:no-underline">
              <span className="block text-xs text-gray-500 dark:text-gray-400">{formatDate(post.date)}</span>
              <span className="block font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                {post.title}
              </span>
              <span className="block text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{post.excerpt}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Setup ---------- */

export function SetupContent() {
  const stack = [
    { icon: '🤖', name: 'Claude', note: 'my co-builder for planning, code, and debugging' },
    { icon: '⚡', name: 'Next.js + Tailwind', note: 'every web project' },
    { icon: '▲', name: 'Vercel', note: 'push to deploy' },
    { icon: '🐙', name: 'GitHub + VS Code', note: 'where the code lives' },
  ];
  return (
    <div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
        Everything I build ships with the same small stack — free to start, fast to ship:
      </p>
      <ul className="m-0 p-0 list-none space-y-3 mb-6">
        {stack.map((s) => (
          <li key={s.name} className="flex items-start gap-3">
            <span className="text-xl">{s.icon}</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">{s.name}</strong> — {s.note}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="/setup"
        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold no-underline hover:no-underline transition-colors"
      >
        Full setup guide →
      </a>
    </div>
  );
}

/* ---------- Contact ---------- */

export function ContactContent() {
  return (
    <div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Want to try one of the apps, talk shop, or collaborate? I read every message.
      </p>
      <div className="flex flex-col gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold no-underline hover:no-underline transition-colors"
        >
          ✉️ Email me
        </a>
        <a
          href="https://www.linkedin.com/in/valentin-houssais/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 dark:border-ink-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold no-underline hover:no-underline hover:border-blue-500 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="/contact"
          className="text-center text-sm text-blue-600 dark:text-blue-400 no-underline hover:underline"
        >
          or use the contact form →
        </a>
      </div>
    </div>
  );
}
