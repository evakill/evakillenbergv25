import { Root, Thumbnail, ThumbnailNode, TreeNode } from "./types";

export const findNodeFromParams = (tree: Root, params: { slug?: string[] }): TreeNode | null => {
    let currentNode: TreeNode | null = tree;
    const keys = params.slug || [];

    for (const key of keys) {
        if (!currentNode) break;
        if (!('children' in currentNode)) break;
        if (!(key in currentNode.children)) break;
        currentNode = currentNode.children[key];
    }

    return currentNode;
};

export const getThumbnailsFromParams = (tree: Root, params: { slug?: string[] }): Thumbnail[] => {
    let currentNode: TreeNode | null = tree;
    const thumbnailArr: Thumbnail[] = [];
    thumbnailArr.push({ title: tree.title, slug: [] });
    const keys = params.slug || [];

    keys.forEach((key, i) => {
        if (!currentNode) return;
        if (!('children' in currentNode)) return;
        if (!(key in currentNode.children)) return;
        currentNode = currentNode.children[key];
        thumbnailArr.push({ title: currentNode.title, slug: keys.slice(0, i + 1) });
    });

    return thumbnailArr;
};

export const getThumbnailTree = (tree: Root): ThumbnailNode => {
    const thumbnailNode: ThumbnailNode = {
        title: tree.title,
        slug: [],
        children: []
    }
    const buildThumbnailTree = (node: TreeNode, currentThumbnailNode: ThumbnailNode) => {
        if ('children' in node) {
            currentThumbnailNode.children = [];
            for (const childKey in node.children) {
                const childNode = node.children[childKey];
                const childThumbnailNode: ThumbnailNode = {
                    title: childNode.title,
                    slug: [...currentThumbnailNode.slug, childKey],
                    children: []
                };
                currentThumbnailNode.children.push(childThumbnailNode);
                buildThumbnailTree(childNode, childThumbnailNode);
            }
        }
    }

    buildThumbnailTree(tree, thumbnailNode);
    return thumbnailNode
}