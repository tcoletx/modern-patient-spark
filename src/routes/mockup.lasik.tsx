import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/mockup/lasik")({
  head: () => ({
    meta: [
      { title: "LASIK Surgery | Lake Lazer Eye Center" },
      { name: "description", content: "LASIK laser vision correction from Dr. Shabbir Khambati at Lake Lazer Eye Center — serving Metro Detroit with over 30,000 procedures performed." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LasikMockup,
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

const sidebarLinks = [
  { label: "LASIK SURGERY", active: true },
  { label: "LASIK Self-Test" },
  { label: "Download Our LASIK Pricing" },
  { label: "SMILE/LASIK Savings Calculator" },
  { label: "LASIK Technology" },
];

const candidates = [
  "want to reduce or eliminate their dependence on glasses or contacts",
  "are at least 18 years of age",
  "have had a stable eye prescription for at least one year",
  "have no health issues affecting their eyes",
  "have no signs of glaucoma or cataracts",
];

const benefits = [
  {
    title: "1. Fast Recovery & Immediate Results in the Detroit Area",
    body: "Most LASIK patients in Detroit notice significant vision improvement soon after their laser eye surgery and can return to normal activities within 24 hours. Many Detroit LASIK patients can even drive to their follow-up appointment the next day.",
  },
  {
    title: "2. Freedom from Glasses & Contacts for Detroit Residents",
    body: "LASIK eye surgery offers Detroit area patients freedom from corrective lenses for daily activities. The vast majority of our Detroit LASIK patients can perform most activities without dependence on glasses or contacts after their laser vision correction, offering life-changing convenience whether you're commuting through Metro Detroit or enjoying Michigan's outdoors.",
  },
  {
    title: "3. Quick, Painless LASIK Procedure",
    body: "LASIK surgery takes less than 15 minutes per eye with no pain during the laser eye surgery, only mild pressure sensations lasting about 5 seconds. The total visit to our LASIK center is under an hour, making LASIK convenient for busy Detroit professionals and families.",
  },
  {
    title: "4. Safe & Permanent Vision Correction with Proven Detroit Expertise",
    body: "LASIK is a permanent laser vision correction procedure with extremely rare serious complications. Lake Lazer Eye Center's LASIK surgeons use careful patient selection and the latest diagnostic technology to minimize risks. Dr. Khambati has performed over 30,000 LASIK procedures, ensuring your LASIK experience is safe and successful.",
  },
  {
    title: "5. Advanced LASIK Technology at Our Locations",
    body: "Our LASIK centers use the latest Femtosecond and Excimer laser technology for precision laser eye surgery. This advanced LASIK technology, combined with Dr. Khambati's extensive LASIK experience, ensures customized treatment for each patient's unique vision needs, treating nearsightedness, farsightedness, and astigmatism with proven LASIK techniques.",
  },
];

const generalFaqs = [
  { q: "What is LASIK surgery?", a: "LASIK vision correction is a simple procedure that uses the cool beam of the eximer laser to gently remove a tiny amount of corneal tissue, usually less than the thickness of a human hair. This changes the curvature of the front of the eye which allows images to be more sharply focused without corrective lenses." },
  { q: "Who is a candidate for LASIK?", a: "You are a candidate for Lasik if your prescription is no more than 14 diopters of Myopia (nearsightedness) or within 6 diopters of Hyperopia (farsightedness) or Astigmatism. This range of prescriptions covers over 99% of the population. Making the majority of people good candidates for the procedure. You must also be at least 18 years of age, and have a stable prescription, and no disease of the eye. People with certain Arthritis diseases or those who take certain medications are not candidates for LASIK. A certain thickness of the cornea is also required." },
  { q: "Why should I choose Lake Lazer Eye Center over other facilities?", a: "Dr. Shabbir Khambati is highly experienced in Michigan LASIK vision correction, having performed over 30,000 LASIK procedures. Dr. Khambati will personally perform all of your preoperative and postoperative examinations as well as your LASIK procedure. Dr. Shabbir Khambati and his highly experienced technical staff use all of the latest technology when evaluating your candidacy for LASIK and performing your procedure." },
  { q: "How do I set up a LASIK consultation?", a: "You may set up a consultation by calling us at 586-792-3891 or Scheduling a free consultation." },
  { q: "Is the LASIK procedure painful?", a: "No, the procedure is not painful. But some patients experience a pressure sensation during the first stage of the procedure, this generally, lasts about 5 seconds on average, and most patients don't remember it after the procedure is done." },
  { q: "Is LASIK permanent?", a: "Yes, for the vast majority of patients, the Lasik procedure is permanent. A small percentage of people require a \"touch up\" operation or enhancement. Lasik is by far the most \"permanent\" of all the refractive procedures available to date. This is one of the commonest fears regarding LASIK. None of my patients have ever lost their vision from LASIK. The risk of serious visual loss from LASIK statistically is 1 in 5,000 to 1 in 10,000 patients." },
  { q: "When can I get back to my usual activities after LASIK Surgery?", a: "The majority of people return to normal activities within 24 hours. Some may take 48 to 72 hours but those are usually people with high prescriptions. Most patients drive to the office the next day." },
  { q: "How long does the LASIK procedure take?", a: "Less than 15 minutes per eye. Your entire stay at the facility to have LASIK will be less than an hour." },
  { q: "Are both eyes done at the same time during LASIK?", a: "Yes. Since we know immediately after performing LASIK on the first eye that the procedure has been successful, we feel confident that we can proceed to the second eye immediately." },
  { q: "Can anything be done to correct my reading vision?", a: "People in their mid-40's and older who have good distance vision in both eyes require reading glasses for near tasks due to a normal aging process in the eye called presbyopia. Presbyopia occurs as the lens inside the eye becomes less flexible with age, causing difficulty focusing up close. Blended Vision LASIK is a procedure some patients choose which adjusts one eye for distance and the other eye for reading. Dr. Shabbir Khambati and his technical staff will present this option to you if you are over 45 and are interested in being glasses-free for both distance and near vision." },
  { q: "Can I have LASIK if I am pregnant or breastfeeding?", a: "LASIK is not recommended if you are pregnant due to fluctuations in the prescription. However, it is possible to have LASIK if you are breastfeeding." },
];

const softTouchFaqs = [
  { q: "How does SoftTouch LASIK differ from traditional LASIK?", a: "SoftTouch LASIK is an advanced, all-laser approach that replaces the mechanical blade used in older LASIK techniques. Instead, Dr. Khambati uses a femtosecond laser and a 3D image-guided microscope, allowing for exceptional accuracy in flap creation and reshaping. This means a gentler experience, greater customization and exceptionally precise visual outcomes." },
  { q: "Does SoftTouch LASIK hurt?", a: "SoftTouch LASIK doesn't hurt; the SoftTouch LASIK procedure is designed to be quick and gentle with minimal discomfort. Your eyes are numbed with anesthetic drops, and most patients feel only a slight sensation of pressure for just a few seconds during the first step of treatment. You remain awake the entire time, but a mild sedative is available for anyone who feels anxious." },
  { q: "How long does the LASIK procedure take?", a: "The laser portion lasts just seconds per eye, and the full procedure typically takes 10–15 minutes. From check-in to your brief post-op exam, you'll be at the office for under an hour. This fast and accurate treatment is among the many benefits of modern refractive surgery." },
  { q: "What is SoftTouch LASIK recovery like?", a: "LASIK recovery is extremely quick. Most patients notice clearer vision within hours. You'll need a driver on the day of surgery, but most patients see clearly enough the next day to drive themselves to their follow-up appointment. Minor dryness, light sensitivity or halos are normal early on and fade as the eyes heal." },
  { q: "Can SoftTouch LASIK treat astigmatism?", a: "SoftTouch LASIK is highly effective for astigmatism, using advanced excimer laser technology to reshape the cornea with precision. The MEL 80 laser can correct up to six diopters of astigmatism, often producing vision sharper than glasses or contacts could achieve." },
  { q: "Am I a candidate if I have thin corneas?", a: "Often, yes. Because SoftTouch uses The VisuMax femtosecond laser platform to create super-thin, highly accurate flaps, many patients who were once told they weren't candidates for LASIK now qualify for SoftTouch at Lake Lazer Eye Center. You can take a quick LASIK Self-Test to find out if you might be a candidate." },
  { q: "How long do results last?", a: "SoftTouch LASIK permanently reshapes the cornea, meaning your distance vision correction is long-lasting. Natural age-related changes like presbyopia or cataracts can still occur later in life, but these are unrelated to LASIK itself." },
  { q: "Is SoftTouch LASIK safe?", a: "SoftTouch LASIK is extremely safe. Long-term contact lens wear carries risks such as infections and corneal ulcers, while LASIK complications are statistically rare. At Lake Lazer Eye Center, Dr. Khambati has performed over 30,000 successful procedures for patients from around the world." },
  { q: "How much does SoftTouch LASIK cost?", a: "The cost of LASIK varies from one person to another, based on their treatment plan. At Lake Lazer Eye Center, LASIK pricing is transparent and includes your consultation, procedure and standard follow-up care. Many patients use HSA/FSA funds or flexible financing options to make the investment more affordable." },
  { q: "How do I know if I'm a candidate?", a: "Ideal candidates are 18+, have a stable prescription and have healthy eyes. The best way to know for sure is to schedule a complimentary LASIK consultation, where you'll receive a full diagnostic evaluation and personalized treatment plan. You can take a Self-Test any time to get an idea if you're eligible." },
];

function LasikMockup() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full border-2 border-slate-800 flex items-center justify-center">
              <span className="text-xs font-semibold text-slate-800">LLEC</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl text-slate-900">Shabbir Khambati, MD</div>
              <div className="text-xs text-slate-500">Specializing in Diseases &amp; Surgery of the Eye</div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <a href="tel:5867923891" className="text-brand-coral font-semibold">📞 586-792-3891</a>
            <button className="bg-brand-coral text-white px-5 py-2.5 rounded font-semibold text-sm hover:opacity-90">
              BOOK NOW
            </button>
          </div>
        </div>
        <nav className="border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-end gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-slate-700 hover:text-brand-coral">
                {item} ▾
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Page banner */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="https://useemore.com/wp-content/uploads/2018/04/lasik-header.jpg"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1559076515-b1a90d4b25d0?w=1600";
          }}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1200px] mx-auto w-full px-6">
            <h1 className="font-display text-white text-5xl md:text-6xl">LASIK Surgery</h1>
          </div>
        </div>
      </div>

      {/* Body with sidebar */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
        {/* Sidebar */}
        <aside>
          <div className="bg-white border border-slate-200 rounded mb-4">
            <input
              type="text"
              placeholder="Search …"
              className="w-full px-4 py-2 rounded-l text-sm outline-none"
            />
          </div>
          <nav className="rounded overflow-hidden bg-[#3d6480] text-white">
            {sidebarLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`block px-5 py-4 border-b border-white/15 text-base ${
                  link.active ? "bg-[#345770] font-semibold" : "hover:bg-[#345770]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="space-y-8 text-base leading-relaxed text-slate-700">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src="https://useemore.com/wp-content/uploads/2018/05/lasik-person-225x300.jpg"
              alt="Man in blue shirt smiling at camera"
              className="w-56 h-auto rounded shadow"
            />
            <p>
              One of the most popular ways to correct vision is with a procedure called LASIK
              (laser in-situ keratomileusis), which uses a laser to change the curvature of the
              cornea (outer window of the eye). LASIK has quickly become the procedure of choice
              for most patients because they recover quickly and have fewer side effects and
              complications than with other methods of vision correction. In fact, most LASIK
              patients notice a significant improvement in their vision soon after surgery. LASIK
              removes tissue within the cornea to treat low to high levels of nearsightedness,
              farsightedness and astigmatism. Serving the Detroit and surrounding areas with
              premier LASIK Eye Surgery take our 60 Second Self-Test below!
            </p>
          </div>

          <p className="font-bold text-slate-900">
            Take Our 60-second Self-Test to Find Out Which Procedures May Be Ideal For You!
          </p>
          <div className="flex justify-center">
            <button className="bg-brand-coral text-white px-8 py-3 rounded font-semibold hover:opacity-90">
              Take The Self-Test
            </button>
          </div>

          <section>
            <h2 className="font-display text-4xl text-brand-coral mb-6">Who is LASIK For?</h2>
            <div className="flex flex-col md:flex-row-reverse gap-6">
              <img
                src="https://useemore.com/wp-content/uploads/2018/04/Mel-80-224x168-USA.jpg"
                alt="LASIK equipment"
                className="w-56 h-auto rounded shadow"
              />
              <ul className="list-disc pl-6 space-y-2 flex-1">
                {candidates.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-display text-4xl text-brand-coral mb-6">
              What Will Happen on the Day of LASIK?
            </h2>
            <p>
              You will arrive at the laser center about half an hour prior to your procedure.
              Once you have been checked in you may be offered a sedative to help you relax. You
              will then be prepared for surgery. The area around your eyes will be cleaned and a
              sterile drape may be applied around your eye. Anesthetic eye drops will be used to
              numb your eyes; no injections or needles will be used. When your eye is completely
              numb, an eyelid holder will be placed between your eyelids to keep you from
              blinking during the procedure.
            </p>
            <img
              src="https://useemore.com/wp-content/uploads/2018/04/lasik-eye-surgery-prep.jpg"
              alt="Eye surgery prep"
              className="my-6 rounded shadow"
            />
            <p>
              Next, a laser called a Femtosecond laser will create a hinged flap of thin corneal
              tissue, and your doctor will gently fold the flap out of the way. During this
              process, you may feel a little pressure, but no pain. You will then be asked to
              look directly at a target light while the laser reshapes your cornea. The Excimer
              laser will be programmed with the information gathered in your pre-operative exam.
              The laser treatment will be completed in less than a minute or two, depending on
              the amount of correction needed. To finish the procedure, the protective layer
              will be folded back into place where it will bond without the need for stitches.
            </p>
            <p className="mt-4">
              Following your procedure, your eye(s) will be examined with a slit lamp
              microscope. Then you will be given additional eye drops, and your eyes may be
              shielded for protection. Your vision will probably be a little blurry at first, so
              someone will need to drive you home. You should relax for the rest of the day. You
              may experience some discomfort for 12 to 24 hours, but this is usually alleviated
              with an over-the-counter pain reliever. Some people experience sensitivity to
              light, and watering or swelling of their eyes for a few days following their
              procedure.
            </p>
            <img
              src="https://useemore.com/wp-content/uploads/2018/04/free-eye-exam-1-1024x683.jpg"
              alt="Slit lamp exam"
              className="my-6 rounded shadow"
            />
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Vision can fluctuate for up to six months, but most people can see well enough
                to pass a driver's license vision exam following their procedure.
              </li>
              <li>
                You will be asked to come back the next day for another examination of your
                eye(s). Most people can actually see well enough to drive the next day but it's
                best not to drive until you have been examined. You should be able to resume
                your normal activities the day after surgery.
              </li>
            </ul>
          </section>

          <p className="font-bold text-slate-900">
            Take Our 60-second Self-Test to Find Out Which Procedures May Be Ideal For You!
          </p>
          <div className="flex justify-center">
            <button className="bg-brand-coral text-white px-8 py-3 rounded font-semibold hover:opacity-90">
              Take The Self-Test
            </button>
          </div>

          <section>
            <h3 className="font-display text-3xl text-brand-coral mb-6">
              What are the top 5 benefits of LASIK Eye Surgery?
            </h3>
            <div className="space-y-5">
              {benefits.map((b) => (
                <div key={b.title}>
                  <p className="font-bold text-slate-900 mb-1">{b.title}</p>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-4xl text-brand-coral mb-6">
              What are realistic expectations for LASIK?
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://useemore.com/wp-content/uploads/2018/04/LASIK-Surgery-300x219.jpg"
                alt="Laser entering the human eye"
                className="w-72 h-auto rounded shadow"
              />
              <div className="space-y-4 flex-1">
                <p>
                  The decision to have LASIK is an important one that only you can make. The
                  goal of any refractive surgical procedure is to reduce your dependence on
                  corrective lenses. However, we cannot guarantee you will have the results you
                  desire. The vast majority of our patients are extremely happy with their
                  vision after LASIK and can do most activities without dependence on
                  corrective lenses.
                </p>
                <p>
                  Serious complications with LASIK are extremely rare. LASIK is a safe,
                  effective and permanent procedure, but like any surgical procedure, it does
                  have some risks. Many of the risks and complications associated with this
                  procedure can be reduced or eliminated through careful patient selection and
                  thorough pre-operative testing using the latest diagnostic technology.
                </p>
              </div>
            </div>
            <p className="mt-4">
              After LASIK, you may experience some visual side effects. These visual side
              effects are usually mild and diminish over time. But there is a slight chance
              that some of these side effects won't go away completely, such as feelings of
              dryness, glare, and halos.
            </p>
            <p className="mt-4">
              Since everyone heals somewhat differently, some patients may overreact to the
              procedure and some may underreact resulting in overcorrections and
              undercorrections. Once the eye has stabilized (3 to 6 months) you and your
              doctor can discuss whether a re-treatment could help fine tune your vision if you
              are over or under corrected.
            </p>
            <p className="mt-4">
              After a thorough eye exam, you and your doctor will determine if LASIK is an
              option for you. If you are a good candidate, you will be given additional
              information about the procedure that will allow you to make an informed decision
              about whether to proceed. Be sure you have all your questions answered to your
              satisfaction.
            </p>
          </section>

          <p className="font-bold text-slate-900">
            Take Our 60-second Self-Test to Find Out Which Procedures May Be Ideal For You!
          </p>
          <div className="flex justify-center">
            <button className="bg-brand-coral text-white px-8 py-3 rounded font-semibold hover:opacity-90">
              Take The Self-Test
            </button>
          </div>

          <section>
            <h3 className="font-display text-3xl text-brand-coral mb-6">
              Frequently Asked LASIK Questions
            </h3>
            <div className="space-y-6">
              {generalFaqs.map((f) => (
                <div key={f.q}>
                  <h4 className="font-display text-xl text-slate-900 mb-2">{f.q}</h4>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-display text-3xl text-brand-coral mb-6">SoftTouch LASIK FAQ</h3>
            <p>
              If you've been thinking about life without glasses or contacts, you're not alone.
              Thousands of Michigan patients turn to{" "}
              <a href="#" className="text-brand-coral font-semibold">
                SoftTouch LASIK at Lake Lazer Eye Center
              </a>{" "}
              each year for clearer, more comfortable vision. Below, we've gathered answers to
              the questions people ask most — so you can feel confident, informed and ready for
              the next step in your LASIK journey.
            </p>
            <div className="space-y-6 mt-6">
              {softTouchFaqs.map((f) => (
                <div key={f.q}>
                  <h4 className="font-display text-xl text-slate-900 mb-2">{f.q}</h4>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className="font-display text-2xl text-slate-900 mb-3">Ready to See More Clearly?</h4>
            <p>
              SoftTouch LASIK is one of the most advanced, comfortable and precise vision
              correction options available today — and Lake Lazer Eye Center is proud to bring
              this technology to patients across Michigan. If you're ready to explore your
              options, our team is here to guide you every step of the way.
            </p>
            <p className="mt-4">
              <strong>Still have questions?</strong> If your questions aren't answered here, you
              can schedule a no-obligation consultation with Dr. Khambati to confirm whether
              you're a candidate for SoftTouch LASIK and get information specific to your eyes
              and vision goals:
            </p>
            <p className="mt-4"><strong>Phone:</strong> (586) 792-3891</p>
            <p><strong>Email:</strong> <a href="mailto:info@useemore.com" className="text-brand-coral">info@useemore.com</a></p>
            <p><strong>Online Form:</strong> <a href="#" className="text-brand-coral">useemore.com</a></p>
            <p className="italic mt-6">
              With convenient locations in Clinton Township, Southfield and Milford, Lake Lazer
              Eye Center offers Metro Detroit-area patients comprehensive glaucoma care as well
              as up-front pricing and convenient and affordable payment plans for SoftTouch
              LASIK and the SMILE Pro procedure. Dr. Khambati has helped thousands of people
              from all over the world escape the restrictions of glasses and contacts through
              laser vision correction procedures. Detroit patients who are not candidates for
              vision correction can get our assistance with a contact lens evaluation or a
              selection of designer and specialty eyewear.
            </p>
          </section>

          <section>
            <h3 className="font-display text-3xl text-brand-coral mb-6">What Does LASIK Fix?</h3>
            <p>
              To treat nearsightedness, the steep cornea is made flatter by removing tissue
              from the center of the cornea. This moves the point of focus from in front of the
              retina to directly on the retina.
            </p>
            <img
              src="https://useemore.com/wp-content/uploads/2018/04/Myopia.png"
              alt="Treating nearsightedness"
              className="my-6"
            />
            <p>
              To treat farsightedness, the flat cornea is made steeper by removing tissue
              outside of the central optical zone of the cornea. This moves the point of focus
              from behind the retina to directly on the retina.
            </p>
            <img
              src="https://useemore.com/wp-content/uploads/2018/04/Hyperopia-e1495642395464.png"
              alt="Treating farsightedness"
              className="my-6"
            />
            <p>
              To treat astigmatism, the cornea is made more spherical — like a basketball
              instead of a football. This eliminates multiple focusing points within the eye
              and creates one point of focus on the retina. Astigmatism can be treated at the
              same time as nearsightedness and farsightedness.
            </p>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#2a4a63] text-white mt-16">
        <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-base">
          <div>
            <div className="font-display text-2xl mb-3">Lake Lazer Eye Center</div>
            <p className="text-white/80">Shabbir Khambati, MD — Specializing in Diseases &amp; Surgery of the Eye</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <p className="text-white/80">📞 586-792-3891</p>
            <p className="text-white/80">✉ info@useemore.com</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Locations</div>
            <p className="text-white/80">Clinton Township · Southfield · Milford</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Lake Lazer Eye Center. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
