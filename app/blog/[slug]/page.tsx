import Link from 'next/link';
import { getBlogPosts, renderMarkdown } from '@/lib/markdown';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string): string {
  return new Date(dateString)
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const posts = getBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await renderMarkdown(post.content);
  const readTime = post.readTime || calculateReadTime(post.content);

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-6 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold hover:text-blue-600 transition-colors">
            ← Back to home
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          {post.coverImage && (
            <div className="aspect-[2/1] rounded-lg overflow-hidden mb-10 bg-gray-200">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
            <time dateTime={post.publishDate}>
              {formatDate(post.publishDate)}
            </time>
            <span>·</span>
            <span>{readTime}</span>
            {post.category && (
              <>
                <span>·</span>
                <span>{post.category}</span>
              </>
            )}
          </div>

          {post.excerpt && (
            <p className="text-lg text-gray-600 leading-relaxed italic">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/#articles"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            ← Back to all articles
          </Link>
        </footer>
      </article>

      {/* CTA Section */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Want to chat about this?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have thoughts, questions, or want to collaborate? Feel free to reach out. I read every email.
            </p>
            <a
              href="mailto:valentin.houssais@gmail.com"
              className="inline-flex items-center justify-center px-7 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Send me an email →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
