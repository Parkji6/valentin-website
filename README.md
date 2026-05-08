# Valentin Houssais - Personal Website

A clean, minimal portfolio site built with Next.js, Tailwind CSS, and markdown-based content.

## Features

- ✅ Light/Dark mode toggle
- ✅ Markdown-based projects and blog posts
- ✅ Responsive design (mobile-first)
- ✅ Tech aesthetic with card-based UI
- ✅ Individual blog post pages
- ✅ Fast static generation

## Getting Started

### Installation

1. Clone this repo
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Adding Content

#### Projects

Create a new file in `/content/projects/` with the `.md` extension:

```markdown
---
title: "Project Name"
status: "Shipped" | "In progress" | "Archived"
problem: "One-line problem statement"
tech: ["Tech1", "Tech2", "Tech3"]
image: "/images/projects/project-name.png"
imageAlt: "Alt text for image"
learned: "1-2 sentence key takeaway"
liveUrl: "https://example.com"
githubUrl: "https://github.com/user/repo"
---

## Project Details

Markdown content here describing the project, approach, and lessons learned.
```

#### Blog Posts

Create a new file in `/content/blog/` with the `.md` extension:

```markdown
---
title: "Post Title"
date: "2025-05-08"
slug: "post-slug"
image: "/images/blog/post-image.png"
imageAlt: "Alt text"
excerpt: "One sentence summary of the post"
---

## Full Post

Markdown content here. Use headings, lists, code blocks, etc.
```

### Adding Images

1. Add images to `/public/images/projects/` or `/public/images/blog/`
2. Reference them in your markdown: `/images/projects/my-image.png`

## Building & Deployment

### Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repo
4. Click "Deploy"

Vercel will automatically deploy on every push to main.

## File Structure

```
├── app/
│   ├── page.tsx           (Homepage)
│   ├── blog/[slug]/page.tsx (Blog post pages)
│   ├── layout.tsx         (Root layout with nav & footer)
│   └── globals.css        (Global styles)
├── content/
│   ├── blog/              (Blog post markdown files)
│   └── projects/          (Project markdown files)
├── lib/
│   └── markdown.ts        (Markdown loading utilities)
├── public/
│   └── images/            (Images for projects and blog)
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to change the accent color:

```javascript
colors: {
  accent: '#YOUR_HEX_COLOR', // Change from blue to any color
}
```

### Fonts

Fonts are set in `app/globals.css` using system fonts. To use custom fonts:

1. Add to `next.config.js`
2. Import in `app/globals.css`

### Navigation Links

Edit the header links in `app/layout.tsx` to match your sections.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **gray-matter** - Parse markdown front matter
- **marked** - Render markdown to HTML

## Performance

- Static generation (fast builds)
- No database or runtime APIs needed
- Optimized for Lighthouse scores
- Responsive images

## License

This template is open for you to use and modify.

---

**Built with Claude. Deployed with Vercel.**
