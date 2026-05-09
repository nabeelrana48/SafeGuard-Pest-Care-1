'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Do you treat bed bugs?',
    a: 'Yes. We inspect and treat bed bug issues. A specialist may confirm the treatment plan after inspection.',
  },
  {
    q: 'Do you offer monthly plans?',
    a: 'Yes. Monthly, bi-monthly, and quarterly pest-control plans are available depending on property needs.',
  },
  {
    q: 'Is treatment safe for pets?',
    a: 'Please mention pets before treatment. The technician will provide service-specific safety instructions.',
  },
  {
    q: 'How much does pest control cost?',
    a: 'One-time treatments often start around $100 to $300. Recurring plans vary by property and pest type.',
  },
  {
    q: 'Do you handle termites?',
    a: 'Yes. Termite inspections and treatment quotes are available.',
  },
  {
    q: 'How quickly can you come out?',
    a: 'We aim for same-day or next-day service. Priority calls are available for severe infestations.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Got Questions?
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl font-black text-[#064e3b]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all ${
                open === i ? 'border-emerald-300 shadow-md' : 'border-gray-100'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#064e3b] pr-4">{f.q}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  open === i ? 'bg-emerald-600 text-white rotate-45' : 'bg-gray-100 text-gray-500'
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-3 bg-emerald-50/30">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
