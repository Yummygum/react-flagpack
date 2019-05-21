import * as React from 'react'
import './Flag.scss'

interface Props {
  code: String,
  size?: String,
  customBorderRadius?: String
  dropshadow?: Boolean,
  hasBorder?: Boolean,
  gradient?: String,
  hasBorderRadius?: Boolean,
}

class Flag extends React.PureComponent<Props> {
  public render() {
    const {
      code,
      gradient = '',
      size = 'l',
      hasBorder = false,
      dropshadow = false,
      hasBorderRadius = true,
      // customBorderRadius,
    } = this.props

    return (
      <div className={
        `flag
        ${gradient}
        size-${size}
        ${hasBorder ? 'border' : ''}
        ${dropshadow ? 'dropshadow' : ''}
        ${hasBorderRadius ? 'border-radius' : ''}`
      }>
        <img src={`https://raw.githubusercontent.com/Yummygum/flag-pack-core/master/svg/${size.toLowerCase()}/${code.toUpperCase()}.svg?sanitize=true`}/>
      </div>
    )
  }
}

export default Flag
