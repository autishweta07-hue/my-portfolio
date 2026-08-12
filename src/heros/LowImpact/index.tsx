import React from 'react'

import type { Page } from '@/payload-types'
import RichText from '@/components/RichText'
import Link from 'next/link'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
      links?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
      links?: Page['hero']['links']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({
  children,
  richText,
  links,
}) => {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-white
        text-black
      "
    >
      {/* Decorative orange shape */}
      <div
        className="
          absolute
          right-[-120px]
          top-[-120px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-orange-100
          opacity-70
        "
      />

      <div
        className="
          absolute
          bottom-[-100px]
          left-[-100px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-orange-50
        "
      />

      <div
        className="
          container
          relative
          z-10
          mx-auto
          px-6
          py-24
          md:py-32
        "
      >
        {/* Orange accent */}
        <div className="orange-line mb-8" />

        {/* Main content */}
        <div className="max-w-4xl">
          {children ||
            (richText && (
              <div
                className="
                  text-black
                  [&_h1]:text-4xl
                  [&_h1]:font-bold
                  [&_h1]:leading-tight
                  [&_h1]:md:text-6xl
                  [&_h1]:md:leading-tight
                  [&_h2]:text-3xl
                  [&_h2]:font-bold
                  [&_h2]:md:text-4xl
                  [&_p]:mt-6
                  [&_p]:max-w-3xl
                  [&_p]:text-lg
                  [&_p]:leading-8
                  [&_p]:text-gray-700
                "
              >
                <RichText
                  data={richText}
                  enableGutter={false}
                />
              </div>
            ))}
        </div>

        {/* Buttons */}
        {links && links.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-4">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.link?.url || '#'}
                className="
                  rounded-lg
                  bg-orange-500
                  px-7
                  py-3
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:bg-orange-600
                  hover:shadow-lg
                "
              >
                {item.link?.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}