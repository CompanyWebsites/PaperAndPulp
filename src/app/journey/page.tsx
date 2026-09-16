import Timeline from "@/components/Timeline";

export default function Journey() {
  return (
    <div>
      <section className="border-b border-[#CBC1AE] bg-[#F1EAD9] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-[11px] tracking-[0.16em] text-[#8A5A2E]">OUR JOURNEY</p>
          <h1 className="mt-4 font-display text-[40px] font-medium leading-none text-[#8A5A2E] md:text-[48px]">A Legacy That<br />Began in 1980.</h1>
          <p className="mt-6 font-body text-[16px] leading-relaxed text-[#241F1A]/70">
            More than four decades of business heritage. From trading High Rag Cotton Pulp in 1980 to building Thapak Paper & Pulp Pvt. Ltd. as a modern, integrated manufacturing enterprise — our story is one of craft, continuity, and scale.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
        <h2 className="font-display text-2xl font-medium">Timeline</h2>
        <div className="mt-8"><Timeline /></div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            { y: "1980", d: "Business journey begins: trading and manufacturing of High Rag Cotton Pulp." },
            { y: "2018", d: "Thapak Paper & Pulp Pvt. Ltd. established — modern corporate and manufacturing platform begins." },
            { y: "Present", d: "Integrated manufacturing development at Budhni, Madhya Pradesh." },
            { y: "Future", d: "Diversified Paper & Pulp Manufacturing across grades, boards, pulp and packaging." },
          ].map((n) => (
            <div key={n.y} className="border border-[#CBC1AE] bg-[#FBF8F2] p-5">
              <p className="font-mono text-xs tracking-wide text-[#8A5A2E]">{n.y}</p>
              <p className="mt-1 font-body text-sm leading-relaxed text-[#241F1A]/70">{n.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#CBC1AE] bg-[#FBF8F2]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-14 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#8A5A2E]">OUR EXPERIENCE</p>
            <h2 className="mt-3 font-display text-[28px] font-medium leading-tight">More Than Four Decades<br />of Business Heritage</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#241F1A]/70">
              Our roots in High Rag Cotton Pulp gave us an uncommon starting point: a deep understanding of fiber itself before we ever made paper. That heritage — 45 years of buying, grading, pulping and trading cotton fiber — shapes how we approach every grade we plan to make.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-[#241F1A]/70">
              Formalized as Thapak Paper & Pulp Pvt. Ltd. in 2018, the company now channels that heritage into a single integrated campus at Budhni.
            </p>
          </div>
          <div className="border border-[#CBC1AE] bg-[#F1EAD9] p-8 flex flex-col justify-center">
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#8A5A2E]">MATERIAL</p>
            <p className="mt-3 font-display text-xl">Raw cotton pulp fiber</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-[#241F1A]/60">Macro fiber texture — the literal material of our heritage product. Photography of raw cotton pulp, kraft rolls, and corrugated flute cross-sections replaces stock factory imagery while the plant is in build.</p>
            <div className="mt-6 h-32 border border-dashed border-[#8A5A2E]/30 bg-[#CBC1AE]/30 flex items-center justify-center font-mono text-xs text-[#8A5A2E]/50">[ material macro placeholder ]</div>
          </div>
        </div>
      </section>

      <section id="vision" className="bg-[#241F1A] px-6 py-16 text-center lg:px-8">
        <p className="font-mono text-[11px] tracking-[0.16em] text-[#CBC1AE]">VISION</p>
        <blockquote className="mx-auto mt-4 max-w-[720px] font-display text-[26px] font-medium leading-tight text-[#F1EAD9] md:text-[32px]">
          “To build a modern, integrated and technology-driven paper, pulp and packaging manufacturing enterprise.”
        </blockquote>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-14 lg:px-8">
        <h2 className="font-display text-2xl font-medium">Mission</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            "Manufacture consistent, high-quality paper, board, pulp and corrugated packaging at industrial scale",
            "Integrate pulp, paper & board and packaging on a single platform for efficiency and quality control",
            "Adopt modern engineering and process technology across all plants",
            "Manage raw materials and processes with discipline and traceability",
            "Meet customer-specific specifications reliably",
            "Invest in testing, quality assurance and continuous improvement",
            "Operate with responsibility toward people and environment",
            "Build long-term partnerships with customers, suppliers and communities",
          ].map((m) => (
            <li key={m} className="flex gap-3 border border-[#CBC1AE] bg-[#FBF8F2] px-4 py-3 font-body text-sm leading-relaxed text-[#241F1A]/80">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A64A23]" />{m}
            </li>
          ))}
        </ul>
      </section>

      <section id="values" className="bg-[#41533F] px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <p className="font-mono text-[11px] tracking-[0.14em] text-[#F1EAD9]/60">VALUES</p>
          <h2 className="mt-2 font-display text-[28px] font-medium text-[#F1EAD9]">What we stand on</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "Quality", d: "Consistent product, spec after spec." },
              { t: "Manufacturing Excellence", d: "Process control as a daily discipline." },
              { t: "Innovation", d: "Modern engineering married to decades of fiber knowledge." },
              { t: "Reliability", d: "On-spec, on-time — the only promise that matters to a buyer." },
              { t: "Customer Focus", d: "Built around customer-specific requirements." },
              { t: "Sustainability", d: "Responsible use of fiber, water and energy at scale." },
              { t: "Long-Term Growth", d: "A platform designed to compound — not a single-product bet." },
            ].map((v) => (
              <div key={v.t} className="bg-[#F1EAD9] p-6">
                <h3 className="font-body text-sm font-semibold text-[#241F1A]">{v.t}</h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-[#241F1A]/60">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
