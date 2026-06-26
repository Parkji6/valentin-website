---
title: "How I built a Polish learning app after Duolingo failed me"
date: "2025-05-05"
slug: "polish-app-after-duolingo"
excerpt: "I finished Duolingo's Polish course and still couldn't hold a conversation. So I built my own learning tool using Claude. Here's what I learned about language, AI, and shipping your first real product."
---

## Duolingo works. Just not for what I needed.

I want to be fair: Duolingo is a good product. It's well-designed, genuinely fun, and it works for what it's designed to do — keep you consistent and teach you vocabulary.

The problem is that vocabulary isn't language.

After finishing the Polish course, I could recognise a lot of words. I could answer multiple choice questions about Polish grammar. I could not order food at a restaurant in Warsaw without panicking.

The gap is context. Duolingo teaches you words in isolation. Real language happens in situations — messy, unpredictable, fast-moving situations where you need to retrieve the right word under pressure and string it together with grammar you only half-remember.

I needed something different. I decided to build it.

## The idea

The insight was simple: Claude can generate contextual language lessons on demand. Instead of pre-recorded exercises, I could ask Claude to create a lesson around any specific scenario — ordering coffee, asking for directions, talking about your job — and it would generate vocabulary, a practice dialogue, and comprehension questions.

Personalized, on-demand, context-first language learning. That was the goal.

## What I actually built

The app is a Next.js web app. You pick a scenario (from a list, or type your own), and it calls the Claude API to generate a lesson. The lesson includes:

- Key vocabulary for that scenario (with Polish, English, and pronunciation guide)
- A short dialogue you can read through
- Three questions to test your understanding
- A "try it yourself" prompt where you write a response in Polish and Claude gives feedback

That last part was the interesting one. Real-time feedback on your Polish writing, tailored to your level. Not a red-or-green "correct/incorrect" — actual comments explaining what you got right, what was off, and how to improve.

## The technical reality

The first version took me about a week of evenings.

Getting the Claude API working was fast — honestly, simpler than I expected. The harder parts were:

**Prompt engineering.** Getting Claude to return structured lesson content consistently required more iteration than I anticipated. My first prompts returned good content, but in formats that were inconsistent or hard to parse. I ended up asking for JSON output and validating it on the client. That helped a lot.

**State management.** I wanted the app to remember your progress — which scenarios you'd done, what vocabulary you'd seen before, what mistakes you'd made. Storing that in localStorage worked for a prototype, but it's not elegant. This is still an area I want to improve.

**Cost.** Each lesson generation costs Claude API tokens. For my personal use it's negligible. If this were a product with real users, I'd need to think harder about caching common scenarios and being smarter about what I send to the API. Something I learned to think about early.

## What surprised me

A few things I didn't expect:

**The quality of the content was immediately good.** I expected to spend a lot of time tweaking prompts to get decent lessons. The first structured prompt I wrote produced genuinely useful content. Claude is good at this — it has enough language knowledge to generate accurate, natural Polish in context.

**Users immediately noticed the difference.** I shared the app with a few people learning Polish. The feedback was consistent: the contextual approach felt more like real learning than anything they'd used before. People engaged differently with lessons that felt like actual situations rather than exercises.

**Debugging is different with AI.** When something goes wrong in traditional software, you trace the error. When the AI produces unexpected output, you're debugging your prompt — which requires a different kind of thinking. You're not reading stack traces; you're thinking about how your instructions could be misinterpreted. It's a skill, and it took some getting used to.

## What I'd do differently

If I built this again from scratch:

**Start with the prompt, not the UI.** I spent too much time on interface before I had the content generation working well. The right order is: get the AI output exactly right, then build the interface around it.

**Think about caching from day one.** Common scenarios (ordering food, introductions, directions) could be pre-generated and cached, reducing API costs significantly. I added this thinking later; it should have been in the architecture from the start.

**Make it mobile-first.** Language learning happens on the go. The web app works on mobile but it wasn't designed for it. If I revisit this, a proper mobile experience would make it more useful.

## The live app

The app is private (it runs on my own API keys), but I'm happy to give a walkthrough or access on request — just [email me](mailto:valentin.houssais@gmail.com?subject=Polish%20App%20access).

The code is on GitHub: [github.com/Parkji6/polish-app](https://github.com/Parkji6/polish-app)

It's not polished. It's a real tool I use, built by someone who was learning both Polish and how to build with AI at the same time. The imperfections are part of the documentation.

## What this project taught me

Beyond the technical stuff, this project gave me something more important: proof that I could ship something. Something that works, that real people use, that I built myself.

That sounds obvious. It wasn't. Before this, I'd started half a dozen side projects and abandoned all of them. This one is live. That changes how you think about the next one.

The Polish is getting better too.
