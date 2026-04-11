import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { events, news, featuredAlumni } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-linear-to-b from-brand-50 to-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--brand) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                A community project by Axios, IIITL
              </div>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                A home for{" "}
                <span className="text-brand">IIIT Lucknow</span>
                <br />
                alumni and students.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                IIITL doesn&apos;t have a central alumni platform yet. This is
                a community-built attempt to fix that — a place for graduates
                and current students to find each other, share opportunities,
                and stay in touch after college.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/register"
                  className="inline-flex h-11 items-center rounded-md bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                >
                  Join the network
                </Link>
                <Link
                  href="/directory"
                  className="inline-flex h-11 items-center rounded-md border border-border bg-background px-6 text-sm font-semibold text-foreground hover:border-brand hover:text-brand transition-colors"
                >
                  Browse directory →
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  What&apos;s inside
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    {
                      title: "Alumni directory",
                      body: "Search by batch, branch, company, or city.",
                    },
                    {
                      title: "Events",
                      body: "Reunions, meetups, and community calls.",
                    },
                    {
                      title: "Jobs board",
                      body: "Roles shared by IIITL alumni.",
                    },
                    {
                      title: "News & updates",
                      body: "What alumni and students are up to.",
                    },
                  ].map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <div>
                        <div className="font-medium text-foreground">
                          {f.title}
                        </div>
                        <div className="text-muted">{f.body}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-xl border border-dashed border-border p-4 text-center">
                  <div className="text-xs uppercase tracking-wider text-muted">
                    Project status
                  </div>
                  <div className="mt-1 font-serif text-base font-semibold">
                    Early — help wanted
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-accent/20 blur-2xl lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading
              eyebrow="Our Mission"
              title="A lifelong community of builders, scholars, and leaders."
            />
          </div>
          <div className="grid gap-6 lg:col-span-2 sm:grid-cols-2">
            {[
              {
                title: "Connect",
                body: "Find batchmates, faculty, and alumni in your city, industry, or area of interest through the IIITL directory.",
              },
              {
                title: "Hire",
                body: "Post roles, find IIITL talent, and discover internships and full-time opportunities on the alumni job board.",
              },
              {
                title: "Contribute",
                body: "Support student innovation, research grants, and scholarships through the IIITL Alumni Fund.",
              },
              {
                title: "Celebrate",
                body: "Reunions, founders nights, regional meetups, and the annual Alumni Awards — all year, every year.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="font-serif text-xl font-semibold">
                  {p.title}
                </div>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Upcoming events */}
      <section className="bg-surface py-20">
        <Section>
          <div className="flex items-end justify-between">
            <SectionHeading
              eyebrow="Upcoming"
              title="Events on the calendar"
              description="Reunions, fireside chats, webinars, and meetups — happening on campus and around the world."
            />
            <Link
              href="/events"
              className="hidden text-sm font-semibold text-brand hover:underline sm:block"
            >
              View all events →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {events.map((e) => (
              <Link
                key={e.slug}
                href={`/events/${e.slug}`}
                className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-brand"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-brand-50 px-2 py-1 font-medium text-brand">
                    {e.type}
                  </span>
                  <time className="text-muted">
                    {new Date(e.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold group-hover:text-brand">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{e.location}</p>
                <p className="mt-3 text-sm text-foreground/80">{e.excerpt}</p>
              </Link>
            ))}
          </div>
        </Section>
      </section>

      {/* Featured alumni */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Spotlight"
          title="Alumni doing remarkable work"
          description="A small slice of the global IIITL family making impact across tech, research, and entrepreneurship."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAlumni.map((a) => (
            <div
              key={a.name}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 font-serif text-xl font-semibold text-brand">
                {a.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="mt-4 font-serif text-lg font-semibold">
                {a.name}
              </div>
              <div className="text-xs text-muted">
                Batch of {a.batch} · {a.branch}
              </div>
              <div className="mt-3 text-sm text-foreground/80">
                {a.role}
                <br />
                <span className="text-muted">
                  {a.company} · {a.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* News */}
      <section className="bg-surface py-20">
        <Section>
          <SectionHeading
            eyebrow="From the desk"
            title="Latest news & announcements"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-brand"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                  {n.category}
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold group-hover:text-brand">
                  {n.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{n.excerpt}</p>
                <div className="mt-4 text-xs text-muted">
                  {new Date(n.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </section>

      {/* Give back CTA */}
      <Section className="py-24">
        <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand to-brand-700 p-10 text-white sm:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Give Back
              </div>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Help the next generation of IIITL students dream bigger.
              </h2>
              <p className="mt-4 max-w-2xl text-white/80">
                Your contribution funds scholarships, research grants, and
                student-led innovation. Every rupee compounds into opportunity.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/giving"
                className="inline-flex h-11 items-center rounded-md bg-accent px-6 text-sm font-semibold text-brand-700 hover:bg-accent-600 transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/directory"
                className="inline-flex h-11 items-center rounded-md border border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Find alumni
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
