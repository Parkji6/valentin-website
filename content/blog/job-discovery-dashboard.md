---
title: "I built a job discovery system — and the first version was entirely fake"
date: "2026-05-12"
slug: "job-discovery-dashboard"
excerpt: "My automated executive job search dashboard looked great: scored opportunities, real companies, working links. Except none of it existed. Here's what I learned rebuilding it with a real API."
---

## The dashboard that fooled me

Last week I asked Claude to help me build a daily job discovery system. I'm at a stage in my career where I want to stay on top of executive opportunities — C-Level, VP, Director roles in Revenue, Product, Growth, Operations — without spending an hour every morning on LinkedIn.

The first version looked impressive. A clean dashboard, 14 ranked opportunities with scores out of 100, salary ranges in EUR, companies in Warsaw and across Europe. A "View Full Post" button on every card.

I showed it to myself and thought: this is exactly what I needed.

Then I clicked a link.

404. Every single one.

## What actually happened

The AI had generated all of it. The companies (TechScale Growth Fund, FinFlow Ventures, SecureVault Tech), the salaries (€140–180K), the job descriptions, the scores, the links — every piece of data was hallucinated to fit the format I'd asked for.

The URLs looked plausible: `linkedin.com/jobs/view/cro-techscale-warsaw-2026`. Real LinkedIn job URLs are numeric IDs like `/jobs/view/3987654321`. Mine had slugs. No AI would know the actual ID of a job posting — because it doesn't have access to LinkedIn's database.

I'd built a beautiful interface around invented data. The system *looked* like it worked. It just didn't do anything real.

This is a specific failure mode worth naming: **AI can generate convincing structure around fake content**. A polished format is not evidence that the underlying data is real. I should have checked a link on day one.

## Rebuilding it properly

The core question was: what real data source exists for executive job postings in Europe?

LinkedIn's API is gated (you need a partner agreement). Scraping it violates their ToS. Google Jobs aggregates from everywhere but has no clean public API. After some research, I landed on **Adzuna** — a job aggregator with a genuine free tier (1000 requests/day) that covers Poland and major European markets. It returns real job postings with real redirect URLs pointing to the original source.

I built a Node.js script that:

1. Runs 27 targeted searches (one per role type per function area) across Poland, UK, Netherlands, and France
2. Filters each result through my criteria — seniority level, location tier, language, function area
3. Scores each job 0–100 based on those same dimensions
4. Writes the results to a JSON file the dashboard reads from

The filtering alone took several iterations. Early issues:
- **Polish-language postings**: Polish companies post in Polish. My filter initially only checked for "Polish required" in English — which obviously doesn't appear in a Polish-language posting. Fix: count Polish-specific diacritics (ą, ę, ó, ś, ź, ż, ć, ń, ł). More than 8 in a posting = skip it.
- **"Executive Assistant to the CRO"**: my title filter was matching on "CRO" and passing this through. Fix: add "assistant" to the exclusion list.
- **Pure marketing roles**: my config says Marketing should only be included when combined with GTM or commercial scope — not pure brand or comms roles. Fix: for Marketing function results, require GTM/growth/revenue keywords in the description.
- **On-site roles outside Poland**: the config says to exclude fully on-site roles outside Warsaw unless remote or hybrid is mentioned. Early version was scoring them 20 points and letting them through. Fix: hard filter — if not Poland and no remote/hybrid mention, skip.

After all the filters, I went from 132 raw results to ~20 genuinely relevant ones per day. That's the right ratio.

## Automating it

The script runs daily via GitHub Actions — a cron job at 6:00 AM UTC (7–8 AM Warsaw time depending on summer/winter). It fetches jobs, commits the updated data file, and Vercel auto-deploys the dashboard in about 30 seconds.

Getting GitHub Actions to work correctly took longer than expected. A few things I ran into:

**Node.js deprecation warnings**: the `actions/checkout` and `actions/setup-node` actions internally use Node 20, which is being deprecated. Fix: add `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` at the workflow env level.

**Re-running failed jobs is a trap**: when you click "Re-run failed jobs" in GitHub Actions, it re-runs using the exact same commit SHA as the original failed run. So any fixes you've pushed to the repo are invisible to that re-run. Always trigger a fresh dispatch from the workflow page instead.

**Write permissions**: GitHub Actions needs `permissions: contents: write` in the workflow to be able to commit and push files back to the repo. Easy to miss.

## What the final system looks like

Every morning, without me doing anything:
- The Action fetches ~18–25 qualified executive opportunities
- Each has a real title, real company, real salary (when disclosed), real posting date, and a real link to the original job
- They're scored and ranked by fit to my profile
- The dashboard on Vercel updates automatically

The whole thing runs on free tiers. Adzuna's free API, GitHub Actions free minutes, Vercel free hosting. Zero ongoing cost.

## What I actually learned

**Check your links on day one.** If a system produces links and you don't verify they work before building everything else around them, you're building on sand.

**Real APIs exist for almost everything.** I assumed job data would be locked behind enterprise contracts. Adzuna has a free tier that covers my entire use case. Ten minutes of research would have saved me from building a fake system first.

**Filters compound in useful ways.** Each individual filter (language detection, seniority check, location tier, function matching) removes a small percentage of noise. Combined, they turn a firehose of irrelevant postings into a short list of actually relevant ones.

**GitHub Actions debugging is easier when you understand what "re-run" means.** Half my debugging time was wasted because I kept re-running old commits. Once I understood that "re-run" ≠ "run latest code", everything clicked.

The dashboard is live. Tomorrow morning it will update itself. That's the part I'm most happy about.
