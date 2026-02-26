import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FarmAndForgeLogo } from "@/components/farm-and-forge-logo";

const STATS = [
  { label: "Active bookings today", value: "24" },
  { label: "Programs this week", value: "12" },
  { label: "Members checked in", value: "18" },
];

const ROSTER_PREVIEW = [
  { name: "Alex M.", program: "Tennis", time: "4:00 PM" },
  { name: "Jordan K.", program: "Human Performance", time: "5:00 PM" },
  { name: "Sam R.", program: "Academics", time: "3:30 PM" },
];

function StaffPreview() {
  return (
    <div className="pointer-events-none select-none blur-sm opacity-30">
      <div className="mb-5 flex gap-1 border-b border-gray-200 pb-0">
        {["Dashboard", "Schedules", "Rosters", "Reports", "Settings"].map((item, i) => (
          <span
            key={item}
            className={`px-4 py-2 text-sm ${
              i === 0 ? "border-b-2 border-[var(--ff-green)] font-medium text-[var(--ff-green)]" : "text-gray-500"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mb-5 grid grid-cols-3 gap-3">
        {STATS.map((s, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-2xl font-bold text-gray-800">{s.value}</p>
            <p className="mt-1 text-xs text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="text-sm font-semibold text-gray-700">Today&apos;s roster</h3>
        {ROSTER_PREVIEW.map((r, i) => (
          <div key={i} className="mt-2 flex justify-between text-sm text-gray-600">
            <span>{r.name}</span>
            <span>{r.program} · {r.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StaffPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background-page)]">
      <header className="flex items-center justify-between border-b border-[var(--ff-border)] bg-[var(--background)] px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <FarmAndForgeLogo href="/" height={28} />
          <span className="border-l border-[var(--ff-border)] pl-3 text-sm text-[var(--ff-cool-gray)]">Staff Hub</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xs text-[var(--ff-cool-gray)] hover:text-[var(--foreground)]">← All portals</Link>
          <SignedOut>
            <SignInButton>
              <button className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--ff-cool-gray)]">Sign in</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <StaffPreview />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
              <svg
                className="h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>

            <h2 className="mt-4 text-xl font-bold text-gray-900">Restricted access</h2>

            <SignedIn>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Your Farm & Forge identity is verified, but Staff Hub requires a provisioned{" "}
                <strong className="text-gray-800">staff</strong> or{" "}
                <strong className="text-gray-800">admin</strong> role. Authentication alone is not
                sufficient — this is Clerk RBAC in action.
              </p>
            </SignedIn>
            <SignedOut>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Staff Hub is for club staff and administrators. Access requires both a valid
                Farm & Forge identity and a provisioned staff or admin role.
              </p>
            </SignedOut>

            <div className="mt-5 space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  For staff
                </p>
                <p className="mt-0.5 text-sm text-gray-600">
                  Contact your manager to request staff role provisioning in Clerk.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  For admins
                </p>
                <p className="mt-0.5 text-sm text-gray-600">
                  Submit an access request to have the Staff Hub role added to your identity.
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 rounded-full border border-gray-200 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Request access
              </button>
              <Link
                href="/"
                className="flex-1 rounded-full bg-[var(--ff-green)] py-2.5 text-center text-sm font-medium text-white hover:opacity-90"
              >
                Back to portals
              </Link>
            </div>

            <p className="mt-5 text-center text-xs text-gray-400">
              Staff Hub uses the same Clerk identity — different access tier.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
