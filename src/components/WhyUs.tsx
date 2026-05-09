const reasons = [
  'Residential and commercial pest support',
  'Recurring treatment plans available',
  'Termite, bed bug, and rodent specialists',
  'Clear inspection-based recommendations',
  'Service across major Atlanta-area communities',
  'Licensed, insured, and professionally trained',
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#f8faf9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Why SafeGuard
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl font-black text-[#064e3b] mb-5 leading-tight">
              Trusted by Atlanta Homeowners & Businesses
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              SafeGuard Pest Care is a local service business focused on dependable work, clear communication,
              and practical help for customers who need fast support at their home or property.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Homeowners', 'Renters', 'Restaurants', 'Offices', 'Property Managers'].map(tag => (
                <span key={tag} className="bg-white border border-emerald-200 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-emerald-200 transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
