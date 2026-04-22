import { sleep } from "@/utils/helper";


export default function useSelectionSort() {


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
            { text: "int min = i;", id: "l2-0" }
        ],
        [
            { text: "   ", id: "l3--1" },
            { text: "for ( ", id: "l3-0" },
            { text: "int j = i;", id: "l3-1" },
            { text: "j < n;", id: "l3-2" },
            { text: "j++", id: "l3-3" },
            { text: ")", id: "l3-4" },
            { text: "{", id: "l3-5" }
        ],
        [
            { text: "      ", id: "l4--1" },
            { text: "if (arr[min] > arr[j])", id: "l4-0" },
            { text: "{", id: "l4-1" }
        ],
        [
            { text: "         ", id: "l5--1" },
            { text: "mini = j", id: "l5-0" },

        ],
        [
            { text: "      ", id: "l6--1" },
            { text: "}", id: "l6-0" },
        ],

        [
            { text: "   ", id: "l7--1" },
            { text: "swap(arr[i], arr[min])", id: "l7-0" },
        ],
        [
            { text: "   ", id: "l8--1" },
            { text: "}", id: "l8-0" },
        ],
        [
            { text: "}", id: "l9-0" },
        ]


    ]


    const firstline = ['l1-3', 'l1-2',]
    const secondLine = ['l3-3', 'l3-2']


    const colors = {
        mini: {color:'bg-orange-500'},
        i:{color: 'bg-yellow-500'},
        j:{color: 'bg-green-500'},
        n:{color: 'bg-pink-500'}
    }


    const sort = async (arr: any, setArr: any, setActiveToken: any, setSelectedIndex: any, ms: number) => {
        const tempArr = [...arr];
        setArr([...tempArr]);

        let n = tempArr.length;
        setActiveToken({ activeLine: -1, activeToken: '', variables: { n:{color :colors.n.color , value:n} } })
        await sleep(ms);


        for (let i = 0; i < n; i++) {

            for (let ele of firstline) {
                setActiveToken((prev) => ({ activeLine: 0, activeToken: ele, variables: { ...prev.variables, i:{color :colors.i.color , value:i} } }));
                setSelectedIndex({ [i]: colors.i });
                await sleep(ms);
            }
            let mini = i;
            setSelectedIndex({ [i]: colors.i , [mini]: colors.mini });
            setActiveToken((prev) => ({ activeLine: 1, activeToken: 'l2-0', variables: { ...prev.variables, mini:{color :colors.mini.color , value:mini} } }));
            await sleep(ms);
            for (let j = i; j < n; j++) {
                for (let ele of secondLine) {
                    setActiveToken((prev) => ({ activeLine: 2, activeToken: ele, variables: { ...prev.variables, j:{color :colors.j.color , value:j} } }));
                    setSelectedIndex({ [i]: colors.i ,  [mini]: colors.mini, [j]: colors.j });
                    await sleep(ms);
                }



                // setSelectedIndex([j, mini]);
                setActiveToken((prev) => ({ activeLine: 3, activeToken: 'l4-0', variables: { ...prev.variables } }));
                await sleep(ms);
                if (tempArr[mini].value > tempArr[j].value) {


                    // swap
                    // [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
                    mini = j;
                    setSelectedIndex({ [i]: colors.i , [mini]: colors.mini });


                    setActiveToken((prev) => ({ activeLine: 4, activeToken: 'l5-0', variables: { ...prev.variables, mini:{color :colors.mini.color , value:mini} } }));
                    await sleep(ms);
                }
            }

            [tempArr[i], tempArr[mini]] = [tempArr[mini], tempArr[i]];
            setArr([...tempArr]);

            setActiveToken((prev) => ({ activeLine: 6, activeToken: 'l7-0', variables: { ...prev.variables } }));
            await sleep(ms);

            setSelectedIndex([]);
            await sleep(ms);


            // setLastSortedIndex(n - i - 1);
        }

    }


    return { sort, code };
}