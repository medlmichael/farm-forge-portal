# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Environment Setup

Create `.env.local` with Clerk keys (see `.env.example`):
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

Keys are obtained from the [Clerk Dashboard](https://dashboard.clerk.com).

## Architecture

This is a **Next.js 16 App Router** proof-of-concept demonstrating **Clerk federated identity across Farm & Forge Club’s digital touchpoints**. Narrative: sign in once on the hub → all portals see the same identity; Staff Hub stays restricted (RBAC demo).

### Authentication (Clerk v6)

- `src/middleware.ts` — applies `clerkMiddleware()` to all non-static routes
- `src/app/layout.tsx` — ClerkProvider only; each portal has its own header
- Portals use `<SignedIn>` / `<SignedOut>`; unauthenticated users see prompts, not redirects
- Auth: `<SignInButton>` / `<SignUpButton>` with custom-styled children; `UserButton` for avatar/dropdown
- `src/app/api/download/route.ts` — gated PDF download; uses `auth()`, returns 401 if unauthenticated

### Route Structure

| Route | Portal | Layout |
|-------|--------|--------|
| `/` | Hub — command center, 5 portal cards + Staff Hub | Inline |
| `/club` | Club Automation — member dashboard | `(club)` route group |
| `/club/bookings` | Club Automation — bookings | `(club)` route group |
| `/club/resources` | Club Automation — member resources, gated PDF | `(club)` route group |
| `/portal` | Member experience portal — mock “coming soon” | Inline |
| `/mastery` | Instructure Mastery — education & performance tracking | Inline |
| `/parentsquare` | ParentSquare — communication (messages, announcements) | Inline |
| `/staff` | Staff Hub — always restricted, RBAC demo | Inline |

The main website **farmandforgeclub.com** (WordPress) is represented on the hub as an external link; the demo does not host it.

The `(club)` route group at `src/app/(club)/` provides the shared Club Automation–style header via `src/app/(club)/layout.tsx` → `src/components/club-header.tsx`. Route groups do not affect URLs.

### Portal Design Language

- **Hub** — Farm & Forge branding (green, navy, warm neutrals)
- **Club Automation** — same palette; dashboard, bookings, resources
- **Portal (mock)** — “Coming soon” placeholder
- **Mastery** — Instructure-style (blue accent), standards/tracker and assessments
- **ParentSquare** — purple accent, message/announcement list
- **Staff Hub** — dark strip, blurred staff preview, restricted overlay

### Data Layer

No database. All data is mocked (React state or static arrays). PDF download reads from `data/travel-guide.pdf`; replace with a member handbook PDF if desired.

### Styling

Tailwind CSS v4; theme via CSS variables in `src/app/globals.css` with `@theme inline`. Farm & Forge palette:

| Variable | Value | Use |
|----------|-------|-----|
| `--ff-green` | `#256334` | Primary CTAs |
| `--ff-green-light` | `#2d6a4f` | Accent |
| `--ff-gold` | `#c9a227` | Optional accent |
| `--ff-navy` | `#1d2732` | Text, headings |
| `--ff-cool-gray` | `#64748b` | Secondary text |
| `--ff-light-neutral` | `#f5f3ef` | Page background |
| `--ff-border` | `#e5e2dc` | Borders |

### Path Aliases

`@/*` maps to `./src/*` (tsconfig.json).
