import React from 'react'

type Props = {
    message: string
}

const Message = ({message}: Props) => {
  return (
    <div className='w-full h-[40px] flex items-center rounded-lg rounded-tl-none text-white px-6 bg-black'>{message}</div>
  )
}

export default Message