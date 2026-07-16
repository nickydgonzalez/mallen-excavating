const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

/**
 * PLACEHOLDER photography — swap for Wayne's real jobsite photos.
 * Drop the real files into /public/real/ and update the paths below;
 * everything else in the site reads from this file, so nothing else changes.
 */
export const images = {
  hero: u("photo-1649807479468-40011b31ee09", 2000),
  about: u("photo-1612878100556-032bbf1b3bab", 1400),

  septic: u("photo-1763515186653-2df0fba44697", 900),
  waterproofing: u("photo-1759967495843-3edc416114a9", 900),
  grading: u("photo-1575642975010-983c53b3eeb9", 900),
  driveways: u("photo-1763516763259-4f7ce3d19c2b", 900),
  clearing: u("photo-1778436010586-60eeb96a3ac5", 900),
  sitework: u("photo-1503708928676-1cb796a0891e", 900),
} as const;

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Septic & Sewer" | "Drainage & Waterproofing" | "Site Work & Grading" | "Equipment";
};

export const galleryItems: GalleryItem[] = [
  { src: u("photo-1763515186653-2df0fba44697", 1100), alt: "Excavation crew digging a septic line", category: "Septic & Sewer" },
  { src: u("photo-1759967495843-3edc416114a9", 1100), alt: "Foundation drainage trench prepared with stone", category: "Drainage & Waterproofing" },
  { src: u("photo-1575642975010-983c53b3eeb9", 1100), alt: "Front loader spreading topsoil", category: "Site Work & Grading" },
  { src: u("photo-1763516763259-4f7ce3d19c2b", 1100), alt: "Skid steer preparing a gravel driveway base", category: "Site Work & Grading" },
  { src: u("photo-1778436010586-60eeb96a3ac5", 1100), alt: "Clearing wooded land for a new site", category: "Site Work & Grading" },
  { src: u("photo-1503708928676-1cb796a0891e", 1100), alt: "Excavator digging on an active job site", category: "Equipment" },
  { src: u("photo-1622645636770-11fbf0611463", 1100), alt: "Heavy equipment working through a Hudson Valley winter", category: "Equipment" },
  { src: u("photo-1612878100556-032bbf1b3bab", 1100), alt: "Excavator staged on site", category: "Equipment" },
  { src: u("photo-1649807479468-40011b31ee09", 1100), alt: "Excavator on a hillside site", category: "Site Work & Grading" },
];

export const beforeAfter = {
  before: { src: u("photo-1778436010586-60eeb96a3ac5", 1400), alt: "Overgrown wooded lot before clearing" },
  after: { src: u("photo-1575642975010-983c53b3eeb9", 1400), alt: "Cleared, graded site ready to build on" },
};
