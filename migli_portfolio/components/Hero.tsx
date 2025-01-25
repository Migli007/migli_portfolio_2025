import React from 'react'
import { Boxes } from './ui/Background-boxes'


const Hero = () => {
  return (
    <div>
        <div className="max-w-9xl mx-auto flex justify-center">
        <div className="h-96 relative w-full max-w-9xl overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          
          <Boxes />
          <h1 className="md:text-4xl text-xl text-center text-white relative z-20">
            Miguel Antonio Li
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Professional Data Analyst
          </p>
        </div>
      </div>
    </div>
    

  )
}

export default Hero
