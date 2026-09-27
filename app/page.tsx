"use client";

import { useState } from "react";

const programs = [
  { title: "Engineering & Technology", text: "Future-ready learning with strong foundations in technology, design and innovation." },
  { title: "Management & Commerce", text: "Leadership, entrepreneurship and industry-aligned business education." },
  { title: "Humanities & Social Sciences", text: "Critical thinking, communication, culture and social understanding." },
  { title: "Health & Allied Sciences", text: "Interdisciplinary education for modern healthcare and community impact." },
  { title: "Computer Applications", text: "Applied computing, software development, data and digital transformation." },
  { title: "Research & Doctoral Studies", text: "Advanced inquiry, mentorship and knowledge creation across disciplines." },
];

const stats = [
  ["50+", "Programs"],
  ["20+", "Academic Disciplines"],
  ["100%", "Student Focus"],
  ["Global", "Outlook"],
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="bg-[#13233f] text-white text-sm">
        <div className="container-shell flex items-center justify-between gap-4 py-2.5">
          <p className="opacity-85">Sengol International University</p>
          <div className="hidden md:flex gap-5 opacity-90">
            <a href="#admissions">Admissions</a>
            <a href="#contact">Contact</a>
            <a href="#news">News & Events</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#eadfce] bg-[#fffaf2]/95 backdrop-blur">
        <div className="container-shell flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#c99a3d] bg-[#13233f] font-bold text-[#e5c47d]">SIU</div>
            <div>
              <div className="serif text-xl font-bold leading-tight text-[#13233f]">Sengol International University</div>
              <div className="text-[11px] uppercase tracking-[.23em] text-[#8a6b2d]">Knowledge • Character • Leadership</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#26354e]">
            <a href="#about">About</a><a href="#academics">Academics</a><a href="#research">Research</a><a href="#campus">Campus Life</a><a href="#news">News</a>
            <a href="#admissions" className="btn-maroon !min-h-10 !px-5">Apply Now</a>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="lg:hidden rounded-xl border border-[#ddcfba] px-4 py-2 text-[#13233f]">Menu</button>
        </div>
        {open && (
          <div className="container-shell pb-4 lg:hidden">
            <div className="grid gap-3 rounded-2xl border border-[#eadfce] bg-white p-4 shadow-sm">
              <a href="#about" onClick={() => setOpen(false)}>About</a><a href="#academics" onClick={() => setOpen(false)}>Academics</a><a href="#research" onClick={() => setOpen(false)}>Research</a><a href="#campus" onClick={() => setOpen(false)}>Campus Life</a><a href="#news" onClick={() => setOpen(false)}>News & Events</a><a href="#admissions" onClick={() => setOpen(false)} className="font-bold text-[#7a1f2d]">Apply Now</a>
            </div>
          </div>
        )}
      </header>

      <section className="hero-bg min-h-[650px] text-white">
        <div className="container-shell flex min-h-[650px] items-center py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-[#e5c47d]/50 bg-[#c99a3d]/15 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#f0d69e]">Admissions Open</div>
            <h1 className="serif max-w-2xl text-5xl font-bold leading-[1.05] md:text-7xl">Shaping global leaders for a brighter tomorrow.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">A modern learning environment where knowledge, innovation, values and opportunity come together to prepare students for a changing world.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#admissions" className="btn-primary">Explore Admissions</a>
              <a href="#academics" className="btn-secondary">Discover Programs</a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10">
        <div className="container-shell grid overflow-hidden rounded-3xl bg-white soft-shadow sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([number, label], i) => (
            <div key={label} className={`p-7 text-center ${i < stats.length - 1 ? "lg:border-r lg:border-[#eee3d3]" : ""}`}>
              <div className="serif text-3xl font-bold text-[#7a1f2d]">{number}</div>
              <div className="mt-1 text-sm font-semibold text-[#687080]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="text-sm font-bold uppercase tracking-[.2em] text-[#b1822f]">About Sengol</div>
            <h2 className="serif mt-3 text-4xl font-bold leading-tight text-[#13233f] md:text-5xl">An institution built for purpose, progress and possibility.</h2>
            <p className="mt-6 text-lg leading-8 text-[#626a77]">The university experience should be more than a degree. Our vision brings together academic depth, practical learning, responsible leadership and a strong sense of community.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#efe5d4] px-4 py-2 text-sm font-semibold text-[#6f5424]">Student Centric</span>
              <span className="rounded-full bg-[#e8edf5] px-4 py-2 text-sm font-semibold text-[#2d4364]">Industry Relevant</span>
              <span className="rounded-full bg-[#f3e2e4] px-4 py-2 text-sm font-semibold text-[#7a1f2d]">Future Focused</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[30px] bg-[#13233f] p-3 soft-shadow">
            <img className="h-[480px] w-full rounded-[22px] object-cover" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85" alt="University students on campus" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-[#fffaf2]/95 p-5 backdrop-blur">
              <div className="serif text-xl font-bold text-[#13233f]">Learn. Lead. Make an Impact.</div>
              <p className="mt-1 text-sm text-[#687080]">A campus culture designed to encourage confidence, curiosity and collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="academics" className="section-pad bg-[#fffaf2] border-y border-[#eadfce]">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-bold uppercase tracking-[.2em] text-[#b1822f]">Academics</div>
            <h2 className="serif mt-3 text-4xl font-bold text-[#13233f] md:text-5xl">Find the program that fits your ambition.</h2>
            <p className="mt-4 text-lg leading-8 text-[#687080]">Explore multidisciplinary pathways designed for meaningful careers and lifelong learning.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <article key={p.title} className="card-lift rounded-3xl border border-[#eadfce] bg-white p-7">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#13233f] font-bold text-[#e5c47d]">0{i + 1}</div>
                <h3 className="serif text-2xl font-bold text-[#13233f]">{p.title}</h3>
                <p className="mt-3 leading-7 text-[#687080]">{p.text}</p>
                <a href="#admissions" className="mt-6 inline-block font-bold text-[#7a1f2d]">Explore program →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="section-pad bg-[#13233f] text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="text-sm font-bold uppercase tracking-[.2em] text-[#e5c47d]">Research & Innovation</div>
            <h2 className="serif mt-3 text-4xl font-bold md:text-5xl">Ideas that move beyond the classroom.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">We aim to create a research culture that encourages questioning, interdisciplinary thinking and solutions with real-world relevance.</p>
            <a href="#" className="btn-primary mt-8">Explore Research</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Interdisciplinary Projects", "Mentored Research", "Innovation Culture", "Community Impact"].map((x) => (
              <div key={x} className="rounded-3xl border border-white/10 bg-white/7 p-6">
                <div className="mb-4 h-1 w-14 rounded-full bg-[#c99a3d]" />
                <div className="serif text-xl font-bold">{x}</div>
                <p className="mt-2 text-sm leading-6 text-white/65">Creating space for thoughtful inquiry, collaboration and practical outcomes.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="campus" className="section-pad">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-[.2em] text-[#b1822f]">Campus Life</div>
              <h2 className="serif mt-3 text-4xl font-bold text-[#13233f] md:text-5xl">A campus experience that feels alive.</h2>
            </div>
            <p className="max-w-md leading-7 text-[#687080]">Clubs, events, collaboration, wellness and friendships — student life is designed to be as enriching as academics.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              ["Student Community", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"],
              ["Learning Spaces", "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"],
              ["Events & Culture", "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80"],
            ].map(([title, image]) => (
              <article key={title} className="group overflow-hidden rounded-3xl bg-white soft-shadow">
                <img src={image} alt={title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-6"><h3 className="serif text-2xl font-bold text-[#13233f]">{title}</h3><p className="mt-2 leading-7 text-[#687080]">Spaces and experiences that help students connect, grow and belong.</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="section-pad bg-[#efe7da]">
        <div className="container-shell">
          <div className="mb-10 flex items-end justify-between gap-5"><div><div className="text-sm font-bold uppercase tracking-[.2em] text-[#9a7028]">University Updates</div><h2 className="serif mt-2 text-4xl font-bold text-[#13233f]">News & Events</h2></div><a href="#" className="hidden font-bold text-[#7a1f2d] sm:block">View all →</a></div>
          <div className="grid gap-5 md:grid-cols-3">
            {["Admissions & Scholarships", "Academic Activities", "Campus Events"].map((title, i) => (
              <article key={title} className="rounded-3xl bg-[#fffaf2] p-7 card-lift">
                <div className="text-xs font-bold uppercase tracking-[.18em] text-[#9a7028]">Update 0{i + 1}</div>
                <h3 className="serif mt-4 text-2xl font-bold text-[#13233f]">{title}</h3>
                <p className="mt-3 leading-7 text-[#687080]">Use the admin panel later to publish official notices, stories, event details and announcements here.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="section-pad">
        <div className="container-shell overflow-hidden rounded-[34px] bg-[#7a1f2d] px-7 py-12 text-white md:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-[.2em] text-[#f0d69e]">Admissions</div>
            <h2 className="serif mt-3 text-4xl font-bold md:text-5xl">Your next chapter can start here.</h2>
            <p className="mt-4 text-lg leading-8 text-white/78">Explore programs, understand eligibility and begin your journey with Sengol International University.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
            <a href="#" className="btn-primary">Apply Online</a>
            <a href="#contact" className="btn-secondary">Talk to Admissions</a>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#0d1a2f] text-white">
        <div className="gold-line" />
        <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2"><div className="serif text-2xl font-bold">Sengol International University</div><p className="mt-4 max-w-xl leading-7 text-white/60">A premium digital foundation for the university website. Official content, addresses, approvals, program details and contact information can be connected from the admin CMS next.</p></div>
          <div><div className="font-bold text-[#e5c47d]">Quick Links</div><div className="mt-4 grid gap-3 text-white/65"><a href="#about">About</a><a href="#academics">Academics</a><a href="#admissions">Admissions</a><a href="#news">News</a></div></div>
          <div><div className="font-bold text-[#e5c47d]">Connect</div><div className="mt-4 grid gap-3 text-white/65"><span>Admissions Office</span><span>Student Support</span><span>Media & Enquiries</span></div></div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-sm text-white/45">© {new Date().getFullYear()} Sengol International University. Website concept build.</div>
      </footer>
    </main>
  );
}
