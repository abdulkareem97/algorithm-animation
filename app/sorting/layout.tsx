'use client';
import SpeedSlider from '@/components/SpeedSlider';
import useSpeed from '@/store/speedSlice';
import React from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const { speed, setSpeed } = useSpeed((s: any) => s);
  return (
    <div>
        <div className='absolute right-0 top-0'>
            
                <div className='p-2'>
                    {/* slider for speed */}
                    <SpeedSlider speed={speed} setSpeed={setSpeed} />
                </div>
        </div>

        {children}
    </div>
  );
}


