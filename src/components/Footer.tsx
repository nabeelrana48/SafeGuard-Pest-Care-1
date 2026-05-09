export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-slate-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-display)' }} className="text-white font-bold text-lg">
                SafeGuard Pest Care
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Professional local service for customers who value reliability, clear communication, and timely support.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {['General Pest Control', 'Rodent Control', 'Termite Inspection', 'Bed Bug Treatment', 'Mosquito Control'].map(s => (
                <li key={s}><a href="#services" className="hover:text-emerald-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:(404)5550167" className="hover:text-emerald-400 transition-colors">(404) 555-0167</a></li>
              <li><a href="mailto:support@safeguardpest.com" className="hover:text-emerald-400 transition-colors">support@safeguardpest.com</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Address</h4>
            <p className="text-sm leading-relaxed">
              3908 Cedar Ridge Parkway,<br />Atlanta, GA 30301
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} SafeGuard Pest Care. All rights reserved.</span>
          <span>Atlanta, GA · Licensed & Insured</span>
        </div>
      </div>
    </footer>
  )
}
