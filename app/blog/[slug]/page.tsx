import { getBlogPost, getAllBlogPosts } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <header className="mb-8">
          <a href="/#blog" className="text-blue-500 dark:text-blue-400 text-sm no-underline hover:underline">
            ← Back to blog
          </a>
          <h1 className="text-4xl font-bold mt-4 mb-4">{post.title}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </header>

        {post.image && (
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}

        <div
          className="prose dark:prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:tracking-tight prose-headings:mb-4
            prose-h2:text-3xl prose-h3:text-2xl
            prose-p:text-gray-700 dark:prose-p:text-gray-300
            prose-a:text-blue-600 dark:prose-a:text-blue-400
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-code:bg-gray-100 dark:prose-code:bg-ink-800 prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-100 dark:prose-pre:bg-ink-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="border-t border-gray-200 dark:border-ink-800 mt-12 pt-8">
          <a href="/#blog" className="text-blue-500 dark:text-blue-400 text-sm no-underline hover:underline">
            ← Back to blog
          </a>
        </div>
      </article>
    </main>
  );
}
