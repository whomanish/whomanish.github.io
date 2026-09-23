---
title: "How I Built a Claude Skill to Automate Release Documentation"
displayDate: "21 March 2026"
date: "2026-03-21"
order: 1
description: >-
  A product release is at best a busy and at worst a chaotic time for PMs. This article explains how I built a Claude skill to draft release notes, release plans and FAQs from context already gathered for a release while keeping product judgement with the PM.
---

A product release is at best a busy and at worst a chaotic time for PMs. They need to manage various aspects of release planning while keeping current work moving. A key drain on my time as a PM was drafting, socialising and refining release documents such as internal and customer-facing release notes, feature FAQs and support guidance. Each release artefact has a different audience and level of detail, but they all have to describe the same product accurately.

Doing this well takes a lot more work than summarising the PRD. A PM has to work out what each audience needs to know, find decisions scattered across discussions, check what is still unresolved and keep the documents consistent as the release changes. It is necessary work that also competes with time better spent talking to customers, resolving product questions or refining the specification. I wanted to make the repeatable part of that work easier without handing over the product judgement.

## The Release-doc Writing Skill

I built a skill that used the context already gathered for a release to draft various types of release artefacts, including internal and external release notes, a product release plan, a feature FAQ and a support FAQ. These were not five versions of the same summary. The internal note needed rollout and enablement detail. The external note needed a clear account of value and limitations. The release plan coordinated what happened and when, while the FAQs answered different questions for different audiences. So I made these distinctions explicit in the skill.

For each artefact, it knew the intended audience, the information to look for, the questions to ask when something was missing and the structure of the output. It also gave the PM a view of the documents a release might need. That last capability became more important than I expected when the skill moved beyond my own workflow.

The solution itself evolved with the tools and models available to me over time. In 2025, I started with Gemini Gems that held the release-writing instructions. They worked, but required me to carry feature context into a separate tool. By December 2025, I was using a dedicated Claude Project for each release, with discovery, prioritisation and the PRD already in one place. But I now had to give detailed instructions each time to keep the content accurate and the format consistent. So in early 2026, I moved the repeatable writing procedure into a skill. I preferred to invoke it inside release Projects, where the context already lived, but it could also be used in other Claude chats or tasks when given sufficient context.

## Agent Skill Architecture

The architecture separated contextual information from consistent instructions. The active Project, chat or task held release-specific context like feature scope, product decisions, rollout plans, open questions and supporting conversations. The skill held the document standards, writing instructions, examples and rules for handling uncertain facts that should stay consistent across releases.

In the first version of the skill, I put four artefact formats and their instructions into a single file of over 500 lines. It produced usable drafts, but a request for a short FAQ also loaded the release-note templates and their examples. That consumed context unnecessarily and gave guidance meant for one document more opportunity to influence another.

I then split it into a lean SKILL.md and separate reference files loaded on demand. The main file identified the requested artefact, routed to the appropriate reference and applied accuracy rules common to every output. Its frontmatter described the natural ways a PM might ask for release documents, so using the skill did not depend on remembering its exact name. Each reference file contained the artefact’s structure, section-level drafting guidance, questions to resolve before writing and examples of good output.

This made the skill easier to extend. When I added the product release plan as a fifth artefact, I wrote one new reference and updated the routing. I kept the document-writing instructions in one skill because the artefacts shared release context and accuracy rules. Five separate skills would have created five things for the team to install and maintain.

## Reference Design

The original Gem instructions gave me a starting point, but they were not the whole standard. I compared them with recent documents my team and I had actually published. Those documents included known issues, how-to guidance and explicitly deferred scope that the older template did not ask for. Copying the prompt unchanged would have preserved a format that practice had already moved beyond.

For the release plan, I studied examples from different kinds of launches. A staged rollout, a migration-heavy release and one focused on adoption needed a common planning structure, but not identical sections. The reference therefore included conditional guidance instead of forcing every release into one example.

I chose to encode patterns from those documents rather than fetch them live every time. A live fetch would have brought fresher examples, but also latency, dependence on a connector and a lot of detail irrelevant to the current release. The active Project, chat or task supplied current facts. The skill supplied a more stable quality bar. A change to an artefact’s format only required an update to its reference file.

Accuracy rules mattered as much as the templates. When a date, owner, price or rollout decision was not established, the skill had to ask or leave a visible placeholder. A polished sentence containing an invented fact was a poor trade for a draft that still needed one answer from the PM.

## Adoption and Feedback

Most of the PM team adopted the skill after I shared it across the organisation.

One recurring issue was that the internal release note could miss parts of the expected formatting, including emojis. It might sound cosmetic, but a reusable format had to be dependable in the small details too. I traced the misses to gaps in the instructions and layout definition in its reference file and corrected them. The output looked almost right, but the underlying standard was not precise enough.

A new PM gave me a different measure of its usefulness. They had two overlapping releases and were unsure which go-to-market artefacts they needed, let alone how to produce all of them. They said the skill helped identify the set and produced drafts they considered about 95% complete in one pass. That 95% figure was their assessment, not a measured quality score.

The more interesting outcome was that the skill made release know-how available to another PM. It showed them what to create, what each audience needed and which decisions still required human judgement. It gave the team a repeatable way to approach release documentation without treating the drafts as a substitute for the PM’s decisions.
