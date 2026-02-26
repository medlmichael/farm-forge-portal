import Link from "next/link";
import { notFound } from "next/navigation";
import { FarmAndForgeLogo } from "@/components/farm-and-forge-logo";
import { PORTAL_MODULE_MAP, PORTAL_MODULES, type PortalModuleKey } from "../config";

type Props = {
  params: Promise<{ module: string }>;
};

export function generateStaticParams() {
  return PORTAL_MODULES.map((module) => ({ module: module.key }));
}

function Sidebar({ active }: { active: PortalModuleKey }) {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-[#e5e7eb] bg-[#f7f8fa] lg:block">
      <div className="px-5 py-4">
        <p className="text-sm font-semibold text-[#1f2937]">Farm&Forge</p>
        <p className="text-xs text-[#9ca3af]">Unified Experience</p>
      </div>
      <div className="px-3 pb-4">
        <div className="mb-3 rounded-lg bg-white px-3 py-2 text-xs text-[#9ca3af]">Concepts - Custom Platform</div>
        <nav className="space-y-1">
          {PORTAL_MODULES.map((item) => (
            <Link
              key={item.key}
              href={`/portal/${item.key}`}
              className={`block rounded-lg px-3 py-2 text-sm ${
                item.key === active
                  ? "bg-[#e9edf5] font-medium text-[#111827]"
                  : "text-[#4b5563] hover:bg-[#eef2f7]"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function AppTopbar() {
  return (
    <div className="mb-4 flex items-center justify-between rounded-xl border border-[#e5e7eb] bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 rounded bg-[#111827]" />
        <div className="flex gap-4 text-xs text-[#6b7280]">
          <span className="font-semibold text-[#111827]">Farm & Forge</span>
          <span>Dashboard</span>
          <span>Athletes</span>
          <span>Teams</span>
          <span>Programming</span>
          <span>Reports</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-8 w-40 rounded-full border border-[#e5e7eb] bg-[#f9fafb]" />
        <div className="h-8 w-8 rounded-full bg-[#2563eb]" />
      </div>
    </div>
  );
}

function CalendarScreen() {
  return (
    <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
      <AppTopbar />
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[11px] text-[#6b7280]">Programming / Schedule</p>
          <h3 className="text-2xl font-semibold text-[#111827]">Class Schedule</h3>
        </div>
        <div className="flex gap-2">
          <button className="rounded-md border border-[#e5e7eb] px-3 py-1.5 text-xs text-[#374151]">Print / Export</button>
          <button className="rounded-md bg-[#2563eb] px-3 py-1.5 text-xs font-semibold text-white">+ Add Event</button>
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-[220px_1fr_280px]">
        <div className="space-y-3">
          <div className="rounded-lg border border-[#e5e7eb] bg-[#f9fafb] p-3">
            <p className="mb-2 text-xs font-semibold text-[#374151]">November 2024</p>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-[#9ca3af]">
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className={`rounded py-1 ${i === 15 ? "bg-[#2563eb] text-white" : ""}`}>{(i % 30) + 1}</div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[#e5e7eb] p-3">
            <p className="text-xs font-semibold text-[#374151]">Filters</p>
            <div className="mt-2 space-y-2 text-xs text-[#6b7280]">
              <p>☑ Group Classes</p>
              <p>☑ Private Training</p>
              <p>☑ Camps & Clinics</p>
              <p>☐ Staff / Admin</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-[#e5e7eb]">
          <div className="grid grid-cols-7 border-b border-[#e5e7eb] text-[11px] text-[#9ca3af]">
            {['MON','TUE','WED','THU','FRI','SAT','SUN'].map((d) => (
              <div key={d} className="border-r border-[#eef2f7] px-2 py-2 last:border-r-0">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 text-[10px]">
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="h-20 border-r border-b border-[#eef2f7] p-1 last:border-r-0">
                <span className="text-[#9ca3af]">{(i % 30) + 1}</span>
                {i % 5 === 0 && <div className="mt-1 rounded bg-blue-100 px-1 py-0.5 text-[9px] text-blue-700">15:30 U12 F</div>}
                {i % 7 === 0 && <div className="mt-1 rounded bg-green-100 px-1 py-0.5 text-[9px] text-green-700">10:00 AM P</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-lg border border-[#dbe4ff] bg-[#f8faff] p-3">
            <p className="text-[10px] uppercase tracking-wide text-[#2563eb]">Group Class</p>
            <h4 className="mt-1 font-semibold text-[#111827]">Tennis Prep</h4>
            <p className="mt-2 text-xs text-[#6b7280]">16:00 - 17:30 · Mon/Tue</p>
            <p className="text-xs text-[#6b7280]">Main Court 1 · Coach Carter</p>
            <div className="mt-3 flex gap-2">
              <button className="rounded-md border border-[#e5e7eb] px-3 py-1 text-xs">Edit</button>
              <button className="rounded-md border border-[#e5e7eb] px-3 py-1 text-xs">Message</button>
            </div>
          </div>
          <div className="rounded-lg border border-[#e5e7eb] p-3">
            <h4 className="font-semibold text-[#111827]">Next 3 Days</h4>
            <div className="mt-2 space-y-2 text-xs text-[#6b7280]">
              <p>06:00 Morning Calisthenics Flow</p>
              <p>14:00 U18 Elite Drills</p>
              <p>10:00 Open Gym Session</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreateEventScreen() {
  return (
    <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
      <AppTopbar />
      <div className="mb-4">
        <p className="text-[11px] text-[#6b7280]">Programming / Schedule</p>
        <h3 className="text-2xl font-semibold text-[#111827]">Create New Event</h3>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {['Event title','Program type','Coach','Location','Start date','End date','Start time','End time'].map((field) => (
              <div key={field}>
                <p className="mb-1 text-xs text-[#6b7280]">{field}</p>
                <div className="h-10 rounded-lg border border-[#e5e7eb] bg-[#f9fafb]" />
              </div>
            ))}
          </div>
          <div>
            <p className="mb-1 text-xs text-[#6b7280]">Description</p>
            <div className="h-24 rounded-lg border border-[#e5e7eb] bg-[#f9fafb]" />
          </div>
          <div className="flex gap-2">
            <button className="rounded-md bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white">Publish Event</button>
            <button className="rounded-md border border-[#e5e7eb] px-4 py-2 text-sm">Save Draft</button>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-lg border border-[#e5e7eb] p-3">
            <p className="text-xs font-semibold text-[#374151]">Audience</p>
            <div className="mt-2 space-y-2 text-xs text-[#6b7280]">
              <p>☑ U12 Tennis</p>
              <p>☑ U14 Tennis</p>
              <p>☐ Staff only</p>
            </div>
          </div>
          <div className="rounded-lg border border-[#e5e7eb] p-3">
            <p className="text-xs font-semibold text-[#374151]">Capacity & Notifications</p>
            <div className="mt-2 space-y-2 text-xs text-[#6b7280]">
              <p>Max participants: 24</p>
              <p>Waitlist: enabled</p>
              <p>Parent notifications: instant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StaffDashboardScreen() {
  return (
    <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
      <AppTopbar />
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[#111827]">Staff Dashboard</h3>
        <button className="rounded-md border border-[#e5e7eb] px-3 py-1.5 text-xs">View full report</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ["Daily check-ins", "118"],
          ["Staff active", "14"],
          ["Open requests", "9"],
          ["Program health", "96%"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-[#e5e7eb] bg-[#f9fafb] p-3">
            <p className="text-xs text-[#6b7280]">{k}</p>
            <p className="mt-1 text-2xl font-bold text-[#111827]">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <div className="rounded-lg border border-[#e5e7eb] p-3">
          <p className="mb-2 text-sm font-semibold text-[#111827]">Recent Enrollments</p>
          <div className="space-y-2 text-sm text-[#6b7280]">
            <p>• Liam K. · U12 Elite</p>
            <p>• Emma W. · After-School</p>
            <p>• Noah B. · Varsity Prep</p>
          </div>
        </div>
        <div className="rounded-lg border border-[#e5e7eb] p-3">
          <p className="mb-2 text-sm font-semibold text-[#111827]">Level Progression</p>
          <div className="grid h-28 grid-cols-6 items-end gap-2 rounded bg-[#f3f4f6] p-3">
            {[45, 62, 39, 70, 56, 66].map((h, i) => (
              <div key={i} className="rounded bg-[#2563eb]" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunicationsHubScreen() {
  return (
    <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
      <AppTopbar />
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[#111827]">Communications Hub</h3>
        <button className="rounded-md bg-[#2563eb] px-3 py-1.5 text-xs font-semibold text-white">Compose</button>
      </div>
      <div className="grid gap-3 lg:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-[#e5e7eb] p-3">
          <p className="mb-2 text-sm font-semibold text-[#111827]">Inbox</p>
          <div className="space-y-2 text-sm">
            {[
              "Schedule update: Friday match slots",
              "Reminder: Bring hydration + gear",
              "Academic checkpoint posted",
              "Team dinner RSVP follow-up",
            ].map((msg) => (
              <div key={msg} className="rounded-lg bg-[#f9fafb] px-3 py-2 text-[#4b5563]">{msg}</div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-lg border border-[#e5e7eb] p-3">
            <p className="mb-2 text-sm font-semibold text-[#111827]">Announcements</p>
            <div className="space-y-2 text-xs text-[#6b7280]">
              <p>All Families · Sent</p>
              <p>Tennis U14 · Scheduled 4:00 PM</p>
              <p>Staff Only · Draft</p>
            </div>
          </div>
          <div className="rounded-lg border border-[#e5e7eb] p-3">
            <p className="mb-2 text-sm font-semibold text-[#111827]">Delivery health</p>
            <p className="text-xs text-[#16a34a]">97.8% delivered in last 24h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationTrackingScreen() {
  return (
    <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
      <AppTopbar />
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[#111827]">Education Mastery Tracking</h3>
        <button className="rounded-md border border-[#e5e7eb] px-3 py-1.5 text-xs">Export report</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Students on track", "84%"],
          ["Interventions", "7"],
          ["Mastery growth", "+11%"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-[#e5e7eb] bg-[#f9fafb] p-3">
            <p className="text-xs text-[#6b7280]">{k}</p>
            <p className="mt-1 text-2xl font-bold text-[#111827]">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-[#e5e7eb] p-3">
        <p className="mb-2 text-sm font-semibold text-[#111827]">Standards progress</p>
        <div className="space-y-3">
          {[
            ["Algebra readiness", 78],
            ["Reading comprehension", 86],
            ["Science foundations", 74],
          ].map(([label, pct]) => (
            <div key={String(label)}>
              <div className="mb-1 flex justify-between text-xs text-[#6b7280]"><span>{label}</span><span>{pct}%</span></div>
              <div className="h-2 rounded bg-[#e5e7eb]"><div className="h-2 rounded bg-[#2563eb]" style={{ width: `${pct}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PerformanceTrackingScreen() {
  return (
    <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
      <AppTopbar />
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[#111827]">Performance Tracking</h3>
        <button className="rounded-md border border-[#e5e7eb] px-3 py-1.5 text-xs">Weekly view</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Avg training load", "7.2 / 10"],
          ["Recovery compliance", "89%"],
          ["Risk flags", "3"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-[#e5e7eb] bg-[#f9fafb] p-3">
            <p className="text-xs text-[#6b7280]">{k}</p>
            <p className="mt-1 text-2xl font-bold text-[#111827]">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <div className="rounded-lg border border-[#e5e7eb] p-3">
          <p className="mb-2 text-sm font-semibold text-[#111827]">Trend snapshots</p>
          <div className="space-y-2 text-sm text-[#4b5563]">
            <p>• Serve speed +4 mph</p>
            <p>• Agility test +8%</p>
            <p>• VO2 baseline stable</p>
            <p>• Mobility needs attention</p>
          </div>
        </div>
        <div className="rounded-lg border border-[#e5e7eb] p-3">
          <p className="mb-2 text-sm font-semibold text-[#111827]">Readiness by day</p>
          <div className="grid h-28 grid-cols-7 items-end gap-2 rounded bg-[#f3f4f6] p-3">
            {[72, 68, 76, 70, 64, 74, 79].map((h, i) => (
              <div key={i} className="rounded bg-[#16a34a]" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AthleteProfileScreen() {
  return (
    <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
      <AppTopbar />
      <div className="mb-4 rounded-lg border border-[#e5e7eb] bg-[#f9fafb] p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-[#2563eb]" />
            <div>
              <p className="text-lg font-semibold text-[#111827]">Jordan Carter</p>
              <p className="text-xs text-[#6b7280]">U14 Tennis · Varsity Prep · ID #FF-2031</p>
            </div>
          </div>
          <button className="rounded-md bg-[#2563eb] px-3 py-1.5 text-xs font-semibold text-white">Update plan</button>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[["Attendance", "95%"], ["Academic mastery", "84%"], ["Readiness", "7.8 / 10"]].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-[#e5e7eb] bg-[#f9fafb] p-3">
            <p className="text-xs text-[#6b7280]">{k}</p>
            <p className="mt-1 text-2xl font-bold text-[#111827]">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-[#e5e7eb] p-3">
          <p className="mb-2 text-sm font-semibold text-[#111827]">Recent session outcomes</p>
          <div className="space-y-2 text-sm text-[#4b5563]">
            <p>• Forehand stability +6%</p>
            <p>• Agility test improved 0.4s</p>
            <p>• Reading checkpoint passed</p>
            <p>• Coach review: excellent focus</p>
          </div>
        </div>
        <div className="rounded-lg border border-[#e5e7eb] p-3">
          <p className="mb-2 text-sm font-semibold text-[#111827]">Upcoming schedule</p>
          <div className="space-y-2 text-sm text-[#4b5563]">
            <p>Mon 4:00 PM · U14 Tennis Prep</p>
            <p>Tue 5:30 PM · Academic Study Hall</p>
            <p>Wed 3:30 PM · Human Performance</p>
            <p>Fri 4:00 PM · Match Play Simulation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Screen({ module }: { module: PortalModuleKey }) {
  if (module === "calendar") return <CalendarScreen />;
  if (module === "calendar-create-event") return <CreateEventScreen />;
  if (module === "staff-dashboard") return <StaffDashboardScreen />;
  if (module === "communications-hub") return <CommunicationsHubScreen />;
  if (module === "education-tracking") return <EducationTrackingScreen />;
  if (module === "performance-tracking") return <PerformanceTrackingScreen />;
  return <AthleteProfileScreen />;
}

export default async function PortalModulePage({ params }: Props) {
  const { module } = await params;
  const page = PORTAL_MODULE_MAP[module as PortalModuleKey];

  if (!page) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-[#f3f4f6]">
      <div className="h-1 w-full" style={{ background: page.accent }} />
      <header className="flex items-center justify-between border-b border-[#e5e7eb] bg-white px-6 py-4">
        <div className="flex items-center gap-3">
          <FarmAndForgeLogo href="/" height={30} />
          <span className="border-l border-[#e5e7eb] pl-3 text-sm text-[#6b7280]">Unified experience portal</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="rounded-full border border-[#d1d5db] px-4 py-1.5 text-xs font-medium text-[#374151] hover:bg-[#f3f4f6]">
            ← All portals
          </Link>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <Sidebar active={module as PortalModuleKey} />
        <main className="min-w-0 flex-1 p-5">
          <section className="mb-4 rounded-xl border border-[#e5e7eb] bg-white px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">{page.subtitle}</p>
            <h1 className="mt-1 text-2xl font-bold text-[#111827]">{page.title}</h1>
            <p className="mt-1 text-sm text-[#6b7280]">{page.description}</p>
          </section>
          <Screen module={module as PortalModuleKey} />
        </main>
      </div>
    </div>
  );
}
