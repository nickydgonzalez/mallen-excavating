/**
 * Real Mallen Excavating jobsite photography, sourced from the company
 * Facebook page. Files live in /public/photos — this is the only place
 * that maps them to services and gallery categories.
 */
const p = (name: string) => `/photos/${name}`;

export const images = {
  hero: p("sitework-02-pool-excavation.jpg"),
  about: p("sitework-03-loader-truck-farm.jpg"),

  septic: p("septic-01-pipe-trench.jpg"),
  waterproofing: p("waterproofing-01-trench-propane.jpg"),
  drainage: p("drainage-01-retaining-wall.jpg"),
  grading: p("grading-03-topsoil-pile.jpg"),
  driveways: p("grading-02-cleared-lot.jpg"),
  clearing: p("clearing-01-stump-removal.jpg"),
  sitework: p("sitework-01-loader-truck.jpg"),
} as const;

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Septic & Sewer" | "Drainage & Waterproofing" | "Site Work & Grading" | "Equipment";
};

export const galleryItems: GalleryItem[] = [
  { src: p("waterproofing-02-foundation-trench.jpg"), alt: "Foundation drain line trench, ready for gravel and pipe", category: "Drainage & Waterproofing" },
  { src: p("septic-01-pipe-trench.jpg"), alt: "Septic line installation with corrugated pipe and gravel bed", category: "Septic & Sewer" },
  { src: p("sitework-02-pool-excavation.jpg"), alt: "Large excavation dug for a new pool installation", category: "Site Work & Grading" },
  { src: p("clearing-01-stump-removal.jpg"), alt: "Excavator pulling a tree stump and root ball", category: "Site Work & Grading" },
  { src: p("drainage-01-retaining-wall.jpg"), alt: "Boulder retaining wall built for drainage and grading", category: "Drainage & Waterproofing" },
  { src: p("equipment-01-truck-trailer-dusk.jpg"), alt: "Mallen Excavating truck and trailer staged for the next job", category: "Equipment" },
  { src: p("waterproofing-01-trench-propane.jpg"), alt: "Foundation waterproofing trench alongside a propane tank", category: "Drainage & Waterproofing" },
  { src: p("grading-01-cleared-lot.jpg"), alt: "Mini excavator finishing a cleared and graded lot", category: "Site Work & Grading" },
  { src: p("sitework-04-shed-demo.jpg"), alt: "Excavator demolishing an old shed", category: "Site Work & Grading" },
  { src: p("grading-03-topsoil-pile.jpg"), alt: "Loader delivering a fresh pile of screened topsoil", category: "Site Work & Grading" },
  { src: p("sitework-01-loader-truck.jpg"), alt: "Loader filling the dump truck with fill material", category: "Site Work & Grading" },
  { src: p("equipment-02-truck-trailer-day.jpg"), alt: "Truck and trailer loaded with the mini excavator", category: "Equipment" },
  { src: p("grading-02-cleared-lot.jpg"), alt: "Freshly graded dirt lot ready for the next phase", category: "Site Work & Grading" },
  { src: p("sitework-03-loader-truck-farm.jpg"), alt: "Loader and dump truck on a rural property job", category: "Site Work & Grading" },
  { src: p("grading-04-cleared-lot.jpg"), alt: "Mini excavator working a cleared building lot", category: "Site Work & Grading" },
  { src: p("sitework-05-loader-truck.jpg"), alt: "Loader and dump truck moving fill material" , category: "Site Work & Grading" },
  { src: p("equipment-03-truck-trailer-dusk.jpg"), alt: "Truck, trailer, and excavator staged at dusk", category: "Equipment" },
];
