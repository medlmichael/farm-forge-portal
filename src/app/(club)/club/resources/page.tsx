import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function ClubResourcesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10 border-b border-[var(--ff-border)] pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--ff-cool-gray)]">
          Club Automation
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--ff-navy)] sm:text-4xl">
          Member resources
        </h1>
        <p className="mt-3 max-w-xl text-base text-[var(--ff-cool-gray)]">
          Handbooks, policies, and member-only content — gated by your shared Farm & Forge identity.
        </p>
      </div>

      <SignedOut>
        <div className="rounded-2xl border border-[var(--ff-border)] bg-[var(--background)] p-10 text-center">
          <p className="text-base font-medium text-[var(--foreground)]">
            Sign in to access member resources.
          </p>
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
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--ff-border)] bg-[var(--background)] p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--ff-cool-gray)]">
              Featured
            </p>
            <h2 className="mt-2 text-xl font-bold text-[var(--foreground)]">Member handbook</h2>
            <p className="mt-1.5 text-sm text-[var(--ff-cool-gray)]">
              Policies, values, and what to expect at Farm & Forge Club.
            </p>
            <a
              href="/api/download"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[var(--ff-green)] px-7 text-sm font-medium text-white hover:opacity-90"
            >
              Download PDF
            </a>
          </div>
          <div className="rounded-2xl border border-[var(--ff-border)] p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--ff-cool-gray)]">Schedule</p>
            <h3 className="mt-2 font-semibold text-[var(--foreground)]">Program schedules</h3>
            <p className="mt-1 text-sm text-[var(--ff-cool-gray)]">
              Tennis, Human Performance, and Academics — current session times.
            </p>
          </div>
        </div>
      </SignedIn>
    </main>
  );
}
