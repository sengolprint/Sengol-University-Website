import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const programs = [
  ["Engineering & Technology", "⚙", "Innovate. Build. Transform.", "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"],
  ["Medical & Health Sciences", "✚", "Care. Research. Heal.", "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"],
  ["Management & Business", "▥", "Lead with Vision.", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"],
  ["Law & Legal Studies", "⚖", "Justice. Ethics. Leadership.", "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"],
  ["Computer Science & AI", "⌘", "Build the Digital Future.", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"],
  ["Arts & Social Sciences", "◫", "Ideas that Shape Society.", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"],
];

const news = [
  ["15", "Mar", "Research & Innovation Centre", "New research initiatives and interdisciplinary learning opportunities at SIU.", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80"],
  ["10", "Mar", "Global Academic Dialogue", "A platform for innovation, sustainability and academic collaboration.", "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=700&q=80"],
  ["01", "Mar", "Student Community Highlights", "Celebrating learners, leadership and student achievements across campus.", "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=700&q=80"],
];

export default function Home() {
  return (
    <main className="bg-[#f8f3ea]">
      <SiteHeader />

      <section className="relative isolate min-h-[600px] overflow-hidden bg-white">
        <img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1800&q=88" alt="University campus" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-transparent" />
        <div className="absolute inset-y-0 right-0 hidden w-[15%] bg-gradient-to-b from-[#49111d] via-[#7a1f2d] to-[#360812] opacity-95 lg:block" />
        <div className="container-shell relative z-10 flex min-h-[600px] items-center py-16">
          <div className="max-w-[600px]">
            <p className="serif text-2xl italic text-[#26354e]">Shaping global leaders for a</p>
            <h1 className="serif mt-2 text-6xl font-black uppercase leading-[.88] tracking-[-.04em] text-[#142039] md:text-[86px]">Brighter <span className="text-[#9f6713]">Tomorrow</span></h1>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-[#354052]">At Sengol International University, academic excellence, practical learning and a global outlook come together to help students build confident futures.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/programs" className="inline-flex min-h-12 items-center rounded-full bg-gradient-to-r from-[#e1ad31] to-[#c98712] px-7 text-sm font-extrabold uppercase text-[#172238]">Explore Programs →</Link>
              <Link href="/admissions" className="inline-flex min-h-12 items-center rounded-full border border-[#b98a44] bg-white/80 px-7 text-sm font-extrabold uppercase text-[#172238]">Admission 2026 →</Link>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 text-xs font-semibold text-[#26354e] sm:grid-cols-4">
              {[["🎓","UGC Recognized"],["🌐","Global Outlook"],["💡","Industry-Oriented"],["👥","Holistic Growth"]].map(([icon,label])=><div key={label} className="flex items-center gap-2 border-r border-[#d7c6aa] pr-3 last:border-0"><span className="text-2xl">{icon}</span><span>{label}</span></div>)}
            </div>
          </div>
        </div>
        <div className="absolute right-[2.3%] top-1/2 z-20 hidden -translate-y-1/2 text-center text-white lg:block">
          <div className="mx-auto mb-5 grid h-28 w-10 place-items-center rounded-full bg-gradient-to-b from-[#f0c45b] to-[#9a5d00] text-3xl">⚜</div>
          <div className="serif text-lg leading-7">Rooted<br/>in Values</div>
          <div className="my-3 h-px bg-white/40" />
          <div className="text-sm leading-6 text-white/80">Driven by<br/>Global Vision</div>
        </div>
      </section>

      <section className="relative z-20 -mt-1 border-y border-[#d9b267] bg-[#fffaf2] shadow-[0_10px_40px_rgba(80,50,10,.08)]">
        <div className="container-shell grid lg:grid-cols-[1fr_1fr_1fr_1fr_1.2fr]">
          {[["50+","Academic Programs","📖"],["Learner","Centric Campus","👥"],["Global","Academic Outlook","🌐"],["Career","Focused Support","🏅"]].map(([a,b,icon],i)=><div key={b} className={`flex items-center gap-4 px-6 py-6 ${i<3?"lg:border-r lg:border-[#dfc797]":""}`}><span className="text-4xl text-[#bd7d10]">{icon}</span><div><div className="serif text-3xl font-bold text-[#17243a]">{a}</div><div className="text-sm text-[#4f5866]">{b}</div></div></div>)}
          <div className="flex items-center gap-4 bg-gradient-to-r from-[#7a1f2d] to-[#4b0d19] px-6 py-6 text-white"><span className="text-4xl">🎓</span><div><div className="serif text-2xl font-bold">Admissions Open</div><div className="mt-1 text-sm text-white/75">Apply for undergraduate, postgraduate and research programs.</div></div></div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-shell grid gap-5 xl:grid-cols-[220px_1fr]">
          <div className="pr-4">
            <h2 className="serif text-4xl font-black uppercase leading-none text-[#17243a]">Our<br/>Programs</h2>
            <div className="mt-3 h-1 w-10 bg-[#c98712]" />
            <p className="mt-4 text-sm leading-6 text-[#596273]">Explore diverse programs designed around practical learning, professional skills and future-ready careers.</p>
            <Link href="/programs" className="mt-5 inline-flex rounded-full bg-[#e8ad2d] px-5 py-3 text-xs font-black uppercase text-[#17243a]">View All Programs →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {programs.map(([title,icon,copy,img])=><article key={title} className="overflow-hidden rounded-xl border border-[#ece2d4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><img src={img} alt={title} className="h-32 w-full object-cover"/><div className="p-4 text-center"><div className="mx-auto -mt-8 grid h-12 w-12 place-items-center rounded-full border-4 border-white bg-[#fffaf2] text-xl text-[#b87308] shadow">{icon}</div><h3 className="serif mt-2 text-lg font-bold leading-5 text-[#17243a]">{title}</h3><p className="mt-2 text-xs text-[#687080]">{copy}</p><Link href="/programs" className="mt-4 inline-grid h-8 w-8 place-items-center rounded-full border border-[#dca21f] text-[#b87308]">→</Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e7] py-5">
        <div className="container-shell grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-[#071d37] p-8 text-white">
            <div className="absolute -left-20 -bottom-24 h-80 w-80 rounded-full border border-[#dca21f]/30 bg-[radial-gradient(circle_at_center,rgba(220,162,31,.25),transparent_62%)]" />
            <div className="relative ml-auto max-w-[62%]">
              <div className="text-xs font-bold uppercase tracking-[.35em] text-white/60">Our Purpose</div>
              <h2 className="serif mt-3 text-4xl font-bold uppercase leading-[.95] text-[#f2c65f]">A Global University for a Brighter Tomorrow</h2>
              <p className="mt-5 text-sm leading-6 text-white/75">A university experience built around knowledge, innovation, ethical leadership and meaningful student development.</p>
              <Link href="/about" className="mt-6 inline-flex rounded-full bg-[#e5ad32] px-5 py-3 text-xs font-black uppercase text-[#17243a]">Learn More →</Link>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between gap-4">
              <div><h2 className="serif text-4xl font-black uppercase text-[#17243a]">Campus Life</h2><div className="mt-2 h-1 w-10 bg-[#c98712]"/><p className="mt-2 text-sm text-[#596273]">A vibrant campus experience with modern learning spaces and an inclusive student community.</p></div>
              <Link href="/campus-life" className="text-sm font-bold text-[#a86408]">View Campus →</Link>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[["World-Class Infrastructure","https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80"],["Modern Learning Spaces","https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80"],["Vibrant Student Community","https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80"]].map(([t,img])=><article key={t} className="overflow-hidden rounded-xl bg-white shadow-sm"><img src={img} alt={t} className="h-32 w-full object-cover"/><div className="p-3 text-center serif font-bold text-[#17243a]">{t}</div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container-shell grid gap-5 xl:grid-cols-[200px_1fr]">
          <div><h2 className="serif text-4xl font-black uppercase text-[#17243a]">News & Events</h2><div className="mt-2 h-1 w-10 bg-[#c98712]"/><p className="mt-3 text-sm text-[#596273]">Stay updated with the latest happenings at Sengol International University.</p><Link href="/news" className="mt-3 inline-block text-sm font-bold text-[#a86408]">View All News →</Link></div>
          <div className="grid gap-4 md:grid-cols-3">
            {news.map(([day,month,title,copy,img])=><article key={title} className="grid grid-cols-[64px_110px_1fr] overflow-hidden rounded-xl border border-[#eee3d3] bg-white shadow-sm"><div className="bg-[#b87308] p-3 text-center text-white"><div className="serif text-2xl font-bold">{day}</div><div className="text-xs">{month}</div></div><img src={img} alt={title} className="h-full min-h-28 w-full object-cover"/><div className="p-4"><h3 className="serif text-base font-bold text-[#17243a]">{title}</h3><p className="mt-2 line-clamp-2 text-xs leading-5 text-[#687080]">{copy}</p><Link href="/news" className="mt-3 inline-block text-xs font-bold text-[#a86408]">Read More →</Link></div></article>)}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
