---
title: "Dashboards tell you what changed. I wanted to know why"
date: "2026-03-18"
excerpt: "I built a tool to explain why my numbers moved. Then I learned AI will confidently explain anything — including pure noise. That problem became the whole project."
---

Every dashboard I've ever used is great at one thing and useless at another. It can tell me, precisely, that a number went up 12% this week. It cannot tell me *why*. And "why" is the only thing I actually wanted to know.

So I started building Perf Desk: pull the metrics, find what moved, and use AI to explain the cause. The first version worked on day one. That turned out to be the problem.

## The trap of a confident explanation

I fed it a metric that had jumped, and it gave me a crisp, plausible explanation. Great. Then, to test it, I fed it a metric that had moved by a trivial, meaningless amount — the kind of wiggle every number does week to week.

It gave me an equally crisp, equally plausible explanation.

That's when my stomach dropped a little. The model wasn't analyzing whether the change was real. It was doing what it's built to do: produce a fluent narrative for whatever I handed it. It will explain a genuine 40% drop and random noise with exactly the same confidence — and the second one is worse than useless, because it manufactures a story where there's nothing to explain.

## Signal is the hard part, not explanation

This is the same lesson my [fake job data](/blog/job-discovery-dashboard) taught me, in a new outfit: AI generates convincing structure around anything, so the structure tells you nothing about whether the underlying thing is real.

The valuable part of Perf Desk turned out not to be the explanations at all. It was everything *before* the explanation — deciding which moves are even worth explaining. A number that drifts inside its normal range shouldn't get a story. It should get silence.

## What the tool actually does now

So the real work went into the filter. Perf Desk diffs each metric against its expected range and only hands the genuine outliers to the model. Everything else is labeled as normal variance and kept out of the briefing entirely. The AI never sees the noise, so it can't invent a reason for it.

The explanation was the easy, flashy part. The discipline to say "this is probably nothing" was the part worth building.

## The takeaway

A tool that explains everything explains nothing. With AI, the temptation is to point it at all your data and let it talk. The more useful move is almost always the opposite: decide what deserves an explanation first, and protect the model from the noise that would make it lie to you with a straight face.

Perf Desk is still in progress, but its most important feature is the one that stays quiet.
