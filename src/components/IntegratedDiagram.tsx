export default function IntegratedDiagram() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[560px] border border-[#CBC1AE] bg-[#FBF8F2] p-8" role="img" aria-label="Integrated manufacturing: Thapak branches into Paper and Pulp and Packaging">
        <div className="flex flex-col items-center">
          <div className="border-2 border-[#8A5A2E] bg-[#8A5A2E] px-6 py-3 text-center">
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#FBF8F2]">THAPAK PAPER & PULP PVT. LTD.</p>
            <p className="font-mono text-[10px] text-[#F1EAD9]/70">Integrated Manufacturing Platform</p>
          </div>

          <div className="flex w-full max-w-[560px] justify-center">
            <div className="h-6 w-[2px] bg-[#8A5A2E]" />
          </div>
          <div className="flex w-full max-w-[560px] justify-center">
            <div className="h-[2px] w-[64%] bg-[#8A5A2E]" />
          </div>
          <div className="flex w-full max-w-[560px] justify-between px-[18%]">
            <div className="h-6 w-[2px] bg-[#8A5A2E]" />
            <div className="h-6 w-[2px] bg-[#8A5A2E]" />
          </div>

          <div className="flex w-full max-w-[640px] gap-6">
            <div className="flex flex-1 flex-col items-center">
              <div className="w-full border border-[#8A5A2E] bg-[#F1EAD9] px-4 py-2 text-center">
                <p className="font-mono text-xs font-medium tracking-wide text-[#8A5A2E]">PAPER & PULP</p>
              </div>
              <div className="h-4 w-[2px] bg-[#8A5A2E]" />
              <div className="grid w-full grid-cols-2 gap-2">
                {["Kraft Paper", "Duplex Board", "Writing & Printing Paper", "Insulating Board"].map((p) => (
                  <div key={p} className="border border-[#CBC1AE] bg-white px-2 py-2 text-center font-body text-xs leading-tight text-[#241F1A]">{p}</div>
                ))}
              </div>
              <div className="mt-2 w-full border border-dashed border-[#8A5A2E]/40 bg-[#F1EAD9]/60 px-2 py-2 text-center font-body text-xs text-[#8A5A2E]">High Rag Cotton Pulp</div>
              <p className="mt-1 font-mono text-[10px] text-[#241F1A]/50">Heritage product · since 1980</p>
            </div>

            <div className="flex flex-1 flex-col items-center">
              <div className="w-full border border-[#8A5A2E] bg-[#F1EAD9] px-4 py-2 text-center">
                <p className="font-mono text-xs font-medium tracking-wide text-[#8A5A2E]">PACKAGING</p>
              </div>
              <div className="h-4 w-[2px] bg-[#8A5A2E]" />
              <div className="flex w-full flex-col gap-2">
                <div className="border border-[#CBC1AE] bg-white px-2 py-3 text-center font-body text-xs text-[#241F1A]">Kraft Corrugated Boxes</div>
                <div className="border border-[#CBC1AE] bg-white px-2 py-3 text-center font-body text-xs text-[#241F1A]">Duplex Corrugated Boxes</div>
              </div>
            </div>
          </div>
        </div>
        <p className="sr-only">Thapak splits into Paper and Pulp — Kraft Paper, Duplex Board, Writing and Printing Paper, Insulating Board, High Rag Cotton Pulp — and Packaging — Kraft Corrugated Boxes and Duplex Corrugated Boxes.</p>
      </div>
    </div>
  );
}
