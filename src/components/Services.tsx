const services = [
  {
    icon: '🐜',
    title: 'General Pest Control',
    desc: 'Ants, spiders, roaches, silverfish, earwigs, and common household pests.',
    color: 'from-emerald-50 to-teal-50 border-emerald-100',
  },
  {
    icon: '🐭',
    title: 'Rodent Control',
    desc: 'Mice and rat inspection, entry-point guidance, and treatment planning.',
    color: 'from-orange-50 to-amber-50 border-orange-100',
  },
  {
    icon: '🔍',
    title: 'Termite Inspection',
    desc: 'Termite activity checks, damage inspection, and treatment quotes.',
    color: 'from-yellow-50 to-lime-50 border-yellow-100',
  },
  {
    icon: '🛏️',
    title: 'Bed Bug Treatment',
    desc: 'Inspection, treatment planning, and follow-up guidance.',
    color: 'from-red-50 to-rose-50 border-red-100',
  },
  {
    icon: '🦟',
    title: 'Mosquito Control',
    desc: 'Seasonal yard treatment and mosquito-control programs.',
    color: 'from-blue-50 to-sky-50 border-blue-100',
  },
  {
    icon: '🔄',
    title: 'Recurring Pest Plans',
    desc: 'Monthly, bi-monthly, and quarterly pest-control services.',
    color: 'from-violet-50 to-purple-50 border-violet-100',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            What We Do
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl font-black text-[#064e3b] mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Explore our most requested services, from one-time treatments to year-round protection plans.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className={`bg-gradient-to-br ${s.color} border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer`}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-bold text-[#064e3b] mb-2">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
