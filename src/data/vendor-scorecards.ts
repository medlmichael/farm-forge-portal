export type ScoreRow = {
  category: string;
  weight: number;
  score: number;
  notes: string;
};

export type VendorScorecard = {
  key: string;
  vendor: string;
  phase: "reviewed" | "in-progress" | "pending";
  rows: ScoreRow[];
  summary: string;
  status: "strong-fit" | "conditional-fit" | "not-recommended" | "pending-review";
};

export const VENDOR_SCORECARDS: VendorScorecard[] = [
  {
    key: "ezfacility",
    vendor: "EZFacility",
    phase: "reviewed",
    rows: [
      {
        category: "Member onboarding + registration + waivers",
        weight: 15,
        score: 5,
        notes: "Supports onboarding/registration/waivers.",
      },
      {
        category: "Scheduling + court booking complexity",
        weight: 20,
        score: 5,
        notes: "Supports conflicts, waitlists, recurring programs.",
      },
      {
        category: "Parent/athlete communication workflows",
        weight: 15,
        score: 2,
        notes: "One-way only natively; two-way via API + third-party integration.",
      },
      {
        category: "Billing/subscriptions + refunds",
        weight: 15,
        score: 5,
        notes: "Strong operations support.",
      },
      {
        category: "Staff roles/permissions + auditability",
        weight: 10,
        score: 4,
        notes: "Role depth depends on selected package tier.",
      },
      {
        category: "Reporting quality",
        weight: 15,
        score: 2,
        notes: "Business-management focused; limited athlete-management analytics.",
      },
      {
        category: "API/export/data ownership",
        weight: 5,
        score: 4,
        notes: "API/export available at additional cost.",
      },
      {
        category: "Migration effort + support",
        weight: 5,
        score: 3,
        notes: "Migration help provided; rankings likely manual.",
      },
    ],
    summary:
      "Strong business operations platform. Needs integrations for two-way communication and richer athlete analytics.",
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
