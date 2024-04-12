import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'


const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=''>
      <div className='w-full py-20 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
          <div className="text border-t-2 border-b-2 text-white border-zinc-300 flex whitespace-nowrap overflow-hidden">
              <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:9}} className='text-[28vw] leading-none font-["Founders_Grotesk_Condensed"] font-black -mb-[6vw] pr-10'>WE ARE OCHI </motion.h1>
              <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:9}} className='text-[28vw] leading-none font-["Founders_Grotesk_Condensed"] font-black -mb-[6vw] pr-10'>WE ARE OCHI </motion.h1>
              {/* <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:9}} className='text-[20vw] leading-1 font-["Founders_Grotesk_Condensed"] font-black'>WE ARE OCHI </motion.h1>
              <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:9}} className='text-[20vw] leading-1 font-["Founders_Grotesk_Condensed"] font-black'>WE ARE OCHI </motion.h1> */}

          </div>
      </div>
      
    </div>
  )
}

export default Marquee