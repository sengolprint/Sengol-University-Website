import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0d1a2f] text-white">
      <div className="gold-line" />
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="serif text-2xl font-bold">Sengol International University</div>
          <p className="mt-4 max-w-xl leading-7 text-white/60">Quality education in the heart of Sikkim, focused on academic excellence, innovation, values and holistic student development.</p>
          <p className="mt-5 text-sm leading-6 text-white/60">Lower Pepthang, PO - Lingmoo, District - Namchi, Sikkim - 737134</p>
        </div>
        <div>
          <div className="font-bold text-[#e5c47d]">Quick Links</div>
          <div className="mt-4 grid gap-3 text-sm text-white/65">
            <Link href="/about">About University</Link><Link href="/programs">Programs</Link><Link href="/admissions">Admissions</Link><Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <div className="font-bold text-[#e5c47d]">Contact</div>
          <div className="mt-4 grid gap-3 text-sm text-white/65">
            <a href="tel:+919205299887">+91 92052 99887</a>
            <a href="mailto:info@sengolinternationaluniversity.edu.in">info@sengolinternationaluniversity.edu.in</a>
            <a href="mailto:admission@sengolinternationaluniversity.edu.in">admission@sengolinternationaluniversity.edu.in</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">© 2026 Sengol International University. All rights reserved.</div>
    </footer>
  );
}
