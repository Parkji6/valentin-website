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

function StatusBadge({ status }: { status: string }) {
  const colors: { [key: string]: string } = {
    'Shipped': 'bg-green-100 text-green-800',
    'In progress': 'bg-blue-100 text-blue-800',
    'Archived': 'bg-gray-200 text-gray-800',
  };
  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
}

function TechTag({ tech }: { tech: string }) {
  return (
    <span className="px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200">
      {tech}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300">
      {project.image && (
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold text-gray-900 flex-1">{project.title}</h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.problem}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <TechTag key={t} tech={t} />
          ))}
        </div>
        <p className="text-sm text-gray-700 mb-5 leading-relaxed">{project.learned}</p>
        <div className="flex gap-4 text-sm font-medium">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              GitHub ↗
            </a>
          )}
          {project.blogPostUrl && (
            <Link href={project.blogPostUrl} className="text-blue-600 hover:text-blue-700">
              Read Article →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="py-6 px-1 border-b border-gray-200 last:border-b-0 group cursor-pointer">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <span className="text-sm text-gray-500 whitespace-nowrap">{formatDate(post.publishDate)}</span>
        </div>
        <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const projects = getProjects();
  const blogPosts = getBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white -z-10" />
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-2">
                Valentin<br />Houssais
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl">
              Building AI products that ship. Learning and sharing everything in public.
            </p>
            <div className="pt-4 flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                See my work
              </a>
              <a href="mailto:valentin.houssais@gmail.com" className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-8">
        {/* About Section */}
        <section className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
            <p>
              I'm building AI-powered products and sharing what I learn along the way. I care deeply about execution, product quality, and making AI accessible to everyone.
            </p>
            <p>
              My focus is on shipping products that solve real problems, not just building cool demos. I document my journey publicly because I believe in transparency and want to help others navigate the rapidly changing AI landscape.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 6).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-lg">
              No projects yet. Check back soon!
            </p>
          )}
        </section>

        {/* Blog Section */}
        <section className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Latest Articles</h2>
          {blogPosts.length > 0 ? (
            <div className="max-w-3xl">
              {blogPosts.slice(0, 5).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-lg">
              No blog posts yet. Check back soon!
            </p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 md:py-16 bg-gray-50 mt-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-gray-600 font-medium">Let's connect</p>
            </div>
            <div className="flex gap-6 text-center md:text-left">
              <a
                href="https://www.linkedin.com/in/valentin-houssais/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Parkji6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/valentin_hous"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Twitter
              </a>
              <a
                href="mailto:valentin.houssais@gmail.com"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-center text-sm text-gray-600">
              © 2025 Valentin Houssais. Shipping AI products.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
