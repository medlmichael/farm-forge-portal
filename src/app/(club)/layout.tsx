import { ClubHeader } from "@/components/club-header";

export default function ClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background-page)]">
      <ClubHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
}
