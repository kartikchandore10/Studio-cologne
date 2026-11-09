export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: "released" | "in-production" | "experimental";
  description: string;
  longDescription: string;
  platforms: string[];
  releaseYear: string;
  status: string;
  coverImage: string;
  trailerVideoUrl?: string;
  demoAvailable: boolean;
  steamUrl?: string;
  playstationUrl?: string;
  xboxUrl?: string;
  tags: string[];
  specifications: {
    duration: string;
    engine: string;
    physicalScale: string;
    voiceCast: string;
  };
}

export interface CraftSpecimen {
  id: string;
  material: string;
  title: string;
  technique: string;
  description: string;
  iconName: string;
  image: string;
  physicalOrigin: string;
  statNumber: string;
  statLabel: string;
}

export interface SetInspectorItem {
  id: string;
  name: string;
  room: string;
  dimensions: string;
  materialsUsed: string[];
  lightingMood: string;
  description: string;
  hotspots: {
    x: number; // percentage
    y: number; // percentage
    title: string;
    detail: string;
  }[];
  image: string;
}

export interface Accolade {
  id: string;
  quote: string;
  publication: string;
  author?: string;
  score?: string;
  badge?: string;
  date: string;
}

export interface TimelineMilestone {
  year: string;
  phase: string;
  title: string;
  location: string;
  description: string;
  highlightTag: string;
}

export interface StudioTelemetry {
  handmadePuppetsCount: number;
  physicalSetsBuilt: number;
  photogrammetryScans: number;
  developmentYears: number;
  voiceLinesRecorded: number;
  gallonsOfCoffee: number;
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

