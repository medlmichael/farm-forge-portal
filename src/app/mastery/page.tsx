import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FarmAndForgeLogo } from "@/components/farm-and-forge-logo";

// Instructure Mastery–style: assessments, standards, progress
const STANDARDS = [
  { code: "HP.1", name: "Movement fundamentals", mastered: true, lastAssessed: "Feb 20" },
  { code: "HP.2", name: "Strength & conditioning basics", mastered: true, lastAssessed: "Feb 18" },
  { code: "HP.3", name: "Recovery & nutrition", mastered: false, lastAssessed: "Feb 22" },
  { code: "TEN.1", name: "Court awareness", mastered: true, lastAssessed: "Feb 15" },
  { code: "TEN.2", name: "Serving consistency", mastered: false, lastAssessed: "Feb 24" },
];

const RECENT_ASSESSMENTS = [
  { title: "Human Performance — Unit 2 check", date: "Feb 22", score: "78%", trend: "up" },
  { title: "Tennis — Serve accuracy", date: "Feb 24", score: "65%", trend: "same" },
  { title: "Academics — Math readiness", date: "Feb 18", score: "92%", trend: "up" },
];

const MASTERY_BLUE = "#1e5a8a";

export default function MasteryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background-page)]">
      <div className="h-1 w-full" style={{ background: MASTERY_BLUE }} />
      <header className="flex items-center justify-between border-b border-[var(--ff-border)] bg-[var(--background)] px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <FarmAndForgeLogo href="/" height={28} />
          <span className="border-l border-[var(--ff-border)] pl-4 text-sm font-semibold" style={{ color: MASTERY_BLUE }}>
            Mastery
          </span>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#tracker" className="text-gray-600 hover:text-gray-900">Tracker</a>
            <a href="#assessments" className="text-gray-600 hover:text-gray-900">Assessments</a>
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
            Instructure Mastery
          </p>
          <h1 className="mt-1 text-2xl font-bold text-[var(--ff-navy)]">
            Education & performance tracking
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Standards-aligned assessments and progress — connected with Canvas for a single view of learning and athletic development.
          </p>
        </div>

        <SignedOut>
          <div className="rounded-2xl border border-[var(--ff-border)] bg-[var(--background-page)] p-10 text-center">
            <p className="font-medium text-[var(--foreground)]">Sign in to view progress and assessments.</p>
            <p className="mt-1.5 text-sm text-[var(--ff-cool-gray)]">
              Your Mastery data is tied to your Farm & Forge identity — one sign-in across the club ecosystem.
            </p>
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
          <section id="tracker" className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-[var(--ff-navy)]">Mastery tracker</h2>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              {STANDARDS.map((s, i) => (
                <div
                  key={s.code}
                  className={`flex items-center justify-between px-5 py-4 ${
                    i < STANDARDS.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div>
                    <span className="font-mono text-xs text-gray-500">{s.code}</span>
                    <p className="font-medium text-gray-900">{s.name}</p>
                    <p className="text-xs text-gray-500">Last assessed {s.lastAssessed}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      s.mastered ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {s.mastered ? "Mastered" : "In progress"}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section id="assessments">
            <h2 className="mb-4 text-lg font-semibold text-[var(--ff-navy)]">Recent assessments</h2>
            <div className="space-y-3">
              {RECENT_ASSESSMENTS.map((a) => (
                <div
                  key={a.title}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
                >
                  <div>
                    <p className="font-medium text-gray-900">{a.title}</p>
                    <p className="text-sm text-gray-500">{a.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">{a.score}</span>
                    <span className="text-xs text-gray-400">{a.trend === "up" ? "↑" : "→"}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SignedIn>
      </main>
    </div>
  );
}
