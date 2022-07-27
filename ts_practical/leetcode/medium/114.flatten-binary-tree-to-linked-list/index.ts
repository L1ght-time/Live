TODO: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/";

function flatten(root: TreeNode | null): TreeNode {
  if (!root) return;

  const leftTail = flatten(root.left);
  const rightTail = flatten(root.right);

  if (leftTail) {
    leftTail.right = root.right;
    root.right = root.left;
    root.left = null;
  }

  return rightTail || leftTail || root;
}
