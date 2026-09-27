import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const schools = [
  "Engineering & Technology",
  "Commerce & Management Studies",
  "Computer Science & IT",
  "Architecture & Planning",
  "Science",
  "Arts & Social Studies",
  "Law",
  "Allied & Healthcare Sciences",
  "Pharmacy",
];

const updates = [
  "Submission of Applications to Ph.D. Programme 2026-27",
  "New Academic Calendar 2026-27 Released",
  "Student Registration Portal Now Open",
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero-bg min-h-[680px] text-white">
        <div className="container-shell flex min-h-[680px] items-center py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-[#e5c47d]/50 bg-[#c99a3d]/15 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#f0d69e]">Admissions 2026-27 · Sikkim</div>
            <h1 className="serif text-5xl font-bold leading-[1.03] md:text-7xl">Discover. Learn. Lead.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">Turn your ambitions into reality with quality education and holistic growth at Sengol International University, nestled in the serene Himalayas of Sikkim.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/admissions" className="btn-primary">Explore Admissions</Link>
              <Link href="/programs" className="btn-secondary">Discover Programs</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10">
        <div className="container-shell grid overflow-hidden rounded-3xl bg-white soft-shadow sm:grid-cols-2 lg:grid-cols-4">
          {[["50+","Programs"],["2025","Established"],["UGC","Section 2(F)"],["Sikkim","Main Campus"]].map(([n,l],i)=><div key={l} className={`p-7 text-center ${i<3?"lg:border-r lg:border-[#eee3d3]":""}`}><div className="serif text-3xl font-bold text-[#7a1f2d]">{n}</div><div className="mt-1 text-sm font-semibold text-[#687080]">{l}</div></div>)}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow">About Sengol</div>
            <h2 className="section-title">Academic excellence with a Himalayan perspective.</h2>
            <p className="section-copy">Sengol International University is a State Private University established by Act No. 14 of 2025 of the Sikkim State Legislative Assembly and recognized under Section 2(F) of the UGC Act, 1956. The university combines modern education, practical learning, research and ethical values.</p>
            <div className="mt-8 flex flex-wrap gap-3"><span className="chip">Student Centric</span><span className="chip">Research Driven</span><span className="chip">Global Outlook</span></div>
            <Link href="/about" className="btn-maroon mt-8">Know the University</Link>
          </div>
          <div className="overflow-hidden rounded-[30px] bg-[#13233f] p-3 soft-shadow"><img className="h-[480px] w-full rounded-[22px] object-cover" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85" alt="University students" /></div>
        </div>
      </section>

      <section className="section-pad border-y border-[#eadfce] bg-[#fffaf2]">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center"><div className="eyebrow">Academic Excellence</div><h2 className="section-title">Programs built around real ambition.</h2><p className="section-copy">Explore a broad academic portfolio across professional, technical, creative and research disciplines.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{schools.map((s,i)=><article key={s} className="card-lift rounded-3xl border border-[#eadfce] bg-white p-7"><div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-[#13233f] text-sm font-bold text-[#e5c47d]">{String(i+1).padStart(2,"0")}</div><h3 className="serif text-2xl font-bold text-[#13233f]">School of {s}</h3><Link href="/programs" className="mt-5 inline-block font-bold text-[#7a1f2d]">Explore programs →</Link></article>)}</div>
        </div>
      </section>

      <section className="section-pad bg-[#13233f] text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div><div className="eyebrow !text-[#e5c47d]">Scholarships & Financial Aid</div><h2 className="serif mt-3 text-4xl font-bold md:text-5xl">Opportunity should be within reach.</h2><p className="mt-5 text-lg leading-8 text-white/70">Merit-based, need-based and international-student support options are part of the university's financial-aid framework, including scholarships with up to 100% tuition-fee waiver for exceptional academic performers.</p><Link href="/admissions" className="btn-primary mt-8">View Admissions</Link></div>
          <div className="grid gap-4 sm:grid-cols-3">{[["100%","Merit waiver"],["Merit","Scholarships"],["Need","Financial aid"]].map(([a,b])=><div key={b} className="rounded-3xl border border-white/10 bg-white/5 p-6"><div className="serif text-3xl font-bold text-[#e5c47d]">{a}</div><div className="mt-2 text-sm text-white/65">{b}</div></div>)}</div>
        </div>
      </section>

      <section className="section-pad bg-[#efe7da]">
        <div className="container-shell"><div className="mb-10 flex items-end justify-between gap-5"><div><div className="eyebrow">University Updates</div><h2 className="section-title">Latest notices</h2></div><Link href="/news" className="font-bold text-[#7a1f2d]">View all →</Link></div><div className="grid gap-5 md:grid-cols-3">{updates.map((u,i)=><article key={u} className="rounded-3xl bg-[#fffaf2] p-7 card-lift"><div className="text-xs font-bold uppercase tracking-[.18em] text-[#9a7028]">Update 0{i+1}</div><h3 className="serif mt-4 text-2xl font-bold text-[#13233f]">{u}</h3></article>)}</div></div>
      </section>

      <section className="section-pad"><div className="container-shell overflow-hidden rounded-[34px] bg-[#7a1f2d] px-7 py-12 text-white md:px-12 lg:flex lg:items-center lg:justify-between"><div className="max-w-2xl"><div className="eyebrow !text-[#f0d69e]">Admissions</div><h2 className="serif mt-3 text-4xl font-bold md:text-5xl">Your next chapter can start here.</h2><p className="mt-4 text-lg leading-8 text-white/75">Apply online, check eligibility and connect with the admissions team.</p></div><div className="mt-8 flex flex-wrap gap-3 lg:mt-0"><Link href="/admissions#apply" className="btn-primary">Apply Online</Link><Link href="/contact" className="btn-secondary">Talk to Admissions</Link></div></div></section>

      <SiteFooter />
    </main>
  );
}
