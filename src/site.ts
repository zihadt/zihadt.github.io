// GA4 Measurement ID, from Analytics → Admin → Data streams → web stream.
// This is public by design — it ships in the HTML of every page — so it lives
// in the repo rather than in a build secret. Only loaded in production builds.
export const googleAnalyticsId = 'G-WFVPPX1K0E';

export const site = {
  name: 'Zihad Tarafdar',
  role: 'jack of all trades, master of some',
  url: 'https://zitar.dev',
  description:
    'Zihad Tarafdar, AI and Innovation Lead at Business Novelty Ltd. AI tools, cloud infrastructure, and homegrown medical devices.',
  employer: { name: 'Business Novelty Ltd.', url: 'https://biznovelty.com/' },
};

// Nav order matches the design. Blog and CV pages are planned; keep them here
// so the header layout is final, and add the pages when their sections go live.
export const nav = [
  { label: 'projects', href: '/projects/' },
  // { label: 'blog', href: '/blog/' }, // enable when the blog section goes live
  { label: 'cv', href: '/cv/' },
];

export const links = [
  { label: 'email', href: 'mailto:zihad@bmpt.du.ac.bd' },
  { label: 'github', href: 'https://github.com/zihadt' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/zihad-tarafdar' },
  { label: 'researchgate', href: 'https://www.researchgate.net/profile/Zihad-Tarafdar' },
];
