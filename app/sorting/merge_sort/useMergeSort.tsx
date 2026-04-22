import { sleep } from "@/utils/helper";

export default function useMergeSort() {

    // ---------------- CODE STRUCTURE (for UI) ----------------
    const code = [
        [{ text: "void mergeSort(arr, l, r)", id: "l1-0" }],
        [
            { text: "     ", id: "l2--1" },
            { text: "if (l >= r) return", id: "l2-0" }
        ],
        [
            { text: "     ", id: "l3--1" },
            { text: "mid = (l + r) / 2", id: "l3-0" }
        ],
        [
            { text: "     ", id: "l4--1" },
            { text: "mergeSort(arr, l, mid)", id: "l4-0" }],
        [
            { text: "     ", id: "l5--1" },
            { text: "mergeSort(arr, mid+1, r)", id: "l5-0" }],
        [
            { text: "     ", id: "l6--1" },
            { text: "merge(arr, l, mid, r)", id: "l6-0" }],

        [{ text: "void merge()", id: "l7-0" }],
        [
            { text: "     ", id: "l8--1" },
            { text: "compare left to right", id: "l8-0" }
        ],
        [
            { text: "     ", id: "l9--1" },
            { text: "push smaller", id: "l9-0" }],
        [
            { text: "     ", id: "l10--1" },
            { text: "copy back", id: "l10-0" }]
    ];

    const colors = {
        left: { color: 'bg-gray-500' },
        right: { color: 'bg-red-500' },
        merge: { color: 'bg-green-500' },
        mid: { color: 'bg-yellow-500' }
    };

    // ---------------- MERGE FUNCTION ----------------
    const merge = async (
        arr: any[],
        l: number,
        m: number,
        r: number,
        setArr: any,
        setActiveToken: any,
        setSelectedIndex: any,
        ms: number
    ) => {

        let temp = [];
        let i = l;
        let j = m + 1;

        setSelectedIndex({ [i]: colors.left, [r]: colors.right });
        setActiveToken({
            activeLine: 6,
            activeToken: "l8-0",
            variables: { mid: { color: colors.mid.color, value: m }, l: { value: l, color: colors.left.color }, r: { value: r, color: colors.right.color } }
        })
        await sleep(ms);

        while (i <= m && j <= r) {

        


            if (arr[i].value <= arr[j].value) {

          

                temp.push(arr[i]);
                i++;

            } else {

          
                temp.push(arr[j]);
                j++;
            }
        }

        while (i <= m) {
            temp.push(arr[i]);
            i++;
        }

        while (j <= r) {
            temp.push(arr[j]);
            j++;
        }

        // Copy back
        for (let k = 0; k < temp.length; k++) {

        
            arr[l + k] = temp[k];

        }
            setActiveToken({
                activeLine: 9,
                activeToken: "l10-0",
                variables:{ mid: { color: colors.mid.color, value: m }, l: { value: l, color: colors.left.color }, r: { value: r, color: colors.right.color } }
            });

        //  setSelectedIndex({ [l + k]: colors.merge });
        setArr([...arr]);
        await sleep(ms);
    };

    // ---------------- MERGE SORT ----------------
    const mergeSort = async (
        arr: any[],
        l: number,
        r: number,
        setArr: any,
        setActiveToken: any,
        setSelectedIndex: any,
        ms: number
    ) => {

        // Base case
        setActiveToken({
            activeLine: 1,
            activeToken: "l2-0",
            variables: { l: { value: l }, r: { value: r } }
        });
        setSelectedIndex({ [l]: colors.left, [r]: colors.right });
        await sleep(ms);

        if (l >= r) return;

        let m = Math.floor((l + r) / 2);

        // Mid calculation
        setActiveToken({
            activeLine: 2,
            activeToken: "l3-0",
            variables: { mid: { color: colors.mid.color, value: m }, l: { value: l, color: colors.left.color }, r: { value: r, color: colors.right.color } }
        });
        setSelectedIndex({ [l]: colors.left, [r]: colors.right,[m]: colors.mid });
        await sleep(ms);

        // Left recursion
        setActiveToken({
            activeLine: 3,
            activeToken: "l4-0",
            variables: { mid: { color: colors.mid.color, value: m }, l: { value: l, color: colors.left.color }, r: { value: m ,color: colors.right.color} }
        });
        await sleep(ms);

        await mergeSort(arr, l, m, setArr, setActiveToken, setSelectedIndex, ms);

        // Right recursion
        setActiveToken({
            activeLine: 4,
            activeToken: "l5-0",
            variables: { mid: { color: colors.mid.color, value: m }, l: { value: m+1, color: colors.left.color }, r: { value: r ,color: colors.right.color} }
        });
        await sleep(ms);

        await mergeSort(arr, m + 1, r, setArr, setActiveToken, setSelectedIndex, ms);

        // Merge step
        setActiveToken({
            activeLine: 5,
            activeToken: "l6",
            variables: { mid: { color: colors.mid.color, value: m }, l: { value: l, color: colors.left.color }, r: { value: r ,color: colors.right.color} }
        });
        await sleep(ms);

        await merge(arr, l, m, r, setArr, setActiveToken, setSelectedIndex, ms);
    };

    // ---------------- MAIN SORT ----------------
    const sort = async (
        arr: any,
        setArr: any,
        setActiveToken: any,
        setSelectedIndex: any,
        ms: number
    ) => {

        const tempArr = [...arr];
        setArr([...tempArr]);

        await mergeSort(tempArr, 0, tempArr.length - 1, setArr, setActiveToken, setSelectedIndex, ms);

        setSelectedIndex([]);
    };

    return { sort, code };
}