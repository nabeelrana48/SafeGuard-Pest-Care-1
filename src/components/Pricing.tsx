const prices = [
  { service: 'Initial Inspection', price: '$75 – $150', highlight: false },
  { service: 'One-time General Pest Treatment', price: '$100 – $300', highlight: false },
  { service: 'Monthly Pest Plan', price: '$39 – $70 / mo', highlight: true },
  { service: 'Quarterly Pest Plan', price: '$100 – $300 / visit', highlight: false },
  { service: 'Rodent Treatment', price: '$150 – $450', highlight: false },
  { service: 'Bed Bug Inspection', price: '$100 – $250', highlight: false },
  { service: 'Termite Treatment', price: 'Quote Required', highlight: false },
  { service: 'Commercial Plan', price: 'Quote Required', highlight: false },
]

export default function Pricing() {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Transparent Pricing
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl font-black text-[#064e3b] mb-4">
            Service Price Guide
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Prices are estimates and may vary by location, job size, materials, urgency, and final inspection.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 bg-[#064e3b] text-white text-sm font-semibold px-6 py-4">
              <span>Service</span>
              <span className="text-right">Estimated Price</span>
            </div>
            {prices.map((p, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 items-center px-6 py-4 border-b border-gray-50 last:border-0 transition-colors ${
                  p.highlight
                    ? 'bg-emerald-50 border-emerald-100'
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className={`text-sm font-medium ${p.highlight ? 'text-emerald-800' : 'text-gray-700'}`}>
                  {p.highlight && <span className="mr-2 text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Popular</span>}
                  {p.service}
                </span>
                <span className={`text-right font-bold ${p.highlight ? 'text-emerald-700' : 'text-[#064e3b]'}`}>
                  {p.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            Call us for an exact quote tailored to your property.
          </p>
        </div>
      </div>
    </section>
  )
}
