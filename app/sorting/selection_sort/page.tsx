'use client';
import Main from '@/components/sorting/Main'
import useSelectionSort from './UseSelectionSort'

const page = () => {
    const { code, sort } = useSelectionSort();
    return (
        <div>
            <Main code={code} sort={sort} title='Selection Sort' />
        </div>
    )
}

export default page
