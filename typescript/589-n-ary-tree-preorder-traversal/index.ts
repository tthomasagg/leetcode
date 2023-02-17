// first attempt
// Beats: Runtime 29.50% / Memory 30%
/*
| #    | Title                                                                                                                                             | Solution                                                                                                                                        | Difficulty |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 589 | [N-ary Tree Preorder Traversal](https://leetcode.com/problems/n-ary-tree-preorder-traversal/) | [Typescript](https://github.com/tthomasagg/leetcode/blob/main/typescript/589-n-ary-tree-preorder-traversal/index.ts) | Easy |
* */

function preorder(root: Node | null): number[] {
    if (!root) return [];
    return [root.val].concat(root.children.flatMap(preorder));
};
