import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const PROBLEMS = {
    MAIN_TOPICS: [
        // {
        //     TITLE: 'Learn The Basics',
        //     SUB_TOPICS: [{ TITLE: 'Array' ,REDIRECT_TO:''}]
        // },
        {
            TITLE: 'Sorting Techniques',
            SUB_TOPICS: [
                { TITLE: 'Bubble Sort',REDIRECT_TO:'/sorting/bubble_sort' },
                { TITLE: 'Selection Sort',REDIRECT_TO:'/sorting/selection_sort' },
                { TITLE: 'Insertion Sort',REDIRECT_TO:'/sorting/insertion_sort' },
                { TITLE: 'Merge Sort',REDIRECT_TO:'/sorting/merge_sort' },
                { TITLE: 'Comapare All Sort',REDIRECT_TO:'/sorting/compare_all_sort' },
            ]
        }
    ]
}

const ProblemList = () => {
    const [openIndex, setOpenIndex] = useState<Number | null>(0)
    // const navigate= useNavigate()
    const router = useRouter();

    const toggle = (index: Number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const handleNavigate = (REDIRECT_TO:string) => {
        router.push(REDIRECT_TO)
        

    }

    return (
        <div className=" mt-10">
            {PROBLEMS.MAIN_TOPICS.map((topic, i) => (
                <div key={i} className="border rounded-xl mb-4 shadow">

                    {/* Header */}
                    <div
                        onClick={() => toggle(i)}
                        className="cursor-pointer p-4 flex justify-between items-center transition"
                    >
                        <h1 className="text-lg font-semibold">{topic.TITLE}</h1>

                        <div className='flex space-x-2 items-center'>
                            {/* <progress value={i + 1} max={topic.SUB_TOPICS.length} /> */}
                            <span>{openIndex === i ? '▲' : '▼'}</span>
                        </div>
                    </div>

                    {/* Dropdown */}
                    {openIndex === i && (
                        <div className="p-4 " >
                            {topic.SUB_TOPICS.map((sub, j) => (
                                <div
                                  onClick={handleNavigate.bind(null,sub.REDIRECT_TO)}
                                  
                                    key={j}
                                    className="p-2 border-b last:border-none  hover:bg-gray-700 cursor-pointer rounded"
                                >
                                    <h2>{sub.TITLE}</h2>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProblemList