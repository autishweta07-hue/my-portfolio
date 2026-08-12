'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex items-center gap-6">
      {navItems.map(({ link }, i) => {
        return (
          <div
            key={i}
            className="
              text-sm
              font-semibold
              text-black
              transition-colors
              duration-200
              hover:text-orange-500
            "
          >
            <CMSLink
              {...link}
              appearance="link"
            />
          </div>
        )
      })}

      {/* Search */}
      <Link
        href="/search"
        aria-label="Search"
        className="
          flex
          items-center
          justify-center
          rounded-full
          p-2
          text-black
          transition-all
          duration-200
          hover:bg-orange-50
          hover:text-orange-500
        "
      >
        <span className="sr-only">Search</span>

        <SearchIcon className="h-5 w-5" />
      </Link>
    </nav>
  )
}