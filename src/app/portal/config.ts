export type PortalModuleKey =
  | "calendar"
  | "calendar-create-event"
  | "staff-dashboard"
  | "communications-hub"
  | "education-tracking"
  | "performance-tracking"
  | "athlete-profile";

export type PortalModule = {
  key: PortalModuleKey;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  figmaUrl: string;
  highlights: string[];
};

export const PORTAL_MODULES: PortalModule[] = [
  {
    key: "calendar-create-event",
    title: "Calendar · Create Event",
    subtitle: "Scheduling",
    description: "Event creation workflow for practices, classes, and community sessions.",
    accent: "#fb8e28",
    figmaUrl:
      "https://www.figma.com/design/6JeppcVMwQ8H91KmTcBIlp/Farm-Forge?node-id=42-1839&t=eWxZK5k9iKHBVwZ6-4",
    highlights: ["Event type", "Audience", "Coach assignment", "Capacity + waitlist"],
  },
  {
    key: "calendar",
    title: "Calendar",
    subtitle: "Scheduling",
    description: "Unified family/athlete/staff calendar with a single source of truth for activities.",
    accent: "#5ba672",
    figmaUrl:
      "https://www.figma.com/design/6JeppcVMwQ8H91KmTcBIlp/Farm-Forge?node-id=42-1305&t=eWxZK5k9iKHBVwZ6-4",
    highlights: ["Month/week view", "Program filters", "Role-aware visibility", "Event details"],
  },
  {
    key: "staff-dashboard",
    title: "Staff Dashboard",
    subtitle: "Operations",
    description: "Operational command center for attendance, schedules, staffing, and KPIs.",
    accent: "#0b1f3b",
    figmaUrl:
      "https://www.figma.com/design/6JeppcVMwQ8H91KmTcBIlp/Farm-Forge?node-id=41-510&t=eWxZK5k9iKHBVwZ6-4",
    highlights: ["Daily overview", "Roster health", "Action queue", "Performance snapshots"],
  },
  {
    key: "communications-hub",
    title: "Communications Hub",
    subtitle: "Messaging",
    description: "Inbox + announcements center connecting staff, athletes, and families.",
    accent: "#7c3aed",
    figmaUrl:
      "https://www.figma.com/design/6JeppcVMwQ8H91KmTcBIlp/Farm-Forge?node-id=1-1620&t=eWxZK5k9iKHBVwZ6-4",
    highlights: ["Inbox", "Announcements", "Audience segmentation", "Delivery status"],
  },
  {
    key: "education-tracking",
    title: "Education / Academic Tracking",
    subtitle: "Academics",
    description: "Progress monitoring for standards, assignments, and growth milestones.",
    accent: "#1e5a8a",
    figmaUrl:
      "https://www.figma.com/design/6JeppcVMwQ8H91KmTcBIlp/Farm-Forge?node-id=1-1210&t=eWxZK5k9iKHBVwZ6-4",
    highlights: ["Mastery bands", "Assignment status", "Interventions", "Family visibility"],
  },
  {
    key: "performance-tracking",
    title: "Performance Tracking",
    subtitle: "Athletics",
    description: "Physical and skills development tracking with trendlines and coaching context.",
    accent: "#f97316",
    figmaUrl:
      "https://www.figma.com/design/6JeppcVMwQ8H91KmTcBIlp/Farm-Forge?node-id=1-777&t=eWxZK5k9iKHBVwZ6-4",
    highlights: ["Session outcomes", "Load + recovery", "Skill benchmarks", "Coach notes"],
  },
  {
    key: "athlete-profile",
    title: "Athlete Profile",
    subtitle: "Identity + growth",
    description: "Holistic profile view combining academics, athletics, communication, and goals.",
    accent: "#14b8a6",
    figmaUrl:
      "https://www.figma.com/design/6JeppcVMwQ8H91KmTcBIlp/Farm-Forge?node-id=1-352&t=eWxZK5k9iKHBVwZ6-4",
    highlights: ["Bio + goals", "Academic + athletic blend", "Recent activity", "Family contacts"],
  },
];

export const PORTAL_MODULE_MAP = Object.fromEntries(PORTAL_MODULES.map((module) => [module.key, module])) as Record<PortalModuleKey, PortalModule>;
