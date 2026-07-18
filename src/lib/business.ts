/**
 * Single source of truth for the business's data.
 * Real business: Mallen Excavating, Wayne Mallen — Poughkeepsie, NY.
 */

export const business = {
  name: "Mallen Excavating",
  legalName: "Mallen Excavating",
  owner: "Wayne Mallen",
  tagline: "Your Hudson Valley Neighbor Since 1974",
  phone: "(845) 471-3457",
  phoneHref: "tel:+18454713457",
  email: "tuney443@aol.com",
  city: "Poughkeepsie",
  state: "NY",
  address: "Hatfield Ln, Poughkeepsie, NY 12603",
  yearsInBusiness: 52,
  founded: 1974,
  hours: "Mon–Fri, 7:00 AM – 5:00 PM · Call anytime to schedule",
  serviceAreas: [
    "Poughkeepsie",
    "Pleasant Valley",
    "Hyde Park",
    "LaGrange",
    "Wappingers Falls",
    "Fishkill",
    "Rhinebeck",
    "Millbrook",
  ],
  license: "Licensed & Insured · USDOT 1102380",
  brands: [] as string[],
  googleReviewUrl: "https://www.google.com/maps?cid=8714080345550480193",
};

export const stats = [
  { value: 52, suffix: "+", label: "Years in Business" },
  { value: 8, suffix: "+", label: "Hudson Valley Towns Served" },
  { value: 5, suffix: "★", label: "Google & Facebook Rating" },
  { value: 100, suffix: "%", label: "Free Estimates" },
];

export type Service = {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "septic-systems",
    title: "Septic Systems",
    icon: "droplets",
    blurb: "Installation, repair, and replacement — done right the first time.",
    description:
      "From full system installs to tricky repairs, Wayne has handled Hudson Valley septic work since 1974. We know the soil, the codes, and how to get it done without surprises.",
    image: "septic",
  },
  {
    slug: "water-sewer-hookups",
    title: "Water & Sewer Hookups",
    icon: "waves",
    blurb: "Clean, code-compliant connections for new and existing homes.",
    description:
      "Connecting a new home or fixing an old line, we handle water and sewer hookups with the same care we'd want at our own place.",
    image: "sitework",
  },
  {
    slug: "basement-waterproofing",
    title: "Basement Waterproofing",
    icon: "home",
    blurb: "Stop water at the source — proper drainage around your foundation.",
    description:
      "A wet basement is almost always a drainage problem, not a basement problem. We excavate and install proper drainage systems around the foundation to keep water out for good.",
    image: "waterproofing",
  },
  {
    slug: "drainage",
    title: "Drainage Solutions",
    icon: "cloudrain",
    blurb: "Standing water and soggy yards, solved.",
    description:
      "Poor drainage ruins lawns, driveways, and foundations. We grade and install drainage systems that move water where it should go.",
    image: "drainage",
  },
  {
    slug: "grading-topsoil",
    title: "Grading & Topsoil",
    icon: "layers",
    blurb: "Screened topsoil and compost, plus expert grading.",
    description:
      "We supply gorgeous screened topsoil and compost for lawns and gardens, and grade property properly so water and soil behave the way they should.",
    image: "grading",
  },
  {
    slug: "land-clearing",
    title: "Land Clearing",
    icon: "trees",
    blurb: "Turn wooded or overgrown land into a usable site.",
    description:
      "Clearing land for a driveway, building site, or simply reclaiming your property — we clear it efficiently and leave it ready for the next step.",
    image: "clearing",
  },
  {
    slug: "driveways",
    title: "Driveway Installation",
    icon: "route",
    blurb: "Built from the base up for Hudson Valley winters.",
    description:
      "A driveway is only as good as what's underneath it. We build a proper base and grade for drainage so it holds up through freeze-thaw seasons.",
    image: "driveways",
  },
  {
    slug: "site-work",
    title: "General Site Work",
    icon: "truck",
    blurb: "Residential site work specialists for over 50 years.",
    description:
      "Trenching, excavation, prep work — if it involves moving earth on your property, we've probably done it, and we'll tell you honestly what it needs.",
    image: "sitework",
  },
];

export const whyUs = [
  { icon: "home", title: "You Talk To Wayne. Period.", text: "No call center, no dispatcher, no subcontractor showing up instead of him. The owner answers the phone and does the work." },
  { icon: "badgecheck", title: "52 Years, One Family", text: "Not a franchise, not a rollup. The same family has served the Hudson Valley since 1974." },
  { icon: "wrench", title: "Fair Pricing, No Games", text: "Free estimates, straight answers, and the price we quote is the price you pay." },
  { icon: "shieldcheck", title: "Licensed, Insured, Ready", text: "Fully licensed and insured with a full fleet of equipment — the paperwork is handled so you don't have to think about it." },
];

export const localLegend = {
  eyebrow: "A Hudson Valley Story",
  title: "The Excavator Who Found A Mastodon",
  body: "In 1999, Wayne was called out to a backyard pond in Hyde Park for a routine dig. His backhoe turned up something that wasn't routine at all: the skull of a mastodon, buried for roughly 11,000 years. It turned out to be one of the most complete mastodon skeletons ever found — now on permanent exhibit at the Museum of the Earth, with a cast on display at the Mid-Hudson Children's Museum right here in Poughkeepsie. Customers still bring it up decades later, because it says something true about Wayne: he pays attention to what's in the ground, and to the people who trust him to dig it.",
  attribution: "Verified Hudson Valley history — search \"Hyde Park mastodon\" to read more.",
};

export const reviews = [
  {
    name: "Dan Schmitt",
    area: "Hudson Valley",
    stars: 5,
    text: "I contacted Wayne during the pandemic. He was a pro — delivered 18 yards of fill and 4 yards of topsoil himself, wore a mask, kept socially distant, even told my kids about the mammoth his company helped unearth. I'd definitely recommend Mallen Excavating.",
  },
  {
    name: "Lizzy Savino",
    area: "Local Guide",
    stars: 5,
    text: "Very pleased with Mr. Mallen's drain work. Would recommend his services.",
  },
];

export const extraRatings = [
  { name: "Gary Poole", stars: 5 },
  { name: "John Hyla", stars: 5 },
];

export const faqs = [
  { q: "Do you offer free estimates?", a: "Yes — every estimate is free, with no obligation. Call Wayne directly to set one up." },
  { q: "What areas do you serve?", a: "Poughkeepsie, Pleasant Valley, Hyde Park, LaGrange, Wappingers Falls, Fishkill, Rhinebeck, Millbrook, and the surrounding Hudson Valley." },
  { q: "How long have you been in business?", a: "Since 1974 — over 52 years of residential and site work across the Hudson Valley." },
  { q: "Do you install new septic systems?", a: "Yes — full septic installation, repair, and replacement. We know the local soil conditions and permitting requirements." },
  { q: "How much does a septic system cost?", a: "It depends on soil conditions, system size, and site access. We'll walk the property and give you an honest, free estimate before any work starts." },
  { q: "Can you repair an existing septic system instead of replacing it?", a: "Often, yes. We'll assess the system first and tell you honestly whether a repair makes sense before recommending a full replacement." },
  { q: "Do you handle water and sewer hookups?", a: "Yes — for new construction and for connecting or repairing existing lines." },
  { q: "My basement keeps getting wet — can you fix that?", a: "Usually. Wet basements are almost always a drainage problem outside the foundation, not the basement itself. We excavate and install proper drainage to solve it at the source." },
  { q: "Do you do drainage work for soggy yards?", a: "Yes — standing water and poor drainage are common in the Hudson Valley and very fixable with the right grading and drainage system." },
  { q: "Do you sell topsoil?", a: "Yes — we have screened topsoil and compost available for lawns and gardens, and can deliver." },
  { q: "Can you grade my property?", a: "Yes, grading is one of our core services — done properly so water moves away from your home instead of pooling." },
  { q: "Do you clear land?", a: "Yes — for driveways, building sites, or just reclaiming overgrown property." },
  { q: "Do you install driveways?", a: "Yes — we build the base and grade properly so it holds up through Hudson Valley winters." },
  { q: "Can you work in the winter?", a: "Frozen ground limits some digging, but many jobs, including site prep and material delivery, continue year-round. Call and we'll tell you honestly what's possible for the season." },
  { q: "How long does a septic installation take?", a: "Most residential installs take a few days once permits are approved, depending on system size and site conditions." },
  { q: "Are you licensed and insured?", a: "Yes, fully licensed and insured on every job." },
  { q: "Do you handle permits?", a: "We can guide you through what your project needs — call to discuss your specific site and county requirements." },
  { q: "Do you do commercial or only residential work?", a: "Primarily residential site work, though we take on some larger site projects — call to discuss your job." },
  { q: "How do I get a quote?", a: "Call Wayne directly at (845) 471-3457, or send a message through the contact form and he'll get back to you." },
  { q: "What makes Mallen Excavating different?", a: "52 years of honest work in the same community. You're talking to the owner, not a salesperson, and the price we quote is the price you pay." },
];

export const galleryCategories = ["All", "Septic & Sewer", "Drainage & Waterproofing", "Site Work & Grading", "Equipment"] as const;

export const chatAnswers: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["service", "offer", "do you do", "what do you"],
    answer:
      "We handle septic systems, water & sewer hookups, basement waterproofing, drainage, grading, topsoil, land clearing, driveways, and general site work — residential specialists since 1974.",
  },
  {
    keywords: ["price", "cost", "how much", "expensive", "charge"],
    answer:
      "Every estimate is free, and pricing depends on your site and the scope of work. Give me your name and number and Wayne will call you back with a straight answer.",
  },
  {
    keywords: ["septic"],
    answer:
      "Yes — full septic installation, repair, and replacement. Wayne has handled Hudson Valley septic work since 1974 and knows the local soil and codes. Want a free estimate?",
  },
  {
    keywords: ["drain", "wet basement", "flood", "water in my basement"],
    answer:
      "A wet basement is almost always a drainage issue outside the foundation. We excavate and install proper drainage to fix it at the source — not just patch the symptom.",
  },
  {
    keywords: ["area", "serve", "located", "where", "poughkeepsie", "hyde park", "wappingers", "fishkill", "rhinebeck"],
    answer:
      "We serve Poughkeepsie, Pleasant Valley, Hyde Park, LaGrange, Wappingers Falls, Fishkill, Rhinebeck, Millbrook, and the surrounding Hudson Valley.",
  },
  {
    keywords: ["schedule", "appointment", "book", "when", "available"],
    answer:
      "Call Wayne directly at (845) 471-3457 to set up a time, or leave your info here and he'll call you back.",
  },
  {
    keywords: ["estimate", "quote", "free"],
    answer: "Yes, estimates are always free with no obligation. Want me to pass your info along to Wayne?",
  },
  {
    keywords: ["topsoil", "compost"],
    answer: "Yes — we have screened topsoil and compost available, and can deliver to your property.",
  },
  {
    keywords: ["driveway"],
    answer: "Yes — we build driveways from the base up, graded properly to hold through Hudson Valley winters.",
  },
  {
    keywords: ["winter", "frozen", "cold", "snow"],
    answer: "Frozen ground limits some digging, but plenty of work continues through winter. Call and we'll tell you honestly what's possible for your job right now.",
  },
];

export const chatQuickQuestions = [
  "What services do you offer?",
  "Do you install septic systems?",
  "How much does excavation cost?",
  "Can I get a free estimate?",
];
