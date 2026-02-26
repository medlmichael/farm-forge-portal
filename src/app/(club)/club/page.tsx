import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

const MOCK_BOOKINGS = [
  { id: "B-2841", type: "Tennis court", slot: "Sat 9:00 AM", date: "Mar 1", status: "Confirmed" },
  { id: "B-2819", type: "Human Performance", slot: "Tue 4:00 PM", date: "Feb 25", status: "Completed" },
  { id: "B-2792", type: "Tennis court", slot: "Sun 2:00 PM", date: "Feb 23", status: "Completed" },
];

export default function ClubDashboardPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10 border-b border-[var(--ff-border)] pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--ff-cool-gray)]">
          Club Automation
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--ff-navy)] sm:text-4xl">
          Member dashboard
        </h1>
        <p className="mt-3 max-w-xl text-base text-[var(--ff-cool-gray)]">
          Your membership, bookings, and club access in one place. Powered by Club Automation; signed in with your Farm & Forge identity.
        </p>
      </div>

      <SignedOut>
        <div className="rounded-2xl border border-[var(--ff-border)] bg-[var(--background)] p-10 text-center">
          <p className="text-base font-medium text-[var(--foreground)]">
            Sign in to view your dashboard and bookings.
          </p>
          <p className="mt-1.5 text-sm text-[var(--ff-cool-gray)]">
            Your Club Automation data is linked to your Farm & Forge identity — sign in once, access everywhere.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <SignInButton>
              <button className="rounded-full border border-[var(--ff-navy)] px-6 py-2.5 text-sm font-medium text-[var(--ff-navy)] transition-colors hover:bg-[var(--ff-navy)] hover:text-white">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="rounded-full bg-[var(--ff-green)] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80">
                Create account
              </button>
            </SignUpButton>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="grid gap-8 sm:grid-cols-2">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[var(--foreground)]">Upcoming bookings</h2>
            <div className="overflow-hidden rounded-xl border border-[var(--ff-border)] bg-[var(--background)] shadow-sm">
              {MOCK_BOOKINGS.map((b, i) => (
                <div
                  key={b.id}
                  className={`flex items-center justify-between px-5 py-4 ${
                    i < MOCK_BOOKINGS.length - 1 ? "border-b border-[var(--ff-border)]" : ""
                  }`}
                >
                  <div>
                    <p className="font-medium text-[var(--foreground)]">{b.type}</p>
                    <p className="text-sm text-[var(--ff-cool-gray)]">
                      {b.slot} · {b.date}
                    </p>
                  </div>
                  <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    {b.status}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/club/bookings"
              className="mt-3 inline-block text-sm font-semibold text-[var(--ff-green)] hover:opacity-80"
            >
              View all bookings →
            </Link>
          </section>
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[var(--foreground)]">Membership</h2>
            <div className="rounded-xl border border-[var(--ff-border)] bg-[var(--background)] p-5 shadow-sm">
              <p className="font-medium text-[var(--foreground)]">Family membership</p>
              <p className="mt-1 text-sm text-[var(--ff-cool-gray)]">Active · Renews June 2026</p>
              <p className="mt-3 text-xs text-[var(--ff-cool-gray)]">
                Tennis, Human Performance, and Academics access included.
              </p>
            </div>
          </section>
        </div>
      </SignedIn>
    </main>
  );
}
