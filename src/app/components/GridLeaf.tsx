import { Leaf } from "../types";
import Image from "next/image";

export const GridLeaf = ({ node }: { node: Leaf }) => {
    return (
        <div
            className="rounded min-w-0 min-h-0 h-100vh overflow-auto p-3 text-white bg-green-500"
        >
            <p className="text-3xl font-bold text-white">{node.title}</p>
            {node.dates && <p className="text-base text-white italic my-1">{node.dates}</p>}
            {/* {node.imgPath && (
                <Image
                    src={node.imgPath}
                    alt={node.title}
                    width={0}
                    height={200}
                    sizes="100vw"
                    className="w-full h-auto rounded-md"
                />
            )} */}
            <p className="text-base text-white">{node.description}</p>
            {node.links && (
                <div className="flex flex-col gap-1">
                    {node.links.map(link => <a key={link} href={link} className="text-sm text-white underline">{link}</a>)}
                </div>
            )}
        </div>
    );
};
