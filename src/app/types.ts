export type Root = {
    title: string;
    children: Array<TreeNode>;
}

export type Branch = {
    title: string;
    children: Array<TreeNode>;
    style: React.CSSProperties;
}

export type Leaf = {
    title: string;
    content: string;
}

export type TreeNode = Branch | Leaf;


export const isBranch = (node: TreeNode): node is Branch => {
    return Object.prototype.hasOwnProperty.call(node, 'children');
}

export const isLeaf = (node: TreeNode): node is Leaf => {
    return Object.prototype.hasOwnProperty.call(node, 'content')
}
