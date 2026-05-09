import CallNowButton from './CallNowButton'

export default function CTA() {
  return (
    <section className="py-20 bg-[#f8faf9]" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-[#064e3b] rounded-3xl p-10 md:p-14 overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-teal-400 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/4" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-3">Ready to Book?</p>
              <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl font-black text-white mb-3">
                Get Rid of Pests Today
              </h2>
              <p className="text-emerald-200 max-w-md">
                Call us or send a request and our team will help schedule your service at a time that works for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallNowButton size="lg" className="bg-white !text-emerald-700 hover:!bg-emerald-50 !shadow-none border border-emerald-200" />
              <a
                href="mailto:support@safeguardpest.com"
                className="inline-flex items-center justify-center gap-2 border border-emerald-400 text-emerald-200 hover:bg-emerald-800 px-7 py-4 rounded-full font-semibold text-base transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
