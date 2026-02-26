import Link from "next/link";

const CLUB_AUTOMATION_URL = "https://farmandforge.clubautomation.com/";

export default function ClubDashboardPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-6 rounded-xl border border-[var(--ff-border)] bg-[var(--background)] p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--ff-cool-gray)]">Club Automation</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-[var(--ff-navy)]">Official member portal</h1>
        <p className="mt-2 max-w-3xl text-sm text-[var(--ff-cool-gray)]">
          This route links directly to the out-of-the-box Club Automation experience. No re-skinned UI here.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={CLUB_AUTOMATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--ff-navy)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Open Club Automation ↗
          </a>
          <Link
            href="/"
            className="rounded-full border border-[var(--ff-border)] px-5 py-2.5 text-sm font-medium text-[var(--ff-navy)] hover:bg-[var(--background-page)]"
          >
            ← All portals
          </Link>
        </div>
      </div>

      <section className="overflow-hidden rounded-xl border border-[var(--ff-border)] bg-[var(--background)] shadow-sm">
        <div className="border-b border-[var(--ff-border)] bg-[var(--background-page)] px-4 py-2 text-xs text-[var(--ff-cool-gray)]">
          Embedded preview (if allowed by Club Automation iframe policy)
        </div>
        <iframe
          title="Club Automation"
          src={CLUB_AUTOMATION_URL}
          className="h-[75vh] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
