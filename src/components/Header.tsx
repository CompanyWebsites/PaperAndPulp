"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Our Journey" },
  { href: "/budhni", label: "Budhni Project" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#CBC1AE] bg-[#F1EAD9]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center bg-[#8A5A2E] font-mono text-[11px] font-medium leading-none text-[#FBF8F2]">TP</span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[15px] font-semibold tracking-tight text-[#241F1A]">Thapak Paper & Pulp</span>
            <span className="font-mono text-[10px] tracking-[0.14em] text-[#8A5A2E]">SINCE 1980 · EST. 2018</span>
          </span>
          <span className="font-display text-[15px] font-semibold sm:hidden">Thapak</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="font-body text-[13px] font-medium tracking-wide text-[#241F1A]/80 hover:text-[#8A5A2E] transition-colors">
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-2 rounded-[4px] bg-[#A64A23] px-5 py-2 font-body text-[13px] font-medium text-[#FBF8F2] transition-colors hover:bg-[#8f3f1e]">
            Enquire
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center border border-[#CBC1AE] lg:hidden"
        >
          <span className="relative block h-[1.5px] w-5 bg-[#241F1A]">
            <span className={`absolute left-0 h-[1.5px] w-5 bg-[#241F1A] transition ${open ? "top-0 rotate-45" : "-top-[6px]"}`} />
            <span className={`absolute left-0 h-[1.5px] w-5 bg-[#241F1A] transition ${open ? "top-0 -rotate-45" : "top-[6px]"}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#CBC1AE] bg-[#FBF8F2] lg:hidden">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-[#CBC1AE]/40 px-6 py-3 font-body text-sm">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
