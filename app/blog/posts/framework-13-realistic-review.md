---
title: "Framework 13 Ubuntu Ryzen 7040 series - a realistic review"
date: "2025-07-12"
image: "frameworklaptop.jpeg"
---

When I was shopping for laptops earlier this year, I was able to find plenty of quick impressions of Framework laptops. However, was it going to hold up to intensive professional use? I didn't really know. I did end up buying it, but it was a bit of a shot in the dark. Hopefully, this article will help others make a more informed choice.

These are simply expanded versions of my personal notes about using the Framework 13 as a programmer. It's not a flashy review, but is is realistic.

I received my Framework in March of 2025, sadly just missing the release of the new CPU series, but alas - I needed it for work. I've been using it roughly 6 days a week, for professional and private purposes.

![My Framework 13, with my old (2013) MacBook Air in the background](/blog/frameworklaptop.jpeg)
My Framework 13, with my old (2013) MacBook Air in the background

## My types of use

### Professional

I'm a test automation engineer. My typical work doesn't involve developing software, but it does involve:

- building and running software locally
- running docker containers
- writing test code and test automation infrastructure (Java, Python, Typescript)
- running unit, integration, performance and end-to-end tests

### Personal

Aside from some average private use cases like browsing, writing and watching videos, I also work on some frontend projects (Typescript, NodeJS).

## My configuration

### Operating System

I went for Ubuntu, version 24.04.

Why Linux? I was tired of both Microsoft and Apple's corporate antics. Also, it's free.

Why Ubuntu? It's just a great Linux default, and officially supported by Framework.

## Hardware

Framework Laptop 13 DIY Edition (AMD Ryzen™ 7040 Series). AMD Ryzen™ 7 7840U - 2.8k Display. Memory: DDR5-5600 - 32GB (1 x 32GB).

This was the highest possible configuration at the time, except that I have room for an additional 32GB of memory.

![My Framework 13 in my home office](/blog/frameworkindock.jpeg)
My Framework 13 in my home office

## My impressions

### Ubuntu

I had already used Ubuntu on my desktop, and my impressions have largely been positive. However, I would still not recommend Ubuntu, let alone any other distro to anyone not comfortable with using the terminal. As a GUI based operating system, it is baseline acceptable, but you miss out on all the potential upside of Linux systems, and you'll run into some things you just cannot do.

For software development work, it's been great, since most of the ecosystem is built to support Linux. For Microsoft applications, you're forced to use their web apps, which work as well as could be expected. They have plenty of bugs, but I was not able to attribute any particular ones to the operating system. Otherwise, anything that's not officially supported will have some open source extension, app or cli tool to get it to work. Better get ready to start using custom scripts and aliases, but that has general benefits regardless of your OS.

### Customisability

Customasability is Framework's great sell. I went for 2x usb-c, 1x usb-a, 1x HDMI. I got a couple extra expansion cards, like a DisplayPort and Ethernet port, but I could've saved the money. The setup I chose is pretty much perfect for me, and that's the cool thing about this laptop. You don't even need to agree with me, you can just buy the slots you like!

I went with an orange bezel. There isn't much to tell about it, except it does make the thing stand out. Your machine is a conversation starter, even when folks don't recognize the framework logo. It's a bit less binary than with MacBooks, where there's usually a prejudice for or against Mac users.

### One major issue

About once every two months, for seemingly no reason at all, the system suddenly hits an unworkably slow frame rate. The only fix to this is a reboot. So far, it's mostly happened while browsing the web - certainly not any excessive resource use. I haven't been able to find any explanation for this issue.

### Performance

Admittedly, my work does not regularly push the system's limits. I haven't tried to run local LLM's, I'm not 3D rendering. But normal use, it handles quite alright. When running multiple docker containers, it does get noticeably noisy and hot, but no more than I'd expect from other laptops.

More on this later, but in short: for much software development work, this machine will do just fine. If you need to run local LLM's or do other memory, graphics or CPU intensive work, you're probably not even considering the Framework, but if you do - please check a review with benchmarks.  

### Battery life

Really just not great. When doing normal browsing, watching videos, listening to music, etc. I can already see the battery go down. Doing development work, it feels like you're on a clock.

But the battery life on sleep is especially bad. Regardless of whether I close the lid or hit "sleep" end-of-day, the next day I'm guaranteed to find it with around 20% less charge. Over a weekend, I always bring my charger because I'm sure it won't have enough juice left to do any meaningful work.

I've settled on using it for use around the house and for small trips. I wouldn't count on it on a long trip or full workday without a charger. It's not a deal breaker for me, but in this area it does fall noticeably short of modern MacBooks.

### Screen

I'm happy with the resolution, it's perfect for the size of the device. I love that Framework offers higher refresh rates at reasonable price points, many competitors restrict this to the premium models. The height is nice, a big plus over a lot of modern laptops with wide but short screens. Here too though, it's not a MacBook. There is some premium quality to MacBook screens that few other brands seem to be able to capture.

### Keyboard

Great, feels identical to a MacBook keyboard. That's a good thing.

### Trackpad

First of all, thank you for putting the thing in the middle. It may sound like a pet peeve, but I cannot comfortably use a device with a trackpad to the side.

That said, use of the trackpad on Ubuntu is not great, and so I'm guessing most of the Linux world. There are significant differences per application in scroll speed. There is a Linux scroll speed fix extension for Chrome. In most applications though, you don't have that luxury. In most of them, you scroll at ridiculous speeds and you'll often just resort to the keyboard if possible.

Also, many applications force a middle or right click-to-paste, which results in a lot of accidental pasting. Often this cannot be turned off. There is a system setting for it, but this does not prevent it in applications that have their own implementation of it.

### Fingerprint reader

Many reviews I've read or watched were pleasantly surprised that the fingerprint reader worked on Ubuntu. That did worry me a bit, to be honest. If you offer a fingerprint reader, it should work. That's the bare minimum.

Well, the fingerprint reader does work, it's true. However, there are some quirks. Firstly, you cannot use the same fingerprint for two users. Which sounds plausible at first, but not so much when the same user wants to keep work and private accounts separated. Secondly, the user experience of the thing is mediocre. Often, when waking from sleep, the login screen does not offer the possibility to use it. When it is usable, it takes noticably long to read, a period during which there is no indicator that the reading is happening. This often leads to repeated tapping, which then quickly makes you exceed the maximum of retries.

Undoubtedly, making a fingerprint reader unlock is hard. But on MacBooks, it feels incredibly intuitive, and on an Ubuntu Framework, it doesn't. I suspect this is the Ubuntu implementation, perhaps the Windows version does a better job. Let me know if you know.

### Camera

After having used the built-in camera, when connecting to an external camera, the "Camera" app always crashes first, then after rebooting can use the external camera.

Otherwise, it's a laptop camera. You won't be making professional photos with it.

### Monitor connectivity

When the lid is closed, the machine often doesn't connect to an external monitor. Sometimes, it loses an existing connection when waking from sleep.

When connecting or disconnecting an external monitor, not all applications rescale appropriately. Some, like Warp, I need to restart every time to use properly.

## Overall conclusion

If you want the best laptop, get a MacBook Pro. Even a MacBook Air with some extra RAM thrown in will likely beat the Framework 13 in performance. Certainly, it will beat it in the quality of build, screen and overall UX. I can not deny that the quality of the device is not the same.

If you want the best bang for your spec, you may not even end up with Framework. Although I would be surprised if it's a big difference. What you get for a little bit more return is customisability, official Ubuntu support and the ability to upgrade RAM and storage down the line. But perhaps most importantly, you'll support probably the most consumer friendly device manufacturer in the world, and contribute to (the pricing competitiveness of) their future products.

If this review sounded like I don't like my Framework, that's not the case. I absolutely love the thing. I gladly support the company, and I like having a device that is mine. From the moment it came in, to every moment spent customising it, to the moment it will inevitably retire, I will cherish it.

But I also believe we should be realistic about what isn't working so well. And to be clear, Framework's competitors are setting unrealistic expectations. They are years of R&D and many orders of magnitude in investments ahead, and actively leverage that position. There is exploitation, a lack of sustainability, a lack of accountability, conflicts of interests and corruption all down the line. Transparency and fair business have a cost. That's what you buy with a Framework, and for me it was 100% worth it.  I didn't really know. I did end up buying it, but it was a bit of a shot in the dark. Hopefully, this article will help others make a more informed choice.

These are simply expanded versions of my personal notes about using the Framework 13 as a programmer. It's not a flashy review, but is is realistic.

I received my Framework in March of 2025, sadly just missing the release of the new CPU series, but alas - I needed it for work. I've been using it roughly 6 days a week, for professional and private purposes.

## My types of use

### Professional

I'm a test automation engineer. My typical work doesn't involve developing software, but it does involve:

- building and running software locally
- running docker containers
- writing test code and test automation infrastructure (Java, Python, Typescript)
- running unit, integration, performance and end-to-end tests

### Personal

Aside from some average private use cases like browsing, writing and watching videos, I also work on some frontend projects (Typescript, NodeJS).

## My configuration

### Operating System

I went for Ubuntu, version 24.04.

Why Linux? I was tired of both Microsoft and Apple's corporate antics. Also, it's free.

Why Ubuntu? It's just a great Linux default, and officially supported by Framework.

## Hardware

Framework Laptop 13 DIY Edition (AMD Ryzen™ 7040 Series). AMD Ryzen™ 7 7840U - 2.8k Display. Memory: DDR5-5600 - 32GB (1 x 32GB).

This was the highest possible configuration at the time, except that I have room for an additional 32GB of memory.

## My impressions

### Ubuntu

I had already used Ubuntu on my desktop, and my impressions have largely been positive. However, I would still not recommend Ubuntu, let alone any other distro to anyone not comfortable with using the terminal. As a GUI based operating system, it is baseline acceptable, but you miss out on all the potential upside of Linux systems, and you'll run into some things you just cannot do.

For software development work, it's been great, since most of the ecosystem is built to support Linux. For Microsoft applications, you're forced to use their web apps, which work as well as could be expected. They have plenty of bugs, but I was not able to attribute any particular ones to the operating system. Otherwise, anything that's not officially supported will have some open source extension, app or cli tool to get it to work. Better get ready to start using custom scripts and aliases, but that has general benefits regardless of your OS.

### Customisability

Customasability is Framework's great sell. I went for 2x usb-c, 1x usb-a, 1x HDMI. I got a couple extra expansion cards, like a DisplayPort and Ethernet port, but I could've saved the money. The setup I chose is pretty much perfect for me, and that's the cool thing about this laptop. You don't even need to agree with me, you can just buy the slots you like!

I went with an orange bezel. There isn't much to tell about it, except it does make the thing stand out. Your machine is a conversation starter, even when folks don't recognize the framework logo. It's a bit less binary than with MacBooks, where there's usually a prejudice for or against Mac users.

### One major issue

About once every two months, for seemingly no reason at all, the system suddenly hits an unworkably slow frame rate. The only fix to this is a reboot. So far, it's mostly happened while browsing the web - certainly not any excessive resource use. I haven't been able to find any explanation for this issue.

### Performance

Admittedly, my work does not regularly push the system's limits. I haven't tried to run local LLM's, I'm not 3D rendering. But normal use, it handles quite alright. When running multiple docker containers, it does get noticeably noisy and hot, but no more than I'd expect from other laptops.

More on this later, but in short: for much software development work, this machine will do just fine. If you need to run local LLM's or do other memory, graphics or CPU intensive work, you're probably not even considering the Framework, but if you do - please check a review with benchmarks.  

### Battery life

Really just not great. When doing normal browsing, watching videos, listening to music, etc. I can already see the battery go down. Doing development work, it feels like you're on a clock.

But the battery life on sleep is especially bad. Regardless of whether I close the lid or hit "sleep" end-of-day, the next day I'm guaranteed to find it with around 20% less charge. Over a weekend, I always bring my charger because I'm sure it won't have enough juice left to do any meaningful work.

I've settled on using it for use around the house and for small trips. I wouldn't count on it on a long trip or full workday without a charger. It's not a deal breaker for me, but in this area it does fall noticeably short of modern MacBooks.

### Screen

It's fine. I'm happy with the resolution, it's perfect for the size of the device. I love that Framework offers higher refresh rates at reasonable price points, many competitors restrict this to the premium models. The height is nice, a big plus over a lot of modern laptops with wide but short screens. Here too though, it's not a MacBook. There is some premium quality to MacBook screens that few other brands seem to be able to capture.

### Keyboard

Great, feels identical to a MacBook keyboard. That's a good thing.

### Trackpad

First of all, thank you for putting the thing in the middle. It may sound like a pet peeve, but I cannot comfortably use a device with a trackpad to the side.

That said, use of the trackpad on Ubuntu is not great, and so I'm guessing most of the Linux world. There are significant differences per application in scroll speed. There is a Linux scroll speed fix extension for Chrome. In most applications though, you don't have that luxury. In most of them, you scroll at ridiculous speeds and you'll often just resort to the keyboard if possible.

Also, many applications force a middle or right click-to-paste, which results in a lot of accidental pasting. Often this cannot be turned off. There is a system setting for it, but this does not prevent it in applications that have their own implementation of it.

### Fingerprint reader

Many reviews I've read or wacthed were pleasantly surprised that the fingerprint reader worked on Ubuntu. That did worry me a bit, to be honest. If you offer a fingerprint reader, it should work. That's the bare minimum.

Well, the fingerprint reader does work, it's true. However, there are some quirks. Firstly, you cannot use the same fingerprint for two users. Which sounds plausible at first, but not so much when the same user wants to keep work and private accounts separated. Secondly, the user experience of the thing is mediocre. Often, when waking from sleep, the login screen does not offer the possibility to use it. When it is usable, it takes noticably long to read, a period during which there is no indicator that the reading is happening. This often leads to repeated tapping, which then quickly makes you exceed the maximum of retries.

Undoubtedly, making a fingerprint reader unlock is hard. But on MacBooks, it feels incredibly intuitive, and on an Ubuntu Framework, it doesn't. I suspect this is the Ubuntu implementation, perhaps the Windows version does a better job. Let me know if you know.

### Camera

After having used the built-in camera, when connecting to an external camera, the "Camera" app always crashes first, then after rebooting can use the external camera.

Otherwise, it's a laptop camera. You won't be making professional photos with it.

### Monitor connectivity

When the lid is closed, the machine often doesn't connect to an external monitor. Sometimes, it loses an existing connection when waking from sleep.

When connecting or disconnecting an external monitor, not all applications rescale appropriately. Some, like Warp, I need to restart every time to use properly.

## Overall conclusion

If you want the best laptop, get a MacBook Pro. Even a MacBook Air with some extra RAM thrown in will likely beat the Framework 13 in performance. Certainly, it will beat it in the quality of build, screen and overall UX. I can not deny that the quality of the device is not the same.

If you want the best bang for your spec, you may not even end up with Framework. Although I would be surprised if it's a big difference. What you get for a little bit more return is customisability, official Ubuntu support and the ability to upgrade RAM and storage down the line. But perhaps most importantly, you'll support probably the most consumer friendly device manufacturer in the world, and contribute to (the pricing competitiveness of) their future products.

If this review sounded like I don't like my Framework, that's not the case. I absolutely love the thing. I gladly support the company, and I like having a device that is mine. From the moment it came in, to every moment spent customising it, to the moment it will inevitably retire, I will cherish it.

But I also believe we should be realistic about what isn't working so well. And to be clear, Framework's competitors are setting unrealistic expectations. They are years of R&D and many orders of magnitude in investments ahead, and actively leverage that position. There is exploitation, a lack of sustainability, a lack of accountability, conflicts of interests and corruption all down the line. Transparency and fair business have a cost. That's what you buy with a Framework, and for me it was 100% worth it.
