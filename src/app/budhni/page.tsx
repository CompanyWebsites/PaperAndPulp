import Link from "next/link";
import IntegratedDiagram from "@/components/IntegratedDiagram";
import SpecTable from "@/components/SpecTable";

export default function Budhni() {
  return (
    <div>
      <section className="bg-[#241F1A] px-6 py-14 text-[#F1EAD9] lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <p className="font-mono text-[11px] tracking-[0.16em] text-[#CBC1AE]">BUDHNI, MADHYA PRADESH</p>
          <h1 className="mt-3 font-display text-[40px] font-medium leading-none md:text-[52px]">Our Budhni<br />Manufacturing Project</h1>
          <p className="mt-4 max-w-[560px] font-body text-sm leading-relaxed text-[#F1EAD9]/70">
            A large-scale integrated facility bringing together paper, pulp, board and corrugated manufacturing — planned as one campus, one chain, from fiber to finished box.
          </p>
          <p className="mt-4 inline-block rounded bg-[#A64A23] px-3 py-1 font-mono text-xs text-white">PLANNED FACILITY · BUILD IN PROGRESS</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="-mt-6 grid grid-cols-2 gap-0 border border-[#CBC1AE] md:grid-cols-4">
          {[
            { v: "500", u: "TPD", l: "Paper Manufacturing" },
            { v: "50", u: "TPD", l: "Insulating Board" },
            { v: "50", u: "TPD", l: "High Rag Cotton Pulp" },
            { v: "150", u: "TPD", l: "Corrugated Packaging" },
          ].map((s) => (
            <div key={s.l} className="bg-[#FBF8F2] p-6 text-center border-r border-[#CBC1AE] last:border-r-0">
              <p className="font-mono text-[28px] font-medium leading-none text-[#A64A23]">{s.v} <span className="text-xs tracking-wide text-[#8A5A2E]">{s.u}</span></p>
              <p className="mt-2 font-body text-xs text-[#241F1A]/60">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
        <h2 className="font-display text-2xl font-medium">Planned Manufacturing Capacity</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { t: "500 TPD Paper Manufacturing Plant", d: "Kraft paper, duplex board, writing & printing paper and insulating board. Links to Paper & Board portfolio.", href: "/products#paper-board" },
            { t: "50 TPD Insulating Board", d: "Specialty board for electrical and industrial applications.", href: "/products#paper-board" },
            { t: "50 TPD High Rag Cotton Pulp", d: "Heritage product — 45 years of fiber expertise, now integrated on campus.", href: "/products#pulp" },
            { t: "150 TPD Corrugated Box Plant", d: "From paper to finished packaging — kraft and duplex corrugated boxes.", href: "/products#corrugated" },
          ].map((c) => (
            <div key={c.t} className="border border-[#CBC1AE] bg-[#FBF8F2] p-6">
              <h3 className="font-body text-sm font-semibold">{c.t}</h3>
              <p className="mt-1 font-body text-sm leading-relaxed text-[#241F1A]/60">{c.d}</p>
              <Link href={c.href} className="mt-3 inline-block font-body text-xs font-medium text-[#A64A23] hover:underline">View products →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FBF8F2] border-y border-[#CBC1AE]">
        <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
          <p className="font-mono text-[11px] tracking-[0.14em] text-[#8A5A2E]">INTEGRATED MANUFACTURING APPROACH</p>
          <h2 className="mt-2 font-display text-2xl font-medium">One campus, one chain</h2>
          <p className="mt-2 font-body text-sm text-[#241F1A]/60">Pulp → Paper & Board → Corrugated Packaging. Fiber in, finished box out.</p>
          <div className="mt-8"><IntegratedDiagram /></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
        <h2 className="font-display text-2xl font-medium">Total Planned Manufacturing Platform</h2>
        <div className="mt-6 max-w-[560px]">
          <SpecTable
            rows={[
              { product: "Paper Manufacturing", capacity: "500 TPD" },
              { product: "Insulating Board", capacity: "50 TPD" },
              { product: "High Rag Cotton Pulp", capacity: "50 TPD" },
              { product: "Corrugated Packaging", capacity: "150 TPD" },
            ]}
            totalLabel="Total Planned Platform"
            totalValue="750 TPD"
          />
        </div>
        <Link href="/products" className="mt-6 inline-block rounded-[4px] bg-[#A64A23] px-6 py-3 font-body text-sm font-medium text-white hover:bg-[#8f3f1e]">View full product portfolio →</Link>
      </section>
    </div>
  );
}
