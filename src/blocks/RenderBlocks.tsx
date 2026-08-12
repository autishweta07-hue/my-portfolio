import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

import { AboutBlockComponent } from '@/blocks/AboutBlock/Component'
import { EducationBlockComponent } from '@/blocks/EducationBlock/Component'
import { SkillsBlockComponent } from '@/blocks/SkillsBlock/Component'
import { ProjectsBlockComponent } from '@/blocks/ProjectsBlock/Component'
import { ContactBlockComponent } from '@/blocks/ContactBlock/Component'

const blockComponents = {
  aboutBlock: AboutBlockComponent,
  educationBlock: EducationBlockComponent,
  skillsBlock: SkillsBlockComponent,
  projectsBlock: ProjectsBlockComponent,
  contactBlock: ContactBlockComponent,

  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = ({ blocks }) => {
  const hasBlocks =
    Array.isArray(blocks) && blocks.length > 0

  if (!hasBlocks) {
    return null
  }

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block

        if (
          !blockType ||
          !(blockType in blockComponents)
        ) {
          return null
        }

        const Block =
          blockComponents[
            blockType as keyof typeof blockComponents
          ]

        if (!Block) {
          return null
        }

        return (
          <div
            className="my-16"
            key={
              'id' in block && block.id
                ? block.id
                : index
            }
          >
            
            <Block
              {...(block as any)}
            />
          </div>
        )
      })}
    </Fragment>
  )
}