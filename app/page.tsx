import Link from 'next/link';
import Image from 'next/image';
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

function TechTag({ tech }: { tech: string }) {
  return (
    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
      {tech}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      {project.image && (
        <div className="mb-4 -mx-6 -mt-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
      )}
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <span className="text-xs px-2 py-1 bg-gray-100 rounded whitespace-nowrap ml-2">
            {project.status}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-3">{project.problem}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((t) => (
            <TechTag key={t} tech={t} />
          ))}
        </div>
        <p className="text-sm mb-4">{project.learned}</p>
        <div className="flex gap-3 text-sm">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.blogPostUrl && (
            <Link href={project.blogPostUrl}>Blog</Link>
          )}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="py-4 border-b border-gray-200 last:border-b-0">
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
      </Link>
      <p className="text-sm text-gray-600 mb-2">{formatDate(post.publishDate)}</p>
      <p className="text-gray-700">{post.excerpt}</p>
    </div>
  );
}

export default function Home() {
  const projects = getProjects();
  const blogPosts = getBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="border-b border-gray-200 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Valentin Houssais</h1>
          <p className="text-xl text-gray-600">
            Shipping AI products. Learning in public.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <div className="prose prose-lg">
            <p>
              I'm building AI-powered products and sharing what I learn along the way.
              I care deeply about execution, product quality, and making AI accessible to everyone.
            </p>
            <p>
              My focus is on shipping products that solve real problems, not just building
              cool demos. I document my journey publicly because I believe in transparency
              and want to help others navigate the rapidly changing AI landscape.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.slice(0, 6).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No projects yet. Check back soon!
            </p>
          )}
        </section>

        {/* Blog Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Latest Blog Posts</h2>
          {blogPosts.length > 0 ? (
            <div>
              {blogPosts.slice(0, 5).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No blog posts yet. Check back soon!
            </p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/valentin-houssais/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/valentin-h"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/valentin_hous"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a href="mailto:valentin.houssais@gmail.com">
              Email
            </a>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            © 2025 Valentin Houssais. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
