// first attempt
// Beats: Runtime 29.50% / Memory 30%

function preorder(root: Node | null): number[] {
    if (!root) return [];
    return [root.val].concat(root.children.flatMap(preorder));
};
