---
title: "Where AI design feedback helps — and where it doesn't"
date: "2026-05-28"
excerpt: "I built a tool that critiques UX/UI. It's genuinely useful for some things and confidently wrong about others — and the line between them is the whole product."
---

I built a UX/UI audit tool because good design feedback is slow, expensive, and inconsistent. Point it at a screen, get a structured critique in seconds. Along the way I learned something more useful than the tool itself: exactly where AI design feedback is sharp, and exactly where it's confidently wrong. The product is really just that line, drawn carefully.

## Where it's genuinely sharp

AI is excellent at the *objective layer* of design — the parts that have rules:

- **Visual hierarchy** — what your eye hits first, whether the most important thing is actually the most prominent.
- **Contrast and legibility** — accessibility issues a model can check against real thresholds.
- **Consistency** — spacing, type scales, and component usage that drift without anyone noticing.
- **Heuristic violations** — the well-documented usability principles that have been written down for decades.

On these, the tool is often better than a human reviewer, because it never gets tired, never skims, and applies the same checklist to the hundredth screen as the first. This is the layer with right answers, and AI is good at layers with right answers.

## Where it's confidently wrong

Then there's the *taste layer*, and here the same model that just nailed your contrast ratios will say something that sounds authoritative and means nothing.

Ask it whether a design feels premium, or trustworthy, or on-brand, and you get fluent, plausible, useless feedback — because those judgments depend on context, audience, and a sense of taste that isn't in the pixels. It doesn't know your brand. It doesn't know your user. It will still happily render a verdict, which is exactly the trap.

The danger isn't that AI is bad at taste. It's that it's bad at taste *with the same confidence* it's good at hierarchy. Nothing in the tone tells you which kind of feedback you just got.

## So the product is the scope

That's why UX / UI Audit deliberately stays on the objective layer. It evaluates against a fixed heuristic and accessibility checklist and reports those findings. It doesn't tell you whether your design is beautiful, because that's the question it can't answer honestly — and pretending otherwise would poison trust in the answers it *can* give.

## The takeaway

The most useful thing I can do with an AI tool is often to *narrow* it — to take away the questions it answers confidently but wrongly, so the answers that remain are ones you can actually trust. With design feedback, that means letting AI handle the rules and leaving the taste to a human.

UX / UI Audit is still in progress, but its scope is the point, not a limitation.
