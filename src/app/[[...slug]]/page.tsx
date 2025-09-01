import React from "react";
import { tree } from "../tree-content";
import { Branch, isLeaf, Leaf } from "../types";
import Home from "../components/Home";

// Generate static params for dynamic routes in order to allow export of the app. 
export function generateStaticParams() {
  const params: { slug?: string[] }[] = [];
  params.push({ slug: [''] }); // for the root path

  // Recurse through the tree to get an array of all viable paths.
  const getSlugsForNode = (node: Branch | Leaf): string[][] => {
    if (isLeaf(node)) {
      return [[node.key]];
    }
    const childNodes = Object.values(node.children)
    if (childNodes.length === 0) {
      return [[node.key]];
    }
    const childParams = childNodes.flatMap(node => getSlugsForNode(node))
    return [[node.key], ...childParams.map(param => [node.key, ...param])];
  }

  const allSlugs = Object.values(tree.children).flatMap(node => getSlugsForNode(node));
  return params.concat(allSlugs.map(slug => ({ slug })));
}

export default function Page() {
  return <Home />

}
