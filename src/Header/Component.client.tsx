'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)

  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) {
      setTheme(headerTheme)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="relative z-20 w-full border-b border-[#F58220]/20 bg-black text-white"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container flex items-center justify-between py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo
            loading="eager"
            priority
            className="h-auto max-w-[220px]"
          />
        </Link>

        {/* Navigation */}
        <HeaderNav data={data} />
      </div>
    </header>
  )
}