// first attempt
// Beats: Runtime 26.67% / Memory 25.12%
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    if (!head.next) {
        return true
    }
    const list = []
    const extractList = (head, list) => {
        list.push(head.val)
        if (head.next) {
            return extractList(head.next, list)
        }
    }
    extractList(head, list)
    let isOddArr = list.length % 2 !== 0
    const strt = list.slice(0, (list.length)/2).join('')
    const fnsh = list.slice((list.length)/2+(+isOddArr)).reverse().join('')
    return strt === fnsh
};

// second attempt
// Beats: Runtime 30.70% / Memory 25.43%
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome2(head: ListNode | null): boolean {
    const list = []
    const extractList = (head, list) => {
        list.push(head.val)
        if (head.next) {
            return extractList(head.next, list)
        }
    }
    extractList(head, list)
    if (list.length === 1) {
        return true
    }
    let isOddArr = list.length % 2 !== 0
    const strt = list.slice(0, (list.length)/2).join('')
    const fnsh = list.slice((list.length)/2+(+isOddArr)).reverse().join('')
    return strt === fnsh
};
