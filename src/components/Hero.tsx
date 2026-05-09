import CallNowButton from './CallNowButton'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-[#f0fdf4] to-[#eff6ff] py-20 md:py-28">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Pest Control Company · Atlanta, GA
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-6xl font-black text-[#064e3b] leading-[1.05] mb-6">
              Reliable Pest Control<br />
              <span className="text-emerald-600">for Homes &</span><br />
              Businesses
            </h1>

            <p className="text-lg text-gray-500 max-w-xl mb-8 leading-relaxed">
              Pest inspections, one-time treatments, and recurring plans for ants, roaches, rodents,
              termites, bed bugs, spiders, mosquitoes, and more.
            </p>

            <div className="flex flex-wrap gap-4">
              <CallNowButton size="lg" />
              <a
                href="mailto:support@safeguardpest.com"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#064e3b] px-7 py-4 rounded-full text-base font-semibold hover:border-emerald-300 hover:bg-emerald-50 transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Request Service
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-emerald-100">
              {['Licensed & Insured', 'Same-Day Service', 'Free Inspection Quote', '5-Star Rated'].map(b => (
                <div key={b} className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact card */}
          <div className="animate-fade-up delay-300">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-bold text-[#064e3b] mb-5">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                    <a href="tel:(404)5550167" className="font-semibold text-gray-800 hover:text-emerald-600 transition-colors">(404) 555-0167</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:support@safeguardpest.com" className="font-semibold text-gray-800 hover:text-emerald-600 transition-colors">support@safeguardpest.com</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Address</p>
                    <p className="font-semibold text-gray-800">3908 Cedar Ridge Parkway,<br />Atlanta, GA 30301</p>
                  </div>
                </div>
              </div>

              {/* <a
                href="tel:(404)5550167"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-semibold text-sm transition-all shadow-lg hover:shadow-emerald-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a> */}
              <CallNowButton className="mt-6 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-semibold text-sm transition-all shadow-lg hover:shadow-emerald-200"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
