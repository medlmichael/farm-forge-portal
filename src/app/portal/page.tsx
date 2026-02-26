import Link from "next/link";

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#111827]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] border-x border-[#e5e7eb] bg-[#f3f4f6]">
        <aside className="hidden w-64 shrink-0 border-r border-[#e5e7eb] bg-[#f8fafc] lg:block">
          <div className="px-5 py-4">
            <p className="text-xl font-semibold">Farm&Forge</p>
            <p className="text-sm text-[#6b7280]">Custom Platform</p>
          </div>

          <div className="px-3">
            <div className="rounded-lg bg-white px-3 py-2 text-xs text-[#6b7280]">Concepts - Custom Platform</div>
          </div>

          <nav className="mt-4 space-y-1 px-3 text-sm">
            {[
              { label: "Calendar - Create New Event", href: "/portal/calendar-create-event" },
              { label: "Calendar / Scheduling", href: "/portal/calendar" },
              { label: "Dashboard", href: "/portal/staff-dashboard" },
              { label: "Communications Hub", href: "/portal/communications-hub" },
              { label: "Education Mastery Tracking", href: "/portal/education-tracking" },
              { label: "Performance Tracking", href: "/portal/performance-tracking" },
              { label: "Athlete Profile", href: "/portal/athlete-profile" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block rounded-lg px-3 py-2 ${
                  item.label === "Athlete Profile"
                    ? "bg-[#e8eefc] font-medium text-[#0f172a]"
                    : "text-[#4b5563] hover:bg-[#eef2f7]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-[#e5e7eb] bg-white px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded bg-[#0f172a]" />
              <nav className="hidden items-center gap-4 text-xs text-[#6b7280] md:flex">
                <span className="font-semibold text-[#111827]">Farm & Forge</span>
                <span>Dashboard</span>
                <span className="font-medium text-[#111827]">Athletes</span>
                <span>Teams</span>
                <span>Programming</span>
                <span>Reports</span>
              </nav>
            </div>
            <Link
              href="/"
              className="rounded-full border border-[#d1d5db] px-4 py-1.5 text-xs font-medium text-[#374151] hover:bg-[#f3f4f6]"
            >
              ← All portals
            </Link>
          </header>

          <main className="p-6">
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <p className="text-xs text-[#6b7280]">Athletes / Profile</p>
              <h1 className="mt-1 text-3xl font-semibold">Athlete Profile</h1>

              <section className="mt-5 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-[#2563eb]" />
                    <div>
                      <h2 className="text-xl font-semibold">Jordan Carter</h2>
                      <p className="text-sm text-[#6b7280]">U14 Tennis · Varsity Prep · ID #FF-2031</p>
                      <div className="mt-2 flex gap-2 text-xs">
                        <span className="rounded-full bg-[#dcfce7] px-2 py-1 text-[#166534]">Active</span>
                        <span className="rounded-full bg-[#e0e7ff] px-2 py-1 text-[#3730a3]">On Track</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-md border border-[#d1d5db] px-3 py-2 text-sm">Message Family</button>
                    <button className="rounded-md bg-[#2563eb] px-3 py-2 text-sm font-semibold text-white">Update Plan</button>
                  </div>
                </div>
              </section>

              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                <div className="rounded-xl border border-[#e5e7eb] p-4">
                  <p className="text-xs text-[#6b7280]">Attendance (30d)</p>
                  <p className="mt-1 text-3xl font-bold">95%</p>
                  <p className="mt-1 text-xs text-[#16a34a]">+3% vs last month</p>
                </div>
                <div className="rounded-xl border border-[#e5e7eb] p-4">
                  <p className="text-xs text-[#6b7280]">Academic Mastery</p>
                  <p className="mt-1 text-3xl font-bold">84%</p>
                  <p className="mt-1 text-xs text-[#16a34a]">2 standards improved</p>
                </div>
                <div className="rounded-xl border border-[#e5e7eb] p-4">
                  <p className="text-xs text-[#6b7280]">Performance Readiness</p>
                  <p className="mt-1 text-3xl font-bold">7.8 / 10</p>
                  <p className="mt-1 text-xs text-[#ca8a04]">Recovery check recommended</p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_360px]">
                <div className="space-y-4">
                  <section className="rounded-xl border border-[#e5e7eb] p-4">
                    <h3 className="text-sm font-semibold">Development Goals</h3>
                    <ul className="mt-3 space-y-2 text-sm text-[#4b5563]">
                      <li>• Improve serve consistency to 78% in-match success</li>
                      <li>• Maintain sleep compliance at 8h average over next 2 weeks</li>
                      <li>• Complete Algebra readiness unit with 90%+ mastery</li>
                    </ul>
                  </section>

                  <section className="rounded-xl border border-[#e5e7eb] p-4">
                    <h3 className="text-sm font-semibold">Recent Session Outcomes</h3>
                    <div className="mt-3 space-y-2 text-sm">
                      {[
                        "Tennis Fundamentals · Forehand stability +6%",
                        "Performance Lab · Agility test improved 0.4s",
                        "Academic Lab · Reading comprehension checkpoint passed",
                        "Coach Review · Focus and effort noted as excellent",
                      ].map((item) => (
                        <div key={item} className="rounded-lg bg-[#f9fafb] px-3 py-2 text-[#4b5563]">
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="space-y-4">
                  <section className="rounded-xl border border-[#e5e7eb] p-4">
                    <h3 className="text-sm font-semibold">Upcoming Schedule</h3>
                    <div className="mt-3 space-y-2 text-sm text-[#4b5563]">
                      <p>Mon 4:00 PM · U14 Tennis Prep</p>
                      <p>Tue 5:30 PM · Academic Study Hall</p>
                      <p>Wed 3:30 PM · Human Performance</p>
                      <p>Fri 4:00 PM · Match Play Simulation</p>
                    </div>
                  </section>

                  <section className="rounded-xl border border-[#e5e7eb] p-4">
                    <h3 className="text-sm font-semibold">Family + Contacts</h3>
                    <div className="mt-3 space-y-2 text-sm text-[#4b5563]">
                      <p>Primary: Sarah Carter</p>
                      <p>Secondary: Michael Carter</p>
                      <p>Preferred channel: ParentSquare</p>
                      <p>Unread messages: 1</p>
                    </div>
                  </section>

                  <section className="rounded-xl border border-[#dbe4ff] bg-[#f8faff] p-4 text-sm text-[#475569]">
                    <p className="font-semibold text-[#1e3a8a]">Coach Notes</p>
                    <p className="mt-2">
                      Jordan is progressing well in both academics and tennis. Increase mobility warm-up emphasis
                      before high-load sessions.
                    </p>
                  </section>
                </aside>
              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
