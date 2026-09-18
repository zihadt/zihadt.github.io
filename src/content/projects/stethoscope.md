---
title: TARANGA digital stethoscope
summary: Android and web apps that capture, filter and record sound from Bibeat's electronic stethoscope, and stream it live so a doctor in another city can listen during a telemedicine consultation.
stack: [c++, oboe, kotlin, typescript, web audio, websocket, node.js]
org: Bibeat Ltd. · University of Dhaka
order: 3
---

TARANGA is an improvised phonocardiography system built at the Department of Biomedical Physics & Technology, University of Dhaka: a stethoscope chest piece with a microphone in the tubing, ending in an ordinary 3.5 mm audio jack. With Bibeat's trainer kit and a USB sound card it became a teaching tool, heard and studied on a PC. I built the software that takes the sound further: onto a phone or a browser tab, and then out of the room to a remote listener.

<figure>
  <img src="/projects/stethoscope/stethoscope.jpg" alt="Stethoscope chest piece with a microphone fitted in the tubing and a cable ending in a 3.5 mm audio jack" loading="lazy" style="width: 260px; max-width: 100%; margin: 0 auto;" />
  <figcaption>The stethoscope: to the software it is a plain mono audio input.</figcaption>
</figure>

**Capture and recording**

- Web recorder that captures the input, draws the live trace and saves WAV or FLAC locally, with no install and no server round trip. An AudioWorklet handles capture and a worker does the encoding, inside an 8 kHz audio graph.
- The browser's automatic gain, echo cancellation and noise suppression are switched off: speech processing is an unwanted stage in front of a stethoscope signal.
- Android app with a C++ audio engine on Oboe. It requests an unprocessed, exclusive input stream, keeps the audio callback free of allocation, locks and logging, and talks to the Kotlin UI through a small, versioned C interface.
- Both clients keep the raw signal and filter a copy, so a recorded clip can be re-rendered later with a different band.

**Filtering**

- Heart (10–300 Hz), Lung (80–500 Hz) and Wide (0–2000 Hz) presets mirror the trainer kit's boost switches, plus a custom band.
- Each band edge is a fourth-order Butterworth filter, implemented twice: in C++ on the phone and as Web Audio biquad nodes in the browser. Tone sweeps check that the two responses match, rather than trusting matching labels.

**Live streaming**

- The operator taps Go Live and shares a session link. Android and web can each publish or listen, in any pairing, and every listener has their own band and volume controls.
- A small Node WebSocket relay holds one room per session in memory, forwards the publisher's frames unchanged and keeps no audio archive. A reverse proxy terminates TLS, and a clinic can host the whole thing on its own server.
- The stream is uncompressed mono 16-bit PCM in 1,024-sample frames behind an 8-byte header, about 16 kB per second at 8 kHz. It branches off before the publisher's filters, so filtering stays local to each listener.

<figure>
  <img src="/projects/stethoscope/system-overview.png" alt="System overview: the trainer kit feeds an Android or web publisher; a TLS proxy and in-memory relay connect it to Android or web listeners" loading="lazy" />
  <figcaption>Android and web can each publish or listen. Audio passes through the relay; the session link is shared separately.</figcaption>
</figure>

**Unreliable networks**

- Many of the telemedicine centres are rural, on weak and intermittent mobile connections. The publisher keeps up to sixty seconds of unacknowledged audio, reconnects with a short backoff and resends; the relay discards duplicates.
- The listener buffers about 400 ms to smooth uneven arrivals, rebuilds if the buffer runs dry, and skips forward if it falls more than two seconds behind. Missing ranges are counted and filled with silence.

<figure>
  <img src="/projects/stethoscope/signal-path.png" alt="Signal path: capture branches into local filtering and raw recording or streaming; framed PCM passes through the replay ring and relay to the listener's buffer and filters" loading="lazy" />
  <figcaption>The publisher retains unacknowledged frames; the relay forwards them without decoding the audio.</figcaption>
</figure>

**Testing**

- The protocol exists in C++ state machines on the phone and in TypeScript in the browser, so frame-layout tests check the bytes they exchange.
- Portable tests cover tone response, band changes, replay-ring overflow, acknowledgements and reconnects without needing a phone. A loopback test runs the relay, interrupts the publisher and compares the received frames with the originals.

The full story, from the improvised chest piece and the trainer kit to streaming, is on the element14 Community: <a href="https://community.element14.com/challenges-projects/project14/b/show-and-tell/posts/taranga-an-improvised-phonocardiography-pcg-1332176417" target="_blank" rel="noopener noreferrer">TARANGA – an improvised phonocardiography [PCG]</a>.
