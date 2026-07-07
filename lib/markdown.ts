import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

marked.setOptions({ async: false });

const postsDirectory = path.join(process.cwd(), 'content', 'blog');
const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  content: string;
}

export interface GalleryItem {
  src: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  status: string;
  problem: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  learned: string;
  liveUrl?: string;
  githubUrl?: string;
  // Walkthrough fields (optional — used by the /projects/[slug] detail page)
  icon?: string;
  tagline?: string;
  category?: string;
  year?: string | number;
  role?: string;
  featured?: boolean;
  order?: number;
  gallery?: GalleryItem[];
  videoUrl?: string;
  content?: string;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        excerpt: data.excerpt || '',
        image: data.image,
        imageAlt: data.imageAlt,
        content: marked(content) as string,
      };
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || '',
    excerpt: data.excerpt || '',
    image: data.image,
    imageAlt: data.imageAlt,
    content: marked(content) as string,
  };
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    fs.mkdirSync(projectsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => toProjectMeta(fileName.replace(/\.md$/, '')))
    .filter((p): p is Project => p !== null);

  // Featured first, then by explicit order, then Shipped/In progress before others.
  const statusRank: Record<string, number> = { Shipped: 0, 'In progress': 1, Archived: 3 };
  return projects.sort((a, b) => {
    if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
    const ao = a.order ?? 999;
    const bo = b.order ?? 999;
    if (ao !== bo) return ao - bo;
    return (statusRank[a.status] ?? 2) - (statusRank[b.status] ?? 2);
  });
}

function toProjectMeta(slug: string, includeContent = false): Project | null {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || 'Untitled',
    status: data.status || 'In progress',
    problem: data.problem || '',
    tech: data.tech || [],
    image: data.image,
    imageAlt: data.imageAlt,
    learned: data.learned || '',
    liveUrl: data.liveUrl,
    githubUrl: data.githubUrl,
    icon: data.icon,
    tagline: data.tagline,
    category: data.category,
    year: data.year,
    role: data.role,
    featured: data.featured ?? false,
    order: data.order,
    gallery: data.gallery,
    videoUrl: data.videoUrl,
    content: includeContent ? (marked(content) as string) : undefined,
  };
}

export function getProject(slug: string): Project | null {
  return toProjectMeta(slug, true);
}
