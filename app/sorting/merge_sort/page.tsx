'use client';
import Main from '@/components/sorting/Main'
import useMergeSort from './useMergeSort';

const page = () => {
    const { code, sort } = useMergeSort();
    return (
        <div>
            <Main code={code} sort={sort} title='Merge Sort' />
        </div>
    )
}

export default page
