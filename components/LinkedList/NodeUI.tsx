import React from 'react'

interface NodeProps {
    data: number,
    active?: boolean
}   

const NodeUI = React.forwardRef(({ data ,active=false}: NodeProps, ref) => {
  return (
    // <div ref={ref} className='p-2'>
    <div  className=''>
      <div  id={`node-${data}`} className={`w-25 flex rounded-xl  ${active ? 'bg-green-400' : 'bg-white'}`}>
        <div className='border-r p-2 border-black px-2 w-1/2 text-black text-center'>{data}</div>
        <div>  </div>
      </div>
    </div>
  )
})

export default NodeUI
