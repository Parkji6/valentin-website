---
title: "Perf Desk"
icon: "📈"
tagline: "A performance review desk — pull the numbers, surface what changed, explain why."
category: "Analytics"
year: 2026
status: "In progress"
order: 6
problem: "Dashboards are great at showing what changed and useless at explaining why. I spend more time hunting for the cause of a number moving than I do reading the number itself."
tech: ["Next.js", "Claude API", "Vercel"]
learned: "AI will confidently explain any movement — including pure noise. The hard part is teaching it to say 'this is probably nothing.'"
githubUrl: "https://github.com/Parkji6"
---

## Overview

Perf Desk is a desk for reviewing performance data: it gathers the metrics, highlights the changes that actually matter, and uses AI to explain the likely *why* behind them — so I'm not stuck staring at a dashboard guessing.

## What it does

- **Pull** — collects the relevant metrics into one place.
- **Surface** — flags what changed and by how much, filtering out normal variance.
- **Explain** — an AI-generated narrative on the likely causes of a real move.
- **Focus** — separates signal from noise so the briefing stays short.

## How it's built

- **Next.js + Claude API**, deployed on Vercel.
- Metrics are diffed against expected ranges; only meaningful moves are passed to Claude for a cause-and-effect explanation.

## Status

In progress. Real screenshots and a live walkthrough are coming soon. [Request access](mailto:valentin.houssais@gmail.com?subject=Perf%20Desk%20access) for an early look.

_For the story behind it, see: [Dashboards tell you what changed. I wanted to know why](/journal/dashboards-tell-you-what-changed-not-why)._
