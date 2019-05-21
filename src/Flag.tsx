import * as React from 'react'
import './Flag.scss'

interface Props {
  code: string,
}

function Flag(props: Props) {
  return (
    <div>
      <ul>
        <li>code: { props.code }</li>
      </ul>
    </div>
  )
}

export default Flag
