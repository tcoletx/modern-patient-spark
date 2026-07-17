import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/lasik-hero.jpg";

export const Route = createFileRoute("/mockup/lasik")({
  head: () => ({
    meta: [
      { title: "SoftTouch LASIK in Metro Detroit | Lake Lazer Eye Center" },
      { name: "description", content: "Advanced SoftTouch LASIK from Dr. Shabbir Khambati — over 30,000 laser vision correction procedures across Metro Detroit." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LasikMockup,
});

const navItems = [
  "About",
  "LASIK & SMILE Pro",
  "Medical Eye Care",
  "Cosmetic",
  "Optical",
  "Patient Resources",
  "Locations",
];

const candidates = [
  "Want to reduce or eliminate their dependence on glasses or contacts",
  "Are at least 18 years of age",
  "Have had a stable eye prescription for at least one year",
  "Have no health issues affecting their eyes",
  "Have no signs of glaucoma or cataracts",
];

const benefits = [
  {
    n: "01",
    title: "Fast recovery & immediate results",
    body: "Most patients notice significant vision improvement soon after their laser eye surgery and can return to normal activities within 24 hours. Many can even drive to their follow-up appointment the next day.",
  },
  {
    n: "02",
    title: "Freedom from glasses & contacts",
    body: "SoftTouch LASIK offers Detroit-area patients freedom from corrective lenses for daily activities — a life-changing convenience whether you're commuting through Metro Detroit or enjoying Michigan's outdoors.",
  },
  {
    n: "03",
    title: "Quick, virtually painless procedure",
    body: "LASIK takes less than 15 minutes per eye with only mild pressure sensations lasting about five seconds. Your total visit is under an hour — convenient for busy professionals and families.",
  },
  {
    n: "04",
    title: "Safe & permanent vision correction",
    body: "LASIK is a permanent laser vision correction procedure with extremely rare serious complications. Dr. Khambati has performed over 30,000 LASIK procedures, ensuring your experience is safe and successful.",
  },
  {
    n: "05",
    title: "Advanced technology at every location",
    body: "Our LASIK centers use the latest Femtosecond and Excimer laser technology for precision correction of nearsightedness, farsightedness, and astigmatism with proven techniques.",
  },
];

const timeline = [
  {
    step: "Before you arrive",
    body: "You'll arrive at the laser center about half an hour prior to your procedure. Once checked in, you may be offered a mild sedative to help you relax while we prepare you for surgery.",
  },
  {
    step: "Numbing & prep",
    body: "The area around your eyes is cleaned and a sterile drape is applied. Anesthetic eye drops fully numb your eyes — no injections or needles are used. A soft eyelid holder keeps you from blinking during the procedure.",
  },
  {
    step: "The laser treatment",
    body: "A Femtosecond laser creates a hinged flap of thin corneal tissue that Dr. Khambati gently folds aside. You'll look at a target light while the Excimer laser reshapes your cornea — usually in less than a minute or two per eye. The flap is folded back into place with no stitches needed.",
  },
  {
    step: "After the procedure",
    body: "Your eyes are examined with a slit lamp microscope, additional drops are given, and shields may be placed for protection. Vision is a little blurry at first, so someone will drive you home. Most people can see well enough to drive to their next-day follow-up.",
  },
];

const faqs = [
  {
    q: "How does SoftTouch LASIK differ from traditional LASIK?",
    a: "SoftTouch LASIK is an advanced, all-laser approach that replaces the mechanical blade used in older LASIK techniques. Dr. Khambati uses a femtosecond laser and a 3D image-guided microscope for exceptional accuracy in flap creation and reshaping — a gentler experience with exceptionally precise visual outcomes.",
  },
  {
    q: "Does SoftTouch LASIK hurt?",
    a: "SoftTouch LASIK is designed to be quick and gentle with minimal discomfort. Your eyes are numbed with anesthetic drops, and most patients feel only a slight sensation of pressure for a few seconds during the first step. You remain awake the entire time, and a mild sedative is available for anyone who feels anxious.",
  },
  {
    q: "How long does the procedure take?",
    a: "The laser portion lasts just seconds per eye, and the full procedure typically takes 10–15 minutes. From check-in to your brief post-op exam, you'll be at the office for under an hour.",
  },
  {
    q: "What is recovery like?",
    a: "Recovery is extremely quick. Most patients notice clearer vision within hours. You'll need a driver on the day of surgery, but most patients see clearly enough the next day to drive themselves to their follow-up appointment. Minor dryness or light sensitivity is normal early on and fades as the eyes heal.",
  },
  {
    q: "Can SoftTouch LASIK treat astigmatism?",
    a: "SoftTouch LASIK is highly effective for astigmatism, using advanced excimer laser technology to reshape the cornea with precision. The MEL 80 laser can correct up to six diopters of astigmatism — often producing vision sharper than glasses or contacts could achieve.",
  },
  {
    q: "Am I a candidate if I have thin corneas?",
    a: "Often, yes. Because SoftTouch uses the VisuMax femtosecond laser platform to create super-thin, highly accurate flaps, many patients who were once told they weren't candidates for LASIK now qualify at Lake Lazer Eye Center.",
  },
  {
    q: "How long do results last?",
    a: "SoftTouch LASIK permanently reshapes the cornea, meaning your distance vision correction is long-lasting. Natural age-related changes like presbyopia or cataracts can still occur later in life, but these are unrelated to LASIK itself.",
  },
  {
    q: "How much does SoftTouch LASIK cost?",
    a: "Cost varies based on your treatment plan. At Lake Lazer, pricing is transparent and includes your consultation, procedure, and standard follow-up care. Many patients use HSA/FSA funds or flexible financing to make the investment more affordable.",
  },
  {
    q: "How do I know if I'm a candidate?",
    a: "Ideal candidates are 18+, have a stable prescription, and healthy eyes. The best way to know for sure is to schedule a complimentary consultation, where you'll receive a full diagnostic evaluation and personalized treatment plan.",
  },
];

function LasikMockup() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Breadcrumbs />
      <Hero />
      <Candidates />
      <Benefits />
      <Procedure />
      <Expectations />
      <Fixes />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3 min-w-0">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-navy text-primary-foreground">
            <EyeMark />
          </div>
          <div className="leading-tight whitespace-nowrap">
            <div className="font-display text-lg font-semibold text-brand-navy">Lake Lazer</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Eye Center</div>
          </div>
        </a>
        <nav className="hidden xl:flex items-center gap-6 text-base font-medium text-foreground/80 whitespace-nowrap">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:text-brand-coral transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3 whitespace-nowrap">
          <a href="tel:5867923891" className="hidden 2xl:inline text-base font-semibold text-brand-navy hover:text-brand-coral">
            586-792-3891
          </a>
          <a href="#book" className="rounded-full bg-brand-coral px-5 py-2.5 text-base font-semibold text-white hover:brightness-105 transition">
            Book Now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="xl:hidden rounded-md p-2 text-brand-navy" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-3 text-base font-medium">
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

function Breadcrumbs() {
  return (
    <div className="border-b border-border/60 bg-brand-sand">
      <div className="mx-auto max-w-7xl px-5 py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground lg:px-8">
        <a href="/" className="hover:text-brand-coral">Home</a>
        <span className="mx-2 text-muted-foreground/60">/</span>
        <a href="#" className="hover:text-brand-coral">LASIK &amp; SMILE Pro</a>
        <span className="mx-2 text-muted-foreground/60">/</span>
        <span className="text-brand-navy">SoftTouch LASIK</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-deep">
      <img
        src={heroImg}
        alt="Close-up of a bright, clear eye after LASIK"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-80"
        width={1600}
        height={1100}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(100deg, oklch(0.22 0.06 252 / 0.92) 0%, oklch(0.22 0.06 252 / 0.55) 45%, transparent 78%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:py-32 lg:px-8">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-coral" />
            SoftTouch LASIK · Metro Detroit
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
            Life without glasses.{" "}
            <span className="block italic text-brand-coral-soft">Cleared for takeoff.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
            LASIK uses a precision laser to reshape the cornea, correcting low to high levels of
            nearsightedness, farsightedness, and astigmatism — so most patients notice a significant
            improvement in their vision soon after surgery.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://useemore.com/lasik-detroit/lasik-self-test/"
              className="inline-flex items-center justify-center rounded-full bg-brand-coral px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-12px_oklch(0.72_0.16_32_/_0.7)] hover:brightness-105 transition"
            >
              Take the 60-Second Self-Test
              <Arrow />
            </a>
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur hover:bg-white hover:text-brand-navy transition"
            >
              Book Free Consultation
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <HeroStat n="30k+" l="Procedures" />
            <HeroStat n="<15min" l="Per eye" />
            <HeroStat n="24hr" l="Recovery" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-white">{n}</div>
      <div className="text-xs uppercase tracking-[0.18em] text-white/60">{l}</div>
    </div>
  );
}

function Candidates() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">
              Who Is LASIK For?
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-brand-navy sm:text-5xl">
              If this sounds like you, LASIK may be the answer.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              LASIK is right for most healthy adults with a stable prescription. The only way to
              know for sure is a personalized evaluation — and yours is on us.
            </p>
            <a href="#book" className="mt-8 inline-flex items-center rounded-full bg-brand-navy px-6 py-3 text-base font-semibold text-white hover:bg-brand-navy-deep transition">
              Schedule your free evaluation
            </a>
          </div>
          <ul className="space-y-3">
            {candidates.map((c) => (
              <li key={c} className="flex items-start gap-4 rounded-xl border border-border/60 bg-white px-5 py-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-coral/10 text-brand-coral">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                </span>
                <span className="text-[15px] text-foreground/85">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-brand-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">
            The Top 5 Benefits
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-brand-navy sm:text-5xl">
            Why patients love LASIK.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <article key={b.n} className="rounded-2xl bg-white p-7 shadow-[var(--shadow-soft)]">
              <div className="font-mono text-xs text-brand-coral">{b.n}</div>
              <h3 className="mt-3 font-display text-xl font-semibold text-brand-navy">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Procedure() {
  return (
    <section className="bg-brand-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral-soft">
            The Day of LASIK
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            What to expect, step by step.
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Under an hour, start to finish. Here's how your visit unfolds.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {timeline.map((t, i) => (
            <li key={t.step} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-coral font-mono text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold">{t.step}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-white/80">{t.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Expectations() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">
              Realistic Expectations
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-brand-navy sm:text-5xl">
              Straight answers about your results.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              The goal of any refractive procedure is to reduce your dependence on corrective
              lenses. The vast majority of our patients are extremely happy with their vision after
              LASIK and can do most activities without glasses or contacts.
            </p>
            <p>
              Serious complications are extremely rare. LASIK is a safe, effective, and permanent
              procedure — and many risks are reduced or eliminated through careful patient
              selection and thorough pre-operative testing with the latest diagnostic technology.
            </p>
            <p>
              Some side effects like mild dryness, glare, or halos usually diminish over time.
              Because everyone heals a little differently, once the eye stabilizes (3 to 6 months)
              you and your doctor can discuss whether a re-treatment could help fine-tune your
              vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fixes() {
  const items = [
    { title: "Nearsightedness", body: "A steep cornea is made flatter by removing tissue from the center, moving the point of focus onto the retina." },
    { title: "Farsightedness", body: "A flat cornea is made steeper by removing tissue outside the central optical zone, so the focus lands on the retina." },
    { title: "Astigmatism", body: "The cornea is made more spherical — like a basketball instead of a football — creating a single point of focus." },
  ];
  return (
    <section className="bg-brand-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">
            What LASIK Fixes
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-brand-navy sm:text-5xl">
            Three common vision issues. One elegant fix.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white p-7 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-xl font-semibold text-brand-navy">{it.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">
            SoftTouch LASIK FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-brand-navy sm:text-5xl">
            Your questions, answered.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Thousands of Michigan patients trust Lake Lazer for clearer vision. Here's what they
            ask most.
          </p>
        </div>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left hover:bg-brand-sand/60 transition"
                >
                  <span className="font-display text-lg font-semibold text-brand-navy">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-brand-coral transition ${isOpen ? "rotate-45 bg-brand-coral text-white" : ""}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[15px] leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 20%, oklch(0.72 0.16 32 / 0.35) 0%, transparent 60%), radial-gradient(50% 70% at 10% 90%, oklch(0.55 0.12 230 / 0.4) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5 text-center text-white lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-coral" />
          Ready to see more clearly?
        </span>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          Your clearest vision is{" "}
          <span className="italic text-brand-coral-soft">one consultation away.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Book a free, no-obligation LASIK consultation with Dr. Khambati and get a personalized
          treatment plan built around your eyes and vision goals.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#book" className="inline-flex items-center justify-center rounded-full bg-brand-coral px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-12px_oklch(0.72_0.16_32_/_0.7)] hover:brightness-105 transition">
            Book Your Free Consultation
            <Arrow />
          </a>
          <a href="tel:5867923891" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur hover:bg-white hover:text-brand-navy transition">
            Call 586-792-3891
          </a>
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
            <p className="mt-4 max-w-sm text-base text-white/60">
              Specializing in diseases &amp; surgery of the eye. Serving Metro Detroit for over 20 years.
            </p>
          </div>
          <div>
            <div className="text-base font-semibold text-white">Explore</div>
            <ul className="mt-4 space-y-2 text-base">
              {navItems.slice(0, 5).map((n) => (
                <li key={n}><a href="#" className="hover:text-brand-coral-soft">{n}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-base font-semibold text-white">Get in touch</div>
            <a href="tel:5867923891" className="mt-4 block text-lg font-semibold text-white">586-792-3891</a>
            <a href="#book" className="mt-4 inline-flex items-center rounded-full bg-brand-coral px-5 py-2.5 text-base font-semibold text-white hover:brightness-105">
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

function EyeMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}