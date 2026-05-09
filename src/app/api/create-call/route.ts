import { NextResponse } from 'next/server'

export async function POST() {
  const response = await fetch('https://api.retellai.com/v2/create-web-call', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      agent_id: process.env.RETELL_AGENT_ID,
    }),
  })

  const data = await response.json()
  return NextResponse.json(data)
}
