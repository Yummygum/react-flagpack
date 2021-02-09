import * as React from 'react'
import { isoToCountryCode, imageUrl } from 'flagpack-core'

// Components
import BaseFlag from './BaseFlag'

// Types
import type { Props } from './BaseFlag'

interface FlagProps extends Props {
  code: string,
  url: never
}

function Flag(props: FlagProps): React.ReactElement {
  const { code, size = 'l' } = props

  const url = imageUrl(isoToCountryCode(code).toUpperCase(), size.toLowerCase())

  return (
    <BaseFlag
      {...props}
      url={url}
    />
  )
}

export default React.memo(Flag)
