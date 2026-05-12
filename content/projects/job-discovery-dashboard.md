---
title: "Job Discovery Dashboard"
status: "Shipped"
problem: "Executive job searching is time-consuming and scattered across multiple platforms"
tech: ["Node.js", "Adzuna API", "GitHub Actions", "Vercel"]
image: "/images/projects/job-discovery-dashboard.png"
imageAlt: "Job discovery dashboard showing ranked executive opportunities"
learned: "Learned how to build a real automated data pipeline, debug GitHub Actions, and why AI-generated data is useless without real API integrations"
liveUrl: "https://job-hunt-gray.vercel.app/"
githubUrl: "https://github.com/Parkji6/job-hunt"
---

## Overview

I built a personal job discovery dashboard that automatically fetches real executive-level opportunities every morning, scores them against my criteria, and publishes a ranked list to a live dashboard — no manual searching required.

## The Problem

Executive job searching is fragmented. Roles at C-Level, VP, and Director level are spread across LinkedIn, Wellfound, company sites, and niche boards. Checking all of them manually every day is a job in itself. I wanted a system that would surface the right opportunities automatically, filtered to my exact criteria: location (Warsaw first, EU remote second), function areas (Revenue, Product, Growth, Operations, Marketing, Ecommerce, CRM), and language (English, French, or Spanish only).

## The Honest Mistake I Made First

My first version looked great — beautiful dashboard, scored opportunities, detailed summaries, working links. Except none of it was real. The AI had hallucinated every job listing, every company name, every salary, every link. The "Chief Revenue Officer at TechScale Growth Fund" didn't exist. Neither did the company.

This was a useful lesson: **AI can generate convincing structure around fake data**. A polished format is not a signal of real content. The moment I tried to click "View Full Post", everything broke.

## The Real Solution

I rebuilt the data pipeline from scratch using the **Adzuna API** — a real job aggregator with a free tier that covers Poland and Europe. The script:

- Runs 27 targeted search queries across 4 countries (PL, GB, NL, FR)
- Filters out Polish-language postings (detected via diacritic density)
- Excludes purely on-site roles outside Poland
- Requires GTM/growth scope for Marketing roles (not pure brand/comms)
- Scores each result 0–100 based on seniority, location tier, language, and company context
- Writes real job data with real links to the dashboard

A **GitHub Action** runs the script every morning at 6:00 AM UTC, commits the fresh results, and Vercel auto-deploys the updated dashboard in seconds.

## What I Learned

1. **Fake data is worse than no data** — a working system built on hallucinated inputs gives you false confidence while wasting your time
2. **Real APIs exist for almost everything** — Adzuna has a generous free tier; I was using 28 of their 1000 daily requests
3. **GitHub Actions debugging requires patience** — re-running a failed job re-uses the old commit SHA, which means fixes never apply; always trigger a fresh dispatch
4. **Filters compound quickly** — combining Polish-language detection, on-site exclusion, seniority check, and function matching dropped 132 raw results to ~20 genuinely relevant ones per day

## Tech Stack

- **Data:** Adzuna API (free, real job postings, real links)
- **Script:** Node.js (no dependencies — native fetch, fs, path)
- **Automation:** GitHub Actions (daily cron at 6:00 AM UTC)
- **Frontend:** Static HTML + vanilla JavaScript
- **Deployment:** Vercel (auto-deploys on every push)
