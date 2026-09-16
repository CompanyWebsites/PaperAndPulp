export default function Quality() {
  return (
    <div>
      <section className="bg-[#41533F] px-6 py-14 text-[#F1EAD9] lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <p className="font-mono text-[11px] tracking-[0.16em] text-[#F1EAD9]/60">PROCESS · DISCIPLINE · IMPROVEMENT</p>
          <h1 className="mt-3 font-display text-[40px] font-medium leading-none">Quality &<br />Manufacturing</h1>
          <p className="mt-4 max-w-[600px] font-body text-sm leading-relaxed text-[#F1EAD9]/70">Technology & Process Development — building consistent paper, pulp, board and packaging products at industrial scale.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
        <h2 className="font-display text-2xl font-medium">Quality & Manufacturing Focus</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {[
            "Consistent product quality",
            "Product specifications",
            "Process control",
            "Raw-material management",
            "Manufacturing efficiency",
            "Testing and quality assurance",
            "Customer-specific requirements",
            "Continuous process improvement",
          ].map((it) => (
            <div key={it} className="flex items-center gap-3 border border-[#CBC1AE] bg-[#FBF8F2] px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#41533F] text-[11px] text-white">✓</span>
              <span className="font-body text-sm text-[#241F1A]">{it}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[640px] border-l-2 border-[#41533F] pl-4 font-body text-sm italic leading-relaxed text-[#241F1A]/60">
          Our objective: consistent paper, pulp, board and packaging products at industrial scale — spec after spec, reel after reel.
        </p>
      </section>

      <section className="bg-[#FBF8F2] border-y border-[#CBC1AE]">
        <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
          <h2 className="font-display text-2xl font-medium">Technology & Process Development</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Process engineering and optimization",
              "Raw-material evaluation and sourcing",
              "Pulp processing technology",
              "Paper machine technology and controls",
              "Board manufacturing processes",
              "Corrugated conversion technology",
              "Quality testing and lab capability",
              "Energy and resource efficiency",
              "Environmental and compliance systems",
              "Continuous improvement and R&D",
            ].map((it) => (
              <div key={it} className="flex items-center gap-3 border border-[#CBC1AE] bg-white px-5 py-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-[#41533F] text-[10px] text-[#41533F]">›</span>
                <span className="font-body text-sm text-[#241F1A]">{it}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-[640px] border-l-2 border-[#8A5A2E] pl-4 font-body text-sm italic leading-relaxed text-[#241F1A]/60">
            Combining manufacturing experience with modern engineering and process technology — the heritage of fiber knowledge, the precision of contemporary plant design.
          </p>
        </div>
      </section>
    </div>
  );
}
