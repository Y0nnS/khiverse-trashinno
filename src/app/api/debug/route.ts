// app/api/debug/route.ts
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(req: Request) {
  const token = req.headers.get('authorization')?.split(' ')[1]
  if (!token) return NextResponse.json({ error: 'No token' })
  
  const decoded = jwt.decode(token)
  return NextResponse.json({ decoded })
}