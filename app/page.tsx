import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const programs = [
  ["Engineering & Technology", "⚙", "Innovate. Build. Transform.", "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=82"],
  ["Medical & Health Sciences", "✚", "Care. Research. Heal.", "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=82"],
  ["Management & Business", "▥", "Lead with Vision.", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=82"],
  ["Law & Legal Studies", "⚖", "Justice. Ethics. Leadership.", "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=82"],
  ["Computer Science & AI", "⌘", "Build the Digital Future.", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82"],
  ["Arts, Humanities & Social Sciences", "◫", "Ideas that Shape Society.", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=82"],
];

const news = [
  ["15", "Mar", "New Research Centre Inaugurated at SIU", "A major step towards advancing innovation and global collaboration.", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=82"],
  ["10", "Mar", "International Conference on Innovation", "Bringing global thought leaders together for a sustainable future.", "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=700&q=82"],
  ["01", "Mar", "Convocation Celebrating Future Leaders", "Honouring the achievements of our graduating community.", "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=700&q=82"],
];

export default function Home() {
  return (
    <main className="bg-[#f8f3ea]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-white">
        <div className="relative min-h-[505px] xl:min-h-[535px]">
          <img
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2000&q=90"
            alt="University campus"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.95)_27%,rgba(255,255,255,.58)_48%,rgba(255,255,255,.08)_74%)]" />
          <div className="absolute inset-y-0 right-0 hidden w-[13.5%] bg-[linear-gradient(160deg,#8a1326_0%,#510b18_56%,#2e0710_100%)] lg:block" />
          <div className="absolute right-[2.2%] top-1/2 z-20 hidden -translate-y-1/2 text-center text-white lg:block">
            <div className="mx-auto mb-4 h-44 w-12 rounded-full bg-[linear-gradient(#f6d170,#b27008)] shadow-[0_0_28px_rgba(255,203,82,.45)]" />
            <div className="serif text-xl leading-7">Rooted<br/>in Values</div>
            <div className="mx-auto my-3 h-px w-8 bg-[#efc95e]" />
            <div className="text-sm leading-6 text-white/85">Driven by<br/>Global Vision</div>
          </div>

          <div className="container-shell relative z-10 flex min-h-[505px] items-center py-10 xl:min-h-[535px]">
            <div className="max-w-[590px] xl:max-w-[650px]">
              <p className="serif text-[24px] italic leading-none text-[#26354e] xl:text-[30px]">Shaping Global Leaders for a</p>
              <h1 className="serif mt-2 text-[58px] font-black uppercase leading-[.86] tracking-[-.045em] text-[#142039] sm:text-[70px] xl:text-[88px]">
                Brighter <span className="block text-[#9b6513]">Tomorrow</span>
              </h1>
              <p className="mt-4 max-w-[560px] text-[15px] leading-6 text-[#354052] xl:text-[17px] xl:leading-7">
                At Sengol International University, we blend academic excellence, innovation and global exposure to empower future-ready leaders.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/programs" className="inline-flex h-11 items-center rounded-full bg-[linear-gradient(90deg,#efbe46,#d58f12)] px-7 text-[12px] font-extrabold uppercase text-[#172238] shadow-sm xl:h-12 xl:text-[13px]">Explore Programs →</Link>
                <Link href="/admissions" className="inline-flex h-11 items-center rounded-full border border-[#b98a44] bg-white/90 px-7 text-[12px] font-extrabold uppercase text-[#172238] xl:h-12 xl:text-[13px]">Admission 2026 →</Link>
              </div>

              <div className="mt-6 grid max-w-[650px] grid-cols-2 gap-y-3 text-[11px] font-semibold text-[#26354e] sm:grid-cols-4 xl:text-[12px]">
                {[["🎓","UGC Recognized University"],["🌐","Global Exposure & Collaborations"],["💡","Industry-Oriented Programs"],["👥","Holistic Student Development"]].map(([icon,label],i)=><div key={label} className={`flex items-center gap-2 px-2 ${i<3?"sm:border-r sm:border-[#d7c6aa]":""}`}><span className="text-2xl xl:text-3xl">{icon}</span><span className="leading-4">{label}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-1 border-y border-[#d7aa4d] bg-[#fffaf2] shadow-[0_8px_24px_rgba(79,48,12,.08)]">
        <div className="container-shell grid lg:grid-cols-[1fr_1fr_1fr_1fr_1.2fr]">
          {[["50+","Academic Programs","📖"],["10,000+","Students Worldwide","👥"],["25+","Global Collaborations","🌐"],["100%","Placement Support","🏅"]].map(([a,b,icon],i)=><div key={b} className={`flex min-h-[82px] items-center gap-4 px-5 py-4 ${i<3?"lg:border-r lg:border-[#dfc797]":""}`}><span className="text-4xl text-[#bd7d10]">{icon}</span><div><div className="serif text-[27px] font-bold leading-none text-[#17243a]">{a}</div><div className="mt-1 text-[12px] text-[#4f5866]">{b}</div></div></div>)}
          <div className="flex min-h-[82px] items-center gap-4 bg-[linear-gradient(90deg,#8f1529,#5a0d19)] px-6 py-4 text-white"><span className="text-4xl">🎓</span><div><div className="serif text-[22px] font-bold">Admissions Open</div><div className="mt-1 text-[12px] leading-5 text-white/80">Apply for Undergraduate, Postgraduate & Research Programs.</div></div></div>
        </div>
      </section>

      <section className="bg-white py-5 xl:py-6">
        <div className="container-shell grid gap-4 xl:grid-cols-[190px_1fr]">
          <div className="pr-3">
            <h2 className="serif text-[33px] font-black uppercase leading-[.88] text-[#17243a]">Our<br/>Programs</h2>
            <div className="mt-3 h-[3px] w-9 bg-[#c98712]" />
            <p className="mt-3 text-[12px] leading-5 text-[#596273]">Discover diverse programs designed to build your future with industry-relevant curriculum and global exposure.</p>
            <Link href="/programs" className="mt-4 inline-flex h-10 items-center rounded-full bg-[#e8ad2d] px-5 text-[11px] font-black uppercase text-[#17243a]">View All Programs →</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {programs.map(([title,icon,copy,img])=><article key={title} className="overflow-hidden rounded-lg border border-[#ece2d4] bg-white shadow-[0_3px_14px_rgba(27,36,48,.08)] transition hover:-translate-y-1 hover:shadow-lg"><img src={img} alt={title} className="h-[94px] w-full object-cover xl:h-[104px]"/><div className="px-3 pb-3 text-center"><div className="mx-auto -mt-5 grid h-10 w-10 place-items-center rounded-full border-[3px] border-white bg-[#fffaf2] text-base text-[#b87308] shadow">{icon}</div><h3 className="serif mt-1.5 min-h-[42px] text-[15px] font-bold leading-[17px] text-[#17243a]">{title}</h3><p className="mt-1 text-[10px] leading-4 text-[#687080]">{copy}</p><Link href="/programs" className="mt-2 inline-grid h-7 w-7 place-items-center rounded-full border border-[#dca21f] text-xs text-[#b87308]">→</Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e7] py-0">
        <div className="container-shell grid gap-4 lg:grid-cols-[1fr_1.17fr]">
          <div className="relative min-h-[242px] overflow-hidden rounded-r-2xl bg-[#061b34] text-white lg:rounded-r-2xl lg:rounded-l-none">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80" alt="Global network" className="absolute inset-y-0 left-0 h-full w-[43%] object-cover opacity-75"/>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,27,52,.08),#061b34_47%)]"/>
            <div className="relative ml-auto max-w-[60%] p-7 xl:p-8">
              <div className="text-[10px] font-bold uppercase tracking-[.34em] text-white/65">Our Purpose</div>
              <h2 className="serif mt-2 text-[28px] font-bold uppercase leading-[.98] text-[#f2c65f] xl:text-[34px]">A Global University for a Brighter Tomorrow</h2>
              <p className="mt-3 text-[11px] leading-5 text-white/75 xl:text-[12px]">At Sengol International University, we are committed to excellence in education, innovation in research and holistic student development.</p>
              <Link href="/about" className="mt-4 inline-flex h-9 items-center rounded-full bg-[#e5ad32] px-5 text-[10px] font-black uppercase text-[#17243a]">Learn More →</Link>
            </div>
          </div>

          <div className="py-4 xl:py-5">
            <div className="flex items-end justify-between gap-4">
              <div><h2 className="serif text-[31px] font-black uppercase leading-none text-[#17243a]">Campus Life</h2><div className="mt-2 h-[3px] w-9 bg-[#c98712]"/><p className="mt-2 max-w-[620px] text-[11px] leading-4 text-[#596273] xl:text-[12px]">A vibrant campus with world-class infrastructure, modern learning spaces and a diverse, inclusive community.</p></div>
              <Link href="/campus-life" className="mb-1 text-[11px] font-bold text-[#a86408]">View Campus →</Link>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[["World-Class Infrastructure","https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=82"],["Modern Learning Spaces","https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=82"],["Vibrant Student Community","https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=82"]].map(([t,img])=><article key={t} className="overflow-hidden rounded-lg bg-white shadow-sm"><img src={img} alt={t} className="h-[104px] w-full object-cover xl:h-[116px]"/><div className="px-2 py-2 text-center serif text-[13px] font-bold leading-4 text-[#17243a]">{t}</div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-4 xl:py-5">
        <div className="container-shell grid gap-4 xl:grid-cols-[195px_1fr]">
          <div><h2 className="serif text-[30px] font-black uppercase leading-none text-[#17243a]">News & Events</h2><div className="mt-2 h-[3px] w-9 bg-[#c98712]"/><p className="mt-2 text-[11px] leading-4 text-[#596273]">Stay updated with the latest happenings at Sengol International University.</p><Link href="/news" className="mt-2 inline-block text-[11px] font-bold text-[#a86408]">View All News →</Link></div>
          <div className="grid gap-3 md:grid-cols-3">
            {news.map(([day,month,title,copy,img])=><article key={title} className="grid min-h-[108px] grid-cols-[54px_92px_1fr] overflow-hidden rounded-lg border border-[#eee3d3] bg-white shadow-sm"><div className="bg-[#b87308] p-2 text-center text-white"><div className="serif text-[21px] font-bold leading-none">{day}</div><div className="mt-1 text-[10px]">{month}</div></div><img src={img} alt={title} className="h-full w-full object-cover"/><div className="p-3"><h3 className="serif text-[13px] font-bold leading-4 text-[#17243a]">{title}</h3><p className="mt-1 line-clamp-2 text-[10px] leading-4 text-[#687080]">{copy}</p><Link href="/news" className="mt-1.5 inline-block text-[10px] font-bold text-[#a86408]">Read More →</Link></div></article>)}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
