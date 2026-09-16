export default function SpecTable({ rows, totalLabel, totalValue }: { rows: { product: string; capacity: string }[]; totalLabel: string; totalValue: string }) {
  return (
    <div className="overflow-x-auto border border-[#CBC1AE]">
      <table className="w-full min-w-[360px] border-collapse">
        <thead>
          <tr className="bg-[#8A5A2E] text-left">
            <th scope="col" className="px-5 py-3 font-mono text-[11px] tracking-[0.12em] text-[#FBF8F2]">PRODUCT</th>
            <th scope="col" className="px-5 py-3 text-right font-mono text-[11px] tracking-[0.12em] text-[#FBF8F2]">PLANNED CAPACITY</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.product} className="border-t border-[#CBC1AE] bg-[#FBF8F2]">
              <td className="px-5 py-3 font-body text-sm text-[#241F1A]">{r.product}</td>
              <td className="px-5 py-3 text-right font-mono text-sm font-medium text-[#241F1A]">{r.capacity}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-[#8A5A2E] bg-[#F1EAD9]">
            <td className="px-5 py-3 font-body text-sm font-semibold text-[#8A5A2E]">{totalLabel}</td>
            <td className="px-5 py-3 text-right font-mono text-sm font-semibold text-[#8A5A2E]">{totalValue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
