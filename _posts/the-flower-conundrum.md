---
title: "The Flower Conundrum"
date: '2020-06-23T12:54:22+02:00'
author:
    name: Jakob Jan Kamminga
tags: ["web-development", "site", "css"]
draft: true
unsafe: true
---

I've been wanting to kick this blog back off again after a few months' break, but what was I going to write about? I can sometimes raise the bar a little too high for myself, so I ended up writing nothing.

Breaking with that trend completely, I'm going to dedicate this post to a minor styling bug on this site that has been annoying me for a good while. Unable to solve it by Google or reading documentation (it's true, sometimes they can fail you), I am now putting it out here, hoping someone can shed some light on it for me.

## The flower conundrum
This title was the first thing that came to mind when I thought to write this blog post, so I think I will stick with the silly names for a while.

This one isn't really a bug as much as it is a lack of symmetry. On my homepage, I have this fun little vinyl flavoured navigation menu. It's not the most state-of-the-art part of my webpage, but the record even spins and I just kinda love it.

<html>
    <div>
        <img class="blog-img-center" src="/img/blog/flowerbefore.png" alt="flower navigation before"></img>
    </div>
</html>

Problem though, is that when hitting the button, I cannot get the navigation items, which are list items, to keep an even distance from the center of the vinyl button.

<img class="blog-img-center" src="/img/blog/flowerafter.png" alt="flower navigation after"></img>

This is the HTML for my list of buttons:
<pre class="language-html">
    <code class="language-html">
    &lt;nav&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="https://angel.co/jakob-jan-kamminga" target="blank"&gt;&lt;span class="fab fa-angellist"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="https://codepen.io/jj-kamminga" target="blank"&gt;&lt;span class="fab fa-codepen"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="https://www.linkedin.com/in/jakobjankamminga/" target="blank"&gt;&lt;span class="fab fa-linkedin-in"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="https://twitter.com/JaJaKamminga" target="blank"&gt;&lt;span class="fab fa-twitter"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="https://github.com/JJ-Kamminga" target="blank"&gt;&lt;span class="fab fa-github"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="https://www.last.fm/user/andnino" target="blank"&gt;&lt;span class="fab fa-lastfm"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="https://steamcommunity.com/id/AbstractDynamics/" target="blank"&gt;&lt;span class="fab fa-steam"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="https://bandcamp.com/jjkamminga" target="blank"&gt;&lt;span class="fab fa-bandcamp"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
    </code>
</pre>

For the scaling effect I use the css transform scale property:
<pre class="language-css">
    <code class="language-css">
    .cp-nav nav ul {
        transform: scale(1);
        transition: transform .35s cubic-bezier(0.68,-0.55,0.27,1.55);
    }
    </code>
</pre>

Then, using a little JavaScript, I change the value for <code class="language-css">scale</code> to `1.5` when the outer <code class="language-html">&lt;div&gt;</code>  is clicked. But, as can be seen in the above screenshots, the element remains in its vertical position and only scales downward. Whereas I want it to expand evenly in all directions. Which makes me wonder...

<h1>"How do I maintain the scaling effect but apply it evenly?"</h1>

If you have any insights regarding this issue, please let me know! In addition to fixing the bug, I will update this article as a reference to hopefully help others.