import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#241F1A] text-[#F1EAD9]">
      <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#CBC1AE]">COMPANY</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-[#F1EAD9]/80">
              <li><Link href="/journey" className="hover:text-white">Our Journey</Link></li>
              <li><Link href="/budhni" className="hover:text-white">Budhni Project</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#CBC1AE]">PRODUCTS</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-[#F1EAD9]/80">
              <li><Link href="/products#paper-board" className="hover:text-white">Paper & Board</Link></li>
              <li><Link href="/products#corrugated" className="hover:text-white">Corrugated Packaging</Link></li>
              <li><Link href="/products#pulp" className="hover:text-white">High Rag Cotton Pulp</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#CBC1AE]">ABOUT</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-[#F1EAD9]/80">
              <li><Link href="/journey#vision" className="hover:text-white">Vision & Mission</Link></li>
              <li><Link href="/journey#values" className="hover:text-white">Values</Link></li>
              <li><Link href="/#why" className="hover:text-white">Why Thapak</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#CBC1AE]">THAPAK PAPER & PULP PVT. LTD.</p>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#F1EAD9]/70">
              Established 2018<br />Business journey since 1980<br />Budhni, Madhya Pradesh<br />
              <span className="mt-3 inline-block rounded bg-[#A64A23] px-2 py-0.5 font-mono text-[11px] text-white">PLANNED FACILITY · BUILD IN PROGRESS</span>
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[#F1EAD9]/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-sm italic text-[#CBC1AE]">Building Paper. Building Packaging. Building the Future.</p>
          <p className="font-mono text-[11px] tracking-wide text-[#CBC1AE]/70">© {new Date().getFullYear()} Thapak Paper & Pulp Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
