"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const navLinks: { href: string; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/directory", label: "Directory" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/jobs", label: "Jobs" },
  { href: "/giving", label: "Give Back" },
];

export function Navbar() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/IIITL_LOGO.svg"
            alt="IIIT Lucknow Alumni Network Logo"
            width={36}
            height={36}
            className="rounded-md"
            style={{ height: "auto" }}
          />
          <div className="leading-tight">
            <div className="font-serif text-base font-semibold text-foreground">
              IIITL Alumni
            </div>
            <div className="text-[11px] uppercase tracking-wider text-muted">
              A community hub for IIIT Lucknow
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {session ? (
            <>
              <span className="hidden sm:inline text-sm text-foreground/80">
                {session.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/80 hover:text-brand"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden sm:inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/80 hover:text-brand"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="inline-flex h-9 items-center rounded-md bg-brand px-4 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
              >
                Join Network
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
