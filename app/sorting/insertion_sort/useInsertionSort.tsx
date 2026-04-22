import { sleep } from "@/utils/helper";


export default function UseInsertionSort() {


    const code = [
        [
            { text: "for (", id: "l1-0" },
            { text: "int i = 1;", id: "l1-1" },
            { text: "i < n;", id: "l1-2" },
            { text: "i++", id: "l1-3" },
            { text: ")", id: "l1-4" },
            { text: "{", id: "l1-5" }
        ],
        [
            { text: "   ", id: "l2--1" },
            { text: "int j = i;", id: "l2-0" }
        ],
        [
            { text: "   ", id: "l3--1" },
            { text: "while ( ", id: "l3-0" },
            { text: "j>0 ", id: "l3-1" },
            { text: "&& ", id: "l3-2" },
            { text: "arr[j-1] > arr[j]", id: "l3-3" },
            { text: ")", id: "l3-4" },
            { text: "{", id: "l3-5" }
        ],
        [
            { text: "         ", id: "l5--1" },
            { text: "swap(arr[j], arr[j-1])", id: "l5-0" },

        ],


        [
            { text: "         ", id: "l6--1" },
            { text: "j--;", id: "l6-0" },
        ],
        [
            { text: "   ", id: "l7--1" },
            { text: "}", id: "l7-0" },
        ],
        [
            { text: "}", id: "l8-0" },
        ]


    ]


    const firstline = ['l1-3', 'l1-2']
    // const secondLine = ['l2-3', 'l2-2']


    const colors = {
        i: { color: 'bg-yellow-500' },
        j: { color: 'bg-green-500' },
        n: { color: 'bg-pink-500' },

    }



    const sort = async (arr: any, setArr: any, setActiveToken: any, setSelectedIndex: any, ms: number) => {
        const tempArr = [...arr];
        setArr([...tempArr]);

        let n = tempArr.length;
        setActiveToken({ activeLine: -1, activeToken: '', variables: { n: { color: colors.n.color, value: n } } })
        await sleep(ms);


        for (let i = 1; i < n; i++) {
            for (let ele of firstline) {
                setActiveToken((prev:any) => ({ activeLine: 0, activeToken: ele, variables: { ...prev.variables, i: { color: colors.i.color, value: i } } }));
                setSelectedIndex({ [i]: colors.i });
                await sleep(ms);
            }


            let j = i;
            setSelectedIndex({ [j]: colors.j });
            setActiveToken((prev:any) => ({ activeLine: 1, activeToken: 'l2-0', variables: { ...prev.variables, j: { color: colors.j.color, value: j } } }));
            await sleep(ms);



            setActiveToken((prev:any) => ({ activeLine: 2, activeToken: 'l3-1', variables: { ...prev.variables } }));
            await sleep(ms);
            setSelectedIndex({ [j]: colors.j, [j - 1]: colors.j });
            setActiveToken((prev:any) => ({ activeLine: 2, activeToken: 'l3-3', variables: { ...prev.variables } }));
            await sleep(ms);


            while (j > 0 && tempArr[j - 1].value > tempArr[j].value) {
                if (j != i) {
                    setActiveToken((prev:any) => ({ activeLine: 2, activeToken: 'l3-1', variables: { ...prev.variables } }));
                    await sleep(ms);
                    setSelectedIndex({ [j]: colors.j, [j - 1]: colors.j });
                    setActiveToken((prev:any) => ({ activeLine: 2, activeToken: 'l3-3', variables: { ...prev.variables } }));
                    await sleep(ms);
                }




                // swap
                [tempArr[j], tempArr[j - 1]] = [tempArr[j - 1], tempArr[j]];

                setArr([...tempArr]);
                setActiveToken((prev:any) => ({ activeLine: 4, activeToken: 'l5-0', variables: { ...prev.variables } }));
                await sleep(ms);


                j--;

                setActiveToken((prev:any) => ({ activeLine: 5, activeToken: 'l6-0', variables: { ...prev.variables, j: { color: colors.j.color, value: j } } }));
                setSelectedIndex({ [j]: colors.j });
                await sleep(ms);
            }
            // setLastSortedIndex(n - i - 1);
        }

    }


    return { sort, code };
}