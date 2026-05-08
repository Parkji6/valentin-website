import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface ProjectMeta {
  title: string;
  status: 'In progress' | 'Shipped' | 'Archived';
  problem: string;
  tech: string[];
  image: string;
  learned: string;
  liveUrl?: string;
  githubUrl?: string;
  blogPostUrl?: string;
}

export interface BlogMeta {
  title: string;
  publishDate: string;
  excerpt: string;
  coverImage?: string;
  category?: string;
  readTime?: string;
}

export interface Project extends ProjectMeta {
  slug: string;
  content: string;
}

export interface BlogPost extends BlogMeta {
  slug: string;
  content: string;
}

function getContentPath(type: 'projects' | 'blog'): string {
  return path.join(process.cwd(), 'content', type);
}

function getFiles(directory: string): string[] {
  try {
    return fs.readdirSync(directory).filter((file) => file.endsWith('.md'));
  } catch {
    return [];
  }
}

export function getProjects(): Project[] {
  const projectsPath = getContentPath('projects');
  const files = getFiles(projectsPath);

  return files
    .map((file) => {
      const slug = file.replace('.md', '');
      const filePath = path.join(projectsPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, content: markdownContent } = matter(content);

      return {
        slug,
        ...data,
        content: markdownContent,
      } as Project;
    })
    .sort((a, b) => {
      const statusOrder = { Shipped: 0, 'In progress': 1, Archived: 2 };
      return statusOrder[a.status] - statusOrder[b.status];
    });
}

export function getBlogPosts(): BlogPost[] {
  const blogPath = getContentPath('blog');
  const files = getFiles(blogPath);

  return files
    .map((file) => {
      const slug = file.replace('.md', '');
      const filePath = path.join(blogPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, content: markdownContent } = matter(content);

      return {
        slug,
        ...data,
        content: markdownContent,
      } as BlogPost;
    })
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

export async function renderMarkdown(content: string): Promise<string> {
  return marked(content);
}
