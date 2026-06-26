---
title: "I'm building an AI assistant that does one thing: my morning"
date: "2026-06-20"
excerpt: "Not a chatbot, not a second inbox — just one morning briefing that triages email, calendar, news, and weather into a paragraph. Here's the thinking so far."
---

Most "AI assistant" demos try to do everything: chat, search, automate, remember. I went the other way. I'm building one that does a single thing well — give me my morning in one screen — and I want to write down what I've learned while it's still unfinished, because the unfinished part is the interesting part.

## The actual problem

Every morning I check the same five things: email, calendar, news, weather, tasks. The problem was never *access*. It was that all of it is fragmented and unfiltered. My inbox shows 40 messages when 3 matter. My calendar lists events with no sense of which one needs prep. The news shows everything.

What I actually do every morning is triage — in my head, across five tabs. I wanted software that does that triage and just tells me the answer.

## Why not a dashboard

My first instinct was a dashboard: pull everything into one page with widgets. I'm glad I stopped, because a dashboard would have solved the wrong problem. More widgets is still more to scan. I didn't want my information in one place — I wanted *less* of it, chosen well.

That reframing changed the whole project. The assistant's job isn't to display data. It's to throw most of it away and explain what's left.

## What it does

The assistant runs once each morning and writes a short briefing:

- A two-sentence **headline** of what matters today, written from my calendar and unread email.
- **Email triage**: "3 need a reply, 1 is time-sensitive" instead of an inbox.
- **Calendar in context**: events annotated with what to prepare.
- **Signal only**: weather plus the one or two news items actually relevant to me.

Under the hood it's not complicated. Fetch the raw data, hand it to Claude with a very specific prompt about what "important" means for me, keep the summary, discard the rest.

## The lesson so far: the model is the easy part

Here's the thing nobody tells you. Calling the API is 20% of the work. The other 80% is:

**Defining "important."** This is genuinely hard. Too aggressive and the assistant hides something I needed. Too cautious and it's just my inbox with extra steps. Most of my iterations have been on this one prompt, not on code.

**Learning to trust the filter.** For the first week I checked the assistant against my real inbox every morning. Of course I did — it was hiding things. But that defeats the purpose. The whole value is *not* opening the inbox, and that only works once you trust the triage. Building the trust took longer than building the feature.

**The boring infrastructure.** Securely connecting to real email and calendar data is more work than anything AI-related. It always is.

## Why it stays private

The assistant runs on my own API keys and reads my own email and calendar. That's deliberate — it's the only way it can be genuinely useful — but it's also why it isn't a public demo. If you want to see it or build your own version, I'm happy to walk through it.

## Where it's going

It's not done. The triage prompt still gets the call wrong some mornings, and I haven't solved how to teach it from my corrections yet. But it already does the thing I built it for most days: I open one screen instead of five, and I start the day knowing what matters.

I'll write a follow-up once it's stable — with real screenshots and the prompt that finally worked.
