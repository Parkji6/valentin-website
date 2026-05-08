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
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function ProjectCard({ project }: { project: Project }) {
  const gradients: { [key: string]: string } = {
    'Shipped': 'from-blue-500 to-cyan-500',
    'In progress': 'from-purple-500 to-pink-500',
    'Archived': 'from-gray-500 to-slate-500',
  };

  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg mb-4 h-56 bg-gray-100 relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradients[project.status] || gradients['In progress']}`} />
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-3 text-sm leading-relaxed">{project.problem}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 3).map((t) => (
          <span key={t} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-700 mb-4">{project.learned}</p>
      <div className="flex gap-3 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Live
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Code
          </a>
        )}
        {project.blogPostUrl && (
          <Link href={project.blogPostUrl} className="text-blue-600 hover:underline">
            Article
          </Link>
        )}
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="py-8 border-b border-gray-200 last:border-b-0 group">
        <div className="flex justify-between items-start gap-6 mb-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
            {post.title}
          </h3>
          <span className="text-sm text-gray-500 whitespace-nowrap flex-shrink-0">
            {formatDate(post.publishDate)}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">{post.excerpt}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const projects = getProjects();
  const blogPosts = getBlogPosts();

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Valentin
          </Link>
          <div className="flex gap-8 text-sm">
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#blog" className="text-gray-600 hover:text-gray-900">Articles</a>
            <a href="mailto:valentin.houssais@gmail.com" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="border-b border-gray-200 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
              Shipping AI<br />products.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Building AI-powered products and learning in public. I document my journey from idea to shipped product, sharing what works and what doesn't.
            </p>
          </div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section className="border-b border-gray-200 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm focused on execution. Not just building cool demos, but shipping products that solve real problems. I believe in transparency and document everything publicly.
                </p>
                <p>
                  My work spans AI infrastructure, machine learning, and product development. Every project teaches something valuable, and I share those lessons here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-b border-gray-200 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Projects</h2>
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No projects yet.</p>
            )}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Articles</h2>
              {blogPosts.length > 0 ? (
                <div>
                  {blogPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No articles yet.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold mb-4">Valentin Houssais</h3>
              <p className="text-gray-400 text-sm">Building AI products and sharing the journey.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Navigate</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#projects" className="hover:text-white">Projects</a></li>
                <li><a href="#blog" className="hover:text-white">Articles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Social</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://github.com/Parkji6" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
                <li><a href="https://twitter.com/valentin_hous" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/valentin-houssais/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Contact</h4>
              <a href="mailto:valentin.houssais@gmail.com" className="text-gray-400 hover:text-white text-sm">valentin.houssais@gmail.com</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Valentin Houssais. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
