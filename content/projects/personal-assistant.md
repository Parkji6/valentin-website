---
title: "Personal Assistant"
icon: "☀️"
tagline: "One AI-generated morning briefing — email, calendar, news, and weather in a single view."
category: "Productivity"
year: 2026
status: "In progress"
order: 3
problem: "My morning information is scattered across five apps — email, calendar, news, weather, tasks — and pulling it together every day is friction I wanted to remove."
tech: ["Next.js", "Claude API", "Vercel"]
learned: "The hard part isn't calling the model — it's deciding what's worth showing. A good assistant is mostly good filtering."
githubUrl: "https://github.com/Parkji6"
---

## Overview

The Personal Assistant collapses my morning routine — five apps, same order, every day — into a single AI-generated briefing. One screen instead of five tabs. It reads my inputs, decides what's worth surfacing, and gives me the day in a paragraph.

## What it does

- **Headline** — two sentences on what actually matters today, drawn from my calendar and unread email.
- **Email triage** — "3 need a reply, 1 is time-sensitive" instead of a 40-message inbox.
- **Calendar in context** — events annotated with what to prepare, not just start times.
- **Signal only** — the weather and the one or two news items actually relevant to me.

## How it's built

- **Next.js + Claude API**, deployed on Vercel.
- Runs as **one batch job each morning**: fetch the raw data, ask Claude to compress it against a definition of "important," keep the briefing, discard the rest.
- Runs entirely on **my own keys and data** — which is exactly why it stays private.

## Status

In progress. Real screenshots and a live walkthrough are coming soon. Want an early look or to compare notes on building something similar? [Request access](mailto:valentin.houssais@gmail.com?subject=Personal%20Assistant%20access).

_For the story of what was actually hard to build, see the article: [The hardest part of my AI assistant wasn't the AI](/journal/the-hardest-part-of-my-ai-assistant)._
