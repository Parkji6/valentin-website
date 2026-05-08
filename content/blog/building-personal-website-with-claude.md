---
title: "Building my personal website with Claude — what actually happened"
date: "2025-05-08"
slug: "building-personal-website-with-claude"
excerpt: "I tried to build this website using Claude Code. It didn't go well at first. Here's the honest story of what happened, what I tried, and what eventually worked."
---

## Let me be honest about how this site was built

Most "I built this with AI" posts make it sound effortless. You write a prompt, something beautiful appears, you deploy it.

That's not what happened here.

This site took three attempts. The first two produced things I couldn't use. The third one — after adjusting how I worked with Claude — produced what you're reading now.

I'm documenting the real process because I think that's more useful than the highlight reel.

## Attempt 1: The over-designed disaster

I had a clear brief. Clean, minimal, tech-aesthetic, markdown-based content system. White background, blue accent, light/dark mode.

Claude Code produced something entirely different. Custom hero graphics. A "Why follow this journey" section nobody asked for. Hardcoded content baked directly into the React components. Lots of visual flourishes.

It looked like a design portfolio trying to sell freelance services. It was also non-functional for my actual need — because the content wasn't coming from markdown files, adding a new project meant editing code, not editing a text file.

The problem wasn't Claude. It was the prompt. I'd given Claude a goal ("build my personal website") without nearly enough constraints about what I didn't want.

## Attempt 2: More constraints, same problem

I rewrote the prompt. Added explicit "don't" rules. Emphasised the markdown requirement. Made the technical structure clearer.

The second attempt was better — but it still produced something that didn't match what I'd asked for. Different sections, different structure, different vibe. Still hardcoded content in places.

I was learning something: giving Claude Code a big ambitious prompt and expecting it to match your vision precisely doesn't work well. Claude will fill in all the gaps with its own choices — and those choices might be good choices, just not yours.

## What worked: smaller, more specific instructions

The approach that worked was different. Instead of one large prompt, I worked iteratively:

First, I defined every decision before writing a line of code. Not just "clean and minimal" — specifically which sections, what information each card shows, how deep the routing goes, what the markdown file structure looks like. Decisions first, then code.

Second, I separated the content system from the design. The markdown loading utilities (`lib/markdown.ts`) were built and verified to work correctly before I touched the visual layer. Get the data flowing first, then make it look right.

Third, I was explicit about what NOT to build. "No custom graphics. No animations. No hardcoded content. No pages beyond homepage and blog posts." Negative constraints turned out to be as important as positive ones.

## What I ended up with

The architecture is simple:
- Next.js 14 with TypeScript
- Tailwind CSS for styling
- `gray-matter` to parse markdown frontmatter
- `marked` to render markdown to HTML
- Deployed on Vercel

Adding a new project means creating a `.md` file in `/content/projects/`. Adding a blog post means creating a `.md` file in `/content/blog/`. No code changes, no CMS, no database. Just text files.

The design is intentionally sparse. One accent color (blue). Cards with borders. Generous whitespace. Light/dark toggle that saves to localStorage. Nothing clever.

## What this taught me about working with AI

A few things I'll carry into the next project:

**AI tools are amplifiers, not replacements for thinking.** If you haven't done the thinking work — what exactly do you want, what are the constraints, what are the edge cases — giving that unclear thinking to Claude produces unclear results, faster. The quality of the output is roughly proportional to the quality of the thinking you bring in.

**Iteration beats perfection in prompts.** Don't try to write the perfect prompt upfront. Write a prompt, see what comes back, figure out specifically what's wrong, adjust. The feedback loop is fast enough that iteration is better than trying to get it right in one shot.

**Negative constraints matter.** Telling Claude what not to do is as important as telling it what to do. Especially for design work, where Claude's default is to maximize visual complexity and demonstrate capability. "No animations, no custom graphics, no hardcoded content" did as much work as the positive requirements.

**The architecture discussion is more valuable than the code generation.** The most useful thing I did with Claude was talking through the file structure, the data flow, the markdown parsing approach — before any code was written. Once the architecture was clear and agreed, the code generation was relatively straightforward.

## Is the site done?

No. It's v1. There are things I want to add — individual project pages, maybe a search function, better typography. But it's live, it works, and it's genuinely mine. I understand every file in this codebase, which means I can change any of them.

That last part matters more than people acknowledge. A site you don't understand is a liability. A site you built is an asset.

Next up: the personal assistant.
