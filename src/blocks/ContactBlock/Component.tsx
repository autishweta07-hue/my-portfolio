'use client'

import React from 'react'

type Props = {
  heading?: string
  email?: string | null
  phone?: string | null
  linkedin?: string | null
  github?: string | null
}

export const ContactBlockComponent: React.FC<Props> = ({
  heading = 'Contact Me',
  email,
  phone,
  linkedin,
  github,
}) => {
  return (
    <section
      id="contact"
      className="bg-orange-500 px-6 py-24 text-white"
    >
      <div className="container mx-auto">
        <div className="rounded-2xl bg-orange-500">
          {/* Orange/white line */}
          <div className="mb-5 h-1 w-16 rounded-full bg-white" />

          {/* Heading */}
          <h2 className="text-4xl font-bold md:text-5xl">
            {heading}
          </h2>

          {/* Contact Details */}
          <div className="mt-10 space-y-5">
            {email && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                  Email
                </p>

                <a
                  href={`mailto:${email}`}
                  className="
                    mt-1
                    inline-block
                    text-lg
                    font-medium
                    text-white
                    transition-opacity
                    hover:opacity-75
                  "
                >
                  {email}
                </a>
              </div>
            )}

            {phone && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                  Phone
                </p>

                <a
                  href={`tel:${phone}`}
                  className="
                    mt-1
                    inline-block
                    text-lg
                    font-medium
                    text-white
                    transition-opacity
                    hover:opacity-75
                  "
                >
                  {phone}
                </a>
              </div>
            )}

            {linkedin && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                  LinkedIn
                </p>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-1
                    inline-block
                    break-all
                    text-lg
                    font-medium
                    text-white
                    transition-opacity
                    hover:opacity-75
                  "
                >
                  {linkedin}
                </a>
              </div>
            )}

            {github && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                  GitHub
                </p>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-1
                    inline-block
                    break-all
                    text-lg
                    font-medium
                    text-white
                    transition-opacity
                    hover:opacity-75
                  "
                >
                  {github}
                </a>
              </div>
            )}
          </div>

          {/* Contact Button */}
          {email && (
            <div className="mt-10">
              <a
                href={`mailto:${email}`}
                className="
                  inline-flex
                  rounded-md
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Contact Me
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}