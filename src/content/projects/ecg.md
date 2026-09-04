---
title: 12-lead diagnostic ECG
summary: Device controller and clinical web interface for Bibeat's indigenously built 12-lead ECG, from USB HID to real-time waveforms in the browser.
stack: [c#, .net, usb hid, websocket, vue.js, quasar, electron]
org: Bibeat Ltd. · University of Dhaka
order: 2
---

Bibeat Ltd. manufactures a 12-lead ECG designed at the Department of Biomedical Physics & Technology, University of Dhaka, as a low-cost alternative to imported machines. I wrote the software on both sides of the device: a C# controller that drives the hardware, and the clinical interface that doctors and operators use.

**Device controller (C#, .NET)**

- USB HID communication with the device, with hot-plug detection and automatic reconnection.
- Real-time conditioning of the 128 Hz signal: FIR baseline-wander and noise filters, a 50 Hz notch for mains interference.
- QRS detection and heart rate calculation on the live stream.
- WebSocket server that streams processed data to any number of clients, so the same device works from a browser, a desktop app or the telemedicine platform.

**Clinical interface (Vue.js, Quasar)**

- Live display of all twelve leads plus an extended lead II, with a torso map showing electrode placement.
- Auto and manual lead switching, with per-lead recording and review.
- Gain, sweep speed and 50 Hz filter controls, and heart rate with bradycardia and tachycardia indicators.
- Patient details form, printable PDF report, and image export.
- Ships as a web app inside the DUTP telemedicine platform and as a Windows Electron app.

<figure>
  <img src="/projects/ecg/auto-lead-switching.gif" alt="BiBEAT ECG app in auto mode, stepping from lead V3 to V4 while the live trace and heart rate update" loading="lazy" />
  <figcaption>Auto lead switching: the app records each lead in turn and highlights the electrode on the torso map.</figcaption>
</figure>
