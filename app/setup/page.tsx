export default function SetupPage() {
  return (
    <main className="min-h-screen">
      <article className="max-w-3xl mx-auto px-4 py-16">

        {/* Header */}
        <header className="mb-12">
          <a href="/" className="text-blue-500 dark:text-blue-400 text-sm no-underline hover:underline">
            ← Back to home
          </a>
          <h1 className="text-4xl font-bold mt-6 mb-4 text-gray-900 dark:text-white">
            My setup & how to make it yours
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Everything I use to build and ship AI products. All free to start. All open source. Here's how to go from zero to a live project in under an hour.
          </p>
        </header>

        {/* The Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The stack</h2>
          <div className="space-y-6">
            {[
              {
                icon: '🤖',
                name: 'Claude (claude.ai)',
                url: 'https://claude.ai',
                role: 'The brain',
                description: 'I use Claude for everything — planning what to build, writing code, debugging, writing blog posts, even naming projects. I don\'t use it as a black box. I use it as a thinking partner. The difference: I understand every line of code it produces, and I push back when something doesn\'t make sense.',
                tip: 'Start conversations with context. Tell Claude what you\'re building, what you\'ve tried, and what specifically isn\'t working. Vague questions get vague answers.',
              },
              {
                icon: '💻',
                name: 'VS Code',
                url: 'https://code.visualstudio.com',
                role: 'The editor',
                description: 'Where I actually write and edit code. Free, fast, and works with every language. I use it alongside Claude — Claude generates, I review and edit in VS Code.',
                tip: 'Install the GitLens extension for better GitHub integration. That\'s the only extension you really need to start.',
              },
              {
                icon: '🐙',
                name: 'GitHub',
                url: 'https://github.com/Parkji6',
                role: 'The home for code',
                description: 'Every project I build lives on GitHub. It\'s version control (you can undo anything), a backup, and a portfolio all in one. All my repos are public — feel free to fork any of them.',
                tip: 'Commit often. Even if the message is just "fix bug" or "add feature". You\'ll thank yourself later.',
              },
              {
                icon: '▲',
                name: 'Vercel',
                url: 'https://vercel.com',
                role: 'The deployer',
                description: 'Connect your GitHub repo and Vercel deploys automatically every time you push code. Free for personal projects. No server management, no DevOps, no complexity.',
                tip: 'Every push to your main branch = automatic redeploy. You\'ll see your changes live in about 60 seconds.',
              },
              {
                icon: '⚡',
                name: 'Next.js',
                url: 'https://nextjs.org',
                role: 'The framework',
                description: 'The React framework I use for every web project. Handles routing, server-side rendering, static generation — all the hard stuff. Works perfectly with Vercel (same company).',
                tip: 'Don\'t learn React first then Next.js. Just start with Next.js. It\'s the better starting point for modern web development.',
              },
              {
                icon: '🎨',
                name: 'Tailwind CSS',
                url: 'https://tailwindcss.com',
                role: 'The styler',
                description: 'Makes styling fast without writing custom CSS files. Instead of writing CSS, you add utility classes directly in your HTML. Sounds weird, works great.',
                tip: 'Don\'t fight it. The first hour feels odd. After that, you\'ll never want to go back to writing raw CSS.',
              },
            ].map((tool) => (
              <div key={tool.name} className="border border-gray-200 dark:border-ink-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <div>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-gray-900 dark:text-white hover:text-blue-500 no-underline"
                    >
                      {tool.name}
                    </a>
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300">
                      {tool.role}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{tool.description}</p>
                <div className="bg-gray-50 dark:bg-ink-900 rounded p-3 border-l-2 border-blue-500">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-900 dark:text-white">Tip: </span>
                    {tool.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Make it your own */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Make it your own</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Every project I build is open source. Here's how to clone any of them, run it locally, and deploy your own version — from scratch to live in under an hour.
          </p>

          <div className="space-y-8">

            {/* Step 1 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                1
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Create your accounts</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Start by creating these free accounts — you'll need all of them.</p>
              <div className="space-y-2 mb-6">
                {[
                  { name: 'Claude', url: 'https://claude.ai', note: 'Your AI coding partner — free tier is enough to start' },
                  { name: 'GitHub', url: 'https://github.com', note: 'Where your code lives — create a free account' },
                  { name: 'Vercel', url: 'https://vercel.com', note: 'Where your app deploys — sign up with your GitHub account' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <span className="text-blue-500">→</span>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 no-underline hover:underline font-medium">
                      {item.name}
                    </a>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">— {item.note}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Then install these three tools on your computer.</p>
              <div className="space-y-2">
                {[
                  { name: 'Node.js', url: 'https://nodejs.org', note: 'Download the LTS version' },
                  { name: 'VS Code', url: 'https://code.visualstudio.com', note: 'Free code editor' },
                  { name: 'Git', url: 'https://git-scm.com', note: 'Version control — usually pre-installed on Mac' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <span className="text-blue-500">→</span>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 no-underline hover:underline font-medium">
                      {item.name}
                    </a>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">— {item.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                2
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Pick a project to clone</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Go to{' '}
                <a href="https://github.com/Parkji6" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline no-underline">
                  my GitHub
                </a>
                {' '}and pick any repo. Let's use the Polish App as an example.
              </p>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 font-mono text-sm text-gray-100">
                <p className="text-gray-500 mb-1"># Clone the repo</p>
                <p>git clone https://github.com/Parkji6/polish-app.git</p>
                <p className="mt-2 text-gray-500"># Go into the folder</p>
                <p>cd polish-app</p>
                <p className="mt-2 text-gray-500"># Install dependencies</p>
                <p>npm install</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                3
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Set up your environment variables</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Most projects need API keys to work. These are secret — never commit them to GitHub. Each project's README lists the exact variables needed, but here's what each one requires.
              </p>
              <div className="space-y-4 mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white0 mb-2">Polish App — create a <span className="font-mono">.env.local</span> file</p>
                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 font-mono text-sm text-gray-100">
                    <p>ANTHROPIC_API_KEY=your_key_here</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Get it at <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline no-underline">console.anthropic.com</a> — free credits to start</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white0 mb-2">Job Discovery Dashboard — create a <span className="font-mono">.env</span> file</p>
                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 font-mono text-sm text-gray-100">
                    <p>ADZUNA_APP_ID=your_app_id_here</p>
                    <p>ADZUNA_API_KEY=your_key_here</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Get it at <a href="https://developer.adzuna.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline no-underline">developer.adzuna.com</a> — free, takes 2 minutes to register</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                4
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Run it locally</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                The command depends on the project type.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white0 mb-2">Next.js projects (Polish App)</p>
                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 font-mono text-sm text-gray-100 mb-1">
                    <p>npm run dev</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Then open <span className="font-mono text-blue-500">http://localhost:3000</span> in your browser.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white0 mb-2">Script-based projects (Job Discovery Dashboard)</p>
                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 font-mono text-sm text-gray-100 mb-1">
                    <p className="text-gray-500 mb-1"># Run the fetch script manually to test it</p>
                    <p>node fetch-jobs.js</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">This generates the data. Open the <span className="font-mono">index.html</span> file in your browser to see the dashboard. In production, GitHub Actions runs this automatically every morning.</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                5
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Make it yours</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Edit the code in VS Code. Every project has a clear folder structure. The most important files are usually:
              </p>
              <div className="space-y-2 mb-3">
                {[
                  { file: 'app/page.tsx', desc: 'The main homepage' },
                  { file: 'app/layout.tsx', desc: 'Navigation, footer, global layout' },
                  { file: 'content/', desc: 'Markdown files for your content' },
                  { file: '.env.local', desc: 'Your secret API keys (never commit this)' },
                ].map((item) => (
                  <div key={item.file} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">→</span>
                    <div>
                      <span className="font-mono text-sm text-gray-900 dark:text-white">{item.file}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                6
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Deploy it live</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Push your code to GitHub, then connect it to Vercel.
              </p>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 font-mono text-sm text-gray-100 mb-4">
                <p className="text-gray-500 mb-1"># Push to your own GitHub repo</p>
                <p>git init</p>
                <p>git add .</p>
                <p>{'git commit -m "my version"'}</p>
                <p>git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git</p>
                <p>git push -u origin main</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Then on Vercel:</p>
                <div className="flex items-center gap-2"><span className="text-blue-500">1.</span> Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline no-underline">vercel.com</a> and sign in with GitHub</div>
                <div className="flex items-center gap-2"><span className="text-blue-500">2.</span> Click "Add New Project" and import your repo</div>
                <div className="flex items-center gap-2"><span className="text-blue-500">3.</span> Add your environment variables (API keys) in the Vercel dashboard</div>
                <div className="flex items-center gap-2"><span className="text-blue-500">4.</span> Click Deploy — your app is live in ~60 seconds</div>
              </div>
            </div>

          </div>
        </section>

        {/* Questions */}
        <section className="border border-gray-200 dark:border-ink-800 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Stuck? Have a question?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm happy to help. Send me a message and I'll do my best to answer.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold no-underline hover:bg-blue-500 hover:no-underline transition-colors"
          >
            Get in touch
          </a>
        </section>

      </article>
    </main>
  );
}
