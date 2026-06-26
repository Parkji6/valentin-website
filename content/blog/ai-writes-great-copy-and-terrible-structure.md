---
title: "AI writes great copy and terrible structure"
date: "2026-04-20"
excerpt: "Building a landing-page generator taught me where AI stops being useful. The words came out great on the first try. The order they went in did not."
---

When I started building Landing Page Studio, I assumed the hard part would be the writing. It wasn't. The copy was good almost immediately — punchy headlines, clear feature blurbs, a CTA that didn't sound like a robot wrote it. I was impressed.

Then I looked at the *page* it had assembled, and it was wrong in a way I couldn't immediately name.

## Good sentences, wrong page

The individual pieces were all fine. The problem was the order. The model defaulted to the same generic structure every time — hero, then a wall of features, then a CTA — regardless of what the product actually needed. A tool that lives or dies on trust got no social proof near the top. A simple product got a six-section page when it needed three.

That's when it clicked: **the hard part of a landing page isn't the words. It's deciding what to say, in what order.** And that's a judgment problem, not a writing problem.

## Why structure is the hard part

Writing a good feature blurb is a local task — the model only needs the feature. But sequencing a page is a *global* task. It depends on who's reading, what they're skeptical about, and where their attention will be by the time they reach the CTA. That context isn't in any single sentence, so the model can't infer it from the words alone.

Left to its own devices, AI does the same thing it did with my trip plans: it reaches for the average. The average page structure is fine for the average product, which is to say it's wrong for yours.

## What actually worked

The fix wasn't a better writing prompt. It was taking structure *away* from the model as an open-ended decision. Instead of "write me a landing page," Landing Page Studio picks from a set of proven structures based on the product type, then asks the model to fill each section. The AI does what it's genuinely great at — writing the copy — and the sequencing decision is made by rules I can reason about.

## The takeaway

I keep relearning the same thing: AI is excellent at the *local* craft and unreliable at the *global* judgment. Copy is local. Structure is global. The trick to building something useful is figuring out which parts of the problem are which — and not handing the model the part it'll quietly get wrong.

Landing Page Studio is still in progress, but it already produces pages that feel designed rather than assembled. The model writes the words. It just doesn't get to decide the shape.
