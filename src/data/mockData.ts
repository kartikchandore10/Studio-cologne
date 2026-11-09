import { Project, CraftSpecimen, SetInspectorItem, Accolade, TimelineMilestone, StudioTelemetry, NavLink } from "@/types";

export const NAVIGATION_LINKS: NavLink[] = [
  { label: "Studio", href: "#studio" },
  { label: "Games", href: "#games", badge: "Live" },
  { label: "Craft & Workshop", href: "#craft" },
  { label: "Set Inspector", href: "#sets", badge: "Interactive" },
  { label: "Praise", href: "#accolades" },
  { label: "Timeline", href: "#timeline" },
  { label: "Presskit", href: "#presskit" },
  { label: "Contact", href: "#contact" },
];

export const STUDIO_PROJECTS: Project[] = [
  {
    id: "harold-halibut",
    number: "FIG 01",
    title: "Harold Halibut",
    tagline: "A handmade narrative game about friendship and life on an underwater spaceship.",
    category: "released",
    description:
      "Harold Halibut is a cross-media indie game born from 10+ years of dedicated analog craft. Every set, prop, and face was sculpted in clay, carved from wood, welded in metal, and 3D scanned into real-time interactive cinema.",
    longDescription:
      "It's been 250 years since your home—a city-sized spaceship—fled a Cold War Earth to find a habitable planet. You play as Harold, a lab assistant for the ship's lead scientist, Jeanne Mareaux. While most of the ship's inhabitants have grown comfortable with underwater life, Mareaux still dreams of leaving the planet behind. But then, a fateful encounter plunges Harold into a world no one could have guessed.",
    platforms: ["PC / Steam", "PlayStation 5", "Xbox Series X|S", "Xbox Game Pass", "Mac"],
    releaseYear: "2024",
    status: "Available Worldwide",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
    trailerVideoUrl: "https://www.youtube.com/embed/8b9hVb7Sj1Y",
    demoAvailable: true,
    steamUrl: "https://store.steampowered.com/app/924290/Harold_Halibut/",
    playstationUrl: "https://store.playstation.com/concept/10008581",
    xboxUrl: "https://www.xbox.com/games/store/harold-halibut/9n9c6z1c5ksw",
    tags: ["Handmade", "Stop-Motion", "Sci-Fi", "Narrative Adventure", "Puppet Animation"],
    specifications: {
      duration: "12-18 Hours Story",
      engine: "Unity + Custom Photogrammetry Pipeline",
      physicalScale: "1:10 Miniature Dioramas",
      voiceCast: "Full English Voice Acting with Studio Soundtrack",
    },
  },
  {
    id: "project-02",
    number: "FIG 02",
    title: "Project Epilogue: Cologne Sub-Surface",
    tagline: "Workshop Cologne, Model Building Phase II.",
    category: "in-production",
    description:
      "Currently in active physical fabrication at our Cologne atelier. Exploring kinetic puppet mechanisms, tactile cloth simulations, and acoustic ambient storytelling.",
    longDescription:
      "Following the launch of Harold Halibut, Slow Bros is developing an unannounced narrative title expanding upon multi-material stop-motion dioramas, combining intricate clockwork mechanics with ambient musical scoring.",
    platforms: ["PC", "Next-Gen Consoles"],
    releaseYear: "In Development",
    status: "Fabrication Phase",
    coverImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600&auto=format&fit=crop",
    demoAvailable: false,
    tags: ["Experimental", "Tactile", "Stop-Motion", "Acoustic Cinema"],
    specifications: {
      duration: "TBA",
      engine: "Next-Gen Realtime Tech",
      physicalScale: "Hybrid 1:8 & 1:1 Scale Details",
      voiceCast: "Original Ensemble",
    },
  },
  {
    id: "workshop-archive",
    number: "FIG 03",
    title: "The FEDORA I Archive",
    tagline: "Interactive 3D Photogrammetry Set Exploratorium.",
    category: "experimental",
    description:
      "A digital museum archiving over 350 physical handcrafted props, miniature furniture, lighting fixtures, and costume swatches built between 2014 and 2024.",
    longDescription:
      "Explore high-fidelity 3D scans of the actual physical set pieces crafted by Ole Tillmann, Fabian Preuschoff, and Daniel Beckmann in our Cologne workshop.",
    platforms: ["Web / Interactive Exhibition", "VR Ready"],
    releaseYear: "2025 Archive",
    status: "Interactive Showcase",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
    demoAvailable: true,
    tags: ["Museum", "Photogrammetry", "Physical Artifacts", "Archival"],
    specifications: {
      duration: "Self-Paced Exploration",
      engine: "WebGL + Three.js / Canvas",
      physicalScale: "Raw 1:1 Photogrammetric Scan Data",
      voiceCast: "Developer Audio Commentary",
    },
  },
];

export const CRAFT_SPECIMENS: CraftSpecimen[] = [
  {
    id: "clay-sculpting",
    material: "Plastiline & Polymer Clay",
    title: "Hand-Sculpted Facial Character Molds",
    technique: "Sub-surface anatomical detailing & thumbprint texturing",
    description:
      "Every character expression was sculpted by hand. The subtle natural irregularities, tiny thumbprints, and clay textures remain intentionally visible in 4K resolution.",
    iconName: "Palette",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
    physicalOrigin: "Cologne Workshop, Bench 01",
    statNumber: "40+",
    statLabel: "Unique clay characters molded",
  },
  {
    id: "carpentry-sets",
    material: "Birch Plywood & Balsa Wood",
    title: "Architectural Miniature Dioramas",
    technique: "Precision laser routing, hand-planing, and lacquer staining",
    description:
      "Rooms on the spaceship FEDORA I were constructed as authentic physical miniature sets at 1:10 scale, utilizing actual timber framing, distressed paint washes, and brass fittings.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
    physicalOrigin: "Carpentry Department",
    statNumber: "28",
    statLabel: "Full architectural rooms framed",
  },
  {
    id: "textiles-costuming",
    material: "Woven Wool, Canvas & Hand-Dyed Silks",
    title: "Micro-Tailored Character Wardrobes",
    technique: "Single-thread miniature needlework & biological weathering",
    description:
      "Tiny lab coats, knitted beanies, retro jumpsuits, and submersible boots were sewn stitch-by-stitch by textile artists to simulate genuine fabric drape and wear.",
    iconName: "Scissors",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop",
    physicalOrigin: "Wardrobe & Textile Atelier",
    statNumber: "150+",
    statLabel: "Miniature garments hand-sewn",
  },
  {
    id: "photogrammetry-pipeline",
    material: "3D Photogrammetry & Motion Capture",
    title: "Analog to Digital Transmutation",
    technique: "Multi-angle polarized lighting & sub-millimeter mesh extraction",
    description:
      "Physical objects undergo 360-degree high-density optical scanning, preserving physical brush marks, wood grain, and light reflectivity for dynamic in-game lighting.",
    iconName: "ScanLine",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    physicalOrigin: "Digital Photogrammetry Rig",
    statNumber: "350k+",
    statLabel: "Individual reference photos captured",
  },
];

export const SET_INSPECTOR_ITEMS: SetInspectorItem[] = [
  {
    id: "lab-01",
    name: "Dr. Mareaux's Sub-Level Laboratory",
    room: "Module D // Fedora I Research Ward",
    dimensions: "120cm × 85cm × 65cm (Physical 1:10 Model)",
    materialsUsed: ["Soldered Copper Pipe", "Stained Balsa Wood", "Miniature Cathode Tube", "Cast Resin Beakers"],
    lightingMood: "Deep Sea Bioluminescent Cyan & Warm Incandescent Amber",
    description:
      "The intellectual epicenter of the ship. Harold assists Dr. Mareaux among centrifuge test tubes, magnetic tape reels, and samples collected from the alien benthic depths.",
    hotspots: [
      {
        x: 28,
        y: 42,
        title: "Analog Oscilloscope Monitor",
        detail: "Carved from high-density polyurethane block and fitted with a real working 1.5-inch micro-CRT display.",
      },
      {
        x: 62,
        y: 35,
        title: "Water Filtration Piping",
        detail: "Genuine hand-bent copper tubes weathered with verdigris patina to indicate decades of damp alien salt air.",
      },
      {
        x: 75,
        y: 72,
        title: "Specimen Sampling Desk",
        detail: "Layered plywood varnished with antique wood stain. Every paper note was handwritten with a 0.05mm micron pen.",
      },
    ],
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "arcade-lounge",
    name: "The FEDORA Central Transit & Arcade",
    room: "Module B // Public Promenade",
    dimensions: "140cm × 90cm × 70cm (Physical 1:10 Model)",
    materialsUsed: ["Stained Glass Acrylic", "Cast Zinc Girders", "Textured Linoleum", "LED Micro-Filament"],
    lightingMood: "Nostalgic 1970s Warm Tungsten & Neon Green",
    description:
      "Where off-shift crew members gather for synthetic teas, arcade pinball, and melancholy songs of planet Earth.",
    hotspots: [
      {
        x: 32,
        y: 55,
        title: "Vintage Coin-Op Terminal",
        detail: "Custom wooden chassis housing miniature joystick controls sculpted from jewelry pins.",
      },
      {
        x: 54,
        y: 30,
        title: "Perforated Acoustic Wall Panels",
        detail: "Laser-perforated corkboard simulating mid-century soundproofing tiles inside the spacecraft.",
      },
      {
        x: 82,
        y: 65,
        title: "Hand-Upholstered Booth Seating",
        detail: "Miniature faux-leather cushions padded with sponge and finished with French piping seams.",
      },
    ],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "greenhouse",
    name: "Hydroponics Botanical Dome",
    room: "Module G // Life Support Ecosystem",
    dimensions: "110cm × 110cm × 80cm (Physical 1:10 Model)",
    materialsUsed: ["Preserved Lichen & Moss", "Blown Glass Globes", "Hand-Welded Brass Framework", "Fiber Optics"],
    lightingMood: "Soft Diffused Sunlight Simulation & Chlorophyll Green",
    description:
      "The vital lungs of the ship, nurturing Earth flora in an alien marine trench thousands of fathoms below the surface.",
    hotspots: [
      {
        x: 25,
        y: 38,
        title: "Oxygenation Mist Injectors",
        detail: "Micro ultrasonic atomizers built into brass conduits to release real visible vapor during photogrammetry shoots.",
      },
      {
        x: 50,
        y: 60,
        title: "Alien Flora Specimen Beds",
        detail: "Sculpted from colored silicone rubbers to give an organic, semi-translucent gelatinous feel.",
      },
      {
        x: 78,
        y: 45,
        title: "Observatory Porthole",
        detail: "Triple-layer curved acrylic gazing directly into the dark subaquatic abyss outside.",
      },
    ],
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop",
  },
];

export const ACCOLADES: Accolade[] = [
  {
    id: "ign",
    quote: "Harold Halibut is a visual triumph. You can practically smell the paint and feel the textures of its incredible handmade world.",
    publication: "IGN",
    score: "9 / 10",
    badge: "Editor's Choice",
    date: "April 2024",
  },
  {
    id: "edge",
    quote: "A staggering feat of physical craft and patient devotion. Slow Bros has created something rare in modern video games: genuine tactile soul.",
    publication: "Edge Magazine",
    score: "Must Play",
    badge: "Cover Feature",
    date: "May 2024",
  },
  {
    id: "polygon",
    quote: "Stop-motion has never felt more alive. Harold Halibut bridges cinema and video games in a manner that will be remembered for decades.",
    publication: "Polygon",
    badge: "Recommended",
    date: "April 2024",
  },
  {
    id: "eurogamer",
    quote: "Every frame feels made with love, patience, and extraordinary artistic courage. A profound achievement for independent European game design.",
    publication: "Eurogamer",
    score: "Essential",
    badge: "Essential",
    date: "April 2024",
  },
  {
    id: "guardian",
    quote: "Like stepping into a melancholic, retro-futuristic Wes Anderson diorama filled with heart, humor, and quiet wonder.",
    publication: "The Guardian",
    score: "★★★★★",
    badge: "Top Indie Pick",
    date: "April 2024",
  },
  {
    id: "tribeca",
    quote: "Official Selection — Tribeca Games Festival. Celebrating narrative innovation and boundary-pushing artisanal craftsmanship.",
    publication: "Tribeca Festival",
    badge: "Official Selection",
    date: "Festival Winner",
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2015",
    phase: "Genesis",
    title: "Four Friends in a Cologne Basement",
    location: "Cologne, Germany",
    description:
      "Onat Hekimoğlu, Ole Tillmann, Fabian Preuschoff, and Daniel Beckmann formally found Slow Bros. Over kitchen dinners, they sketch the first outlines of Harold Halibut: a stop-motion game built with real clay and timber.",
    highlightTag: "Studio Founded",
  },
  {
    year: "2017",
    phase: "Proof of Craft",
    title: "First Physical Photogrammetry Tests",
    location: "Slow Bros Atelier",
    description:
      "Developing a custom camera rig to photograph clay heads from 120 angles. The first successful 3D mesh is imported into Unity, retaining all visible fingerprints and brushstrokes.",
    highlightTag: "Technological Breakthrough",
  },
  {
    year: "2020",
    phase: "Scaling Up",
    title: "The FEDORA I Construction Yard",
    location: "Industrial Workshop, Cologne",
    description:
      "The team expands the physical workshop, fabricating 28 full room sets, hand-soldering miniature brass fixtures, and sewing hundreds of miniature costumes with textile artisans.",
    highlightTag: "Production Milestone",
  },
  {
    year: "2023",
    phase: "Tribeca & Global Recognition",
    title: "Tribeca Festival Official Selection",
    location: "New York City & Cologne",
    description:
      "Harold Halibut debuts to global acclaim at the Tribeca Games Festival and The Game Awards, receiving standing ovations for its unprecedented handcrafted visuals.",
    highlightTag: "Global Showcase",
  },
  {
    year: "2024",
    phase: "Worldwide Release",
    title: "Launch Day Worldwide",
    location: "All Major Platforms",
    description:
      "Harold Halibut launches globally on PC, PlayStation 5, Xbox Series X|S, and Game Pass. Ten years of uncompromising tactile dedication reaches millions of players worldwide.",
    highlightTag: "Global Launch",
  },
  {
    year: "2025+",
    phase: "The Next Horizon",
    title: "Project Epilogue & Phase II Fabrication",
    location: "Slow Bros Atelier",
    description:
      "With a battle-tested hybrid workflow and an expanded studio, Slow Bros embarks on their next ambitious handcrafted narrative voyage.",
    highlightTag: "Active Future",
  },
];

export const STUDIO_TELEMETRY: StudioTelemetry = {
  handmadePuppetsCount: 42,
  physicalSetsBuilt: 28,
  photogrammetryScans: 350000,
  developmentYears: 10,
  voiceLinesRecorded: 26000,
  gallonsOfCoffee: 4800,
};

export const STUDIO_TEAM = [
  {
    name: "Onat Hekimoğlu",
    role: "Co-founder & Game Director",
    focus: "Writing, Programming & Original Score",
    bio: "Composer and director steering the narrative arc and musical soul of Slow Bros.",
  },
  {
    name: "Ole Tillmann",
    role: "Co-founder & Art Director",
    focus: "Physical Sculpting, Character Design & Concept Art",
    bio: "Visual artist whose clay fingertips sculpted Harold and the eccentric inhabitants of the FEDORA.",
  },
  {
    name: "Fabian Preuschoff",
    role: "Co-founder & Director of Photography",
    focus: "Set Architecture, Miniature Carpentry & Lighting",
    bio: "Cinematographer and architect who engineered physical scale sets and analog illumination rigs.",
  },
  {
    name: "Daniel Beckmann",
    role: "Co-founder & 3D Lead",
    focus: "Photogrammetry Pipelines, 3D Assets & Writing",
    bio: "Bridge between physical sculptures and real-time interactive game engine shaders.",
  },
];

export const CRAFTING_BREAKDOWN_DATA = [
  { category: "Handmade Sets", hours: 4200, percentage: 35 },
  { category: "Clay Puppetry", hours: 2800, percentage: 24 },
  { category: "Photogrammetry & Tech", hours: 2400, percentage: 20 },
  { category: "Story & Voice", hours: 1500, percentage: 13 },
  { category: "Score & Sound Design", hours: 1000, percentage: 8 },
];

