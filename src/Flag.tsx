import * as React from 'react'
import { Flags } from 'flagpack-core'

import './Flag.scss'

export interface FlagProps {
  code: Flags;
  size?: string;
  gradient?: '' | 'top-down' | 'real-circular' | 'real-linear';
  hasBorder?: boolean;
  hasDropShadow?: boolean;
  hasBorderRadius?: boolean;
  className?: string;
}

const Flag: React.FC<FlagProps> = ({
  code = 'NL',
  size = 'l',
  gradient = '',
  hasBorder = true,
  hasDropShadow = false,
  hasBorderRadius = true,
  className
}: FlagProps) => {
  return (
    <div
      className={`flag ${gradient} size-${size} ${hasBorder ? 'border' : ''} ${hasDropShadow ? 'drop-shadow' : ''} ${hasBorderRadius ? 'border-radius' : ''} ${className ? className.replace(/\s\s+/g, ' ').trim() : ''}`}
    >
      {/* Depend on the build configs to make the assets available at this location */}
      <img src={`/flags/${size}/${code}.svg`} />
    </div>
  )
}

export default Flag
