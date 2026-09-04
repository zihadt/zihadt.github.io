export type Entry = {
  when: string;
  title: string;
  where?: string;
  points?: string[];
};

export const summary =
  'AI and Innovation Lead at Business Novelty Ltd., with a background across full-stack development, DevOps and embedded systems and a PhD in biomedical physics and technology. Currently leading the AI practice, from client use cases to shipped tools and the cloud platform behind them. Previously led software for the Dhaka University Telemedicine Programme and Bibeat Ltd.’s homegrown medical devices.';

export const contact = [
  { label: 'Dhaka, Bangladesh' },
  { label: 'zihad@bmpt.du.ac.bd', href: 'mailto:zihad@bmpt.du.ac.bd' },
  { label: 'github/zihadt', href: 'https://github.com/zihadt' },
  { label: 'linkedin/zihad-tarafdar', href: 'https://www.linkedin.com/in/zihad-tarafdar' },
];

export const experience: Entry[] = [
  {
    when: '2025 – present',
    title: 'AI and Innovation Lead',
    where: 'Business Novelty Ltd. · Dhaka',
    points: [
      'Lead the AI practice at Business Novelty, from identifying use cases with clients to building tailored AI solutions.',
      'Shipped a business-focused chatbot SaaS platform and an eKYC platform built on an ML-powered OCR engine and a face verification system. Currently leading a smart IVR system, a customer satisfaction (CSAT) platform, and an AI-powered claim settlement system.',
      'Own the cloud platform the AI products run on, including architecture, cost, and the team’s security practices.',
      'Support the team and set the engineering standards across AI and product work.',
    ],
  },
  {
    when: '2024 – 2025',
    title: 'Senior Software Engineer',
    where: 'Business Novelty Ltd. · Dhaka',
    points: [
      'Researched and built an AI-powered compliance tool for Somru BioScience, a leading Canadian biotech, that reviews SOPs and drug development protocols against the ICH M10 guideline and internal procedures, running a line-by-line gap analysis and a document-aware chat over the study’s documents. Built in Python and FastAPI with pluggable LLM providers.',
      'Led the refactoring of several legacy in-house projects so they could be maintained and deployed independently, and contributed to the Java Spring Boot products.',
      'Owned the platform side too: containerised every project onto Docker Swarm, designed the shared CI/CD pipeline, and re-provisioned the company-managed cloud estate, cutting hosting costs by almost half.',
    ],
  },
  {
    when: '2024 – present',
    title: 'Software Consultant (part-time)',
    where: 'Bibeat Ltd. · Dhaka University Telemedicine Programme',
    points: [
      'Firmware and user-software guidance for indigenously designed medical devices.',
      'Technical consultation on the telemedicine system and training for rural telemedicine operators.',
    ],
  },
  {
    when: '2018 – 2023',
    title: 'Lead Web Developer',
    where: 'Dhaka University Telemedicine Programme',
    points: [
      'Led development of a web telemedicine system with video consultation and electronic medical records: 40+ rural centres, 35,000+ patient consultations.',
      'Built a Capacitor Android app in Vue.js for roving telemedicine operators (Tele-Bondhu) delivering door-to-door care in coastal districts.',
      'Integrated homegrown devices: 12-lead digital ECG, digital stethoscope, X-ray view box. HIPAA-aligned document storage on AWS; managed the Ubuntu hosting server.',
    ],
  },
  {
    when: '2018 – 2023',
    title: 'Software Engineer',
    where: 'Bibeat Ltd.',
    points: [
      'Designed a universal USB device controller in C# that relays data from every Bibeat USB device over WebSocket for cross-platform use.',
      'Built the Vue.js interface with digital signal processing for a commercial 12-lead diagnostic ECG, shipped in the telemedicine platform and a Windows Electron app.',
      'Co-authored the NCV system user software (C#) and device firmware (C++), the digital stethoscope web UI, and a USB biomedical data acquisition system for teaching labs.',
    ],
  },
  {
    when: '2013 – 2018',
    title: 'Doctoral Research Fellow',
    where: 'Dept. of Biomedical Physics & Technology, University of Dhaka',
    points: [
      'Designed and built the telemedicine web platform for low-resource settings, now used across 40+ centres, with WebRTC video tuned for low-bandwidth networks.',
      'Requirements study with doctors, rural operators and administrators; evaluated four other rural telemedicine projects; ran a qualitative impact survey.',
      'Fellowship funded by the International Science Programme, Uppsala University.',
    ],
  },
  {
    when: '2011 – 2013',
    title: 'Postgraduate Research Fellow',
    where: 'Dept. of Biomedical Physics & Technology, University of Dhaka',
    points: [
      'Modernised the legacy Turbo C++ nerve conduction velocity software for Windows 7; used for diagnosis at the Trauma Center, Dhaka, for several years.',
      'Built Java desktop software for recording distribution of F-latency (DFL) data with the lab’s NCV device.',
    ],
  },
  {
    when: '2010 – 2015',
    title: 'Web Administrator (volunteer)',
    where: 'International Crimes Strategy Forum',
    points: ['Built and ran the network’s news site, blog, digital media archive and e-library.'],
  },
  {
    when: '2010 – 2013',
    title: 'Web Administrator',
    where: 'ABC Radio FM 89.2',
    points: [
      'WordPress site, Shoutcast live streaming and server maintenance for one of Bangladesh’s leading FM stations.',
    ],
  },
  {
    when: '2010 – 2012',
    title: 'Freelance Web Developer',
    points: [
      '25+ sites in WordPress and CodeIgniter, including an employee management system for a department at Robi.',
    ],
  },
];

export const education: Entry[] = [
  {
    when: '2014 – 2018',
    title: 'PhD, Biomedical Physics & Technology',
    where: 'University of Dhaka',
    points: ['Thesis: Software Development for a Secure Telemedicine System for Slow Internet Connectivity.'],
  },
  {
    when: '2011 – 2013',
    title: 'MPhil, Biomedical Physics & Technology',
    where: 'University of Dhaka',
  },
  {
    when: '2005 – 2009',
    title: 'BSc, Mechanical Engineering',
    where: 'Islamic University of Technology',
  },
];

export const skills = [
  { key: 'languages', value: 'python, php, c#, java, javascript, c++' },
  { key: 'web', value: 'fastapi, laravel, vue.js, spring boot, electron, capacitor, mysql' },
  { key: 'cloud & devops', value: 'aws, docker swarm, ci/cd, linux servers, cloud security' },
  { key: 'ai', value: 'retrieval-augmented generation, llm tooling' },
  { key: 'embedded', value: 'pic18f2550, usb host-device protocols, websocket, c++ firmware' },
];

export const researchgate = 'https://www.researchgate.net/profile/Zihad-Tarafdar';
