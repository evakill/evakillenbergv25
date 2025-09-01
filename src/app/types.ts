export type Branch = {
    title: string;
    children: Array<Branch | Leaf>;
}

export type Leaf = {
    title: string;
    parent: Branch;
    content: string;
}

export type TreeNode = Branch | Leaf;


export const isBranch = (node: TreeNode): node is Branch => {
    return Object.prototype.hasOwnProperty.call(node, 'children') && Object.prototype.hasOwnProperty.call(node, 'parent');
}

export const isLeaf = (node: TreeNode): node is Leaf => {
    return Object.prototype.hasOwnProperty.call(node, 'content')
}
