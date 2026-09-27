import Link from "next/link";

const modules=[
  ["Programs","Create and manage schools, courses, eligibility and durations."],
  ["Admissions","Review submitted applications and applicant status."],
  ["News & Notices","Publish announcements, notices, events and deadlines."],
  ["Faculty","Maintain faculty profiles, departments and designations."],
  ["Pages","Manage editable website content and institutional information."],
  ["Media","Organize images, documents, brochures and downloadable files."],
];

export default function AdminPage(){return <main className="min-h-screen bg-[#f3eee5] p-5 md:p-8">
<div className="mx-auto max-w-7xl">
  <div className="flex flex-col gap-4 rounded-[28px] bg-[#13233f] p-7 text-white md:flex-row md:items-center md:justify-between"><div><div className="text-xs font-bold uppercase tracking-[.2em] text-[#e5c47d]">SIU CMS</div><h1 className="serif mt-2 text-3xl font-bold">University Administration</h1><p className="mt-2 text-sm text-white/60">Dashboard scaffold for the future authenticated CMS.</p></div><Link href="/" className="btn-primary">View Website</Link></div>
  <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{modules.map(([t,d])=><section key={t} className="rounded-3xl border border-[#e4d9c8] bg-white p-7"><div className="serif text-2xl font-bold text-[#13233f]">{t}</div><p className="mt-3 leading-7 text-[#687080]">{d}</p><button className="mt-6 rounded-full bg-[#7a1f2d] px-5 py-2.5 text-sm font-bold text-white">Open Module</button></section>)}</div>
  <div className="mt-6 rounded-3xl border border-[#e4d9c8] bg-white p-7"><h2 className="serif text-2xl font-bold text-[#13233f]">Backend status</h2><p className="mt-3 leading-7 text-[#687080]">Prisma/PostgreSQL schema and connection helper are included in the repository. Authentication, CRUD APIs/server actions and file storage are the next implementation layer before this dashboard is used in production.</p></div>
</div></main>}
