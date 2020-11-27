export class PayLoad{
    data: number;

    constructor(data: number) {
        this.data = data;
    }
}

export class LinkedListNode {
    pointsToLinkedListNode: LinkedListNode|null;
    payLoad: PayLoad;

    constructor(pointsToLinkedListNode: LinkedListNode|null, payLoad: PayLoad){
        this.pointsToLinkedListNode = pointsToLinkedListNode;
        this.payLoad = payLoad;
    }
}