import { getAllBlogPosts, getAllProjects } from '@/lib/markdown';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const statusStyles: Record<string, string> = {
  Shipped: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  'In progress': 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  Archived: 'bg-gray-100 dark:bg-ink-800 text-gray-500',
};

export default function Home() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <main className="min-h-screen">

      {/* Hero — Folio-style personal intro */}
      <section className="max-w-4xl mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Placeholder avatar — swap for a real photo later */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-8 shadow-card-dark">
          <span className="font-display font-bold text-2xl md:text-3xl text-white">VH</span>
        </div>

        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">
          Hello, I&apos;m Valentin 👋
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-gray-900 dark:text-white">
          I build AI products<br />in public.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
          Real tools, built from scratch with Claude, Next.js, and Vercel — and documented honestly:
          what works, what breaks, and what I learned. No hype. Just building.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-blue-600 text-white rounded-full font-semibold no-underline hover:no-underline hover:bg-blue-500 transition-colors"
          >
            View my work →
          </a>
          <a
            href="/journal"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-gray-300 dark:border-ink-700 text-gray-800 dark:text-gray-200 rounded-full font-semibold no-underline hover:no-underline hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            Read the journal
          </a>
        </div>
      </section>

      {/* Featured Projects — large Folio cards */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">Featured projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white m-0">Selected work</h2>
          </div>
          <a href="/projects" className="hidden sm:inline text-blue-600 dark:text-blue-400 text-sm font-medium no-underline hover:underline whitespace-nowrap">
            View all →
          </a>
        </div>

        <div className="space-y-10">
          {featured.map((project) => (
            <a key={project.slug} href={`/projects/${project.slug}`} className="folio-card block overflow-hidden no-underline hover:no-underline group">
              {project.image && (
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3 text-xs">
                  {project.category && (
                    <span className="text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">{project.category}</span>
                  )}
                  <span className={`px-2.5 py-1 rounded-full font-medium ${statusStyles[project.status] ?? statusStyles['In progress']}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                {project.tagline && (
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 max-w-2xl">{project.tagline}</p>
                )}
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">View case study →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* More work — compact grid */}
      {more.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">More work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {more.map((project) => (
              <a key={project.slug} href={`/projects/${project.slug}`} className="folio-card block p-5 no-underline hover:no-underline group">
                <div className="flex items-center gap-2 mb-3 text-xs">
                  <span className={`px-2 py-0.5 rounded-full font-medium ${statusStyles[project.status] ?? statusStyles['In progress']}`}>
                    {project.status}
                  </span>
                  {project.category && (
                    <span className="text-gray-500 dark:text-gray-400">{project.category}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 m-0">
                  {project.tagline || project.problem}
                </p>
              </a>
            ))}
          </div>
          <a href="/projects" className="sm:hidden inline-block mt-6 text-blue-600 dark:text-blue-400 text-sm font-medium no-underline hover:underline">
            View all work →
          </a>
        </section>
      )}

      {/* From the journal */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">Practical AI 101 — the journal</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white m-0">Documenting the path</h2>
          </div>
          <a href="/journal" className="hidden sm:inline text-blue-600 dark:text-blue-400 text-sm font-medium no-underline hover:underline whitespace-nowrap">
            All entries →
          </a>
        </div>

        <div className="space-y-5">
          {posts.map((post) => (
            <a key={post.slug} href={`/journal/${post.slug}`} className="folio-card block p-6 no-underline hover:no-underline group">
              <div className="flex gap-5 items-start">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="hidden sm:block w-24 h-24 object-cover rounded-xl flex-shrink-0"
                  />
                )}
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{formatDate(post.date)}</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2 m-0">{post.excerpt}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <a href="/journal" className="sm:hidden inline-block mt-6 text-blue-600 dark:text-blue-400 text-sm font-medium no-underline hover:underline">
          All entries →
        </a>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 px-8 py-14 text-center shadow-card-dark">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Ready to collaborate?</h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Interested in AI, shipping products, or just want to say hi?
          </p>
          <a
            href="/contact"
            className="inline-block px-7 py-3.5 bg-white text-blue-600 rounded-full font-semibold no-underline hover:no-underline hover:bg-blue-50 transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </section>

    </main>
  );
}
