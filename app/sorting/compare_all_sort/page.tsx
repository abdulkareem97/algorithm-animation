'use client';
import React, { use, useRef, useState } from 'react'
import UseBubbleSort from '../bubble_sort/UseBubbleSort';
import useSelectionSort from '../selection_sort/UseSelectionSort';
import UseInsertionSort from '../insertion_sort/useInsertionSort';
import useMergeSort from '../merge_sort/useMergeSort';
import Main from '@/components/sorting/Main';

const page = () => {
    const { sort: bubble_sort } = UseBubbleSort();
    const { sort: selection_sort } = useSelectionSort();
    const { sort: insertion_sort } = UseInsertionSort();
    const { sort: merge_sort } = useMergeSort();

    const [isExecute,setIsExecute] = useState(false);

    


    

    return (
        <div className='flex flex-col justify-center items-center h-screen'>


            <div className='flex  justify-center items-center space-x-2'>
                 <div className='flex justify-center'>
                        {/* Title */}
                        <h1 className='text-2xl text-blue-600'>Compare All Sort</h1>
                    </div>
                <div className=''>
                    <button
                        className='text-sm bg-blue-500 p-1 rounded-xl hover:text-blue-500 hover:bg-white cursor-pointer'
                    onClick={() => setIsExecute(!isExecute)}
                    >
                        Execute
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-2 '>
                <div>
                    <Main code={null} sort={bubble_sort} title='Bubble Sort' hideButton={true} isExecute={isExecute} />
                </div>
                <div>
                    <Main code={null} sort={selection_sort} title='selection Sort' hideButton={true} isExecute={isExecute} />
                </div>
                <div>
                    <Main code={null} sort={insertion_sort} title='Insertion Sort' hideButton={true} isExecute={isExecute} />
                </div>
                <div>
                    <Main code={null} sort={merge_sort} title='Merge Sort' hideButton={true} isExecute={isExecute} />
                </div>

            </div>
        </div>
    )
}

export default page
