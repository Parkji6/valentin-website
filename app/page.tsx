import { getAllBlogPosts, getAllProjects } from '@/lib/markdown';
import Desktop from './components/desktop/Desktop';

export default function Home() {
  const projects = getAllProjects();
  const posts = getAllBlogPosts().map(({ content: _content, ...meta }) => ({ ...meta, content: '' }));

  return <Desktop projects={projects} posts={posts} />;
}
