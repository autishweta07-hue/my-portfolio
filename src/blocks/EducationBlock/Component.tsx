'use client'

import React from 'react'

type EducationItem = {
  id?: string | null
  institution?: string | null
  degree?: string | null
  duration?: string | null
  grade?: string | null
}

type Props = {
  heading?: string
  education?: EducationItem[]
}

export const EducationBlockComponent: React.FC<Props> = ({
  heading = 'Education',
  education = [],
}) => {
  return (
    <section
      id="education"
      className="bg-white px-6 py-24 text-black"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <div className="mb-5 h-1 w-16 rounded-full bg-orange-500" />

          <h2 className="text-4xl font-bold text-black md:text-5xl">
            {heading}
          </h2>
        </div>

        {/* Education List */}
        {education.length > 0 ? (
          <div className="space-y-5">
            {education.map((item, index) => (
              <div
                key={item.id || index}
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
                {/* Degree */}
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-black
                    transition-colors
                    group-hover:text-orange-500
                  "
                >
                  {item.degree || ''}
                </h3>

                {/* Institution */}
                <p className="mt-2 text-sm font-medium text-orange-500">
                  {item.institution || ''}
                </p>

                {/* Duration */}
                {item.duration && (
                  <p className="mt-2 text-sm text-gray-500">
                    {item.duration}
                  </p>
                )}

                {/* Grade */}
                {item.grade && (
                  <p className="mt-2 text-sm font-semibold text-black">
                    Grade: {item.grade}
                  </p>
                )}
              </div>
            ))}
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
              Education details will be added here.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}