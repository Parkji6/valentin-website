import { getProject, getAllProjects } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

const statusStyles: Record<string, string> = {
  Shipped: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  'In progress': 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  Archived: 'bg-gray-100 dark:bg-ink-800 text-gray-500',
};

// Turn a Loom share link into its embeddable form.
function loomEmbedUrl(url: string): string | null {
  const match = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
  if (match) return `https://www.loom.com/embed/${match[1]}`;
  if (url.includes('/embed/')) return url;
  return null;
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const embed = project.videoUrl ? loomEmbedUrl(project.videoUrl) : null;

  return (
    <main className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Back link */}
        <a href="/#projects" className="text-blue-600 dark:text-blue-400 text-sm no-underline hover:underline">
          ← Back to projects
        </a>

        {/* Header */}
        <header className="mt-6 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
            <span className={`px-2.5 py-1 rounded-full font-medium ${statusStyles[project.status] ?? statusStyles['In progress']}`}>
              {project.status}
            </span>
            {project.category && (
              <span className="text-gray-500 dark:text-gray-400">{project.category}</span>
            )}
            {project.year && (
              <span className="text-gray-400 dark:text-gray-500">· {project.year}</span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.tagline}
            </p>
          )}

          {/* Tech tags */}
          {project.tech?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs rounded-md">
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Actions — no link to the live app; access is by request */}
          <div className="flex flex-wrap gap-3 mt-7">
            {project.liveUrl && (
              <a
                href={`mailto:valentin.houssais@gmail.com?subject=Access request for ${project.title}`}
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold no-underline hover:no-underline transition-colors"
              >
                Request access →
              </a>
            )}
            {project.githubUrl && (
              <a
                href={`mailto:valentin.houssais@gmail.com?subject=Code access request for ${project.title}`}
                className="inline-flex items-center px-5 py-2.5 border border-gray-300 dark:border-ink-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold no-underline hover:no-underline hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                Request code
              </a>
            )}
          </div>
        </header>

        {/* Cover image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="w-full rounded-2xl border border-gray-200 dark:border-ink-700 mb-8"
          />
        )}

        {/* Walkthrough notice */}
        <div className="flex gap-3 items-start rounded-2xl border border-blue-200 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-900/10 px-5 py-4 mb-10">
          <span className="text-lg leading-none mt-0.5">🔒</span>
          <p className="text-sm text-gray-700 dark:text-gray-300 m-0">
            This is a <strong>walkthrough</strong>. The live tool is private — it runs on my own API keys and
            personal data — so it isn&apos;t publicly accessible. Want to try it or see a demo?{' '}
            <a href={`mailto:valentin.houssais@gmail.com?subject=Access request for ${project.title}`} className="text-blue-600 dark:text-blue-400 font-medium">
              Request access
            </a>.
          </p>
        </div>

        {/* Body */}
        {project.content && (
          <div
            className="prose dark:prose-invert prose-lg max-w-none
              prose-headings:font-display prose-headings:tracking-tight
              prose-h2:text-3xl prose-h3:text-2xl
              prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-code:bg-gray-100 dark:prose-code:bg-ink-800 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-gray-100 dark:prose-pre:bg-ink-800"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        )}

        {/* Loom walkthrough */}
        {embed && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Watch it in action</h2>
            <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-ink-700" style={{ aspectRatio: '16/9' }}>
              <iframe
                src={embed}
                title={`${project.title} walkthrough`}
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </section>
        )}

        {/* Screenshot gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Inside the app</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {project.gallery.map((item, i) => (
                <figure key={i} className="m-0">
                  <img
                    src={item.src}
                    alt={item.alt || `${project.title} screenshot ${i + 1}`}
                    className="w-full rounded-xl border border-gray-200 dark:border-ink-700"
                  />
                  {item.caption && (
                    <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* What I learned */}
        {project.learned && (
          <section className="mt-12 folio-card p-6">
            <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">What I learned</h2>
            <p className="text-gray-600 dark:text-gray-400 m-0">{project.learned}</p>
          </section>
        )}

        {/* Footer nav */}
        <div className="border-t border-gray-200 dark:border-ink-800 mt-12 pt-8">
          <a href="/" className="text-blue-600 dark:text-blue-400 text-sm no-underline hover:underline">
            ← Back to the desktop
          </a>
        </div>
      </article>
    </main>
  );
}
