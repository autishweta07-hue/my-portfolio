'use client'

import React from 'react'

type Skill = {
  id?: string | null
  category?: string | null
  items?: string | null
}

type Props = {
  heading?: string
  skills?: Skill[]
}

export const SkillsBlockComponent: React.FC<Props> = ({
  heading = 'Technical Skills',
  skills = [],
}) => {
  return (
    <section
      id="skills"
      className="bg-white px-6 py-24 text-black"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <div className="mb-5 h-1 w-16 rounded-full bg-orange-500" />

          <h2 className="text-4xl font-bold text-black md:text-5xl">
            {heading}
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Technologies and tools I use to build practical
            software solutions.
          </p>
        </div>

        {/* Skills */}
        {skills.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const category = skill.category || 'Skills'

              const items = skill.items
                ? skill.items
                    .split(',')
                    .map((item) => item.trim())
                    .filter(Boolean)
                : []

              return (
                <div
                  key={skill.id || index}
                  className="
                    group
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-orange-500
                    hover:shadow-lg
                    hover:shadow-orange-100
                  "
                >
                  {/* Orange line */}
                  <div
                    className="
                      mb-4
                      h-2
                      w-10
                      rounded-full
                      bg-orange-500
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />

                  {/* Category */}
                  <h3
                    className="
                      mb-5
                      font-semibold
                      text-black
                      transition-colors
                      group-hover:text-orange-500
                    "
                  >
                    {category}
                  </h3>

                  {/* Skill pills */}
                  {items.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="
                            rounded-full
                            bg-orange-100
                            px-3
                            py-1
                            text-sm
                            text-orange-600
                            transition-all
                            duration-300
                            group-hover:bg-orange-500
                            group-hover:text-white
                          "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No skills added yet.
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-orange-300
              bg-orange-50
              p-10
              text-center
            "
          >
            <p className="text-gray-600">
              Skills will be added here.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}