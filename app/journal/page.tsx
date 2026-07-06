import { getAllBlogPosts } from '@/lib/markdown';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function JournalIndex() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen">
      <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">Practical AI 101</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">The Journal</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-14">
          A journal of building AI products in public — {posts.length} {posts.length === 1 ? 'entry' : 'entries'} on
          what worked, what broke, and what it taught me.
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No entries yet. Check back soon!</p>
        ) : (
          <div className="space-y-5">
            {posts.map((post) => (
              <a key={post.slug} href={`/journal/${post.slug}`} className="folio-card block p-6 no-underline hover:no-underline group">
                <div className="flex gap-5 items-start">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="hidden sm:block w-24 h-24 object-cover rounded-xl flex-shrink-0"
                    />
                  )}
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{formatDate(post.date)}</p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2 m-0">{post.excerpt}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
