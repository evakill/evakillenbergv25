import { JSX } from "react";

export type Root = {
    key: string;
    title: string;
    children: Record<string, Branch | Leaf>;
}

export type Branch = {
    key: string;
    title: string;
    description: string;
    children: Record<string, Branch | Leaf>;
    style: React.CSSProperties;
}

export type Leaf = {
    key: string;
    title: string;
    nodeDescription?: string;
    description?: string | JSX.Element;
    dates?: string;
    links?: string[];
    style: React.CSSProperties;
}

export type TreeNode = Root | Branch | Leaf;

export const isBranch = (node: TreeNode): node is Branch => {
    return 'children' in node && 'key' in node;
}

export const isLeaf = (node: TreeNode): node is Leaf => {
    return !('children' in node);
}

export type Thumbnail = {
    title: string;
    slug: string[];
}

export type ThumbnailNode = Thumbnail & {
    children?: ThumbnailNode[];
}
