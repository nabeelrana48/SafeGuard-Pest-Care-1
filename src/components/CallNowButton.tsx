'use client'
import { useState } from 'react'
import { RetellWebClient } from 'retell-client-js-sdk'

const retellClient = new RetellWebClient()

export default function CallNowButton({ size = 'md', className = '' }: { size?: string, className?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'active'>('idle')

  const handleCall = async () => {
    if (status === 'active') {
      retellClient.stopCall()
      setStatus('idle')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/create-call', { method: 'POST' })
      const data = await res.json()

      await retellClient.startCall({
        accessToken: data.access_token,
      })

      setStatus('active')
      retellClient.on('call_ended', () => setStatus('idle'))

    } catch (err) {
      console.error('Call failed:', err)
      setStatus('idle')
    }
  }

  return (
    <button
      onClick={handleCall}
      className={`relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-8 py-4 text-base pulse-ring ${
        status === 'active'
          ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-200'
          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-300 hover:shadow-emerald-300'
      } ${className}`}
    >
      {/* Icon */}
      {status === 'loading' && (
        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg>
      )}
      {status === 'idle' && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )}
      {status === 'active' && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}

      {/* Label */}
      {status === 'idle' && 'Call Now'}
      {status === 'loading' && 'Connecting...'}
      {status === 'active' && 'End Call'}
    </button>
  )
}