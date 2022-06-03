class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1 === null) {
        return l2;
    }
    if(l2 === null) {
        return l1;
    }
    let newHead = l1;
    let factor = 0;
    while(l1 !== null && l2 !== null) {
        const remainder = (l1.val + l2.val + factor) % 10;
        factor = Math.floor((l1.val + l2.val + factor) / 10);
        l1.val = remainder;
        
        if(l1.next === null && l2.next === null && factor === 0) {
            break;
        }
        
        if(l1.next === null) {
            l1.next = new ListNode(0);
        }
        if(l2.next === null) {
            l2.next = new ListNode(0);
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    
    return newHead;
};