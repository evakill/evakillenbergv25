import { Root, Thumbnail, TreeNode } from "./types";

export const findNodeAndThumbnailsFromParams = (tree: Root, params: { slug?: string[] }): [TreeNode | null, Thumbnail[]] => {
    let currentNode: TreeNode | null = tree;
    const thumbnails: Thumbnail[] = [{ title: tree.title, slug: tree.key }];
    const keys = params.slug || [];

    for (const key of keys) {
        if (!currentNode) break;
        if (!('children' in currentNode)) break;
        currentNode = currentNode.children[key];
        thumbnails.push({ title: currentNode.title, slug: currentNode.key })
    }

    return [currentNode, thumbnails];
};