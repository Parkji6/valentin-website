---
title: "Trip Companion"
tagline: "Context-aware trip planning with AI — itineraries, budgets, and activities that actually fit."
category: "Travel"
year: 2026
status: "In progress"
order: 4
problem: "Generic AI trip plans ignore the things that matter — real budgets, travel pace, and the specific reasons you're going. I wanted a planner that adapts to context, not a templated list."
tech: ["Next.js", "Claude API", "Vercel"]
learned: "Generic plans aren't a creativity problem — they're a constraints problem. The fix was making the user define the rules first."
githubUrl: "https://github.com/Parkji6"
---

## Overview

Trip Companion builds travel itineraries around the constraints that actually shape a trip — budget, dates, pace, and why you're going — instead of producing the same generic list everyone else gets. You set the rules; it plans within them.

## What it does

- **Constraints first** — you set a budget ceiling, a pace, and any must-dos or never-dos before anything is planned.
- **Itinerary** — a day-by-day plan tuned to your pace and interests, not a checklist of the top-10 sights.
- **Budget that holds** — estimates that stay within your target, with trade-offs surfaced.
- **Grounded activities** — suggestions tied to where you actually are and what's actually open.

## How it's built

- **Next.js + Claude API**, deployed on Vercel.
- The user's constraints become a structured brief; Claude plans **within** them, and the result is validated against the budget before it's shown.

## Status

In progress. Real screenshots and a live walkthrough are coming soon. [Request access](mailto:valentin.houssais@gmail.com?subject=Trip%20Companion%20access) for an early look.

_For the story behind it, see: [Generic AI trip plans are useless — the fix wasn't creativity](/journal/generic-ai-trip-plans-are-useless)._
