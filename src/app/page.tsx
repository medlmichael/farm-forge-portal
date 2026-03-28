import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { FarmAndForgeLogo } from "@/components/farm-and-forge-logo";
import trialLogins from "../../data/trial-logins.json";

const PORTALS = [
  {
    id: "website",
    name: "Farm & Forge main site",
    sub: "Public website",
    platform: "farmandforgeclub.com",
    description: "Primary brand destination for programs, team, mission, and membership pathways.",
    href: "https://farmandforgeclub.com/",
    external: true,
    accentHex: "#0b1f3b",
  },
  {
    id: "scorecards",
    name: "Vendor scorecards",
    sub: "Comparison hub",
    platform: "Research + selection",
    description: "Side-by-side vendor analysis, recommendation roles, and trial status for every platform under review.",
    href: "/scorecards",
    external: false,
    accentHex: "#fb8e28",
  },
  {
    id: "club",
    name: "Club Automation",
    sub: "Operations + scheduling",
    platform: "Club Automation",
    description: "Scheduling, bookings, and member operations with shared identity continuity.",
    href: "/club",
    external: false,
    accentHex: "#5ba672",
  },
  {
    id: "portal",
    name: "Unified experience portal",
    sub: "Future state",
    platform: "Farm & Forge concept",
    description: "Single launchpad for every tool so families, athletes, and staff always start in one place.",
    href: "/portal",
    external: false,
    accentHex: "#fb8e28",
  },
  {
    id: "mastery",
    name: "Mastery",
    sub: "Education & performance",
    platform: "Instructure Mastery",
    description: "Assessments, progress tracking, and learning insights tied to the same member identity.",
    href: "/mastery",
    external: false,
    accentHex: "#1e5a8a",
  },
  {
    id: "parentsquare",
    name: "ParentSquare Inbox",
    sub: "Family communication",
    platform: "ParentSquare",
    description: "Announcements, messages, and family communications in one connected inbox experience.",
    href: "/parentsquare",
    external: false,
    accentHex: "#7c3aed",
  },
] as const;

const STAFF_HUB = {
  name: "Staff Hub",
  sub: "Internal",
  platform: "Role-gated",
  description:
    "Staff and admin portal for schedules, rosters, and operations. Requires a provisioned staff/admin role.",
  href: "/staff",
};

const STATUS_STYLES: Record<string, string> = {
  booked: "border-green-200 bg-green-50 text-green-700",
  "in-trial": "border-emerald-200 bg-emerald-50 text-emerald-700",
  submitted: "border-sky-200 bg-sky-50 text-sky-700",
  completed: "border-violet-200 bg-violet-50 text-violet-700",
  pending: "border-amber-200 bg-amber-50 text-amber-700",
};

export default function HubPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background-page)]">
      <div className="h-1 w-full bg-[var(--ff-forge)]" aria-hidden />
      <header className="flex items-center justify-between border-b border-[var(--ff-border)] bg-[var(--background)] px-6 py-4">
        <div className="flex items-center gap-3">
          <FarmAndForgeLogo href="/" height={30} />
          <span className="hidden text-xs font-semibold uppercase tracking-widest text-[var(--ff-cool-gray)] sm:block">
            Platform Analysis
          </span>
        </div>
        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton>
              <button className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--ff-cool-gray)]">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="rounded-full bg-[var(--ff-navy)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
                Create account
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      <section className="border-b border-[var(--ff-border)] bg-[var(--background)] px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--ff-navy)] sm:text-5xl">
            One branded home for every Farm & Forge tool.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[var(--ff-cool-gray)]">
            This demo is about portal strategy more than any single auth vendor. The goal is a future where
            each platform option lives under one Farm & Forge-branded launchpad.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--ff-cool-gray)]">
            Identity here is only the plumbing layer so users can move between tools without friction.
          </p>

          <SignedOut>
            <div className="mt-8 flex flex-wrap gap-3">
              <SignInButton>
                <button className="inline-flex h-11 items-center rounded-full bg-[var(--ff-forge)] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                  View portal flow
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="inline-flex h-11 items-center rounded-full border border-[var(--ff-navy)] px-6 text-sm font-semibold text-[var(--ff-navy)] transition-colors hover:bg-[var(--ff-navy)] hover:text-white">
                  Create demo account
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      </section>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {PORTALS.map((portal) => (
            <div
              key={portal.id}
              className="flex flex-col overflow-hidden rounded-xl border border-[var(--ff-border)] bg-[var(--background)] shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-1 w-full" style={{ background: portal.accentHex }} />
              <div className="flex flex-1 flex-col p-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ff-cool-gray)]">
                    {portal.sub}
                  </span>
                  <div className="mt-0.5 text-xs text-[var(--ff-cool-gray)]">{portal.platform}</div>
                </div>
                <h2 className="mt-3 font-semibold text-[var(--foreground)]">{portal.name}</h2>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--ff-cool-gray)]">{portal.description}</p>
                <div className="mt-5">
                  {portal.external ? (
                    <a
                      href={portal.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold transition-opacity hover:opacity-70"
                      style={{ color: portal.accentHex }}
                    >
                      Visit site →
                    </a>
                  ) : (
                    <Link
                      href={portal.href}
                      className="text-sm font-semibold transition-opacity hover:opacity-70"
                      style={{ color: portal.accentHex }}
                    >
                      Open portal →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-6 rounded-xl border border-[var(--ff-border)] bg-[var(--background)] p-6 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-semibold text-[var(--ff-navy)]">Platform trial tracker</h2>
            <p className="text-xs uppercase tracking-wide text-[var(--ff-cool-gray)]">data/trial-logins.json</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {trialLogins.reviewGroups.map((group) => (
              <div key={group.label} className="rounded-lg border border-[var(--ff-border)] p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[var(--ff-navy)]">{group.label}</p>
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[group.status]}`}>
                    {group.status}
                  </span>
                </div>
                <ul className="space-y-1 text-sm text-[var(--ff-cool-gray)]">
                  {group.portals.map((site) => (
                    <li key={site}>• {site}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-[var(--ff-border)] pt-4">
            <Link
              href="/scorecards"
              className="inline-flex items-center rounded-full border border-[var(--ff-navy)] px-4 py-2 text-sm font-semibold text-[var(--ff-navy)] transition-colors hover:bg-[var(--ff-navy)] hover:text-white"
            >
              View all vendor scorecards + overall chart →
            </Link>
          </div>
        </section>

        <div className="mt-4 overflow-hidden rounded-xl border border-[var(--ff-navy)]/20 bg-[var(--ff-navy)] shadow-sm">
          <div className="h-1 w-full bg-[var(--ff-forge)]" />
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c6d0df]">
                {STAFF_HUB.sub} · {STAFF_HUB.platform}
              </p>
              <p className="mt-2 text-lg font-semibold tracking-wide text-white">Staff Hub</p>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[#d7deea]">{STAFF_HUB.description}</p>
            </div>
            <Link
              href={STAFF_HUB.href}
              className="shrink-0 rounded-full border border-[rgba(255,255,255,0.15)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.05)]"
            >
              View portal →
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--ff-border)] px-6 py-5 text-center">
        <a
          href="https://www.medlmobile.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto inline-flex items-center gap-2 text-xs font-medium text-[var(--ff-cool-gray)] hover:text-[var(--ff-navy)]"
        >
          <img
            src="https://cdn-ilaldmp.nitrocdn.com/nQKmaoLBbzNjBUvhRSNijDyAbnJgsAXg/assets/images/optimized/rev-0887f9c/www.medlmobile.com/wp-content/uploads//2020/10/medl_logo_2025.svg"
            alt="MEDL"
            className="h-5 w-auto"
          />
          <span>Made with love by the modest geniuses at MEDL</span>
        </a>
      </footer>
    </div>
  );
}
