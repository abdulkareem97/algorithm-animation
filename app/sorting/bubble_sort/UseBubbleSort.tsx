import { sleep } from "@/utils/helper";


export default function UseBubbleSort() {


    const code = [
        [
            { text: "for (", id: "l1-0" },
            { text: "int i = 0;", id: "l1-1" },
            { text: "i < n;", id: "l1-2" },
            { text: "i++", id: "l1-3" },
            { text: ")", id: "l1-4" },
            { text: "{", id: "l1-5" }
        ],
        [
            { text: "   ", id: "l2--1" },
            { text: "for ( ", id: "l2-0" },
            { text: "int j = 0;", id: "l2-1" },
            { text: "j < n - i - 1;", id: "l2-2" },
            { text: "j++", id: "l2-3" },
            { text: ")", id: "l2-4" },
            { text: "{", id: "l2-5" }
        ],
        [
            { text: "      ", id: "l3--1" },
            { text: "if (arr[j] > arr[j+1])", id: "l3-0" },
            { text: "{", id: "l3-1" }
        ],
        [
            { text: "         ", id: "l4--1" },
            { text: "swap(arr[j], arr[j+1])", id: "l4-0" },

        ],
        [
            { text: "      ", id: "l5--1" },
            { text: "}", id: "l5-0" },
        ],
        [
            { text: "   ", id: "l6--1" },
            { text: "}", id: "l6-0" },
        ],
        [
            { text: "}", id: "l7-0" },
        ]


    ]

    const executionSteps = [
        'l1-0', 'l1-1', 'l1-2', 'l1-3', 'l1-4', 'l1-5',
        'l2-0', 'l2-1', 'l2-2', 'l2-3', 'l2-4', 'l2-5', '',
        'l3-0', 'l3-1',


    ]

    const firstline = ['l1-2', 'l1-3']
    const secondLine = ['l2-2', 'l2-3']


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


        for (let i = 0; i < n; i++) {
            for (let ele of firstline) {
                setActiveToken((prev:any) => ({ activeLine: 0, activeToken: ele, variables: { ...prev.variables, i: { color: colors.i.color, value: i } } }));
                setSelectedIndex({ });
                await sleep(ms);
            }
            for (let j = 0; j < n - i - 1; j++) {
                for (let ele of secondLine) {
                    setActiveToken((prev:any) => ({ activeLine: 1, activeToken: ele, variables: { ...prev.variables, j: { color: colors.j.color, value: j } } }));
                    setSelectedIndex({ [j]: colors.j});
                    await sleep(ms);
                }


                setSelectedIndex({ [j]: colors.j, [j + 1]: colors.j  });
                setActiveToken((prev:any) => ({ activeLine: 2, activeToken: 'l3-0', variables: { ...prev.variables, j: { color: colors.j.color, value: j } } }));

                await sleep(ms);


                if (tempArr[j].value > tempArr[j + 1].value) {

                    // swap
                    [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];

                    setArr([...tempArr]);
                    setActiveToken((prev:any) => ({ activeLine: 3, activeToken: 'l4-0', variables: { ...prev.variables, j: { color: colors.j.color, value: j } }}));
                    await sleep(ms);
                }
            }
            // setLastSortedIndex(n - i - 1);
        }

    }


    return { sort, executionSteps, code };
}