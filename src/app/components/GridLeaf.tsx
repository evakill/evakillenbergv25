import { Leaf } from "../types";

export const GridLeaf = ({ node }: { node: Leaf }) => {
    return (
        <div
            className="rounded min-w-0 min-h-0 h-full overflow-y-auto scrollbar p-4 z-100 bg-green-400 text-green-950"
        >
            <p className="text-3xl font-bold mb-1">{node.title}</p>
            {node.dates && <p className="text-base italic mb-1">{node.dates}</p>}
            <p className="text-base whitespace-pre-line mb-1">{node.description}</p>
            {node.links && (
                <div className="flex flex-col gap-1">
                    {node.links.map(link => <a key={link} href={link} className="text-sm underline">{link}</a>)}
                </div>
            )}
        </div>
    );
};
