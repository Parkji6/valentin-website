import { getAllBlogPosts } from '@/lib/markdown';

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen">
      <section className="max-w-3xl mx-auto px-4 py-16">
        <a href="/" className="text-blue-500 dark:text-blue-400 text-sm no-underline hover:underline">
          ← Back to home
        </a>
        <h1 className="text-4xl font-bold mt-6 mb-2">All Articles</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'} — building AI products, learning in public.
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="flex gap-4">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="w-24 h-24 object-cover rounded flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h2 className="text-xl font-bold mb-2">
                      <a href={`/blog/${post.slug}`} className="no-underline text-gray-900 dark:text-gray-50 hover:text-blue-500">
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {post.excerpt}
                    </p>
                    <a href={`/blog/${post.slug}`} className="text-blue-500 dark:text-blue-400 text-sm no-underline hover:underline">
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
