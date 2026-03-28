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
  phase: "reviewed" | "in-progress" | "pending" | "trial-pending" | "hands-on-trial";
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
    key: "helloclub",
    vendor: "Hello Club",
    phase: "reviewed",
    recommendedRole: "core-ops",
    rows: [
      {
        category: "Member onboarding + registration + waivers",
        weight: 15,
        score: 5,
        notes: "Strong onboarding, member management, and billing support for racquet sports clubs.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Strong fit for standard tennis club onboarding and membership workflows.",
      },
      {
        category: "Scheduling + court booking complexity",
        weight: 20,
        score: 5,
        notes: "Purpose-built court booking UX with booking restrictions by peak hours, membership tier, and role.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Very strong on racquet-sport booking flows; validate edge-case rules and league workflows in pilot.",
      },
      {
        category: "Parent/athlete communication workflows",
        weight: 15,
        score: 2,
        notes: "Some communication support exists, but not a standout strength for family engagement.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Needs validation for parent-facing communication depth and ongoing engagement workflows.",
      },
      {
        category: "Billing/subscriptions + refunds",
        weight: 15,
        score: 5,
        notes: "Automated membership renewals and Stripe-backed billing are strong, though some automation is plan-gated.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Strong billing baseline; confirm refund handling and plan-tier limits during evaluation.",
      },
      {
        category: "Staff roles/permissions + auditability",
        weight: 10,
        score: 2,
        notes: "Limited staff permission granularity for multi-department organizations.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Likely weaker if Farm & Forge needs fine-grained multi-program admin controls.",
      },
      {
        category: "Reporting quality",
        weight: 15,
        score: 2,
        notes: "Operational reporting exists, but analytics depth appears limited for broader organizational insight.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Reporting looks lighter than ideal for executive and cross-program visibility.",
      },
      {
        category: "API/export/data ownership",
        weight: 5,
        score: 2,
        notes: "Some integrations exist, but open API/data-flexibility posture looks limited compared with more integration-forward platforms.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Treat as weaker until export coverage and integration flexibility are proven.",
      },
      {
        category: "Migration effort + support",
        weight: 5,
        score: 5,
        notes: "Strong migration support and relatively easy setup are recurring positives.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Implementation support is a plus and could reduce switch friction.",
      },
    ],
    summary:
      "Excellent tennis/racquet-sports candidate with strong court booking, member management, and billing. Better as a tennis-specific core/module than as a true all-program system of record due to weaker permissions, reporting, and broader program coverage.",
    status: "conditional-fit",
  },
  {
    key: "courtreserve",
    vendor: "CourtReserve",
    phase: "reviewed",
    recommendedRole: "core-ops",
    rows: [
      {
        category: "Member onboarding + registration + waivers",
        weight: 15,
        score: 5,
        notes: "Strong native support for waivers, memberships, packages, and member import with guided onboarding (30–60 days).",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Appears comparable on core onboarding stack, with strong implementation support.",
      },
      {
        category: "Scheduling + court booking complexity",
        weight: 20,
        score: 4,
        notes: "Booking restrictions are configurable; fit looks strong for court and resource operations.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Comparable on rule-based booking controls; verify edge-case restrictions in pilot.",
      },
      {
        category: "Parent/athlete communication workflows",
        weight: 15,
        score: 4,
        notes: "Supports email, text, and push notifications; depth of two-way communication should be validated in trial.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Strong multi-channel support, but parity vs Club Automation should be confirmed in real workflows.",
      },
      {
        category: "Billing/subscriptions + refunds",
        weight: 15,
        score: 4,
        notes: "Integrated billing with financial reporting, plus payment integrations (Stripe and SafeSave).",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Likely comparable for club billing operations; confirm refund, reconciliation, and settlement detail.",
      },
      {
        category: "Staff roles/permissions + auditability",
        weight: 10,
        score: 4,
        notes: "Admin users and operational controls are clearly supported.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Comparable baseline expected; validate role granularity and audit logs by function.",
      },
      {
        category: "Reporting quality",
        weight: 15,
        score: 4,
        notes: "Platform includes reporting plus billing/financial reports and waiver tracking reports.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Strong coverage on operational reporting; confirm dashboard customization depth.",
      },
      {
        category: "API/export/data ownership",
        weight: 5,
        score: 3,
        notes: "API docs available and integration guidance published; confirm practical coverage for required integrations.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Promising baseline, but treat as comparable until rate limits, webhooks, and export depth are validated.",
      },
      {
        category: "Migration effort + support",
        weight: 5,
        score: 4,
        notes: "Guided onboarding and member import reduce implementation risk; timeline still depends on data quality and internal readiness.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Structured onboarding is a positive, but keep expectations conservative until migration rehearsal.",
      },
    ],
    summary:
      "Promising core operations candidate with mature onboarding and reporting. Keep as conditional pending trial validation on communication workflows, booking edge cases, role granularity, and API/webhook limits before final selection.",
    status: "conditional-fit",
  },
  {
    key: "blackbaud",
    vendor: "Blackbaud",
    phase: "trial-pending",
    recommendedRole: "academic-layer",
    rows: [],
    summary:
      "Under evaluation for academics / school system workflows. Current path appears sales-led (demo/contact) rather than a clean self-serve trial. Need product walkthrough and validation of SIS/LMS/admissions fit for Farm & Forge.",
    status: "pending-review",
  },
  {
    key: "coachnow",
    vendor: "CoachNow",
    phase: "hands-on-trial",
    recommendedRole: "performance-layer",
    rows: [],
    summary:
      "Self-serve signup started with rutvi@medlmobile.com and advanced into onboarding. Best-fit hypothesis is development / coaching + performance workflows. Need hands-on scoring for coaching UX, athlete communication, content/program structure, and admin setup depth.",
    status: "pending-review",
  },
  {
    key: "exercisecom",
    vendor: "Exercise.com",
    phase: "in-progress",
    rows: [],
    summary: "Demo request submitted; awaiting follow-up and product walkthrough for scoring.",
    status: "pending-review",
  },
  {
    key: "mindbody",
    vendor: "Mindbody",
    phase: "reviewed",
    recommendedRole: "hybrid-layer",
    rows: [
      {
        category: "Member onboarding + registration + waivers",
        weight: 15,
        score: 3,
        notes: "Only one default waiver at sign-up; limits multi-sport compliance.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Single default waiver is a constraint for clubs running multiple programs/sports.",
      },
      {
        category: "Scheduling + court booking complexity",
        weight: 20,
        score: 2,
        notes: "Not built for court-based sports like tennis — no native court booking.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "No native court/resource booking; conflicts, waitlists, recurring programs are not court-optimized.",
      },
      {
        category: "Parent/athlete communication workflows",
        weight: 15,
        score: 5,
        notes: "Strong marketing automation: email, SMS, push notifications.",
        vsClubAutomation: "stronger",
        vsClubAutomationNotes: "Mature multi-channel communication workflows.",
      },
      {
        category: "Billing/subscriptions + refunds",
        weight: 15,
        score: 5,
        notes: "Full support for billing, subscriptions, and refund edge cases.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Meets operational billing and refund needs.",
      },
      {
        category: "Staff roles/permissions + auditability",
        weight: 10,
        score: 4,
        notes: "Staff permissions and roles supported; auditability available.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Adequate for role-based access and audit needs.",
      },
      {
        category: "Reporting quality",
        weight: 15,
        score: 4,
        notes: "Robust revenue, attendance, retention dashboards; API + integrations (QuickBooks, Zapier, Google Analytics, Stripe).",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Strong operational and revenue reporting; integration extends flexibility.",
      },
      {
        category: "API/export/data ownership",
        weight: 5,
        score: 3,
        notes: "API access for integration; Mindbody retains data ownership.",
        vsClubAutomation: "weaker",
        vsClubAutomationNotes: "Integration possible via API, but data ownership stays with Mindbody.",
      },
      {
        category: "Migration effort + support",
        weight: 5,
        score: 4,
        notes: "Migration from Club Automation supported at no additional cost; they assist with data move.",
        vsClubAutomation: "comparable",
        vsClubAutomationNotes: "Dedicated migration support reduces implementation risk.",
      },
    ],
    summary:
      "Strong for fitness/wellness and marketplace exposure (3.7M+ users), marketing automation, and reporting. Weak on court booking and multi-waiver; expensive at scale; data owned by Mindbody.",
    status: "conditional-fit",
  },
  {
    key: "schooldoc",
    vendor: "SchoolDoc",
    phase: "trial-pending",
    recommendedRole: "hybrid-layer",
    rows: [],
    summary:
      "Under evaluation for compliance / forms + onboarding workflows. Sales/demo path identified; embedded request form showed validation friction during submission. Need demo access or sales follow-up plus scoring of forms, health/compliance workflows, onboarding, and parent/admin experience.",
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
  {
    key: "jonasclub",
    vendor: "Jonas Club",
    phase: "trial-pending",
    recommendedRole: "core-ops",
    rows: [],
    summary:
      "Demo requested via schedule form (rutvi@medlmobile.com). Awaiting sales contact to complete guided product eval. Core-ops fit pending validation of scheduling, memberships, billing, reporting, and integrations. No self-serve trial found.",
    status: "conditional-fit",
  },
  {
    key: "teambuildr",
    vendor: "TeamBuildr OS",
    phase: "hands-on-trial",
    recommendedRole: "performance-layer",
    rows: [],
    summary:
      "Self-serve trial started (rutvi@medlmobile.com). Reached onboarding with business name Farm & Forge Club. Next: finish onboarding and score core workflows (booking, memberships, payments, reporting, admin UX). Performance-ops candidate.",
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
