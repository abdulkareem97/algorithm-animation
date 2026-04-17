


class Node {
    data: number;
    next: Node | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}


// class LinkedList {

//     head: Node | null;
//     tail: Node | null;
//     length: number;
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     addNode(data: number) {
//         const newNode = new Node(data);
//         if (this.head === null) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail!.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//     }

//     getLength() {
//         return this.length;
//     }
// }


// const ll = new LinkedList();
// ll.addNode(3);
// ll.addNode(4);
// ll.addNode(5);
// ll.addNode(6);
// ll.addNode(7);
// ll.addNode(8);
// ll.addNode(9);
// ll.addNode(10);


export {Node}

// export {ll}
// export default LinkedList

