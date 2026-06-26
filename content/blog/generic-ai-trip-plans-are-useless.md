---
title: "Generic AI trip plans are useless — the fix wasn't creativity"
date: "2026-05-15"
excerpt: "Ask any AI to plan a trip and you get a Buzzfeed listicle. I assumed the model needed to be more creative. It needed the opposite: hard constraints."
---

The first time I asked an AI to plan a trip, I got exactly what everyone gets: a confident, well-formatted list of the top sights, a "hidden gem" that 4 million people have visited, and a daily plan that assumed I had unlimited money and the energy of a tour group. It was useless — not because it was wrong, but because it was *generic*.

My first instinct was that the model needed to be more creative. I was completely wrong. It needed to be more constrained.

## Why generic happens

A trip plan with no constraints has nothing to optimize for, so it optimizes for the average traveler — which is nobody. Ask for "three days in Lisbon" and the only signal is "Lisbon," so you get the statistical center of every Lisbon itinerary on the internet.

The model isn't failing. It's doing the only thing it can with the information it has. The missing ingredient was never creativity. It was *me telling it the rules*.

## The fix: constraints first

So I flipped the flow. Before Trip Companion plans anything, it makes you commit to the things that actually shape a trip:

- A **budget ceiling** — a real number, not "affordable."
- A **pace** — am I doing three things a day or one?
- **Must-dos and never-dos** — the one thing I'm actually going for, and the things I'll never enjoy.

Only then does it plan — and crucially, it plans *within* those constraints rather than treating them as suggestions. The budget isn't a note at the bottom; it's a hard wall the itinerary has to fit inside.

The difference is night and day. The same model that gave me a generic listicle gives me a genuinely personal plan once it knows the rules it has to respect.

## The lesson

This keeps showing up in everything I build with AI: **a vague prompt doesn't get a creative answer, it gets an average one.** The work isn't coaxing the model to be more imaginative. It's removing the ambiguity that forces it toward the average in the first place.

Constraints feel like they'd make the output worse. With these tools, they're usually what makes it good.

Trip Companion is still in progress — I'm working on how it handles trade-offs when two constraints collide (a tight budget versus a must-do that's expensive). But the core lesson is already baked in: ask for the rules first, and the plan stops being generic.
