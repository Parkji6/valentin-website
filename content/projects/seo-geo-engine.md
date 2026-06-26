---
title: "SEO / GEO Engine"
tagline: "Optimize for search engines and AI answer engines from one workflow."
category: "Marketing"
year: 2026
status: "In progress"
order: 7
problem: "Classic SEO and the new world of GEO (getting cited by AI answer engines) need different tactics, but I wanted one workflow that covers both instead of juggling separate tools."
tech: ["Next.js", "Claude API", "Vercel"]
learned: "Answer engines and Google reward different things. Optimizing for one can actively hurt the other if you don't know which is which."
githubUrl: "https://github.com/Parkji6"
---

## Overview

The SEO / GEO Engine analyzes content for both traditional search ranking and visibility in AI answer engines (ChatGPT, Perplexity, AI overviews), then suggests concrete improvements — from one workflow instead of two sets of tools.

## What it does

- **Audit** — analyzes a page for both search signals and answer-engine signals.
- **Recommend** — prioritized, specific fixes, labeled by which channel they help.
- **GEO** — flags what makes content quotable and citable by AI answers.
- **Track** — watches how changes affect visibility over time.

## How it's built

- **Next.js + Claude API**, deployed on Vercel.
- Content is scored against two separate rubrics — classic SEO and answer-engine citability — so the recommendations don't blur the two.

## Status

In progress. Real screenshots and a live walkthrough are coming soon. [Request access](mailto:valentin.houssais@gmail.com?subject=SEO%20GEO%20Engine%20access) for an early look.

_For the story behind it, see: [Optimizing for answer engines is not the same as SEO](/blog/optimizing-for-answer-engines-vs-google)._
