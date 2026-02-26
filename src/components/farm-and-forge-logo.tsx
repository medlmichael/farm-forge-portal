import Link from "next/link";

type FarmAndForgeLogoProps = {
  href?: string;
  className?: string;
  height?: number;
};

export function FarmAndForgeLogo({ href = "/", className = "", height = 34 }: FarmAndForgeLogoProps) {
  const content = (
    <div className={`inline-flex items-center gap-2 ${className}`.trim()}>
      <img
        src="/farm-forge-logomark.png"
        alt="Farm & Forge mark"
        style={{ height: `${height}px`, width: `${height}px` }}
      />
      <div className="leading-tight">
        <p className="text-sm font-semibold tracking-[0.2em] text-[var(--ff-navy)]">FARM &amp; FORGE</p>
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--ff-forge)]">Club</p>
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
