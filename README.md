# Valentin Houssais Personal Website

A clean, minimal personal website built with Next.js and deployed on Vercel.

## Features

- **Content-first design** - Markdown-based projects and blog posts
- **Responsive layout** - Mobile-first, works on all devices
- **Fast** - Built with Next.js for optimal performance
- **Easy to update** - Add new projects and blog posts by creating markdown files

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Content

### Projects

Create a new markdown file in `content/projects/` with the following structure:

```markdown
---
title: "Project Title"
status: "Shipped" | "In progress" | "Archived"
problem: "One-line problem statement"
tech: ["Tech1", "Tech2"]
image: "/projects/project-name.png"
learned: "Key takeaway"
liveUrl: "https://..."
githubUrl: "https://..."
blogPostUrl: "/blog/post-slug" (optional)
---

Optional details about the project.
```

### Blog Posts

Create a new markdown file in `content/blog/` with the following structure:

```markdown
---
title: "Post Title"
publishDate: "YYYY-MM-DD"
excerpt: "One-paragraph summary"
---

Full post content in markdown.
```

## Deployment

This site is deployed on Vercel. To deploy your own:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build

## Project Images

Store project images in `public/projects/` and reference them in the frontmatter:

```
image: "/projects/project-name.png"
```

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- gray-matter (for markdown parsing)
- marked (for markdown rendering)

## License

MIT
