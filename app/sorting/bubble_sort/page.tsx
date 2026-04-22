'use client';
import Main from '@/components/sorting/Main'
import UseBubbleSort from '@/app/sorting/bubble_sort/UseBubbleSort';
import React from 'react'
const page = () => {
    const { code, sort } = UseBubbleSort();
    return (
        <div>
            <Main code={code} sort={sort} title='Bubble Sort' />
        </div>
    )
}

export default page
