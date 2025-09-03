import { Leaf } from "../types";

export const GridLeaf = ({ node }: { node: Leaf }) => {
    return (
        <div
            className="rounded min-w-0 min-h-0 h-full overflow-y-auto scrollbar p-4 z-100 bg-green-400 text-green-950"
        >
            <p className="text-3xl font-bold">{node.title}</p>
            {node.dates && <p className="text-base italic my-1">{node.dates}</p>}
            <p className="text-base whitespace-pre-line">{node.description}</p>
            {node.links && (
                <div className="flex flex-col gap-1 mt-3">
                    {node.links.map(link => <a key={link} href={link} className="text-sm underline">{link}</a>)}
                </div>
            )}
        </div>
    );
};
