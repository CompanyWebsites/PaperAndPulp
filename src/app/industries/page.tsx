const industries = [
  { title: "Packaging Industry", products: "Kraft Paper, Duplex Board, Corrugated Boxes", desc: "Transit shippers, folding cartons and shelf-ready packaging for FMCG, e-commerce and industrial distribution." },
  { title: "Printing & Publishing", products: "Writing & Printing Paper, suitable paperboard", desc: "Books, notebooks, commercial print and publishing grades where brightness and runnability matter." },
  { title: "Industrial Applications", products: "Kraft Paper, Boards, specialty paper", desc: "Wrapping, interleaving and industrial converting where strength and consistency are critical." },
  { title: "Electrical & Specialty", products: "Insulating Board and related specialty products", desc: "Electrical insulation and specialty board applications requiring precise density and dielectric properties." },
  { title: "Paper Converting", products: "Corrugated packaging, converted paper products", desc: "Converters buying reel stock to slit, sheet, corrugate and convert into finished packaging." },
  { title: "Pulp & Paper Industry", products: "High Rag Cotton Pulp and related applications", desc: "Mills and traders sourcing high-rag cotton pulp for specialty grades and pulp blending." },
];

export default function Industries() {
  return (
    <div>
      <section className="border-b border-[#CBC1AE] bg-[#F1EAD9] px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <p className="font-mono text-[11px] tracking-[0.14em] text-[#8A5A2E]">INDUSTRIES & APPLICATIONS</p>
          <h1 className="mt-3 font-display text-[40px] font-medium leading-none">Industries &<br />Applications</h1>
          <p className="mt-3 max-w-[600px] font-body text-sm leading-relaxed text-[#241F1A]/60">Our planned product portfolio is designed to serve multiple sectors — from transit packaging to publishing, electrical insulation to pulp trading.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((it) => (
            <div key={it.title} className="flex flex-col border border-[#CBC1AE] bg-[#FBF8F2] p-6">
              <h3 className="font-display text-[17px] font-medium leading-tight text-[#241F1A]">{it.title}</h3>
              <p className="mt-2 font-mono text-[11px] leading-tight tracking-wide text-[#8A5A2E]">{it.products}</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-[#241F1A]/60">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
