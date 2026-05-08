import { getAllBlogPosts, getAllProjects } from '@/lib/markdown';

const upcomingProjects = [
  {
    title: 'Personal Assistant',
    description: 'Email, calendar, news, weather — one morning briefing powered by Claude and my existing tools.',
    status: 'Up next',
    statusColor: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
    dotColor: 'border-blue-500 text-blue-500',
  },
  {
    title: 'Budget & Money Manager',
    description: 'Track spending, categorize transactions with AI, and get weekly summaries. No bank integrations — just simple, useful data.',
    status: 'Planned',
    statusColor: 'text-gray-500 bg-gray-100 dark:bg-gray-800',
    dotColor: 'border-gray-300 dark:border-gray-700 text-gray-400',
  },
  {
    title: 'Running & Sport Companion',
    description: 'Log runs, track progress, get training suggestions. A companion that adapts to how I actually train.',
    status: 'Planned',
    statusColor: 'text-gray-500 bg-gray-100 dark:bg-gray-800',
    dotColor: 'border-gray-300 dark:border-gray-700 text-gray-400',
  },
  {
    title: 'Holiday Planner',
    description: 'Plan trips with AI — itineraries, budgets, activities. Context-aware, not generic.',
    status: 'Planned',
    statusColor: 'text-gray-500 bg-gray-100 dark:bg-gray-800',
    dotColor: 'border-gray-300 dark:border-gray-700 text-gray-400',
  },
  {
    title: 'Paid Ads Optimizer',
    description: 'Google or Meta ad performance analysis and optimization suggestions. The hardest one — saved for last.',
    status: 'Later',
    statusColor: 'text-gray-400 bg-gray-50 dark:bg-gray-900',
    dotColor: 'border-gray-200 dark:border-gray-800 text-gray-300',
  },
];

export default function Home() {
  const posts = getAllBlogPosts().slice(0, 3);
  const projects = getAllProjects();

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <p className="text-blue-500 font-semibold mb-2">Valentin Houssais</p>
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-50">
            Shipping AI products. Learning in public.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Building practical AI tools for myself — no hype, no shortcuts. Just figuring out what actually works and sharing it honestly.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <img
            src="/images/hero.png"
            alt="Valentin's AI journey — building practical tools, no hype"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <div className="max-w-none">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            AI Twitter and LinkedIn are full of people selling shortcuts. Follow this, prompt that, your life will be amazing. No effort required.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I wanted to see what happens when you actually do the work instead.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            So I'm building real tools — for myself, from scratch — and documenting everything honestly. What works, what breaks, what I learned. A Polish app, a plant tracker, a personal assistant... practical things that solve real problems.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
            No hype. Just building.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        {projects.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No projects yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                )}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    project.status === 'Shipped'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                      : project.status === 'In progress'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {project.problem}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-medium">Learned:</span> {project.learned}
                </p>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 dark:text-blue-400 text-sm no-underline hover:underline"
                    >
                      Live →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 dark:text-blue-400 text-sm no-underline hover:underline"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Blog Section */}
      <section id="blog" className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <a href="/blog" className="text-blue-500 dark:text-blue-400 text-sm no-underline hover:underline">
            View all →
          </a>
        </div>
        {posts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No blog posts yet. Check back soon!</p>
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
                    <h3 className="text-xl font-bold mb-2">
                      <a href={`/blog/${post.slug}`} className="no-underline text-gray-900 dark:text-gray-50 hover:text-blue-500">
                        {post.title}
                      </a>
                    </h3>
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

      {/* Upcoming Projects Timeline */}
      <section id="upcoming" className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-2">What's next</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Projects I'm planning to build. Have a suggestion?{' '}
          <a href="mailto:valentin.houssais@gmail.com" className="text-blue-500 hover:underline no-underline">
            Send it over.
          </a>
        </p>
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
          <div className="space-y-6">
            {upcomingProjects.map((item, index) => (
              <div key={index} className="relative pl-10">
                <div className={`absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 bg-white dark:bg-gray-950 flex items-center justify-center text-xs font-bold ${item.dotColor}`}>
                  {index + 1}
                </div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-gray-50">{item.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-200 dark:border-gray-800 text-center">
        <h2 className="text-2xl font-bold mb-4">Let's connect</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Interested in AI, shipping products, or just want to say hi?
        </p>
        <a
          href="mailto:valentin.houssais@gmail.com"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold no-underline hover:bg-blue-600 transition-colors"
        >
          Get in touch
        </a>
      </section>

    </main>
  );
}
