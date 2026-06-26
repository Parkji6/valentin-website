---
title: "The hardest part of my AI assistant wasn't the AI"
date: "2026-06-20"
excerpt: "Wiring up the model took an afternoon. Then I spent three weeks on a problem the API couldn't solve for me: teaching it what 'important' means — and learning to trust it."
---

I can tell you exactly how long the "AI" in my AI assistant took to build: one afternoon. The Claude API call that turns a messy inbox and a day of calendar events into a two-sentence summary — that part worked almost immediately.

Then I spent the next three weeks on a problem the model could not solve for me. And that's the part worth writing about, because it's the part every "build an AI assistant" tutorial skips.

## The 20% everyone talks about

The premise was simple. Every morning I check five things — email, calendar, news, weather, tasks — and what I really do is triage: figure out what matters and ignore the rest. I wanted software to do that triage and just tell me the answer.

So I wrote the obvious version. Fetch the data, hand it to Claude, ask for a summary. It produced a clean morning briefing on the first real try. I thought I was almost done.

I was about 20% done.

## The 80% nobody mentions

Here's the question that ate three weeks: **what does "important" actually mean?**

The model will happily summarize anything. But a summary isn't triage. Triage is *judgment* — and judgment needs a definition. My first prompts were too aggressive: the assistant confidently buried an email I needed, because nothing told it that messages from one particular person are never noise. Then I overcorrected, and it surfaced so much that I'd rebuilt my inbox with extra steps.

Every useful iteration was on that one prompt — encoding what matters *to me*, specifically, in a way that stays consistent from a quiet Tuesday to a chaotic Monday. None of it was code. All of it was deciding what to throw away.

## The part I didn't expect: trust

Even once the triage was good, I hit a wall I hadn't planned for.

For the first week, every morning, I read the briefing — and then opened my actual inbox to check it. Of course I did. It was hiding things from me, on purpose, and I didn't yet believe it was hiding the *right* things.

But that habit defeats the entire project. The value isn't a nicer inbox. The value is *not opening the inbox at all*. And that only works the day you trust the filter enough to let the hidden things stay hidden.

Building the feature took an afternoon. Building the trust took weeks — and it wasn't a code problem at all. It was watching it make the same call I would have made, enough mornings in a row that I stopped checking.

## What I actually learned

The lesson generalizes well beyond a morning briefing: **with these tools, generating is easy and deciding is hard.** The model removes the cost of producing an answer. It does nothing to remove the cost of knowing which answer is right — and that's where the real work moved.

So if you're building something with AI and the model part felt suspiciously quick, you're probably not 80% done. You're 20% done, and about to start the interesting part.

The assistant still gets the occasional morning wrong, and I haven't solved how to teach it from my corrections yet. But most days now, I open one screen instead of five — and I leave the inbox closed.
