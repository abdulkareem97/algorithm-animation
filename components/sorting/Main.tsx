'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ARR = [
    { id: 1, value: 10 },
    { id: 2, value: 9 },
    { id: 3, value: 8 },
    { id: 4, value: 7 },
    { id: 5, value: 6 },
    { id: 6, value: 5 },
    { id: 7, value: 4 },
    { id: 8, value: 3 },
    { id: 9, value: 2 },
    { id: 10, value: 1 },
];

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

const DURATION = 0.2;

const Main = () => {

    const [arr, setArr] = useState(ARR);
    const [selectedIndex, setSelectedIndex] = useState<number[]>([-1, -1]);
    const [lastSortedIndex, setLastSortedIndex] = useState(200);

    const reset = () => {
        setArr([...ARR]);
        setSelectedIndex([-1, -1]);
        setLastSortedIndex(200);
    }

    const execute1 = async (ms:number=1000) => {
        const tempArr = [...ARR];
        reset();

        let n = tempArr.length;
        await sleep(ms);

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {

                setSelectedIndex([j, j + 1]);
                await sleep(ms);

                if (tempArr[j].value > tempArr[j + 1].value) {

                    // swap
                    [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];

                    setArr([...tempArr]);
                    await sleep(ms);
                }
            }
            setLastSortedIndex(n - i - 1);
        }

        setSelectedIndex([-1, -1]);
    }


    const execute2 = async (ms:number=1000) => {
        const tempArr = [...ARR];
        let j=0;

        // [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
        tempArr[0].value = 5;
        tempArr[1].value = 4;

        setArr(tempArr);

    }

    return (
        <div className='h-screen flex justify-center items-center bg-black'>



            <div className='w-[90vw] h-[90vh]'>

         
            <div className='bg-purple-600 w-full h-full rounded-md  flex flex-col justify-center items-center'>

                {/* Bars */}
                <div className='flex items-end gap-2'>

                    {arr.map((item, index) => {

                        let color = 'bg-blue-400';

                        if (index === selectedIndex[0] || index === selectedIndex[1]) {
                            color = 'bg-green-400';
                        }

                        if (index >= lastSortedIndex) {
                            color = 'bg-red-400';
                        }

                        return (
                            <motion.div
                                key={item.id}
                                layout
                                transition={{ duration: DURATION }}
                                className='flex flex-col items-center'
                            >
                                <div
                                    className={`${color} flex justify-center items-end text-black`}
                                    style={{
                                        height: `${item.value * 10}px`,
                                        width: '30px',
                                    }}
                                >
                                    <span>{item.value}</span>
                                </div>

                                <div className='text-white mt-1'>
                                    {index}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Button */}
                <div className='mt-6'>
                    <button
                        className='bg-blue-500 px-4 py-2 rounded-xl hover:text-blue-500 hover:bg-white cursor-pointer'
                        onClick={()=>execute1(DURATION*1000)}
                    >
                        Execute
                    </button>
                </div>

            </div>
               </div>
        </div>
    )
}


export default Main;