---
title: NCV measurement system
summary: Host software and firmware for a nerve conduction velocity diagnostic device, from a Java prototype to a C# USB 2.0 system.
stack: [c#, java, pic18f2550]
org: University of Dhaka
order: 2
galleries:
  - heading: latest ui, c#
    folder: ncv/latest
  - heading: java ui, mphil research
    folder: ncv/mphil
---

Nerve conduction velocity (NCV) measurement is a diagnostic test for nerve disorders. This system measures motor and sensory nerve conduction velocity and the Distribution of F-Latency (DFL), a method for estimating the distribution of conduction velocities proposed by Prof. K. S. Rabbani. He designed the original device in the 1980s for computers with parallel ports, and Dr. Abdullah Al Amin later reworked it for Windows over USB 1.0.

For my MPhil research I wrote a Java application to record and display DFL data. When the device was upgraded again to USB 2.0, I contributed to the firmware, wrote the host-to-device USB interface in C#, and built a user interface for automated motor NCV measurement. I then supervised a junior research fellow adding sensory NCV and DFL measurement to the same software.
