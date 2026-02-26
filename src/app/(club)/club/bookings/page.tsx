import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const BOOKINGS = [
  { id: "B-2841", type: "Tennis court", slot: "Sat 9:00 AM", date: "Mar 1", status: "Confirmed" },
  { id: "B-2819", type: "Human Performance", slot: "Tue 4:00 PM", date: "Feb 25", status: "Completed" },
  { id: "B-2792", type: "Tennis court", slot: "Sun 2:00 PM", date: "Feb 23", status: "Completed" },
  { id: "B-2765", type: "Academics — Tutoring", slot: "Wed 3:30 PM", date: "Feb 19", status: "Completed" },
];

export default function ClubBookingsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10 border-b border-[var(--ff-border)] pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--ff-cool-gray)]">
          Club Automation
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--ff-navy)] sm:text-4xl">
          Bookings
        </h1>
        <p className="mt-3 max-w-xl text-base text-[var(--ff-cool-gray)]">
          Court reservations, program sessions, and appointments. Your identity is shared with Club Automation.
        </p>
      </div>

      <SignedOut>
        <div className="rounded-2xl border border-[var(--ff-border)] bg-[var(--background)] p-10 text-center">
          <p className="text-base font-medium text-[var(--foreground)]">Sign in to view and manage bookings.</p>
          <div className="mt-7 flex justify-center gap-3">
            <SignInButton>
              <button className="rounded-full border border-[var(--ff-navy)] px-6 py-2.5 text-sm font-medium text-[var(--ff-navy)]">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="rounded-full bg-[var(--ff-green)] px-6 py-2.5 text-sm font-medium text-white">
                Create account
              </button>
            </SignUpButton>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[var(--foreground)]">Your bookings</h2>
          <button className="rounded-full bg-[var(--ff-green)] px-4 py-2 text-sm font-medium text-white hover:opacity-90">
            New booking
          </button>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-[var(--ff-border)] bg-[var(--background)] shadow-sm">
          {BOOKINGS.map((b, i) => (
            <div
              key={b.id}
              className={`flex items-center justify-between px-5 py-4 ${
                i < BOOKINGS.length - 1 ? "border-b border-[var(--ff-border)]" : ""
              }`}
            >
              <div>
                <span className="font-mono text-xs text-[var(--ff-cool-gray)]">{b.id}</span>
                <p className="font-medium text-[var(--foreground)]">{b.type}</p>
                <p className="text-sm text-[var(--ff-cool-gray)]">{b.slot} · {b.date}</p>
              </div>
              <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                {b.status}
              </span>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}
