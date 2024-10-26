---
layout: post
title: NCV System
description: C#, Embedded Systems, PIC18f2550
---

I am currently leading a project of user software development for a diagnostic system called Nerve Conduction Velocity (NCV) measurement.
The system facilitates easy and automated measurement of Motor and Sensory Nerve conduction velocity, and ‘Distribution of F-Latency’ (DFL), a method to estimate nerve conduction velocity distribution proposed by Prof. K. S. Rabbani.
The system was initially designed and developed by Prof. Rabbani back in the 80’s for older computer systems that communicated through parallel ports.
The device was later redesigned and developed for a newer Windows-based operating system adopting USB 1.0 interface protocol by Dr. Abdullah Al Amin. As part of my MPhil research, I updated the user software and developed one in Java for recording and displaying DFL data in the computer. Later, the device was further upgraded, and USB 2.0 protocol was implemented for data acquisition. I contributed to the firmware development of the upgraded device and developed the host-to-device USB interfacing using C#. I developed a user interface for auto measurement of motor nerve conduction velocity and am currently supervising a junior research fellow to incorporate the measurement of sensory nerve conduction velocity and DFL within the software.
<br>
<h3 id="system-design"> Screenshots of NCV device UI - latest development (C#) </h3>
{% include image-gallery.html folder="/assets/images/ncv/latest" %}

<h3 id="stethoscope-integration"> Java-based UI development of NCV, during my MPhil Research </h3>
{% include image-gallery.html folder="/assets/images/ncv/mphil" %}
