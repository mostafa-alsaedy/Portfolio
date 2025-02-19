import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const { pending } = useFormStatus()

    return (
        <>
            <button type="submit" className='group h-[3rem] w-[8rem] flex items-center justify-center gap-2 bg-gray-900 text-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 
                    active:scale-105 transition-all dark:bg-white dark:bg-opacity-10 '>
                {pending ? <div className='animate-spin h-5 w-5 rounded-full border-white border-b-2'></div> :
                    <>
                        Submit <FaPaperPlane
                            className='text-xs opacity-70 transition-all
                  group-hover:translate-x-1 group-hover:-translate-y-1'/>
                    </>}
            </button>
        </>
    )
}
