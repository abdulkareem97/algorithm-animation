'use client'
import React, { useEffect, useRef, useState } from 'react'
import NodeUI from './NodeUI'
import { Node } from '@/utils/LL';
import Xarrow from 'react-xarrows';
import Header from './Header';
import { sleep } from '@/utils/helper';


// Load Linked List
const head = new Node(1);
let temp = head;
temp.next = new Node(2);
temp = temp.next;
temp.next = new Node(3);
temp = temp.next;
temp.next = new Node(4);


const toArray = (head: Node | null) => {
    const arr = [];
    let curr = head;

    while (curr) {
        arr.push(curr.data);
        curr = curr.next;
    }

    return arr;
};


const traverseCode = [
    `let curr = head;`,
    `While (curr) {`,
    // `    `,
    `    curr = curr.next;`,
    `}`,
]


const Arrow = () => {
    return (
        <div className={` `}>
            {'<===='}
        </div>
    )
}



const LLDisplay = ({ head }: { head: Node | null }) => {
    const arr = toArray(head);

    const refs = useRef<(HTMLDivElement | null)[]>([]);

    // keep refs length in sync
    useEffect(() => {
        refs.current = arr.map((_, i) => refs.current[i] || null);
    }, [arr]);

    const [activeIndex, setActiveIndex] = useState(new Set([2]));


    const [activeLine, setActiveLine] = useState(0);

    const [curNodeIndex, setCurNodeIndex] = useState(0);

    const traverseAnimation = async (ms:number=1000) => {
        

        let n = arr.length;

        const loopCode = [...traverseCode.slice(1,-1)];
        let codeLength = loopCode.length;
        let times  = n * codeLength;
        // console.log('times', times);
        let lineNo = 0;
        let curNodeNo = 0;
        setActiveLine(0);
        setCurNodeIndex(0);


        while(times > 0){   
            await sleep(ms/2);
            setActiveLine(   (lineNo)% codeLength + 1);
            lineNo++;
            await sleep(ms/2);
            setActiveLine(   (lineNo)% codeLength + 1);
            await sleep(ms/2);
            setCurNodeIndex((curNodeNo + 1)% n);
            curNodeNo++;
            lineNo++;
            times--;
            break;

        }

        setActiveLine(0);

    }

    return (
        <div>

            <div>


                <div className='flex flex-wrap justify-between items-center'>

                    {arr.map((data, index) => (
                        <NodeUI
                            key={index} // ✅ prefer unique id
                            data={data}
                            // active={activeIndex.has(index)}
                            active={index === curNodeIndex}
                        //   ref={(el) => (refs.current[index] = el)}
                        />
                    ))}

                    <div className='' id='last-node'>
                        <span>NULL</span>

                    </div>
                </div>


                {
                    arr.map((data, index) => (
                        <Xarrow
                            key={index}
                            start={`node-${data}`}
                            end={index === arr.length - 1 ? 'last-node' : `node-${arr[index + 1]}`}
                        />
                    ))
                }
            </div>

            <div className='relative mt-6'>
                {/* <div className='absolute '
                style={{
                    top:`${1 * 1}px`,
                    right:`${1 * 1}px`
                }}
                > 
                    <Arrow />
                </div> */}
                <div>

                {
                    traverseCode.map((code, index) =>{
                        
                        const textColor = index === activeLine ?  'text-green-300' : 'text-white';
                        
                        return (
                        <pre key={index} className={` ${textColor} `}
                        
                        
                        >{code}</pre>
                    )})
                }
                </div>
            </div>

  {/* Button */}
                <div className='mt-6'>
                    <button
                        className='bg-blue-500 px-4 py-2 rounded-xl hover:text-blue-500 hover:bg-white cursor-pointer'
                        onClick={()=>traverseAnimation()}
                    >
                        Execute
                    </button>
                </div>
        </div>
    );
};





const Main = () => {

    // const head = 

    // const [head, setHead] = useState<LinkedList | null>(null)



    // const [data, setData] = useState<number>(0);


    // const handleAddNode = () => {
    //         ll.addNode(data);
    //         setData(0)
    // }







    return (

        <div>
            <Header />

            <div className=' flex justify-center items-center'>

                {/* Linked list input */}
                {/* 
      <div>
      <div className='border h-[80vh] w-[10vw]'>
      
      <div className='w-full p-2'>
      <label>Data</label>
      <input type="text" placeholder='Data' className='w-full'
      value={data} onChange={(e)=>setData(Number(e.target.value))}
      />
      </div>
      
      <div className='w-full p-2'>
      <button className='w-full p-2 bg-blue-600 text-white rounded-2xl cursor-pointer hover:text-blue-600 hover:bg-white hover:border-2 border-blue-600' 
      onClick={handleAddNode}
      >Execute</button>
      </div>
      
      </div>
      </div> */}

                {/* Linked list animation */}
                <div className='flex justify-center items-center'>

                    <div className='border h-[80vh] w-[80vw] bg-red-400 p-4 '>
                        {/* <NodeUI data={1} /> */}
                        <LLDisplay head={head} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

