import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const items=[
  ["15 Aug 2026","Independence Day 2026 Regarding"],
  ["10 Aug 2026","Student Registration Portal Now Open"],
  ["20 Jul 2026","New Academic Calendar 2026-27 Released"],
  ["20 Jul 2026","Faculty Development Program Schedule"],
  ["10 Jul 2026","Job Required For Assistant Professor"],
  ["10 Jul 2026","Job Required For Front Desk"],
];

export default function NewsPage(){return <main><SiteHeader/>
<section className="page-hero py-24 text-white"><div className="container-shell"><div className="eyebrow !text-[#e5c47d]">Stay Updated</div><h1 className="serif mt-4 text-5xl font-bold md:text-6xl">News, notices & events</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">Official university updates for students, faculty, applicants and the wider community.</p></div></section>
<section className="section-pad"><div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map(([date,title])=><article key={title} className="rounded-3xl border border-[#eadfce] bg-white p-7 card-lift"><div className="text-xs font-bold uppercase tracking-[.16em] text-[#a8792d]">{date}</div><h2 className="serif mt-4 text-2xl font-bold text-[#13233f]">{title}</h2><p className="mt-3 text-sm leading-6 text-[#687080]">Published in the university updates section. Admin-managed publishing will be connected to the database in the next backend phase.</p></article>)}</div></section>
<SiteFooter/></main>}
