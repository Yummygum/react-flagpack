import * as React from 'react'
import { isoToCountryCode, imageUrl } from 'flagpack-core'

import './Flag.scss'

interface Props {
  code: string;
  size?: string;
  gradient?: '' | 'top-down' | 'real-circular' | 'real-linear';
  hasBorder?: boolean;
  hasDropShadow?: boolean;
  hasBorderRadius?: boolean;
  className?: string;
}

interface INextImage {
  default: {
    src: string
  }
}

interface IImage {
  default: string
}

function isNextImage(image: string | IImage | INextImage): image is INextImage {
  return (image as INextImage).default.src !== undefined
}

function isImage(image: string | IImage | INextImage): image is IImage {
  return (image as IImage).default !== undefined
}

const Flag: React.FC<Props> = ({
  code = 'NL',
  size = 'l',
  gradient = '',
  hasBorder = true,
  hasDropShadow = false,
  hasBorderRadius = true,
  className
}: Props) => {
  const url = imageUrl(isoToCountryCode(code).toUpperCase(), size.toLowerCase()) as string | IImage | INextImage

  console.log(url)
  return (
    <div
      className={`flag ${gradient} size-${size} ${hasBorder ? 'border' : ''} ${hasDropShadow ? 'drop-shadow' : ''} ${hasBorderRadius ? 'border-radius' : ''} ${className ? className.replace(/\s\s+/g, ' ').trim() : ''}`}
    >
      {isNextImage(url) ? (
        <img src={url.default.src} />
      ) : isImage(url) ? (
        <img src={url.default} />
      ) : (
        <img src={url} />
      )}
    </div>
  )
}

export default Flag
