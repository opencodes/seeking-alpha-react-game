import React, { useEffect } from 'react'
import Cell from '../../components/Cell'
import { rowData } from './gamepad.interface'
import { applyTheRule } from './util/gamepad.util'

type Props = {
  data: rowData[]
}

const GamePad = ({ data }: Props) => {
  const intervalRef = React.useRef(data);

  useEffect(() => {
    const id = setInterval(() => {
      const result = applyTheRule(intervalRef.current);
      intervalRef.current = result;
    }, 5000)
    return () => clearInterval(id);
  }, [])

  return (
    <div>
      {
        intervalRef ? intervalRef.current.map((row, i) => (<div key={'cell_' + i} style={{ height: 22, width: 22 * row.length }}>
          {
            row.map((cell, index) => (<Cell live={!!cell} key={'cell_' + index} />))
          }
        </div>)) : null}
    </div>
  )
}

export default GamePad

