import React from 'react'
import Slider from './Slider'

const Home = () => {

  return (
    <div name='home' className='h-[130vh] w-full bg-gradient-to-b from-black via-black to-gray-800 text-[#E1DFDF]'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full w-full p-4'>
        <div className='pb-8'>
          <p className='text-2xl font-bold inline border-b-4 border-gray-500'>FurryFun Wechat MP</p>
          <p className='pt-8 max-w-4xl'><strong>Furryfun Wechat-Mini Program</strong> provides a platform for users to post their pets and book time for pet advertising or film shooting</p>
          <p className='py-8 text-[14px] text-[gray]'><strong>Stack:</strong> Ruby on Rails, JavaScript, AliCloud</p>
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default Home
