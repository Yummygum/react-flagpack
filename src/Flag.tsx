import * as React from 'react'
import './Flag.scss'

interface Props {
  code: String,
  size?: String,
  dropshadow?: Boolean,
  hasBorder?: Boolean,
  gradient?: String,
  hasBorderRadius?: Boolean,
  customBorderRadius?: any
}

class Flag extends React.PureComponent<Props, void> {
  public render() {
    const {
      code,
      gradient = '',
      size = 'l',
      hasBorder = false,
      dropshadow = false,
      hasBorderRadius = true,
      customBorderRadius,
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
          ${hasBorderRadius ? 'border-radius' : ''}`.replace(/\s\s+/g, ' ').trim()
      }>
        <img src={`https://raw.githubusercontent.com/Yummygum/flag-pack-core/master/svg/${size.toLowerCase()}/${code.toUpperCase()}.svg?sanitize=true`}/>
      </div>
    )
  }
}

export default Flag
