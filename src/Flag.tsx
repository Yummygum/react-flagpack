import * as React from 'react'
import './Flag.scss'

import { isoToCountryCode, imageUrl } from 'flagpack-core'

interface Props {
  code: String,
  size?: String,
  dropshadow?: Boolean,
  hasBorder?: Boolean,
  gradient?: 'top-down' | 'real-circular' | 'real-linear',
  hasBorderRadius?: Boolean,
  customBorderRadius?: any,
  className?: String
}

class Flag extends React.PureComponent<Props, void> {
  public render() {
    const {
      gradient = '',
      size = 'l',
      hasBorder = false,
      dropshadow = false,
      hasBorderRadius = true,
      code = 'NL',
      customBorderRadius,
      className
    } = this.props

    return (
      <div
        style={{
          borderRadius: customBorderRadius
        }}
        className={
          `flag
          ${gradient}
          size-${size}
          ${hasBorder ? 'border' : ''}
          ${dropshadow ? 'dropshadow' : ''}
          ${hasBorderRadius ? 'border-radius' : ''}
          ${className}`.replace(/\s\s+/g, ' ').trim()
      }>
        <img src={imageUrl(isoToCountryCode(code).toUpperCase(), size.toLowerCase())}/>
      </div>
    )
  }
}

export default Flag
