"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="border-b border-[#CBC1AE] bg-[#F1EAD9] px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <h1 className="font-display text-[40px] font-medium text-[#8A5A2E]">Get in Touch</h1>
          <p className="mt-2 max-w-[560px] font-body text-sm leading-relaxed text-[#241F1A]/60">For product enquiries, partnerships, or careers — we’d like to hear from you.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-12 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
        <div>
          {sent ? (
            <div className="border border-[#41533F] bg-[#41533F]/10 p-8 text-center">
              <p className="font-display text-xl">Thank you.</p>
              <p className="mt-2 font-body text-sm text-[#241F1A]/60">Your enquiry has been received. We’ll respond shortly.</p>
              <button onClick={() => setSent(false)} className="mt-4 font-body text-sm font-medium text-[#A64A23] underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] tracking-wide text-[#241F1A]/60">NAME *</span>
                  <input required placeholder="Your name" className="border border-[#CBC1AE] bg-[#FBF8F2] px-4 py-2.5 font-body text-sm outline-none focus:border-[#8A5A2E]" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] tracking-wide text-[#241F1A]/60">COMPANY</span>
                  <input placeholder="Company name" className="border border-[#CBC1AE] bg-[#FBF8F2] px-4 py-2.5 font-body text-sm outline-none focus:border-[#8A5A2E]" />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] tracking-wide text-[#241F1A]/60">EMAIL *</span>
                  <input required type="email" placeholder="you@company.com" className="border border-[#CBC1AE] bg-[#FBF8F2] px-4 py-2.5 font-body text-sm outline-none focus:border-[#8A5A2E]" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] tracking-wide text-[#241F1A]/60">PHONE</span>
                  <input placeholder="+91 ..." className="border border-[#CBC1AE] bg-[#FBF8F2] px-4 py-2.5 font-body text-sm outline-none focus:border-[#8A5A2E]" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] tracking-wide text-[#241F1A]/60">ENQUIRY TYPE</span>
                <select className="border border-[#CBC1AE] bg-[#FBF8F2] px-4 py-2.5 font-body text-sm outline-none focus:border-[#8A5A2E]">
                  <option>Product Enquiry</option>
                  <option>Partnership</option>
                  <option>Careers</option>
                  <option>Press</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] tracking-wide text-[#241F1A]/60">MESSAGE *</span>
                <textarea required rows={5} placeholder="How can we help?" className="border border-[#CBC1AE] bg-[#FBF8F2] px-4 py-2.5 font-body text-sm outline-none focus:border-[#8A5A2E] resize-y" />
              </label>
              <button type="submit" className="rounded-[4px] bg-[#A64A23] px-8 py-3 font-body text-sm font-medium text-white hover:bg-[#8f3f1e] transition-colors">Send enquiry</button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="border border-[#CBC1AE] bg-[#FBF8F2] p-6">
            <p className="font-mono text-[11px] tracking-[0.14em] text-[#8A5A2E]">COMPANY</p>
            <p className="mt-3 font-body text-sm font-semibold">Thapak Paper & Pulp Pvt. Ltd.</p>
            <p className="mt-1 font-body text-sm leading-relaxed text-[#241F1A]/60">Established 2018<br />Business journey since 1980<br />Budhni, Madhya Pradesh — planned integrated facility</p>
          </div>
          <div className="border border-dashed border-[#CBC1AE] bg-[#F1EAD9] p-6">
            <p className="font-mono text-[11px] tracking-wide text-[#8A5A2E]">LOCATION</p>
            <p className="mt-2 font-body text-sm text-[#241F1A]/60">Detailed site map for Budhni will be available as construction milestones are announced.</p>
            <div className="mt-4 flex h-32 items-center justify-center border border-[#CBC1AE] bg-[#FBF8F2] font-mono text-xs text-[#8A5A2E]/40">[ Budhni map ]</div>
          </div>
        </div>
      </section>
    </div>
  );
}
