"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Section } from "@/components/Section";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const handleLogin = async () => {
    await signIn("email", {
      email,
      callbackUrl: "/", // where to redirect after login
    });
  };

  return (
    <Section className="py-20">
      <div className="mx-auto max-w-md rounded-xl border border-border bg-background p-8">
        <h1 className="font-serif text-3xl font-semibold">Welcome back</h1>
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        <p className="mt-2 text-sm text-muted">
          Sign in using your IIITL email.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 h-10 w-full rounded-md border border-border bg-background px-3 text-sm"
            />
          </div>

          <button
            onClick={handleLogin}
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-brand text-sm font-semibold text-white hover:bg-brand-700"
          >
            Send Magic Link
          </button>
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="inline-flex h-11 w-full items-center justify-center rounded-md border border-border text-sm font-semibold hover:bg-muted"
          >
            Continue with Google
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-muted">
          New to IIITL Alumni?{" "}
          <Link href="/register" className="font-medium text-brand">
            Create an account
          </Link>
        </p>
      </div>
    </Section>
  );
}
