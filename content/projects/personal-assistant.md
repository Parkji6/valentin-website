---
title: "Personal Assistant"
tagline: "One AI-generated morning briefing — email, calendar, news, and weather in a single view."
category: "Productivity"
year: 2026
status: "In progress"
order: 3
problem: "My morning information is scattered across five apps — email, calendar, news, weather, tasks — and pulling it together every day is friction I wanted to remove."
tech: ["Next.js", "Claude API", "Vercel"]
learned: "Early lesson: the hard part isn't calling the model, it's deciding what's worth showing. A good assistant is mostly good filtering."
githubUrl: "https://github.com/Parkji6"
---

## Overview

Every morning I open the same five apps in the same order: email, calendar, a news site, the weather, my task list. None of it takes long on its own, but the context-switching does — and by the time I've checked everything I've already lost the thread of what actually matters today.

The Personal Assistant is my attempt to collapse that ritual into a single screen: one AI-generated briefing that reads my inputs, decides what's worth surfacing, and gives me the day in a paragraph instead of five tabs.

This one is still **in progress** — what follows is how it's designed and what I've learned building it so far, not a finished product.

## The problem

The issue was never access to information. It's that the information is *fragmented* and *unfiltered*. Email shows me 40 messages when 3 matter. The calendar shows raw events with no sense of which one I should prepare for. News shows everything; I want the two things relevant to me.

I didn't want another dashboard with more widgets. I wanted something that does the triage I normally do in my head — and just tells me the answer.

## How it works

The assistant runs as a single morning job and produces one briefing made of a few sections:

- **The headline** — Claude reads the day's calendar and unread email and writes a two-sentence summary of what actually matters today.
- **Email triage** — instead of an inbox, I get "3 things need a reply, 1 is time-sensitive" with the rest collapsed.
- **Calendar in context** — events annotated with what to prepare, not just times.
- **Signal, not noise** — weather and the one or two news items relevant to me, nothing else.

The model isn't doing anything magical here. The value is in the prompt: telling Claude exactly what "matters" means for me, and giving it enough context to make that call.

## The approach

A few decisions that shaped the build:

- **It runs on my own keys, with my own data.** That's a feature, not a limitation — but it's also why this stays private. Nothing leaves my environment.
- **Pull, summarize, discard.** The assistant fetches raw data, asks Claude to compress it, and keeps only the briefing. It doesn't try to be a second inbox.
- **One job a day.** No real-time anything. A morning briefing is a batch problem, and treating it that way keeps it cheap and simple.

## What's hard (the honest part)

The modelling is the easy 20%. The hard 80% is:

- **Deciding what "important" means** in a way that's consistent day to day. Too aggressive and it hides things I needed; too cautious and it's just the inbox again.
- **Trusting the filter.** It took a while before I stopped double-checking the assistant against the real inbox — and that trust is the entire point.
- **Auth and access.** Connecting to real email and calendar data securely is more work than the AI part.

## Status

Currently building. A full walkthrough with real screenshots is coming soon. If you'd like an early look or want to compare notes on building something similar, [request access](mailto:valentin.houssais@gmail.com?subject=Personal%20Assistant%20access).
