import { getAllProjects } from '@/lib/markdown';

const statusStyles: Record<string, string> = {
  Shipped: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  'In progress': 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  Archived: 'bg-gray-100 dark:bg-ink-800 text-gray-500',
};

const upcomingProjects = [
  {
    title: 'Budget & Money Manager',
    description: 'Track spending, categorize transactions with AI, and get weekly summaries. No bank integrations — just simple, useful data.',
    status: 'Planned',
  },
  {
    title: 'Running & Sport Companion',
    description: 'Log runs, track progress, get training suggestions. A companion that adapts to how I actually train.',
    status: 'Planned',
  },
  {
    title: 'Paid Ads Optimizer',
    description: 'Google or Meta ad performance analysis and optimization suggestions. The hardest one — saved for last.',
    status: 'Later',
  },
];

export default function ProjectsIndex() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Work</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-14">
          AI products I&apos;ve built or am building — each with a full case study of the problem,
          the approach, and what I learned. The live tools are private; every case study shows how they work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a key={project.slug} href={`/projects/${project.slug}`} className="folio-card block overflow-hidden no-underline hover:no-underline group">
              {project.image && (
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="w-full h-44 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-xs">
                  <span className={`px-2.5 py-1 rounded-full font-medium ${statusStyles[project.status] ?? statusStyles['In progress']}`}>
                    {project.status}
                  </span>
                  {project.category && (
                    <span className="text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">{project.category}</span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">
                  {project.tagline || project.problem}
                </p>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Case study →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* What's next */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">What&apos;s next</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Projects I&apos;m planning to build. Have a suggestion?{' '}
          <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline no-underline">
            Send it over.
          </a>
        </p>
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200 dark:bg-ink-700" />
          <div className="space-y-6">
            {upcomingProjects.map((item, index) => (
              <div key={index} className="relative pl-10">
                <div className={`absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 bg-white dark:bg-ink-950 flex items-center justify-center text-xs font-bold ${
                  item.status === 'Planned'
                    ? 'border-blue-500 text-blue-500'
                    : 'border-gray-300 dark:border-ink-700 text-gray-400'
                }`}>
                  {index + 1}
                </div>
                <div className="folio-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white m-0">{item.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.status === 'Planned'
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-500 bg-gray-100 dark:bg-ink-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm m-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
