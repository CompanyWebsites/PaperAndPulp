import Link from "next/link";
import SpecTable from "@/components/SpecTable";

export default function Products() {
  return (
    <div>
      <section className="border-b border-[#CBC1AE] bg-[#F1EAD9] px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <p className="font-mono text-[11px] tracking-[0.14em] text-[#8A5A2E]">PRODUCT PORTFOLIO · ALL PLANNED CAPACITIES</p>
          <h1 className="mt-3 font-display text-[40px] font-medium leading-none text-[#241F1A]">Product Portfolio</h1>
          <p className="mt-3 max-w-[640px] font-body text-sm leading-relaxed text-[#241F1A]/60">Our planned paper, board, pulp and corrugated portfolio — one integrated chain from fiber to finished packaging at Budhni.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href="#paper-board" className="rounded-[4px] border border-[#8A5A2E] px-4 py-2 font-body text-xs font-medium text-[#8A5A2E] hover:bg-[#8A5A2E] hover:text-white transition-colors">Paper & Board</a>
            <a href="#corrugated" className="rounded-[4px] border border-[#8A5A2E] px-4 py-2 font-body text-xs font-medium text-[#8A5A2E] hover:bg-[#8A5A2E] hover:text-white transition-colors">Corrugated Packaging</a>
            <a href="#pulp" className="rounded-[4px] border border-[#8A5A2E] px-4 py-2 font-body text-xs font-medium text-[#8A5A2E] hover:bg-[#8A5A2E] hover:text-white transition-colors">High Rag Cotton Pulp</a>
          </div>
        </div>
      </section>

      <section id="paper-board" className="mx-auto max-w-[1240px] scroll-mt-20 px-6 py-12 lg:px-8">
        <p className="font-mono text-[11px] tracking-[0.14em] text-[#8A5A2E]">500 TPD PAPER MANUFACTURING PLANT</p>
        <h2 className="mt-2 font-display text-[28px] font-medium">Paper & Board</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { n: "High Burst Factor Kraft Paper", d: "High-strength kraft for corrugated and packaging converters.", c: "200 TPD" },
            { n: "Duplex Board", d: "Coated board for cartons and folding-box applications.", c: "100 TPD" },
            { n: "Writing & Printing Paper", d: "Uncoated grades for printing, publishing and office use.", c: "100 TPD" },
            { n: "Insulating Board", d: "Specialty board for electrical and industrial applications.", c: "50 TPD" },
            { n: "High Rag Cotton Pulp", d: "Heritage fiber product — also feeds specialty paper.", c: "50 TPD" },
          ].map((p) => (
            <div key={p.n} className="border border-[#CBC1AE] bg-[#FBF8F2] p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-body text-sm font-semibold leading-tight">{p.n}</h3>
                <span className="shrink-0 rounded bg-[#F1EAD9] border border-[#CBC1AE] px-2 py-1 font-mono text-xs font-medium text-[#8A5A2E]">{p.c}</span>
              </div>
              <p className="mt-2 font-body text-xs leading-relaxed text-[#241F1A]/60">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-[560px]">
          <SpecTable
            rows={[
              { product: "High Burst Factor Kraft Paper", capacity: "200 TPD" },
              { product: "Duplex Board", capacity: "100 TPD" },
              { product: "Writing & Printing Paper", capacity: "100 TPD" },
              { product: "Insulating Board", capacity: "50 TPD" },
              { product: "High Rag Cotton Pulp", capacity: "50 TPD" },
            ]}
            totalLabel="Total Paper Manufacturing Capacity"
            totalValue="500 TPD"
          />
        </div>
      </section>

      <section id="corrugated" className="scroll-mt-20 bg-[#FBF8F2] border-y border-[#CBC1AE]">
        <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
          <p className="font-mono text-[11px] tracking-[0.14em] text-[#8A5A2E]">150 TPD CORRUGATED BOX PLANT · FROM PAPER TO FINISHED PACKAGING</p>
          <h2 className="mt-2 font-display text-[28px] font-medium">Corrugated Packaging</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { n: "Kraft Corrugated Boxes", d: "Brown kraft corrugated shippers and transit packaging.", c: "125 TPD" },
              { n: "Duplex Corrugated Boxes", d: "Printed duplex corrugated for retail and shelf-ready packaging.", c: "25 TPD" },
            ].map((p) => (
              <div key={p.n} className="border border-[#CBC1AE] bg-[#F1EAD9] p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-body text-sm font-semibold">{p.n}</h3>
                  <span className="shrink-0 rounded bg-white border border-[#CBC1AE] px-2 py-1 font-mono text-xs font-medium text-[#8A5A2E]">{p.c}</span>
                </div>
                <p className="mt-2 font-body text-xs leading-relaxed text-[#241F1A]/60">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-[560px]">
            <SpecTable
              rows={[
                { product: "Kraft Corrugated Boxes", capacity: "125 TPD" },
                { product: "Duplex Corrugated Boxes", capacity: "25 TPD" },
              ]}
              totalLabel="Total Corrugated Plant Capacity"
              totalValue="150 TPD"
            />
          </div>
        </div>
      </section>

      <section id="pulp" className="scroll-mt-20 bg-[#8A5A2E] px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-[1240px] grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#F1EAD9]/60">HERITAGE PRODUCT · SINCE 1980</p>
            <h2 className="mt-3 font-display text-[30px] font-medium leading-tight text-[#F1EAD9]">High Rag Cotton Pulp</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#F1EAD9]/75">
              The product that started it all. Forty-five years of trading, grading and manufacturing cotton pulp — decades before Thapak Paper & Pulp Pvt. Ltd. was incorporated. Today it anchors the integrated chain as both a standalone product and a specialty fiber feeding our paper platform.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-[#F1EAD9]/60">50 TPD planned capacity at Budhni.</p>
            <Link href="/journey" className="mt-6 inline-block rounded-[4px] border border-[#F1EAD9]/30 px-5 py-2.5 font-body text-sm text-[#F1EAD9] hover:bg-[#F1EAD9]/10">Our story since 1980 →</Link>
          </div>
          <div className="border border-[#F1EAD9]/20 bg-[#241F1A]/20 p-6">
            <p className="font-mono text-xs tracking-wide text-[#F1EAD9]/60">FIBER NOTE</p>
            <p className="mt-3 font-body text-sm leading-relaxed text-[#F1EAD9]/80">High rag content = long, strong fibers. Preferred for durable papers, specialty grades and pulp trading.</p>
            <div className="mt-6 h-28 border border-dashed border-[#F1EAD9]/20 flex items-center justify-center font-mono text-xs text-[#F1EAD9]/30">[ cotton pulp macro ]</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-10 lg:px-8">
        <Link href="/contact" className="inline-flex rounded-[4px] bg-[#A64A23] px-6 py-3 font-body text-sm font-medium text-white hover:bg-[#8f3f1e]">Enquire about products →</Link>
      </section>
    </div>
  );
}
