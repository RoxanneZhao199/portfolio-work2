import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai'

let count = 0;
let sliderInterval;
const Slider = () => {
  const images = [
    // "/images/video.gif",
    "/images/furryfun1.png",
    "/images/furryfun2.png",
    "/images/furryfun3.png",
    "/images/furryfun4.png",
    "/images/furryfun5.png",
    "/images/furryfun6.png",
    "/images/furryfun7.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const sliderRef = useRef()

  const removeAnimation = () => {
    sliderRef.current.classList.remove('fade-anim')
  }
  useEffect(() => {
    sliderRef.current.addEventListener('animationend', removeAnimation)
    sliderRef.current.addEventListener('mouseenter', pauseSlider)
    sliderRef.current.addEventListener('mouseleave', startSlider)

    startSlider()
    return () => {
      pauseSlider()
    }
    // eslint-disable-next-line
  }, [])

  const startSlider = () => {
    sliderInterval = setInterval(() => {
      handleOnNextClick()
    }, 5000);
  }

  const pauseSlider = () => {
    clearInterval(sliderInterval)
  }

  const handleOnNextClick = () => {
    count = (count + 1) % images.length
    setCurrentIndex(count)
    sliderRef.current.classList.add('fade-anim')
  }
  const handleOnPrevClick = () => {
    const imagesLength = images.length
    count = (currentIndex + imagesLength - 1) % imagesLength
    setCurrentIndex(count)
    sliderRef.current.classList.add('fade-anim')

  }

  return (
    <div ref={sliderRef} className='w-full select-none relative'>
      <div className='aspect-w-16 aspect-h-9 bg-[#2E2E2E] flex justify-center rounded-2xl shadow-md shadow-gray-600'>
        <img src={images[currentIndex]} alt="" className='sm:h-[500px] h-[300px]' />
      </div>

      <div className='absolute w-full top-1/2 -transform translate-y-1/2 px-3 flex justify-between items-center'>
        <button className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnPrevClick}><AiOutlineVerticalRight size={30} /></button>
        <button className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30} /></button>
      </div>
    </div>


  )
}

export default Slider
