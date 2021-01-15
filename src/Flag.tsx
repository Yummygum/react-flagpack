import * as React from 'react'
import './Flag.scss'
import { isoToCountryCode, imageUrl } from 'flagpack-core'

interface Props {
  code: string,
  size?: string,
  gradient?: 'top-down' | 'real-circular' | 'real-linear',
  hasBorder?: boolean,
  hasDropShadow?: boolean,
  hasBorderRadius?: boolean,
  className?: string
}

class Flag extends React.PureComponent<Props, void> {
  public render() {
    const {
      code = 'NL',
      size = 'l',
      gradient = '',
      hasBorder = true,
      hasDropShadow = false,
      hasBorderRadius = true,
      className
    } = this.props

    const url = imageUrl(isoToCountryCode(code).toUpperCase(), size.toLowerCase())

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
        <img src={url.default || url }/>
      </div>
    )
  }
}

export default Flag
