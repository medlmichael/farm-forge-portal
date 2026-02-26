import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FarmAndForgeLogo } from "@/components/farm-and-forge-logo";

export function ClubHeader() {
  return (
    <header className="flex items-center justify-between border-b border-[var(--ff-border)] bg-[var(--background)] px-6 py-4">
      <div className="flex items-center gap-10">
        <FarmAndForgeLogo href="/" height={28} />
        <span className="hidden border-l border-[var(--ff-border)] pl-4 text-sm font-medium text-[var(--ff-cool-gray)] sm:block">
          Member portal
        </span>
        <nav className="hidden gap-7 text-sm sm:flex">
          <Link
            href="/club"
            className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--ff-cool-gray)]"
          >
            Dashboard
          </Link>
          <Link
            href="/club/bookings"
            className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--ff-cool-gray)]"
          >
            Bookings
          </Link>
          <Link
            href="/club/resources"
            className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--ff-cool-gray)]"
          >
            Resources
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-xs text-[var(--ff-cool-gray)] transition-colors hover:text-[var(--foreground)]"
        >
          ← All portals
        </Link>
        <SignedOut>
          <SignInButton>
            <button className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--ff-cool-gray)]">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="rounded-full bg-[var(--ff-green)] px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80">
              Create account
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
