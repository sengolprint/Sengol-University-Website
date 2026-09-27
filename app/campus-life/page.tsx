import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const cards=[
  ["Learning Spaces","Smart classrooms, laboratories and academic spaces designed to support practical and collaborative learning.","https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80"],
  ["Student Community","A vibrant student environment that encourages clubs, peer learning, confidence and belonging.","https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"],
  ["Events & Culture","Academic activities, celebrations and campus events that enrich the university experience.","https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80"],
];

export default function CampusLifePage(){return <main><SiteHeader/>
<section className="page-hero py-24 text-white"><div className="container-shell"><div className="eyebrow !text-[#e5c47d]">Campus Life</div><h1 className="serif mt-4 text-5xl font-bold md:text-6xl">Learn, connect and grow in Sikkim.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">A serene Himalayan setting combined with an active, student-focused learning environment.</p></div></section>
<section className="section-pad"><div className="container-shell grid gap-6 lg:grid-cols-3">{cards.map(([t,d,img])=><article key={t} className="overflow-hidden rounded-3xl bg-white soft-shadow"><img src={img} alt={t} className="h-64 w-full object-cover"/><div className="p-7"><h2 className="serif text-2xl font-bold text-[#13233f]">{t}</h2><p className="mt-3 leading-7 text-[#687080]">{d}</p></div></article>)}</div></section>
<section className="section-pad bg-[#13233f] text-white"><div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center"><div><div className="eyebrow !text-[#e5c47d]">Location</div><h2 className="serif mt-3 text-4xl font-bold md:text-5xl">A peaceful environment for learning.</h2><p className="mt-5 text-lg leading-8 text-white/70">The main campus is located at Lower Pepthang, PO - Lingmoo, District - Namchi, Sikkim - 737134, surrounded by the natural beauty of the Himalayan region.</p></div><div className="rounded-3xl border border-white/10 bg-white/5 p-8"><div className="serif text-2xl font-bold text-[#e5c47d]">Main Campus</div><p className="mt-4 leading-8 text-white/70">Lower Pepthang<br/>PO - Lingmoo<br/>District - Namchi<br/>Sikkim - 737134</p></div></div></section>
<SiteFooter/></main>}
