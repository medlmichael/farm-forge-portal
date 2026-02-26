import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FarmAndForgeLogo } from "@/components/farm-and-forge-logo";

// ParentSquare-style: school/club communication
const MESSAGES = [
  { id: 1, from: "Farm & Forge Club", subject: "March session schedule now available", date: "Feb 25", unread: true },
  { id: 2, from: "Tennis Program", subject: "Court closure — Saturday 9–11 AM", date: "Feb 24", unread: false },
  { id: 3, from: "Human Performance", subject: "Reminder: bring water bottle & athletic wear", date: "Feb 23", unread: false },
];

const ANNOUNCEMENTS = [
  "Spring break camp registration opens Monday.",
  "New after-school academics cohort starts March 10.",
  "ParentSquare tip: enable push notifications for instant updates.",
];

const PARENTSQUARE_PURPLE = "#7c3aed";

export default function ParentSquarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background-page)]">
      <div className="h-1 w-full" style={{ background: PARENTSQUARE_PURPLE }} />
      <header className="flex items-center justify-between border-b border-[var(--ff-border)] bg-[var(--background)] px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <FarmAndForgeLogo href="/" height={28} />
          <span className="border-l border-[var(--ff-border)] pl-4 text-sm font-semibold" style={{ color: PARENTSQUARE_PURPLE }}>
            ParentSquare
          </span>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#messages" className="text-gray-600 hover:text-gray-900">Messages</a>
            <a href="#announcements" className="text-gray-600 hover:text-gray-900">Announcements</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xs text-[var(--ff-cool-gray)] hover:text-[var(--foreground)]">← All portals</Link>
          <SignedOut>
            <SignInButton>
              <button className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--ff-cool-gray)]">Sign in</button>
            </SignInButton>
            <SignUpButton>
              <button className="rounded-full bg-[var(--ff-green)] px-4 py-2 text-sm font-medium text-white hover:opacity-90">
                Create account
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
        <div className="mb-8 rounded-xl border border-[var(--ff-border)] bg-[var(--background)] p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ff-cool-gray)]">
            ParentSquare
          </p>
          <h1 className="mt-1 text-2xl font-bold text-[var(--ff-navy)]">
            Communication
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Two-way messaging and announcements between the club and families. Your Farm & Forge identity keeps you connected.
          </p>
        </div>

        <SignedOut>
          <div className="rounded-2xl border border-[var(--ff-border)] bg-[var(--background-page)] p-10 text-center">
            <p className="font-medium text-[var(--foreground)]">Sign in to view messages and announcements.</p>
            <div className="mt-7 flex justify-center gap-3">
              <SignInButton>
                <button className="rounded-full border border-[var(--ff-navy)] px-6 py-2.5 text-sm font-medium text-[var(--ff-navy)] hover:bg-[var(--ff-navy)] hover:text-white">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="rounded-full bg-[var(--ff-green)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90">
                  Create account
                </button>
              </SignUpButton>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <section id="messages" className="mb-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[var(--ff-navy)]">Messages</h2>
              <button className="rounded-full px-4 py-2 text-sm font-medium text-white hover:opacity-90" style={{ background: PARENTSQUARE_PURPLE }}>
                New message
              </button>
            </div>
            <div className="space-y-2">
              {MESSAGES.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-center justify-between rounded-xl border px-5 py-4 ${
                    m.unread ? "border-[var(--ff-border)] bg-purple-50/50" : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900">{m.subject}</p>
                    <p className="text-sm text-gray-500">{m.from} · {m.date}</p>
                  </div>
                  {m.unread && (
                    <span className="ml-3 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="announcements">
            <h2 className="mb-4 text-lg font-semibold text-[var(--ff-navy)]">Recent announcements</h2>
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
              {ANNOUNCEMENTS.map((ann, i) => (
                <div
                  key={i}
                  className={`px-5 py-4 ${i < ANNOUNCEMENTS.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <p className="text-sm text-gray-800">{ann}</p>
                </div>
              ))}
            </div>
          </section>
        </SignedIn>
      </main>
    </div>
  );
}
