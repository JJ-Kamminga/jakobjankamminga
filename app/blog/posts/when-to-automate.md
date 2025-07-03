---
title: "Which tests should you automate?"
date: "2025-07-02"
---

## Introduction

Test automation has been the holy grail of testing in software development for a while. Perhaps now, with the coming of LLM's and particularly agentic AI, some people are starting to question whether automation was really the right thing to be chasing all along. I would like to remind both camps of a classic programmer's joke.

> Why spend 1 hour doing something by hand, when you can spend 10 hours automating it?

Let's put it more bluntly.

## Test automation doesn't save time

And neither will AI testing agents.

...

Are you still reading? Great. The story does get more nuanced from here.

The point that I would like to make is that in most cases, the capacity to generate or run a large set of tests repeatedly is not the main bottleneck in your development team. In fact, when done wrong, automation makes testing a *bigger* bottleneck.

So when should you automate your tests? To answer that question, let's start by looking at the way we develop software.

## Good software development is iterative

In the last three decades, software development has trended towards iterative ways of working. Those include agile, scrum, DevOps and others. These all share a structure of the basic *plan-act-observe-reflect* pattern. Regardless of which of them is hip at a given time, there are good reasons for working iteratively. These apply to testing software as much as they do to programming. Three notable ones are:

### 1. We are working in complex systems

We often aren't able to immediately fully understand the systems we are in, nor the systems we want to build. We need many cycles of feedback to know what we have to build and how, and to adjust course in time if needed.

### 2. We have limited cognitive load

We can only process limited amounts of information, and make limited amounts of decisions at a time. We make better (or at least better informed) decisions when we spread those decisions out over longer amounts of time, during which we can also profit from newly revealed information.

### 3. We are motivated by repeated feats of accomplishment

We are motivated by small feats of progress over a couple of weeks, more than we are motivated by one big bang of success per year. This keeps velocity substainable and consistent over a project's lifetime, as well as it just keeps people happy.

## Good testing is part of development

Following the iterative trend of development, the software testing industry has realised that testing should be a part of the development cycle, not inserted at the end. There are also good reasons for this:

### 1. It provides feedback as quickly as possible

When testing is part of the development workflow, defects can get resolved as soon as they are found. This prevents the costs of unintentionally building on top of defective code, as well as any administrative communication and administration overhead that follows a separate testing stage.

### 2. It is based on domain specific knowledge

Testing is involved with risks, and seeing and anticipating risks gets easier when testers know their users, their products, and the technology on which those products are built.

### 3. The tester is involved with the quality of the development process

It is said that quality needs to be "baked in", and while that's rather vague, good software is written with good development and quality best practices, catching defects at very early stages or preventing them entirely. Cross-functional teams benefit from testers in the skills and knowledge that they bring to development, and reversely the skills and knowledge developers can bring to testing. This is particularly true when it comes to automation.

## Good test automation supports the development process

So far, I've said nothing about automation. How does it play with the development process?

I believe that good test automation supports the development process. What I mean by that is the following:

### 1. Good test automation is part of a test strategy

Good test automation has a specific goal, and ideally that is part of a comprehensive plan on quality and testing. Automated tests, like any other tests, need to ask a question about the quality of a product. Your test plan should describe the question your tests ask, and how their output will be used to answer that question.

### 2. Good test automation integrates with the development process

Good test automation supports discipline in development. It does this by being directly tied to changes made to the product. Tests run in a pipeline triggered by changes, on a schedule or even pre-commit. The reports that they produce reach the author of the change (and any other relevant stakeholder) and are understandable to who reads them (not just the tester).

### 3. Good test automation is developed iteratively

Like regular test cases, a set of automated tests should evolve over time. It is a great idea to start with core test cases for your most critical paths and your greatest risks. Over time you will learn new things about your product, which can inform your existing test cases. You can add new test cases for new functionality or to reach higher coverage of existing functionality. And you should be vigilant of functionality becoming obsolete, and reflect this by adapting or removing test cases.

As soon as your automated test cases fail to reflect what the product should do, developers and product owners stop trusting them, and rightly so. They become a burden to development. On the other hand, the team should understand that automated tests require time and resources, and support this.

### 4. Good test automation has output that is analysed

Also when tests pass. Blindly trusting a green checkmark assumes the tests you wrote in the past still correctly reflect the expected functionality, and there are no possible false positives. Passed tests should be taken as feedback that something likely went right, and taken into account along with other test techniques and investigation, to make a (human) verdict about quality. Automated tests form one window on quality, and should be paired with other techniques to get a comprehensive view of it.

Fundamentally, automated tests help us catch expected defects. They don't tell us everything everywhere is OK.

## Where does test automation fall in a test strategy?

A combination of other test techniques, such as exploratory testing and functional testing, should precede and inform automation. After test automation, monitoring should inform us of defects that slipped by the tests, and whether real world usage matches our expectations.

Like all other parts of the development process, these steps should inform each other.

## When to automate?

Before we can ask whether we should automate our tests, the following prerequisites need to be in place.

1. We are capable of judging which test cases are useful
2. We are capable of validating our test's output
3. We have a test strategy

Then, we should automate if the following reasons apply to us:

1. It supports the development process
2. It gives quick feedback
3. We are going to iteratively develop the automated tests themselves

## When not to automate

This question deserves some attention, because there are many reasons given for test automation out in the wild, some of which will very likely lead to failure. Some notable ones are:

### 1. To save time or money

Test automation is an enabler of a fast release cycle. It goes hand in hand with many other (DevOps) best practices that *together* could lead to cost savings (at least *per release*). Test automation requires embedding in an iterative development workflow to be worth the effort required to write and maintain it. In isolation, it will not save time or money.

### 2. To increase test coverage

To automate a test case, it needs to exist. Test automation can increase the efficiency of running tests, but fundamentally it cannot increase their coverage.

Mind that I talk about the automation of the running of tests. We can achieve greater coverage by scripting and automation of test cases and test data. But automated or not, the tests still need to be run and maintained.

### 3. To replace human testers

As emphasized above, good testing is informed by domain and technology specific knowledge, as well as some amount of human curiosity and creativity. A test suite (automated or not) walks a fine line between being fast but shallow, and useful but bulky. Staying in balance requires constant steering informed by the nuanced sensitivities of human stakeholders and applications running in production. Automation did not change this. AI will not change this.

## Conclusion

1. Good software development is iterative
2. Good testing is part of development
3. Good test automation enables development to retain quality at speed
