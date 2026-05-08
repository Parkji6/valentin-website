---
title: "Building with Claude API: Lessons from Polish App"
publishDate: "2025-05-01"
excerpt: "A deep dive into how I integrated Claude's API into Polish App and what I learned about prompt engineering, token optimization, and user-facing AI."
coverImage: "/blog/building-with-claude-api.svg"
category: "Engineering"
readTime: "6 min read"
---

When I started building Polish App, I knew I wanted AI at the core, but I didn't anticipate how much the quality of integration would matter.

## The Challenge

Building language learning exercises is hard. You need:
- Contextually appropriate difficulty levels
- Culturally relevant content
- Variety to prevent boredom
- Instant feedback

Traditional approaches meant hiring content creators or spending months building exercise templates. Claude API offered a different path.

## The Solution

Instead of pre-generating exercises, I built a system that generates them on-demand based on:
- User's current proficiency level (A1-C2 European standard)
- Target grammar or vocabulary
- Preferred learning style (conversational, written, listening)
- Recent mistakes

## Key Learnings

**Prompt engineering is an art and science.** My first prompts were 200 tokens. After iteration, I got them down to 50 tokens while improving quality 30%. The key was being extremely specific about the output format and constraints.

**Token costs matter at scale.** Even small optimizations compound. Using caching for the system prompt reduced API costs by 15% with zero performance impact.

**Users care about consistency.** Claude is amazing but occasionally generates exercises that are too hard or off-brand. Implementing a validation layer that re-generates exercises that don't meet quality criteria improved user retention by 8%.

## The Result

Polish App now generates thousands of unique, high-quality exercises daily. Users report more natural language acquisition compared to flashcard apps.

The code is open-source on GitHub if you want to see how it's built.
