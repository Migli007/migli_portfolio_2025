import React from 'react'
import {
    IconMailFilled,
    IconPhoneFilled
  } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className='pb-30' id='contact'>
        <br /> <br /> <br /><br />
        <div className="absolute bottom-0 left-0 right-0 z-50 h-48 flex items-center justify-between bg-gradient-to-r from-purple-900 to-blue-900">
            <div className="mx-8 w-full">
                <div className="grid grid-cols-[2fr_1fr] gap-4">
                    {/* Left Column */}
                    <div className="text-white font-semibold text-3xl p-4">
                    Looking forward to achieve great things together
                    </div>

                    {/* Right Column */}
                    <div className="text-white  p-4">
                        <div className='flex'>
                            <IconMailFilled className='mr-5'/> migli0804.work@gmail.com 
                        </div>
                        <div className='flex pt-3'>
                            <IconPhoneFilled className='mr-5' /> (+63) 09602711064 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    


  )
}

export default Footer
