import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import drShabbirAsset from "@/assets/dr-shabbir.jpg.asset.json";
const drShabbir = drShabbirAsset.url;
import drAlisha from "@/assets/dr-alisha.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lake Lazer Eye Center | LASIK & SMILE Pro in Metro Detroit" },
      { name: "description", content: "See life more clearly with advanced LASIK and ZEISS SMILE Pro from Dr. Shabbir Khambati and Dr. Alisha Khambati. 30,000+ surgeries performed." },
      { property: "og:title", content: "Lake Lazer Eye Center — Life is Better With LASIK" },
      { property: "og:description", content: "Advanced LASIK, SMILE Pro, and complete eye care across Metro Detroit." },
    ],
  }),
  component: Index,
});

const navItems = [
  "About",
  "LASIK & SMILE Pro",
  "Medical Eye Care",
  "Cosmetic Services",
  "Optical Services",
  "Patient Resources",
  "Locations & Contact",
];

const benefits = [
  { stat: "<15", unit: "min", label: "Quick, in-office procedure" },
  { stat: "20+", unit: "yrs", label: "Of refractive surgery experience" },
  { stat: "30k", unit: "+", label: "Successful surgeries performed" },
  { stat: "100%", unit: "", label: "Bladeless with ZEISS SMILE Pro" },
];

const benefitPoints = [
  "Treats nearsightedness, farsightedness & astigmatism",
  "Long-term cost savings vs. glasses & contacts",
  "Most patients see 20/20 the next day",
  "Freedom from glasses and contacts",
  "Free, no-pressure LASIK consultations",
  "Among the highest success rates in Michigan",
];

const services = [
  { name: "LASIK", blurb: "Quick, virtually painless laser vision correction with an excellent track record." },
  { name: "SMILE Pro", blurb: "Bladeless, all-laser correction for nearsightedness and astigmatism." },
  { name: "PRK", blurb: "A trusted alternative for patients who aren't ideal LASIK candidates." },
  { name: "Cataract Surgery", blurb: "Premium lens options to restore crisp, vibrant vision." },
  { name: "Glaucoma Care", blurb: "Early diagnosis, medical management, and laser treatment." },
  { name: "Retina Treatment", blurb: "Specialized care for macular and retinal conditions." },
  { name: "Cornea Care", blurb: "Comprehensive treatment for corneal disease and dystrophies." },
  { name: "Eyelid Surgery", blurb: "Blepharoplasty for a refreshed, more youthful appearance." },
  { name: "Optical Shop", blurb: "In-house edging lab with frames for every lifestyle." },
];

const reviews = [
  {
    quote:
      "Awesome doctor and awesome team. Everyone is super friendly, re-assured any anxieties about the surgery, and I got 20/20 vision almost immediately.",
    name: "Jordan M.",
    procedure: "LASIK Patient",
  },
  {
    quote:
      "Dr. Khambati and his staff are very welcoming. They explained everything about my LASIK and answered all my questions. Within a few weeks I was glasses free.",
    name: "Priya S.",
    procedure: "SMILE Pro Patient",
  },
  {
    quote:
      "From the front desk I was greeted with positivity and respect. The team made me feel comfortable and confident. 11/10 — the best.",
    name: "Marcus W.",
    procedure: "LASIK Patient",
  },
  {
    quote:
      "Very nice, smiled, and made sure all my questions were answered. They made me feel calm about getting my procedure done.",
    name: "Elena R.",
    procedure: "Cataract Patient",
  },
  {
    quote:
      "Professional, caring, and genuinely invested in my outcome. I can finally see the alarm clock in the morning — life-changing.",
    name: "David K.",
    procedure: "LASIK Patient",
  },
  {
    quote:
      "Dr. Alisha took the time to walk me through every option. I never felt rushed and the results have been incredible.",
    name: "Sara L.",
    procedure: "PRK Patient",
  },
];

const locations = [
  { city: "Clinton Township", address: "35776 Harper Ave., Clinton Twp., MI 48035 (Olivia Commons)" },
  { city: "Southfield", address: "25811 W. 12 Mile Rd, Ste 100, Southfield, MI 48034" },
  { city: "Milford", address: "1800 N. Milford Rd., Suite 300, Milford, MI 48381" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Benefits />
      <Surgeons />
      <Services />
      <Reviews />
      <Locations />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3 min-w-0">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-navy text-primary-foreground">
            <EyeMark />
          </div>
          <div className="leading-tight whitespace-nowrap">
            <div className="font-display text-lg font-semibold text-brand-navy">Lake Lazer</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Eye Center</div>
          </div>
        </a>
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-foreground/80 whitespace-nowrap">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:text-brand-coral transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3 whitespace-nowrap">
          <a href="tel:5867923891" className="hidden 2xl:inline text-sm font-semibold text-brand-navy hover:text-brand-coral">
            586-792-3891
          </a>
          <a href="#book" className="rounded-full bg-brand-coral px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_var(--brand-coral)] hover:brightness-105 transition">
            Book Now
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden rounded-md p-2 text-brand-navy"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-3 text-sm font-medium">
            {navItems.map((item) => (
              <a key={item} href="#" className="py-1.5 text-foreground/80">{item}</a>
            ))}
            <a href="tel:5867923891" className="py-1.5 font-semibold text-brand-navy">586-792-3891</a>
          </div>
        </div>
      )}
    </header>
  );
}

function EyeMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-deep">
      <img
        src={heroImg}
        alt="A woman enjoying the outdoors with clear, glasses-free vision after LASIK"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] opacity-90"
        width={1600}
        height={1100}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(100deg, oklch(0.22 0.06 252 / 0.92) 0%, oklch(0.22 0.06 252 / 0.55) 45%, transparent 75%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:py-36 lg:px-8">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-coral" />
            Now offering ZEISS SMILE Pro
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            See the life you've been{" "}
            <span className="italic text-brand-coral-soft">missing.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
            Advanced LASIK and ZEISS SMILE Pro from Metro Detroit's most trusted refractive surgeons —
            over 30,000 successful procedures and counting.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#self-test"
              className="inline-flex items-center justify-center rounded-full bg-brand-coral px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-12px_oklch(0.72_0.16_32_/_0.7)] hover:brightness-105 transition"
            >
              Take the Self-Test
              <Arrow />
            </a>
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur hover:bg-white hover:text-brand-navy transition"
            >
              Book Consultation
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
            <div className="flex items-center gap-2"><Stars /> 4.9 / 5 from 800+ patients</div>
            <div>Free consultations · Financing available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg className="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-coral-soft">
      {[0,1,2,3,4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
      ))}
    </div>
  );
}

function Benefits() {
  return (
    <section className="relative bg-brand-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">
              LASIK Eye Surgery
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-brand-navy sm:text-5xl whitespace-pre-line">
              Why patients choose <em className="not-italic text-brand-coral">SoftTouch LASIK</em>{"\u00a0"}and{"\n"}
              SMILE Pro{"\u00a0"}at Lake Lazer.{"\n"}
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Dreaming of life without contacts? Our free consultations help you discover whether
              SoftTouch LASIK or SMILE Pro is right for you — no pressure, just clear answers.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((b) => (
                <div key={b.label} className="rounded-2xl bg-white p-5 shadow-[var(--shadow-soft)]">
                  <div className="flex items-baseline gap-1 font-display text-4xl font-semibold text-brand-navy">
                    {b.stat}
                    <span className="text-xl text-brand-coral">{b.unit}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{b.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy-deep transition">
                Book Your Free Consultation
              </a>
              <a href="#calculator" className="inline-flex items-center rounded-full border border-brand-navy/20 bg-white px-6 py-3 text-sm font-semibold text-brand-navy hover:border-brand-coral hover:text-brand-coral transition">
                Calculate your savings →
              </a>
            </div>
          </div>
          <ul className="space-y-3 self-center">
            {benefitPoints.map((p) => (
              <li key={p} className="flex items-start gap-4 rounded-xl border border-border/60 bg-white px-5 py-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-coral/10 text-brand-coral">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                </span>
                <span className="text-[15px] text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Surgeons() {
  const docs = [
    {
      img: drShabbir,
      name: "Shabbir Khambati, MD",
      role: "Founder & Refractive Surgeon",
      bio: "With more than 20 years of experience and 30,000+ surgeries performed, Dr. Khambati is one of Michigan's most trusted LASIK and SMILE Pro surgeons. He has led medical mission work delivering over 1,000 free surgeries worldwide.",
      tags: ["LASIK", "SMILE Pro", "Cataract"],
    },
    {
      img: drAlisha,
      name: "Alisha Khambati, MD",
      role: "Comprehensive Ophthalmologist",
      bio: "A Summa Cum Laude graduate of Wayne State School of Medicine and Kresge Eye Institute, Dr. Khambati cares for the full spectrum of eye health — from diabetic exams and glaucoma to LASIK, SMILE, and advanced cataract surgery.",
      tags: ["Glaucoma", "Cataract", "LASIK"],
    },
  ];
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">
              Meet Your Surgeons
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-brand-navy sm:text-5xl">
              Two surgeons. One standard of care.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Father-and-daughter ophthalmologists bringing decades of experience and the latest
            refractive technology to every patient.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {docs.map((d) => (
            <article key={d.name} className="group overflow-hidden rounded-3xl bg-brand-sand shadow-[var(--shadow-soft)]">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={d.img}
                  alt={`Portrait of ${d.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <span key={t} className="rounded-full bg-brand-navy/5 px-3 py-1 text-xs font-medium text-brand-navy">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-brand-navy">{d.name}</h3>
                <p className="text-sm font-medium uppercase tracking-wider text-brand-coral">{d.role}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{d.bio}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-coral">
                  Read full bio <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-brand-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral-soft">
            Comprehensive Eye Care
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Every service, under one roof.
          </h2>
          <p className="mt-4 text-white/70">
            From laser vision correction to medical and cosmetic eye care — explore what we offer.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* List */}
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {services.map((s, i) => (
              <li key={s.name}>
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`flex w-full items-center justify-between gap-4 py-4 text-left transition ${
                    active === i ? "text-brand-coral-soft" : "text-white/85 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className={`font-mono text-xs ${active === i ? "text-brand-coral" : "text-white/40"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl sm:text-2xl">{s.name}</span>
                  </span>
                  <span className={`transition ${active === i ? "translate-x-1 text-brand-coral" : "text-white/40"}`}>→</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Detail */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-coral/20 blur-3xl" />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral-soft">
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                {services[active].name}
              </h3>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
                {services[active].blurb}
              </p>
              <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-coral px-6 py-3 text-sm font-semibold text-white hover:brightness-105 transition">
                Learn more about {services[active].name}
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-brand-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">
              Patient Stories
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-brand-navy sm:text-5xl">
              What our patients are saying.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars />
            <span className="text-sm font-medium text-muted-foreground">4.9 average · 800+ reviews</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex h-full flex-col justify-between rounded-2xl bg-white p-7 shadow-[var(--shadow-soft)]">
              <div>
                <div className="text-brand-coral"><Stars /></div>
                <blockquote className="mt-4 font-display text-lg leading-snug text-brand-navy">
                  "{r.quote}"
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-foreground">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.procedure}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-coral">
            Read more patient stories <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">
            Our Locations
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-brand-navy sm:text-5xl">
            Three offices across Metro Detroit.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {locations.map((l) => (
            <a key={l.city} href="#" className="group block rounded-2xl border border-border bg-white p-7 transition hover:border-brand-coral hover:shadow-[var(--shadow-soft)]">
              <div className="font-display text-2xl font-semibold text-brand-navy">{l.city}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.address}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-coral">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92V21a1 1 0 01-1.11 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.19 4.1 1 1 0 014.18 3h4.09a1 1 0 011 .75 12 12 0 00.66 2.6 1 1 0 01-.23 1L7.91 9.09a16 16 0 006 6l1.7-1.79a1 1 0 011-.23 12 12 0 002.6.66 1 1 0 01.75 1z" /></svg>
                586-792-3891
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><EyeMark /></div>
              <div className="font-display text-xl text-white">Lake Lazer Eye Center</div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Specializing in diseases & surgery of the eye. Serving Metro Detroit for over 20 years.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.slice(0, 5).map((n) => (
                <li key={n}><a href="#" className="hover:text-brand-coral-soft">{n}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Get in touch</div>
            <a href="tel:5867923891" className="mt-4 block text-lg font-semibold text-white">586-792-3891</a>
            <a href="#book" className="mt-4 inline-flex items-center rounded-full bg-brand-coral px-5 py-2.5 text-sm font-semibold text-white hover:brightness-105">
              Book a Consultation
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} Lake Lazer Eye Center. All rights reserved.</div>
          <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Accessibility</a><a href="#">Sitemap</a></div>
        </div>
      </div>
    </footer>
  );
}
