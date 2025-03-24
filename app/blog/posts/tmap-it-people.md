---
title: "Succesful high-performance IT delivery depends on people"
date: 2025-03-24
---

## Introduction

I recently completed _TMAP Quality for cross-functional teams_, a well established certification in the field of quality and testing for DevOps. It certainly has merits, but during my study of it, several points stood out to me as confusing, incomplete or incorrect. This post is about a specific chapter, and there will be more to follow with other topics.

The goal of this blog post is to refine the argumentation presented by the authors, and offer some suggestions to extend it.

## Succesful high-performance IT delivery depends on people

The authors claim that "succesful high-performance IT delivery depends on people", by making that statement the title of the second chapter. This claim plays an important role throughout the book, by advocating for a large number of techniques and approaches that depend on, and utilise the qualities of the people involved, rather than describing processes that are neutral to their participants.

The high-level claim is not strange. In fact, I suspect they could have replaced the entire chapter with a number of empirical studies and called it a day. But the authors chose to go down a different route, by defining opposing "mindsets" rooted in much more shaky theoretical foundations. I believe this detracts from the high-level statement.

## Tayloristic vs. Post-industrial "mindsets"

The authors create a distinction between two "mindsets" based on eras, which are not at all related to actual historical eras. The mindset we're moving away from is that of _the Tayloristic era of industrialization_, and they call the mindset of the current age the _post-industrial_ mindset.

The first problem is introduced immediately, when they define the "Agile mindset" before the post-industrial mindset, and then going on to seemingly equate these without further explanation. "Post-industrial" in science usually refers to the move from actual [industrial production to services](https://en.wikipedia.org/wiki/Post-industrial_society), and the authors don't seem to talk about _that_, so let's just take it as largely or wholly overlapping with Agile for now.

The decision to call the previous era Tayloristic could also have been elaborated further. It seems like they refer to the theory of Scientific Management, but since that lost dominance [around the 1930's](https://en.wikipedia.org/wiki/Scientific_management), and pre-dated IT as a commercial industry, I assume it is metaphorical. If that is the case, the authors should have described their definition of the term (no, made-up quotes don't count).

Let me phrase a definition as I interpret the distinction to be potentially meaningful:

- In the Tayloristic approach, humans are in service to the process to maximize productivity.
- In the Agile approach, processes are in service to humans to maximize productivity.

> I ditch the concept of "post-industrial" for "Agile", for reasons described above, and because this is at least a broadly used term with at least _some_ empirical foundation.

> I also ditch the concept of mindset, since I would not want to make theoretical/scientific claims about mindset unless we're talking psychological research. Agile admittedly is a notoriously hard phenomenon, but at least it can be described to be taken as an approach by large parts of the IT industry.

This may seem clear and obvious, but in the same chapter the authors describe a number of DevOps principles like they're unique to the Agile approach, whereas Scientific Management was credited for these a century ago: analysis; synthesis; logic; rationality; empiricism; work ethic; efficiency through elimination of wasteful activities (as in muda, muri and mura); standardization of best practices. A focus on economic productivity is not new! We've just found better ways to do it.

## Open-question argument

Assuming we take the distinction as meaningful, there is another open question: whether the move from Tayloristic to Agile is a good one. Agile's contemporariness and pervasiveness seems to be equated with its inherent qualities, but implicitly. In other words, there is a piece of argumentation missing that takes Agile beyond a description of what we're doing, to whether that is a good idea. There are hints of this across the book, but largely unstructered, and certainly not presented as arguments for this chapter's thesis.

Altkom Software's [blog on science behind agile software development](https://www.altkomsoftware.com/blog/reasearch-and-theories-behind-agile/) aptly describes this problem:

> The worst thing Frederick Winslow Taylor ever did to us all was to call his management style scientific. After all, his main maxim, “order and control”, was only a description of a certain status quo that had persisted for centuries (and, as we already know well today, just because something is done the way it has always been done doesn’t mean it’s done right).

The post is recommended reading, but let me summarize a few of its scientific ideas that would have been great to explore further in this chapter of the TMAP book.

### Theories of complex systems

Theories of complex systems, based often on Ludwig von Bertalanffy's theories of general systems theory, help us understand that organizations are not rigid, but rather complex, adaptive systems where interactions between components are dynamic and non-linear. In software development, this may suggest that rigid, linear processes are inadequate, and flexible, iterative approaches like Agile may be suited better to the reality of our systems.​

### Prospect theory

This psychological theory by Daniel Kahneman and Amos Tversky explains how people make decisions under uncertainty, highlighting that individuals not only value gains and losses differently, but also asymetrically, leading to inconsistent risk behavior. In Agile, understanding these human biases could help teams manage risk more effectively and make better decisions amidst uncertainty.​

### Progress principle

[This principle, coined by Teresa Amabile and Steven Kramer](https://hbr.org/2011/05/the-power-of-small-wins), states that individuals are more motivated and productive when they experience a sense of progress in meaningful work. This is part of the reason that Agile's iterative cycles and frequent deliverables provide regular progress feedback.

### Cognitive load theory

Cognitive load theory by John Sweller suggests that humans have limited cognitive processing capacity, and excessive information can hinder learning and performance. Agile methodologies, by promoting simplicity and focusing on small, manageable tasks, acknowledge and help reduce cognitive overload.​

### Other scientific ideas

The article explores many more ideas, and there are likely many more out there. It is a shame that the TMAP book discusses none of them.

## Conclusion

The Tayloristic vs. post-industrial distinction obscures rather than explains the author's thesis, that succesful high-performance IT delivery depends on people.

The distinction could be rephrased to be more useful, when we emphasize that process should service humans, and not the other way around. It should also be clarified that the use of _Tayloristic_ is metaphorical by defining it explicitly, rather than with vague examples.

Finally, rather than (or instead of) telling that this is how we should do things in the current age, the main thesis would be much better supported if the authors had turned to any scientific research out there at all that, even if it doesn't describe Agile at all, at least discredits Scientific Management or its current-day descendants.

Finally, some useful concepts that were hidden in this chapter that deserve center stage!

### Post-industrial testing

> Post-industrial testing is where we test something because we are curious or require very specific feedback rather than because we need to test something because the organization demands it.

Why not call this agile testing? This is a useful concept!

###

> A test professional is (...) the team member providing the knowledge about testing and cementing it as a team responsibility. Because only by putting the responsibility for quality 100% in the team can we make them feel responsible (...).

So they do seem to have read the research! This concept is repeated in different terms, later in the book, but it would have deserved more attention here too.
