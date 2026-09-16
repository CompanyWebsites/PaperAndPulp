const nodes = [
  { year: "1980", title: "Journey Begins", desc: "Trading and manufacturing of High Rag Cotton Pulp." },
  { year: "2018", title: "Thapak Established", desc: "Thapak Paper & Pulp Pvt. Ltd. incorporated as modern corporate platform." },
  { year: "Present", title: "Budhni Development", desc: "Integrated manufacturing development at Budhni, Madhya Pradesh." },
  { year: "Future", title: "Diversified Platform", desc: "Paper, board, pulp & corrugated packaging at industrial scale." },
];

export default function Timeline() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="relative flex">
          <div className="absolute left-0 right-0 top-[18px] h-[2px] bg-[#8A5A2E]" />
          <div className="grid w-full grid-cols-4 gap-6">
            {nodes.map((n) => (
              <div key={n.year} className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#8A5A2E] bg-[#F1EAD9] font-mono text-xs font-medium text-[#8A5A2E]">{n.year === "Present" ? "●" : n.year.slice(-2)}</div>
                <p className="mt-3 font-mono text-xs tracking-[0.12em] text-[#8A5A2E]">{n.year}</p>
                <p className="font-body text-sm font-semibold text-[#241F1A]">{n.title}</p>
                <p className="mt-1 font-body text-xs leading-relaxed text-[#241F1A]/60">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative pl-8 md:hidden">
        <div className="absolute bottom-0 left-[15px] top-0 w-[2px] bg-[#8A5A2E]" />
        <div className="space-y-8">
          {nodes.map((n) => (
            <div key={n.year} className="relative">
              <div className="absolute -left-8 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#8A5A2E] bg-[#F1EAD9] font-mono text-[10px] font-medium text-[#8A5A2E]">{n.year.slice(0, 2)}</div>
              <p className="font-mono text-xs tracking-wide text-[#8A5A2E]">{n.year}</p>
              <p className="font-body text-sm font-semibold">{n.title}</p>
              <p className="font-body text-xs leading-relaxed text-[#241F1A]/60">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
