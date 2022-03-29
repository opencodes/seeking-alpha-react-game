import React from 'react'

type Props = {
    live:boolean;
}
const cellStyle =(live:boolean)=> {
  return {backgroundColor:live?'#000':'#fff', height:20, width:20, border:"1px solid #ddd",display:'inline-block'}
}
const Cell = ({live}: Props) => {
  return (
    <div style={{...cellStyle(live)}}>
    </div>
  )
}

export default Cell