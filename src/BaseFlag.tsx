import * as React from 'react'
import './Flag.scss'

export interface Props {
  url: string
  size?: string,
  gradient?: 'top-down' | 'real-circular' | 'real-linear' | '',
  hasBorder?: boolean,
  hasDropShadow?: boolean,
  hasBorderRadius?: boolean,
  className?: string
}

function BaseFlag({
  url,
  size = 'l',
  gradient = '',
  hasBorder = true,
  hasDropShadow = false,
  hasBorderRadius = true,
  className
}: Props): React.ReactElement {
  return (
    <div
      className={
        `flag
        ${gradient}
        size-${size}
        ${hasBorder ? 'border' : ''}
        ${hasDropShadow ? 'drop-shadow' : ''}
        ${hasBorderRadius ? 'border-radius' : ''}
        ${className ? className.replace(/\s\s+/g, ' ').trim() : ''}`
      }>
      <img src={url}/>
    </div>
  )
}

export default React.memo(BaseFlag)
