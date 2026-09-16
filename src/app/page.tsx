import Link from "next/link";
import ValueChain from "@/components/ValueChain";
import { CapacityStat } from "@/components/CapacityStat";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div>
      <section className="bg-[#8A5A2E] text-[#F1EAD9]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-[#F1EAD9]/60">THAPAK PAPER & PULP PVT. LTD. · JOURNEY SINCE 1980</p>
            <h1 className="mt-4 font-display text-[44px] font-medium leading-[0.95] tracking-tight md:text-[56px]">
              From High Rag<br />Cotton Pulp to<br /><span className="text-[#F1EAD9]/70">Advanced Paper</span><br />& Packaging<br />Manufacturing
            </h1>
            <p className="mt-6 max-w-[520px] font-body text-[16px] leading-relaxed text-[#F1EAD9]/75">
              Thapak Paper & Pulp Pvt. Ltd. is a paper and pulp manufacturing company building a large-scale integrated facility at Budhni, Madhya Pradesh — bringing together paper, pulp, board and corrugated packaging under one platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/budhni" className="rounded-[4px] bg-[#A64A23] px-6 py-3 font-body text-sm font-medium text-white hover:bg-[#8f3f1e] transition-colors">Explore Budhni Project</Link>
              <Link href="/products" className="rounded-[4px] border border-[#F1EAD9]/30 px-6 py-3 font-body text-sm font-medium text-[#F1EAD9] hover:bg-[#F1EAD9]/10 transition-colors">View Products</Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 rounded bg-[#241F1A]/30 px-3 py-1.5 font-mono text-[11px] tracking-wide text-[#F1EAD9]/80">
              <span className="h-2 w-2 rounded-full bg-[#A64A23] animate-pulse" /> PLANNED FACILITY · BUILD IN PROGRESS — NOT YET OPERATIONAL
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="rounded-sm bg-[#F1EAD9] p-6">
              <p className="font-mono text-[11px] tracking-[0.14em] text-[#8A5A2E]">INTEGRATED VALUE CHAIN</p>
              <div className="mt-4"><ValueChain /></div>
              <p className="mt-4 font-body text-xs leading-relaxed text-[#241F1A]/60">Pulp → Paper & Board → Packaging. One platform, from fiber to finished box.</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] text-[#F1EAD9]/50">
              <span>500 TPD Paper</span><span>150 TPD Corrugated</span><span>Heritage since 1980</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#8A5A2E]" />
          <p className="font-mono text-[11px] tracking-[0.14em] text-[#8A5A2E]">AT A GLANCE — PLANNED CAPACITY</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <CapacityStat value="500" unit="TPD" label="Paper Manufacturing" accent />
          <CapacityStat value="50" unit="TPD" label="Insulating Board" />
          <CapacityStat value="50" unit="TPD" label="High Rag Cotton Pulp" />
          <CapacityStat value="150" unit="TPD" label="Corrugated Packaging" />
        </div>
        <p className="mt-3 font-body text-xs text-[#241F1A]/50">All figures are planned capacities for the Budhni integrated facility.</p>
      </section>

      <section className="bg-[#FBF8F2] border-y border-[#CBC1AE]">
        <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-[28px] font-medium text-[#241F1A]">Our Journey</h2>
            <Link href="/journey" className="hidden font-body text-sm font-medium text-[#A64A23] hover:underline md:block">Read our full story →</Link>
          </div>
          <div className="mt-8"><Timeline /></div>
          <Link href="/journey" className="mt-6 inline-block font-body text-sm font-medium text-[#A64A23] md:hidden">Read full story →</Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-14 lg:px-8">
        <h2 className="font-display text-[28px] font-medium text-[#241F1A]">Product Portfolio</h2>
        <p className="mt-2 font-body text-sm text-[#241F1A]/60">Four categories, one integrated platform. All capacities are planned.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Paper", desc: "Kraft, Duplex, Writing & Printing", cap: "500 TPD", href: "/products#paper-board" },
            { title: "Board", desc: "Duplex & Insulating Board", cap: "150 TPD incl.", href: "/products#paper-board" },
            { title: "Pulp", desc: "High Rag Cotton Pulp — heritage since 1980", cap: "50 TPD", href: "/products#pulp" },
            { title: "Corrugated Packaging", desc: "Kraft & Duplex Corrugated Boxes", cap: "150 TPD", href: "/products#corrugated" },
          ].map((c) => (
            <Link key={c.title} href={c.href} className="group border border-[#CBC1AE] bg-[#FBF8F2] p-6 hover:border-[#8A5A2E] transition-colors">
              <p className="font-mono text-[11px] tracking-[0.12em] text-[#8A5A2E]">{c.cap}</p>
              <h3 className="mt-2 font-display text-lg font-medium group-hover:text-[#8A5A2E]">{c.title}</h3>
              <p className="mt-1 font-body text-xs leading-relaxed text-[#241F1A]/60">{c.desc}</p>
              <span className="mt-4 inline-block font-body text-xs font-medium text-[#A64A23]">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#241F1A] text-[#F1EAD9]">
        <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-8">
          <div className="max-w-[720px]">
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#CBC1AE]">FROM PULP TO PACKAGING</p>
            <h2 className="mt-3 font-display text-[30px] font-medium leading-tight">One chain. From fiber to finished box.</h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-[#F1EAD9]/60">Kraft Paper, Duplex Board, Writing & Printing Paper and Insulating Board feed directly into Kraft and Duplex Corrugated Box production — all on the same campus.</p>
          </div>
          <div className="mt-8 rounded-sm bg-[#F1EAD9] p-6"><ValueChain /></div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-[1240px] px-6 py-14 lg:px-8">
        <h2 className="font-display text-[28px] font-medium">Why Thapak Paper & Pulp</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { t: "Heritage Since 1980", d: "45 years of craft in High Rag Cotton Pulp — trading and manufacturing long before the corporate entity." },
            { t: "Integrated Manufacturing", d: "Pulp → Paper & Board → Packaging on one campus at Budhni — controlling quality end-to-end." },
            { t: "Large-Scale Manufacturing", d: "750 TPD combined planned capacity across paper, board, pulp and corrugated." },
          ].map((c) => (
            <div key={c.t} className="border border-[#CBC1AE] bg-[#FBF8F2] p-6">
              <h3 className="font-body text-sm font-semibold text-[#241F1A]">{c.t}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[#241F1A]/60">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/journey" className="font-body text-sm font-medium text-[#A64A23] hover:underline">See all reasons →</Link>
          <span className="text-[#CBC1AE]">·</span>
          <Link href="/budhni" className="font-body text-sm font-medium text-[#8A5A2E] hover:underline">Explore the Budhni project →</Link>
        </div>
      </section>

      <section className="bg-[#241F1A] px-6 py-16 text-center lg:px-8">
        <p className="font-mono text-[11px] tracking-[0.16em] text-[#CBC1AE]">OUR VISION</p>
        <blockquote className="mx-auto mt-4 max-w-[720px] font-display text-[26px] font-medium leading-tight text-[#F1EAD9] md:text-[32px]">
          “To build a modern, integrated and technology-driven paper, pulp and packaging manufacturing enterprise.”
        </blockquote>
        <Link href="/journey#vision" className="mt-6 inline-block font-body text-sm text-[#CBC1AE] underline decoration-[#A64A23] underline-offset-4">Vision, Mission & Values</Link>
      </section>
    </div>
  );
}
