import Link from "next/link";
import { FarmAndForgeLogo } from "@/components/farm-and-forge-logo";
import { VENDOR_SCORECARDS, scoreOutOf100, weightedScore } from "@/data/vendor-scorecards";

const STATUS_LABELS = {
  "strong-fit": "Strong fit",
  "conditional-fit": "Conditional fit",
  "not-recommended": "Not recommended",
  "pending-review": "Pending review",
} as const;

const STATUS_COLORS = {
  "strong-fit": "bg-green-100 text-green-700 border-green-200",
  "conditional-fit": "bg-amber-100 text-amber-700 border-amber-200",
  "not-recommended": "bg-red-100 text-red-700 border-red-200",
  "pending-review": "bg-slate-100 text-slate-700 border-slate-200",
} as const;

const COMPARE_BADGE: Record<string, string> = {
  stronger: "bg-green-100 text-green-700 border-green-200",
  comparable: "bg-sky-100 text-sky-700 border-sky-200",
  weaker: "bg-amber-100 text-amber-700 border-amber-200",
  unknown: "bg-slate-100 text-slate-700 border-slate-200",
};

export default function ScorecardsPage() {
  const ranked = VENDOR_SCORECARDS.map((vendor) => ({
    ...vendor,
    weighted: weightedScore(vendor.rows),
    outOf100: scoreOutOf100(vendor.rows),
  })).sort((a, b) => (b.outOf100 ?? -1) - (a.outOf100 ?? -1));

  return (
    <div className="min-h-screen bg-[var(--background-page)]">
      <header className="border-b border-[var(--ff-border)] bg-[var(--background)] px-6 py-4">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <FarmAndForgeLogo href="/" height={30} />
            <span className="border-l border-[var(--ff-border)] pl-3 text-sm text-[var(--ff-cool-gray)]">Vendor scorecards</span>
          </div>
          <Link href="/" className="rounded-full border border-[var(--ff-border)] px-4 py-2 text-xs font-medium text-[var(--ff-navy)] hover:bg-[var(--background-page)]">
            ← All portals
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <section className="rounded-xl border border-[var(--ff-border)] bg-[var(--background)] p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-[var(--ff-navy)]">Platform Scorecards</h1>
          <p className="mt-2 text-sm text-[var(--ff-cool-gray)]">
            Side-by-side scoring to support client communication, platform selection, and status updates.
          </p>
          <p className="mt-1 text-xs text-[var(--ff-cool-gray)]">
            Comparison tags are relative to the current baseline platform: <span className="font-semibold">Club Automation</span>.
          </p>

          <div className="mt-5 space-y-3">
            {ranked.map((vendor) => {
              const width = vendor.outOf100 ?? 8;
              return (
                <div key={vendor.key} className="rounded-lg border border-[var(--ff-border)] p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="font-semibold text-[var(--ff-navy)]">{vendor.vendor}</p>
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_COLORS[vendor.status]}`}>
                      {STATUS_LABELS[vendor.status]}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-[var(--ff-green)]" style={{ width: `${width}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-[var(--ff-cool-gray)]">
                    {vendor.outOf100 != null ? `${vendor.outOf100}/100` : "Pending scoring"} · {vendor.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {ranked.filter((v) => v.rows.length > 0).map((vendor) => (
          <section key={vendor.key} className="mt-6 rounded-xl border border-[var(--ff-border)] bg-[var(--background)] p-6 shadow-sm">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl font-semibold text-[var(--ff-navy)]">{vendor.vendor}</h2>
              <div className="text-sm font-medium text-[var(--ff-cool-gray)]">
                Total: {vendor.weighted}/5 ({vendor.outOf100}/100)
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--ff-border)] text-left text-[var(--ff-cool-gray)]">
                    <th className="py-2 pr-3 font-medium">Category</th>
                    <th className="py-2 pr-3 font-medium">Weight</th>
                    <th className="py-2 pr-3 font-medium">Score (1-5)</th>
                    <th className="py-2 pr-3 font-medium">Weighted</th>
                    <th className="py-2 pr-3 font-medium">vs Club Automation</th>
                    <th className="py-2 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {vendor.rows.map((row) => (
                    <tr key={row.category} className="border-b border-[var(--ff-border)]/60 align-top">
                      <td className="py-2 pr-3 text-[var(--ff-navy)]">{row.category}</td>
                      <td className="py-2 pr-3 text-[var(--ff-cool-gray)]">{row.weight}%</td>
                      <td className="py-2 pr-3 text-[var(--ff-cool-gray)]">{row.score}</td>
                      <td className="py-2 pr-3 text-[var(--ff-cool-gray)]">{((row.weight / 100) * row.score).toFixed(2)}</td>
                      <td className="py-2 pr-3 text-[var(--ff-cool-gray)]">
                        <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${COMPARE_BADGE[row.vsClubAutomation ?? "unknown"]}`}>
                          {(row.vsClubAutomation ?? "unknown").replace("-", " ")}
                        </span>
                        {row.vsClubAutomationNotes ? (
                          <p className="mt-1 text-xs text-[var(--ff-cool-gray)]">{row.vsClubAutomationNotes}</p>
                        ) : null}
                      </td>
                      <td className="py-2 text-[var(--ff-cool-gray)]">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 rounded-lg border border-[var(--ff-border)] bg-[var(--background-page)] p-3 text-sm text-[var(--ff-cool-gray)]">
              {vendor.summary}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
