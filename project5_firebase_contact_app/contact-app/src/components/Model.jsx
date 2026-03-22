import React from 'react'
import { createPortal } from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai'

const Model = ( { onClose, isOpen, children }) => {
  return createPortal
  ( <> 
    {isOpen && (
        <div  className='grid absolute top-0 left-0 z-40  h-screen w-screen backdrop-blur-xl'>
           <div className='relative z-50 m-auto min-h-[200px] min-w-[40%] bg-white p-4'>
                <div className='flex justify-end'>
                    <AiOutlineClose onClick = { onClose } className='text-2xl self-end'/>
                </div>
                {children}
           </div>
           <div className='absolute top-0 left-0 z-40  h-screen w-screen backdrop-blur-xl '
           />
        </div>
     )}
  </>
  , document.getElementById("model-root"))
}

export default Model