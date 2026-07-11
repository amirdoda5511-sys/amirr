'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-2xl animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          AmirMind AI
        </h1>
        <p className="text-xl text-slate-400 mb-8">
          One Mind. Infinite Intelligence.
        </p>
        <p className="text-slate-300 mb-12 leading-relaxed">
          Production-ready AI Operating System that unifies multiple AI capabilities into one premium workspace.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <Link
            href="/auth/login"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="px-8 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>

        <div className="text-sm text-slate-500">
          <p>Version 0.1.0 • Under Development</p>
        </div>
      </div>
    </main>
  )
}
