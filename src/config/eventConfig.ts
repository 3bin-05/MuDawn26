export const eventInfo = {
  name: "μDawn '26",
  tagline: "Build. Learn. Innovate.",
  subTagline: "A 30-hour Innovation Hackathon powered by curiosity, AI and the spirit of building.",
  duration: "30 Hours",
  organizer: "µLearn SBC",
  institution: "Sree Buddha College of Engineering",
  initiative: "Build with AI",
  campusChapterUrl: "https://mulearn-sbc.vercel.app",
  registrationUrl: "", // Keep empty as a placeholder
};

export interface Phase {
  phase: string;
  title: string;
  focus: string;
  activities: string[];
}

export const timelinePhases: Phase[] = [
  {
    phase: "01",
    title: "Discover",
    focus: "Discover",
    activities: [
      "Registration",
      "Opening Ceremony",
      "Problem Statement Briefing"
    ]
  },
  {
    phase: "02",
    title: "Learn",
    focus: "Learn",
    activities: [
      "Build with AI Workshop",
      "Product Design Session",
      "Mentor Interactions"
    ]
  },
  {
    phase: "03",
    title: "Build",
    focus: "Build",
    activities: [
      "Development Sprint",
      "AI Integration",
      "Technical Mentorship",
      "Progress Checkpoints"
    ]
  },
  {
    phase: "04",
    title: "Refine",
    focus: "Refine",
    activities: [
      "Product Validation",
      "Testing",
      "Pitch Preparation Workshop",
      "Prototype Enhancement"
    ]
  },
  {
    phase: "05",
    title: "Present",
    focus: "Present",
    activities: [
      "Final Pitching",
      "Live Demonstrations",
      "Jury Evaluation"
    ]
  },
  {
    phase: "06",
    title: "Celebrate",
    focus: "Celebrate",
    activities: [
      "Awards Ceremony",
      "Networking",
      "Closing Session"
    ]
  }
];

export const experiences = [
  {
    title: "Curated Problem Statements",
    description: "Work on real-world challenges designed in collaboration with industry experts."
  },
  {
    title: "Product Design Workshop",
    description: "Learn how to structure your product thinking and user-centric design principles."
  },
  {
    title: "AI Development Sprints",
    description: "Deep dive into building, integrating, and fine-tuning AI-powered applications."
  },
  {
    title: "Mentor Reviews",
    description: "Receive direct feedback from experienced builders, engineers, and product specialists."
  },
  {
    title: "Expert Sessions",
    description: "Attend technical sessions covering advanced AI models, APIs, and frameworks."
  },
  {
    title: "Pitch Preparation Workshop",
    description: "Learn how to refine your presentation, showcase your demo, and pitch to a jury."
  },
  {
    title: "Community Experience",
    description: "Connect with fellow student builders in an energetic, collaborative atmosphere."
  },
  {
    title: "Final Product Showcase",
    description: "Present your functioning prototype and celebrate what you've built during the sprint."
  }
];

export const whyMuDawnThemes = [
  {
    title: "Inspire Future Builders",
    description: "Encourage students to explore AI, solve meaningful problems and transform ideas into impactful products."
  },
  {
    title: "Strengthen the Developer Ecosystem",
    description: "Create a community centered around learning, collaboration and knowledge sharing."
  },
  {
    title: "Share Knowledge & Expertise",
    description: "Connect students with experienced professionals through mentorship and technical interactions."
  },
  {
    title: "Discover Emerging Talent",
    description: "Give passionate student developers an environment to demonstrate technical ability, creativity and product thinking."
  },
  {
    title: "Create Lasting Impact",
    description: "Help participants develop practical skills, industry exposure and confidence that extends beyond the event."
  }
];

export const aiEcosystemBlocks = [
  {
    title: "AI Models",
    description: "Explore modern AI capabilities."
  },
  {
    title: "Developer Platforms",
    description: "Build using modern development ecosystems."
  },
  {
    title: "Cloud & APIs",
    description: "Integrate powerful cloud and API capabilities."
  },
  {
    title: "Real-World Problems",
    description: "Use technology to solve meaningful challenges."
  }
];
