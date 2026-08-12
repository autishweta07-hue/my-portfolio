import React from 'react'
import Image from 'next/image'

type LogoProps = {
  loading?: 'lazy' | 'eager'
  priority?: boolean
  className?: string
}

export const Logo: React.FC<LogoProps> = ({
  loading = 'eager',
  priority = false,
  className,
}) => {
  return (
    <Image
      src="/images/patang-labs-logo.png"
      alt="Patang Labs Design"
      width={250}
      height={70}
      loading={loading}
      priority={priority}
      className={className}
    />
  )
}