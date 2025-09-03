"use client";

import React from "react";
import { TreeGrid } from "../components/TreeGrid";
import { tree } from "../tree-content";
import { useRouter, useParams } from "next/navigation";
import { findNodeFromParams } from "../utils";

export default function Home() {
    const router = useRouter();
    const params = useParams();

    const node = React.useMemo(() => findNodeFromParams(tree, params), [params]);

    // Redirect to home if node not found
    React.useEffect(() => {
        if (!node) {
            router.replace("/");
        }
    }, [node, router]);

    if (!node) {
        return null; // Optionally, show a loading spinner here
    }

    return <>
        <TreeGrid treeNode={node} />
        {node.key == "" && <p className="text-base fixed bottom-50 left-15 w-[200px]">Hi there! This is my portfolio site, created in 2025. Learn more about this site in the <a href="https://github.com/evakill/evakillenbergv25/blob/main/README.md">README</a> and check out some of my other work <a href="https://evakill.github.io">here</a>. Enjoy your wanderings!</p>}
    </>

}
