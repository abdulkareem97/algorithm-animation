'use client';
import React from 'react'

import AlienImg from '@/public/images/alien.png'
import PorblemList from './PorblemList';


const Main = () => {
  return (
    <div className='p-2'>
        <div className='bg-gray-700  border-2 border-gray-900 p-2 rounded-md'>
            <div className='flex justify-center  items-center gap-2'>
                <div>
                    <img src={AlienImg.src} alt="" className='w-12  rounded-full' />
                </div>

                <div className='flex justify-center flex-col items-center'>

                <h1 className='text-3xl text-blue-600'>Code By Alien</h1>
                <h3>Learn By Visualization</h3>
                </div>
            </div>

        </div>

        <div>
            <PorblemList />
        </div>
      
    </div>
  )
}

export default Main
