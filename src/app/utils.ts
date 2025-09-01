import { Root, TreeNode } from "./types";

export const findNodeAndThumbnailsFromParams = (tree: Root, params: { slug?: string[] }): [TreeNode | null, string[]] => {
    let currentNode: TreeNode | null = tree;
    const thumbnails: string[] = [tree.title];
    const keys = params.slug || [];

    for (const key of keys) {
        if (!currentNode) break;
        if (!('children' in currentNode)) break;

        thumbnails.push(currentNode.title);

        currentNode = currentNode.children[key];
    }

    return [currentNode, thumbnails];
};