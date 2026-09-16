const stages = [
  { title: "PULP", items: ["High Rag Cotton Pulp"] },
  { title: "PAPER & BOARD", items: ["Kraft Paper", "Duplex Board", "Writing & Printing Paper", "Insulating Board"] },
  { title: "PACKAGING", items: ["Kraft Corrugated Boxes", "Duplex Corrugated Boxes"] },
];

export default function ValueChain({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div className="w-full" role="img" aria-label="Value chain: Pulp flows into Paper and Board, which flows into Packaging">
      <div className="hidden items-stretch gap-0 md:flex">
        {stages.map((s, i) => (
          <div key={s.title} className="flex flex-1 items-stretch">
            <div className={`flex flex-1 flex-col border px-5 py-6 ${isDark ? "border-[#F1EAD9]/15 bg-[#241F1A]" : "border-[#CBC1AE] bg-[#FBF8F2]"}`}>
              <p className={`font-mono text-[11px] tracking-[0.16em] ${isDark ? "text-[#CBC1AE]" : "text-[#8A5A2E]"}`}>{s.title}</p>
              <ul className="mt-3 space-y-1">
                {s.items.map((it) => (
                  <li key={it} className={`font-body text-[13px] leading-tight ${isDark ? "text-[#F1EAD9]/80" : "text-[#241F1A]/75"}`}>{it}</li>
                ))}
              </ul>
            </div>
            {i < stages.length - 1 && (
              <div className="flex w-10 items-center justify-center">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#A64A23] text-sm text-white">→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-0 md:hidden">
        {stages.map((s, i) => (
          <div key={s.title} className="flex w-full flex-col items-center">
            <div className={`w-full border px-5 py-5 ${isDark ? "border-[#F1EAD9]/15 bg-[#241F1A]" : "border-[#CBC1AE] bg-[#FBF8F2]"}`}>
              <p className={`font-mono text-[11px] tracking-[0.16em] ${isDark ? "text-[#CBC1AE]" : "text-[#8A5A2E]"}`}>{s.title}</p>
              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                {s.items.map((it) => (
                  <li key={it} className={`font-body text-xs ${isDark ? "text-[#F1EAD9]/75" : "text-[#241F1A]/70"}`}>{it}</li>
                ))}
              </ul>
            </div>
            {i < stages.length - 1 && <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#A64A23] text-xs text-white my-1">↓</span>}
          </div>
        ))}
      </div>
      <p className="sr-only">Pulp (High Rag Cotton Pulp) flows into Paper and Board (Kraft Paper, Duplex Board, Writing and Printing Paper, Insulating Board) which flows into Packaging (Kraft Corrugated Boxes, Duplex Corrugated Boxes).</p>
    </div>
  );
}
