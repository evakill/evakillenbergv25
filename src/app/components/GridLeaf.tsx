import { Leaf } from "../types";

export const GridLeaf = ({ node }: { node: Leaf }) => {
    return (
        <div
            className="rounded min-w-0 min-h-0 h-full overflow-y-scroll p-4 text-white bg-green-500"
        >
            <p className="text-3xl font-bold text-white">{node.title}</p>
            {node.dates && <p className="text-base text-white italic my-1">{node.dates}</p>}
            <div className="text-base text-white whitespace-pre-line">{node.description}</div>
            {node.links && (
                <div className="flex flex-col gap-1">
                    {node.links.map(link => <a key={link} href={link} className="text-sm text-white underline">{link}</a>)}
                </div>
            )}
        </div>
    );
};
