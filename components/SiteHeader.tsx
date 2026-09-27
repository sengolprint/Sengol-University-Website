"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  ["About", "/about"],
  ["Academics", "/programs"],
  ["Admissions", "/admissions"],
  ["Campus Life", "/campus-life"],
  ["News & Events", "/news"],
  ["Contact", "/contact"],
];

const officialLogo = "/sengol-logo.png";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0d1a2f] text-white text-xs sm:text-sm">
        <div className="container-shell flex items-center justify-between gap-3 py-2.5">
          <span className="opacity-85">State Private University · Sikkim</span>
          <div className="hidden sm:flex gap-5 text-white/75">
            <a href="tel:+919205299887">+91 92052 99887</a>
            <a href="mailto:info@sengolinternationaluniversity.edu.in">info@sengolinternationaluniversity.edu.in</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-[#fffaf2]/95 backdrop-blur-xl">
        <div className="container-shell flex min-h-20 items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-16 w-[86px] shrink-0 items-center justify-center">
              <img
                src={officialLogo}
                alt="Sengol International University logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="serif text-lg font-bold leading-tight text-[#13233f] md:text-xl">Sengol International University</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[.22em] text-[#8a6b2d]">Discover · Learn · Lead</div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-5 text-[13px] font-semibold text-[#26354e]">
            {nav.map(([label, href]) => <Link key={href} href={href} className="transition hover:text-[#7a1f2d]">{label}</Link>)}
            <Link href="/admissions#apply" className="btn-maroon !min-h-10 !px-5">Apply Now</Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="xl:hidden rounded-xl border border-[#ddcfba] px-4 py-2 text-sm font-bold text-[#13233f]" aria-label="Toggle navigation">Menu</button>
        </div>

        {open && (
          <div className="container-shell pb-4 xl:hidden">
            <nav className="grid gap-1 rounded-2xl border border-[#eadfce] bg-white p-3 shadow-lg">
              {nav.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="rounded-xl px-4 py-3 font-semibold text-[#26354e] hover:bg-[#fff6e8]">{label}</Link>)}
              <Link onClick={() => setOpen(false)} href="/admissions#apply" className="mt-1 rounded-xl bg-[#7a1f2d] px-4 py-3 text-center font-bold text-white">Apply Now</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
