'use client';
import React from 'react'
import useSelectionSort from '../selection_sort/UseSelectionSort'
import Main from '@/components/sorting/Main';
import UseInsertionSort from './useInsertionSort';

const page = () => {
    const { sort, code } = UseInsertionSort();

    return (
        <div>
            <Main code={code} sort={sort} title='Insertion Sort'  />

        </div>
    )
}

export default page
