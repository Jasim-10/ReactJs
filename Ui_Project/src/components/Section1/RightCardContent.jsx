import React from 'react'
import {MoveRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between'>
        <h2 className='bg-white font-semibold text-l rounded-full h-7 w-7 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-l leading-normal text-white mb-16'>{props.intro}</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-2 py-1 rounded-full text-lg'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-bold rounded-full px-2 py-1'><MoveRight size={17}/></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
