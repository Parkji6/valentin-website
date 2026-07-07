'use client';

import { useState } from 'react';
import type { Project, BlogPost } from '@/lib/markdown';
import MenuBar from './MenuBar';
import Dock from './Dock';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import { IntroContent, AppContent, JournalContent, SetupContent, ContactContent } from './WindowContents';

interface DesktopProps {
  projects: Project[];
  posts: BlogPost[];
}

interface OpenWindow {
  id: string;
  z: number;
}

export default function Desktop({ projects, posts }: DesktopProps) {
  const [windows, setWindows] = useState<OpenWindow[]>([{ id: 'intro', z: 1 }]);
  const [zTop, setZTop] = useState(1);

  function open(id: string) {
    const nextZ = zTop + 1;
    setZTop(nextZ);
    setWindows((ws) => {
      const existing = ws.find((w) => w.id === id);
      if (existing) return ws.map((w) => (w.id === id ? { ...w, z: nextZ } : w));
      return [...ws, { id, z: nextZ }];
    });
  }

  function close(id: string) {
    setWindows((ws) => ws.filter((w) => w.id !== id));
  }

  function focus(id: string) {
    const nextZ = zTop + 1;
    setZTop(nextZ);
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, z: nextZ } : w)));
  }

  function windowFor(w: OpenWindow, index: number) {
    const common = {
      key: w.id,
      zIndex: 100 + w.z,
      onClose: () => close(w.id),
      onFocus: () => focus(w.id),
    };
    // Stagger windows so they don't stack exactly on top of each other.
    const offset = { x: 80 + (index % 5) * 44, y: 90 + (index % 5) * 36 };

    if (w.id === 'intro') {
      return (
        <Window {...common} title="hello.txt" initialPos={{ x: 64, y: 96 }} width={560}>
          <IntroContent />
        </Window>
      );
    }
    if (w.id === 'journal') {
      return (
        <Window {...common} title="AI Journal — Practical AI 101" initialPos={offset} width={520}>
          <JournalContent posts={posts} />
        </Window>
      );
    }
    if (w.id === 'setup') {
      return (
        <Window {...common} title="My Setup" initialPos={offset} width={440}>
          <SetupContent />
        </Window>
      );
    }
    if (w.id === 'contact') {
      return (
        <Window {...common} title="Contact" initialPos={offset} width={400}>
          <ContactContent />
        </Window>
      );
    }
    const project = projects.find((p) => p.slug === w.id);
    if (!project) return null;
    return (
      <Window {...common} title={project.title} initialPos={offset} width={500}>
        <AppContent project={project} />
      </Window>
    );
  }

  return (
    <div className="desktop-grid fixed inset-0 overflow-hidden">
      <MenuBar onOpenContact={() => open('contact')} />

      {/* Desktop items — absolute on md+, simple row on mobile */}
      <div className="pt-16 px-5 flex flex-wrap gap-5 md:block">
        <DesktopIcon icon="📓" label="AI Journal" onOpen={() => open('journal')} position={{ right: '5%', top: '16%' }} />
        <DesktopIcon icon="🛠️" label="My Setup" onOpen={() => open('setup')} position={{ right: '13%', top: '40%' }} />
        <DesktopIcon icon="✉️" label="Contact" onOpen={() => open('contact')} position={{ right: '4%', top: '62%' }} />
      </div>

      {/* Open windows */}
      {windows.map((w, i) => windowFor(w, i))}

      <Dock
        apps={projects.map((p) => ({ id: p.slug, name: p.title, icon: p.icon ?? '📦' }))}
        onOpen={open}
      />
    </div>
  );
}
