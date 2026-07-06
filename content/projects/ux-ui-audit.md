---
title: "UX / UI Audit"
tagline: "Point it at a screen and get a structured, prioritized UX/UI critique."
category: "Design"
year: 2026
status: "In progress"
order: 8
problem: "Good UX feedback is slow and subjective. I wanted a tool that gives a consistent, structured critique of a screen — heuristics, accessibility, and visual hierarchy — in seconds."
tech: ["Next.js", "Claude API", "Vercel"]
learned: "AI is sharp on the objective layer — hierarchy, contrast, consistency — and weak on taste. Scoping it to what it's good at is the whole trick."
githubUrl: "https://github.com/Parkji6"
---

## Overview

UX / UI Audit reviews a screen or flow and returns a structured critique — usability heuristics, accessibility issues, and visual-hierarchy notes — ranked by impact. Consistent feedback in seconds, instead of waiting on a review.

## What it does

- **Input** — provide a screenshot or a URL.
- **Analyze** — evaluates against established UX/UI heuristics.
- **Report** — prioritized findings with concrete, specific suggestions.
- **Accessibility** — flags contrast, hierarchy, and legibility problems.

## How it's built

- **Next.js + Claude API**, deployed on Vercel.
- The screen is evaluated against a fixed heuristic checklist, which keeps the critique consistent and scopes it to issues AI can judge reliably.

## Status

In progress. Real screenshots and a live walkthrough are coming soon. [Request access](mailto:valentin.houssais@gmail.com?subject=UX%20UI%20Audit%20access) for an early look.

_For the story behind it, see: [Where AI design feedback helps — and where it doesn't](/journal/where-ai-design-feedback-helps)._
