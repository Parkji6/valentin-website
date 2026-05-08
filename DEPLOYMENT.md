# Deployment to Vercel

Your website is ready to deploy! Here's how to get it live on Vercel in 5 minutes.

## Prerequisites

- GitHub account (free)
- Vercel account (free)

## Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `personal-website` (or your preferred name)
3. **Do NOT initialize with README, .gitignore, or license** (we already have these)
4. Copy the repository URL

## Step 2: Push Your Code to GitHub

In your terminal, from the `valentin-website` directory:

```bash
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create a free account (you can use GitHub)
3. Click "Add New..." → "Project"
4. Select "Import Git Repository"
5. Paste your GitHub repository URL
6. Click "Import"
7. Vercel will detect Next.js automatically and configure everything
8. Click "Deploy"

That's it! Your site will be live in 30-60 seconds.

## Your Vercel URL

After deployment, Vercel will give you a free URL like:
```
https://personal-website-abc123.vercel.app
```

You can customize this or add a custom domain in Vercel settings.

## Automatic Deployments

Every time you push to GitHub, Vercel automatically rebuilds and redeploys your site. No manual steps needed!

## Environment Variables (Optional)

If you add environment variables later (analytics, etc.), add them in:
1. Vercel Dashboard → Your Project
2. Settings → Environment Variables

## Updating Content

To add new projects or blog posts:

1. Create a new `.md` file in `content/projects/` or `content/blog/`
2. Follow the markdown structure in the README
3. `git add`, `git commit`, `git push`
4. Vercel automatically rebuilds and deploys

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- File an issue on your GitHub repo

## What's Included

✅ Homepage with hero, about, projects, and blog sections  
✅ Responsive design (mobile, tablet, desktop)  
✅ Markdown-based content management  
✅ Fast static site generation  
✅ Free hosting on Vercel  
✅ Automatic deploys on every push  

Enjoy your new website! 🚀
