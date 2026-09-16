export function CapacityStat({ value, unit, label, accent }: { value: string; unit: string; label: string; accent?: boolean }) {
  return (
    <div className="border border-[#CBC1AE] bg-[#FBF8F2] p-6">
      <p className={`font-mono text-[34px] font-medium leading-none tracking-tight ${accent ? "text-[#A64A23]" : "text-[#241F1A]"}`}>
        {value} <span className="text-[15px] font-normal tracking-[0.12em] text-[#8A5A2E]">{unit}</span>
      </p>
      <p className="mt-3 font-body text-[13px] font-medium leading-tight text-[#241F1A]/70">{label}</p>
    </div>
  );
}

export function CapacityStrip({ stats }: { stats: { value: string; unit: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-0 border border-[#CBC1AE] md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.label} className={`bg-[#FBF8F2] p-6 ${i !== stats.length - 1 ? "border-r border-[#CBC1AE]" : ""} ${i < 2 ? "border-b border-[#CBC1AE] md:border-b-0" : ""}`}>
          <p className="font-mono text-[30px] font-medium leading-none text-[#241F1A]">{s.value} <span className="text-[13px] font-normal tracking-[0.1em] text-[#8A5A2E]">{s.unit}</span></p>
          <p className="mt-2 font-body text-xs text-[#241F1A]/60">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
