// given a linked list we need to reverse it but why ?? 
// just to gain confindence in doing linked list problem in ts.

// First get inputs from the user and build the linked list
// then reverse it and print it on console.

import { askAndGet } from "../Utility";
import { PayLoad, LinkedListNode } from "../DataStructures/LinkedList";


export const linkedListExample = async () => {
    let head: LinkedListNode|null = null;
    head = await buildLinkedList(head);
    printLinkedList(head);
}

export const buildLinkedList = async (head: LinkedListNode|null) => {
    const n = await askAndGet("How many numbers do you want to enter ? : ");
    let input: any;

    for (let index = 0; index < n; index++) {
        input = await askAndGet("enter the " + (index + 1).toString() + " number : ");
        head = new LinkedListNode(head, new PayLoad(input));
    }
    input = ''+await askAndGet("Do you want to add at Head or at Tail : ");
    
    if(input.includes('t') || input.includes('T')){
        head = reverseALinkedList(head)
    }
    return head;
}

export const printLinkedList = (head: LinkedListNode|null) => {
    while(head != null){
        console.log(head.payLoad.data)
        head = head.pointsToLinkedListNode;
    }
}

// 
export const reverseALinkedList = (head: LinkedListNode | null) => {
    let tmp1: LinkedListNode | null;
    let tmp2: LinkedListNode | null;
    let tmp3: LinkedListNode | null = null;

    tmp1 = head!.pointsToLinkedListNode;
    head!.pointsToLinkedListNode = null;
    tmp2 = head;

    while(tmp1 != null){

        tmp3 = tmp1.pointsToLinkedListNode;
        tmp1.pointsToLinkedListNode = tmp2;
        tmp2 = tmp1;
        tmp1 = tmp3;

    }

    return tmp2;
}