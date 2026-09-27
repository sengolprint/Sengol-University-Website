"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Academics", "/programs"],
  ["Admissions", "/admissions"],
  ["Research", "/news"],
  ["Campus Life", "/campus-life"],
  ["News & Events", "/news"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#08192f] text-white text-[11px] sm:text-xs">
        <div className="container-shell flex min-h-8 items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-white/85">
            <span>📍 Sikkim, India</span>
            <a className="hidden md:inline" href="tel:+919205299887">☎ +91 92052 99887</a>
            <a className="hidden lg:inline" href="mailto:info@sengolinternationaluniversity.edu.in">✉ info@sengolinternationaluniversity.edu.in</a>
          </div>
          <div className="hidden md:flex items-center gap-3 text-white/70">
            <span>Student Portal</span><span>|</span><span>Faculty Portal</span><span>|</span><Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-white/95 backdrop-blur-xl">
        <div className="container-shell flex min-h-[76px] items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3 py-2">
            <img src="/sengol-logo.png" alt="Sengol International University" className="h-[64px] w-[82px] object-contain" />
            <div className="hidden sm:block max-w-[220px]">
              <div className="serif text-[18px] font-bold uppercase leading-[1.02] text-[#17243a]">Sengol International University</div>
              <div className="mt-1 text-[8px] font-bold uppercase tracking-[.19em] text-[#9a7028]">Knowledge · Innovation · Global Impact</div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-5 text-[12px] font-bold uppercase tracking-[.02em] text-[#17243a]">
            {nav.map(([label, href], i) => (
              <Link key={`${label}-${i}`} href={href} className={`border-b-2 py-7 transition ${i === 0 ? "border-[#c98b19] text-[#b36c00]" : "border-transparent hover:border-[#c98b19] hover:text-[#b36c00]"}`}>{label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/admissions#apply" className="hidden sm:inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-[#dca21f] to-[#b97708] px-6 text-sm font-extrabold text-white shadow-lg shadow-[#c98b19]/20">Apply Now →</Link>
            <button onClick={() => setOpen(!open)} className="xl:hidden rounded-xl border border-[#ddcfba] px-4 py-2 text-sm font-bold text-[#13233f]" aria-label="Toggle navigation">Menu</button>
          </div>
        </div>

        {open && (
          <div className="container-shell pb-4 xl:hidden">
            <nav className="grid gap-1 rounded-2xl border border-[#eadfce] bg-white p-3 shadow-xl">
              {nav.map(([label, href], i) => <Link onClick={() => setOpen(false)} key={`${href}-${i}`} href={href} className="rounded-xl px-4 py-3 font-semibold text-[#26354e] hover:bg-[#fff6e8]">{label}</Link>)}
              <Link onClick={() => setOpen(false)} href="/admissions#apply" className="mt-1 rounded-xl bg-[#7a1f2d] px-4 py-3 text-center font-bold text-white">Apply Now</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
