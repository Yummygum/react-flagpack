import * as React from 'react'

import type { Props } from './BaseFlag'

// Components
import BaseFlag from './BaseFlag'

type FlagType = {
  s: string
  m: string
  l: string
}

interface PerfFlagsProps extends Props {
  url: never
  flag: FlagType
}

function PerfFlagComponent(props: PerfFlagsProps): React.ReactElement {
  const {
    flag,
    size = 'l'
  } = props

  return (
    <BaseFlag
      {...props}
      url={flag[size]}
    />
  )
}

const PerfFlag = React.memo(PerfFlagComponent)

export {
  PerfFlag
}
