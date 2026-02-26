"use client";

import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRef, useState } from "react";

export function UserProfileBadge() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex rounded-full ring-2 ring-transparent transition-[ring-color] hover:ring-[var(--ff-border)] focus:outline-none focus:ring-2 focus:ring-[var(--ff-accent)]"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Account menu"
      >
        <Image
          src="/user_profile_badge.png"
          alt="Account"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
          unoptimized
        />
      </button>
      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-10"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full z-20 mt-2 min-w-[10rem] rounded-lg border border-[var(--ff-border)] bg-[var(--background)] py-1 shadow-lg">
            <SignOutButton signOutOptions={{ redirectUrl: "/" }}>
              <button
                type="button"
                className="w-full px-4 py-2 text-left text-sm text-[var(--foreground)] hover:bg-[var(--ff-border)]"
                onClick={() => setOpen(false)}
              >
                Sign out
              </button>
            </SignOutButton>
          </div>
        </>
      )}
    </div>
  );
}
