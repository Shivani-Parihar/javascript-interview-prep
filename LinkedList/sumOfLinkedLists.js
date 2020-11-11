class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let l1 = new Node(2);
    l1.next = new Node(4);
    l1.next.next = new Node(3);

    let l2 = new Node(5);
    l2.next = new Node(6);
    l2.next.next = new Node(4);

function sumofLinkedLists(l1, l2) {
    let sum = 0;
    let ones;
    let tens = 0;
    let resultNode = null;
    let headNode = null;

    while(l1 && l2) {
        sum = l1.data + l2.data;
        sum += tens;

        ones = sum % 10;

        if (!resultNode) {
            headNode = new Node(ones);
            resultNode = headNode;
        } else {
            resultNode.next = new Node(ones);
            resultNode = resultNode.next;
        }

        tens = Math.floor( sum / 10 );

        l1 = l1.next;
        l2 = l2.next;
    }

    if (tens > 0) {
        resultNode.next = new Node(tens);
        resultNode = resultNode.next;
    }

    return headNode;

}