---
title: "Building with Claude API: Lessons from Polish App"
date: "2025-05-08"
slug: "building-with-claude-api"
image: "/images/blog/claude-api.png"
imageAlt: "Claude API integration diagram"
excerpt: "A deep dive into integrating Claude's API into a language learning app, prompt optimization, and what it taught me about AI-powered products."
---

## The Beginning

When I decided to build the Polish learning app, I had a clear goal: create a tool that would let me learn Polish *in context* instead of drilling vocabulary like Duolingo does.

The key insight was that Claude could generate personalized, contextual lessons on demand. No need for pre-recorded content or a massive database—just ask Claude to create a lesson about ordering coffee in Polish, and it does.

## Initial Integration

Getting started with Claude API was surprisingly straightforward:

```javascript
const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "x-api-key": process.env.ANTHROPIC_API_KEY,
    "anthropic-version": "2023-06-01",
    "content-type": "application/json",
  },
  body: JSON.stringify({
    model: "claude-opus",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: "Generate a Polish lesson about ordering food at a restaurant",
      },
    ],
  }),
});
```

Within an hour, I had my first Claude-powered lesson being generated. It wasn't perfect, but it worked.

## Prompt Engineering Matters

The real learning started when I realized that the *quality* of the lesson directly depended on how I asked Claude for it.

Generic prompt: "Teach me Polish"
Result: Generic, not great

Specific prompt: "Create an interactive Polish lesson where the user is ordering food at a restaurant. Include: 1) Key vocabulary, 2) A dialogue they can practice, 3) Three follow-up questions to test their understanding. Format as JSON."
Result: Much better, structured, actually useful

## Lessons Learned

### 1. Be Specific in Your Prompts
The more specific and structured your request, the better the output. Claude performs best when you tell it exactly what you want and how you want it formatted.

### 2. Token Costs Add Up
Each request to Claude costs tokens. At first, I was generating full lessons with lots of examples. The costs were reasonable, but I learned to optimize:
- Reuse context when possible
- Ask Claude to be concise
- Cache results when appropriate

### 3. Error Handling is Important
Not every API call succeeds. Network errors happen. Rate limits exist. Building robust error handling from day one saved me hours of debugging later.

### 4. Users Notice the Difference
When I switched from hardcoded lessons to Claude-generated ones, users immediately noticed they were more personalized and engaging. Real AI integration makes a difference users can feel.

## Building in Public

The most unexpected benefit of shipping this openly was the feedback. People suggested features, found bugs, and helped me improve the app in ways I never would have on my own.

## Next Steps

I'm currently working on:
- Integrating Claude Vision to identify plants (different project)
- Building a personal assistant that combines multiple Claude capabilities
- Documenting the entire journey so others can learn from it

If you're building with Claude APIs, I'd love to hear about your experience. What patterns are working for you?
