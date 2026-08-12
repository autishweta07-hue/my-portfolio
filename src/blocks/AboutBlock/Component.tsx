'use client'

import React from 'react'

type RichTextNode = {
  type?: string
  text?: string
  children?: RichTextNode[]
  [key: string]: unknown
}

type RichText = {
  root?: RichTextNode
}

type Props = {
  heading?: string
  description?: RichText | string | null
}

const extractText = (node: RichTextNode | null | undefined): string => {
  if (!node) {
    return ''
  }

  if (typeof node.text === 'string') {
    return node.text
  }

  if (Array.isArray(node.children)) {
    return node.children
      .map((child) => extractText(child))
      .join('')
  }

  return ''
}

const getDescriptionText = (
  description: RichText | string | null | undefined,
): string => {
  if (!description) {
    return ''
  }

  if (typeof description === 'string') {
    return description
  }

  if (description.root) {
    return extractText(description.root)
  }

  return ''
}

export const AboutBlockComponent: React.FC<Props> = ({
  heading = 'About Me',
  description,
}) => {
  const descriptionText = getDescriptionText(description)

  return (
    <section
      id="about"
      className="bg-white px-6 py-24 text-black"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <div className="mb-5 h-1 w-16 rounded-full bg-orange-500" />

          <h2 className="text-4xl font-bold text-black md:text-5xl">
            {heading}
          </h2>
        </div>

        {/* Description */}
        {descriptionText ? (
          <div className="max-w-4xl">
            <p className="text-base leading-8 text-gray-700 md:text-lg">
              {descriptionText}
            </p>
          </div>
        ) : (
          <div
            className="
              max-w-4xl
              rounded-2xl
              border
              border-dashed
              border-orange-300
              bg-orange-50
              p-8
            "
          >
            <p className="text-gray-600">
              About information will be added here.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}