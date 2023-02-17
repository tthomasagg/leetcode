/*
| #    | Title                                                                                                                                             | Solution                                                                                                                                        | Difficulty |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 1290 | [Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/) | [Typescript](https://github.com/tthomasagg/leetcode/blob/main/typescript/1290-convert-binary-number-in-a-linked-list-to-integer/index.ts) | Easy |
* */

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

function getDecimalValue(head: ListNode | null): number {
    const num = []
    let current = head
    while (current !== undefined) {
        num.push(current?.val)
        current = current?.next
    }

    return parseInt(num.join(''), 2)
};