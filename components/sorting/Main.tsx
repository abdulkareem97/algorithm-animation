'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CodeExecutionVisualizer from '../codeHighLighter/CodeExecutionVisualizer';
import useSpeed from '@/store/speedSlice';
import { use } from 'framer-motion/client';
import SpeedSlider from '../SpeedSlider';

const ARR = [
    { id: 3, value: 8 },
    { id: 5, value: 6 },
    { id: 1, value: 10 },
    { id: 2, value: 9 },
    { id: 4, value: 7 },
    { id: 6, value: 5 },
    { id: 7, value: 4 },
    { id: 8, value: 3 },
    { id: 9, value: 2 },
    { id: 10, value: 1 },
];


interface Props {
    code: any;
    sort: any;
    codeVisible?: boolean;
    title:string
    hideButton?: boolean
    isExecute?: boolean
}

const Main = ({ code, sort, codeVisible = true,title,hideButton=false,isExecute=false }: Props) => {



    const originalArr = ARR;

    const [arr, setArr] = useState<{ id: number; value: number; }[]>();

    const {setSpeed} = useSpeed((s: any) => s);

    useEffect(() => {
        setArr([...originalArr]);
    }, [originalArr])
    // const [selectedIndex, setSelectedIndex] = useState<number[]>([-1, -1]);

    // [{ind,color}]
    const [selectedIndex, setSelectedIndex] = useState<{ [key: number]: { color: string } }>({});
    const [activeToken, setActiveToke] = useState({ activeLine: -1, activeToken: '', variables: {} });
    const { speed } = useSpeed((s: any) => s);

    // console.log('selectedIndex', selectedIndex);
    useEffect(() => {
        if(hideButton && isExecute){
            sort(arr, setArr, setActiveToke, setSelectedIndex, speed);
        }
    },[isExecute,hideButton])


    return (
        <div className='h-full p-2 flex justify-center items-center '>
            <div>
                <div className=''>

                    <div className='flex justify-center'>
                        {/* Title */}
                        <h1 className='text-2xl text-white'>Sort Visualizer ( {title} )</h1>
                    </div>


                    <div className='bg-purple-600 w-full h-full rounded-md p-4   flex flex-col justify-center items-center'>

                        {/* Bars */}
                        <div className='flex items-end gap-2'>

                            {arr?.map((item, index) => {
                                let color = 'bg-blue-400';
                                if (selectedIndex[index]?.color) {
                                    color = selectedIndex[index].color
                                }
                                return (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        transition={{ duration: speed * 0.001 }}
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



                    </div>
                </div>

                {code && <div className=''>

                    <CodeExecutionVisualizer code={code} activeToken={activeToken} />
                </div>}

              {!hideButton &&  <div className='flex justify-center'>


                         {/* Button */}
                    <div className='mt-6'>
                        <button
                            className='bg-blue-500 px-4 py-2 rounded-xl hover:text-blue-500 hover:bg-white cursor-pointer'
                            onClick={() => sort(ARR, setArr, setActiveToke, setSelectedIndex, speed)}
                        >
                            Execute
                        </button>
                    </div>
                </div>}


            </div>
        </div>
    )
}


export default Main;