import Link from 'next/link';
import { getProjects, getBlogPosts } from '@/lib/markdown';

interface Project {
  slug: string;
  title: string;
  status: string;
  problem: string;
  tech: string[];
  image: string;
  learned: string;
  liveUrl?: string;
  githubUrl?: string;
  blogPostUrl?: string;
}

interface BlogPost {
  slug: string;
  title: string;
  publishDate: string;
  excerpt: string;
  coverImage?: string;
  category?: string;
  readTime?: string;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function ArticleCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
          <div>
            {post.category && (
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">
                {post.category}
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{formatDate(post.publishDate)}</span>
              {post.readTime && (
                <>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article>
        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 mb-5">
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
        {post.category && (
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
            {post.category}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>{formatDate(post.publishDate)}</span>
          {post.readTime && (
            <>
              <span>•</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>
      </article>
    </Link>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 mb-5">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`inline-block text-xs font-bold tracking-widest uppercase ${
            project.status === 'Shipped'
              ? 'text-green-600'
              : project.status === 'In progress'
              ? 'text-blue-600'
              : 'text-gray-500'
          }`}
        >
          {project.status}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{project.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{project.problem}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md font-medium">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm font-medium">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Visit →
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Code →
          </a>
        )}
      </div>
    </article>
  );
}

function Pillar({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-t border-gray-900 pt-6">
      <div className="text-sm font-mono text-gray-400 mb-4">{number}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  const projects = getProjects();
  const blogPosts = getBlogPosts();
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold text-gray-900 tracking-tight">
            Valentin Houssais
          </Link>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#why" className="text-gray-600 hover:text-gray-900 transition-colors">
              Why
            </a>
            <a href="#articles" className="text-gray-600 hover:text-gray-900 transition-colors">
              Articles
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </a>
            <a
              href="mailto:valentin.houssais@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-40">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-700 tracking-wide">
                Currently shipping AI products
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-8">
              Building AI<br />
              products in<br />
              <span className="text-blue-600">public.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mb-10">
              I'm Valentin. I document the messy, honest reality of building AI products — the breakthroughs, the dead ends, and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#articles"
                className="inline-flex items-center justify-center px-7 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Read latest articles →
              </a>
              <a
                href="#why"
                className="inline-flex items-center justify-center px-7 py-4 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Why follow along
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Why Section */}
      <section id="why" className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-sm font-bold tracking-widest uppercase text-blue-600 mb-4">
              Why follow this journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Most AI content is hype. This isn't.
            </h2>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              I share what I'm actually building, what's working, and what isn't — with code, decisions, and trade-offs. No fluff, no thought leadership, just a working notebook from someone shipping AI products in 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <Pillar
              number="01"
              title="Real engineering, not demos"
              description="Every project has actual users, real constraints, and unsexy problems. You'll see the architecture decisions, the API costs, and what breaks at scale."
            />
            <Pillar
              number="02"
              title="The full failure log"
              description="I document what didn't work just as carefully as what did. Archived projects, abandoned approaches, and lessons that took weeks to learn — all here."
            />
            <Pillar
              number="03"
              title="Frontier-aware, not hype-driven"
              description="I work with the latest models and tools, but I don't chase trends. Each post is grounded in a problem I actually had to solve."
            />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="inline-block text-sm font-bold tracking-widest uppercase text-blue-600 mb-4">
                The blog
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Latest articles
              </h2>
            </div>
          </div>

          {featuredPost ? (
            <>
              <div className="mb-20">
                <ArticleCard post={featuredPost} featured />
              </div>

              {otherPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pt-16 border-t border-gray-100">
                  {otherPosts.map((post) => (
                    <ArticleCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-600">No articles yet.</p>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="mb-16">
            <span className="inline-block text-sm font-bold tracking-widest uppercase text-blue-600 mb-4">
              What I'm building
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Projects, in motion.
            </h2>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No projects yet.</p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-gray-100 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Want to collaborate, or just say hi?
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              I'm always interested in talking to other builders, especially people working on hard AI problems or shipping consumer products.
            </p>
            <a
              href="mailto:valentin.houssais@gmail.com"
              className="inline-flex items-center justify-center px-7 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2">
              <h3 className="font-bold text-gray-900 mb-3">Valentin Houssais</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Building AI products in public. Sharing the wins, the failures, and everything in between.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Navigate</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#why" className="hover:text-gray-900 transition-colors">
                    Why
                  </a>
                </li>
                <li>
                  <a href="#articles" className="hover:text-gray-900 transition-colors">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-gray-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Connect</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a
                    href="https://github.com/Parkji6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/valentin-houssais/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/valentin_hous"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:valentin.houssais@gmail.com"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row md:justify-between gap-4 text-sm text-gray-500">
            <p>© 2025 Valentin Houssais. Built with Next.js & deployed on Vercel.</p>
            <p>Shipping AI products. Learning in public.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
