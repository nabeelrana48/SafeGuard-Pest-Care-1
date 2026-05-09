const areas = ['Atlanta', 'Decatur', 'Marietta', 'Sandy Springs', 'Roswell', 'Alpharetta']

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM', open: true },
  { day: 'Saturday', time: '9:00 AM – 3:00 PM', open: true },
  { day: 'Sunday', time: 'Closed', open: false },
  { day: 'Priority Calls', time: 'Available for severe infestations', open: true },
]

export default function Areas() {
  return (
    <section className="py-20 bg-[#f8faf9]" id="areas">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Areas */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-bold text-[#064e3b] mb-2">
              Service Areas
            </h2>
            <p className="text-gray-400 text-sm mb-5">We serve the greater Atlanta metropolitan area.</p>
            <div className="flex flex-wrap gap-3 mb-5">
              {areas.map(a => (
                <span key={a} className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full">
                  📍 {a}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Contact us to confirm availability for your exact address.
            </p>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-bold text-[#064e3b] mb-2">
              Working Hours
            </h2>
            <p className="text-gray-400 text-sm mb-5">We're ready when you need us most.</p>
            <div className="space-y-3">
              {hours.map(h => (
                <div key={h.day} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                  <span className="text-sm font-medium text-gray-700">{h.day}</span>
                  <span className={`text-sm font-bold ${h.open ? 'text-emerald-700' : 'text-red-400'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
