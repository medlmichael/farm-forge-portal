export type ScoreRow = {
  category: string;
  weight: number;
  score: number;
  notes: string;
  vsClubAutomation?: "stronger" | "comparable" | "weaker" | "unknown";
  vsClubAutomationNotes?: string;
};

export type VendorScorecard = {
  key: string;
  vendor: string;
  phase: "reviewed" | "in-progress" | "pending";
  recommendedRole?: "core-ops" | "comms-layer" | "academic-layer" | "performance-layer" | "hybrid-layer" | "tbd";
  rows: ScoreRow[];
  summary: string;
  status: "strong-fit" | "conditional-fit" | "not-recommended" | "pending-review";
};

export const VENDOR_SCORECARDS: VendorScorecard[] = [
  {
    key: "ezfacility",
    vendor: "EZFacility",
    phase: "reviewed",
    recommendedRole: "hybrid-layer",
    rows: [
      {
        category: "Member onboarding + registration + waivers",
        weight: 15,
        score: 5,
        notes: "Supports onboarding/registration/waivers.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Expected to be broadly similar for standard onboarding + waiver workflows.",
      },
      {
        category: "Scheduling + court booking complexity",
        weight: 20,
        score: 5,
        notes: "Supports conflicts, waitlists, recurring programs.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Appears comparable on core scheduling depth from discovery notes.",
      },
      {
        category: "Parent/athlete communication workflows",
        weight: 15,
        score: 2,
        notes: "One-way only natively; two-way via API + third-party integration.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Risk area for family engagement unless additional tools are integrated.",
      },
      {
        category: "Billing/subscriptions + refunds",
        weight: 15,
        score: 5,
        notes: "Strong operations support.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Likely comparable for payments/subscriptions; confirm refund edge-case parity in pilot.",
      },
      {
        category: "Staff roles/permissions + auditability",
        weight: 10,
        score: 4,
        notes: "Role depth depends on selected package tier.",
        vsClubAutomation: "unknown",
        vsClubAutomationNotes: "Package-dependent; validate role granularity against your current Club Automation setup.",
      },
      {
        category: "Reporting quality",
        weight: 15,
        score: 2,
        notes: "Business-management focused; limited athlete-management analytics.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Discovery indicates weaker native athlete reporting/visuals.",
      },
      {
        category: "API/export/data ownership",
        weight: 5,
        score: 4,
        notes: "API/export available at additional cost.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Integration flexibility exists but with added API costs.",
      },
      {
        category: "Migration effort + support",
        weight: 5,
        score: 3,
        notes: "Migration help provided; rankings likely manual.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Migration burden appears higher for athlete ranking/history fields.",
      },
    ],
    summary:
      "Strong business operations platform. Needs integrations for two-way communication and richer athlete analytics.",
    status: "conditional-fit",
  },
  {
    key: "mastery",
    vendor: "Mastery (Instructure)",
    phase: "reviewed",
    recommendedRole: "academic-layer",
    rows: [
      {
        category: "Member onboarding + registration + waivers",
        weight: 15,
        score: 2,
        notes: "Not intended for onboarding/waiver workflows.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Would require separate system for registration + waivers.",
      },
      {
        category: "Scheduling + court booking complexity",
        weight: 20,
        score: 1,
        notes: "Not a booking/scheduling platform.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Not comparable for court operations scheduling.",
      },
      {
        category: "Parent/athlete communication workflows",
        weight: 15,
        score: 2,
        notes: "Limited direct communication focus.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Not a parent messaging-first system.",
      },
      {
        category: "Billing/subscriptions + refunds",
        weight: 15,
        score: 1,
        notes: "No native billing/subscription management for club operations.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Would require separate billing platform.",
      },
      {
        category: "Staff roles/permissions + auditability",
        weight: 10,
        score: 3,
        notes: "Has institutional roles, but different model than club ops roles.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Comparable governance, different operational context.",
      },
      {
        category: "Reporting quality",
        weight: 15,
        score: 5,
        notes: "Strong academic/performance mastery reporting.",
        vsClubAutomation: "stronger",
        vsClubAutomationNotes: "Better fit for mastery/education tracking visuals.",
      },
      {
        category: "API/export/data ownership",
        weight: 5,
        score: 4,
        notes: "Mature LMS integrations and data interoperability.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Comparable/strong for data integrations.",
      },
      {
        category: "Migration effort + support",
        weight: 5,
        score: 3,
        notes: "Migration possible but requires model mapping.",
        vsClubAutomation: "unknown",
        vsClubAutomationNotes: "Depends on scope and data transform requirements.",
      },
    ],
    summary:
      "Best used as an education/performance layer, not a full replacement for Club Automation operations.",
    status: "conditional-fit",
  },
  {
    key: "parentsquare",
    vendor: "ParentSquare",
    phase: "reviewed",
    recommendedRole: "comms-layer",
    rows: [
      {
        category: "Member onboarding + registration + waivers",
        weight: 15,
        score: 2,
        notes: "Not built as primary registration/waiver platform.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Needs companion registration stack.",
      },
      {
        category: "Scheduling + court booking complexity",
        weight: 20,
        score: 1,
        notes: "Not a booking/court scheduling engine.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "No operational booking parity.",
      },
      {
        category: "Parent/athlete communication workflows",
        weight: 15,
        score: 5,
        notes: "Strong parent communication/inbox capabilities.",
        vsClubAutomation: "stronger",
        vsClubAutomationNotes: "Likely stronger for family communications experience.",
      },
      {
        category: "Billing/subscriptions + refunds",
        weight: 15,
        score: 1,
        notes: "Not focused on billing/subscription operations.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Requires separate billing system.",
      },
      {
        category: "Staff roles/permissions + auditability",
        weight: 10,
        score: 3,
        notes: "Supports role-based communication admin workflows.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Comparable for comms admin context.",
      },
      {
        category: "Reporting quality",
        weight: 15,
        score: 3,
        notes: "Useful communication analytics; limited athletic/performance analytics.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Better for comms metrics, not full operations analytics.",
      },
      {
        category: "API/export/data ownership",
        weight: 5,
        score: 3,
        notes: "Integration capability exists; verify export depth and API limits.",
        vsClubAutomation: "unknown",
        vsClubAutomationNotes: "Needs technical validation in pilot.",
      },
      {
        category: "Migration effort + support",
        weight: 5,
        score: 3,
        notes: "Migration depends on communication data scope.",
        vsClubAutomation: "unknown",
        vsClubAutomationNotes: "Assess data mapping for households and contacts.",
      },
    ],
    summary:
      "Best used as a communication layer alongside operations tooling; not a full Club Automation replacement.",
    status: "conditional-fit",
  },
  {
    key: "courtreserve",
    vendor: "CourtReserve",
    phase: "in-progress",
    rows: [],
    summary: "Booked for detailed walkthrough and scoring.",
    status: "pending-review",
  },
  {
    key: "mindbody",
    vendor: "Mindbody",
    phase: "in-progress",
    rows: [],
    summary: "Submitted request; waiting for full discovery and scoring inputs.",
    status: "pending-review",
  },
  {
    key: "teamworks",
    vendor: "Teamworks",
    phase: "in-progress",
    rows: [],
    summary: "Submitted request; waiting for product fit details.",
    status: "pending-review",
  },
  {
    key: "waresport",
    vendor: "Waresport",
    phase: "pending",
    rows: [],
    summary: "Pending available trial slot.",
    status: "pending-review",
  },
];

export function weightedScore(rows: ScoreRow[]) {
  if (!rows.length) return null;
  const total = rows.reduce((acc, row) => acc + (row.weight / 100) * row.score, 0);
  return Number(total.toFixed(2));
}

export function scoreOutOf100(rows: ScoreRow[]) {
  const weighted = weightedScore(rows);
  if (weighted == null) return null;
  return Math.round((weighted / 5) * 100);
}
