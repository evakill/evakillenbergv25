import colors from "tailwindcss/colors";
import { Leaf } from "../types";
import Image from "next/image"

const filenames = [
    'van-drone.mov',
    'aspens.jpeg',
    'catalina.JPG',
    'moab.jpeg',
    'sleep.jpg',
    'yellowstone.JPG',
    'sedona-hike.jpg',
    'pbj.jpeg',
    'bryce.jpeg',
    'canyon.jpeg',
    'fest.jpeg',
    'camp.jpeg',
    'katahdin.jpeg',
    'maine.jpeg',
    'baja-jam.JPG',
    'baja.MOV',
    'rio.jpeg',
]


const travelDescription = <>
    After graduating from college, I hit the road in a 15-foot Ford van, outfitted with a sink, stove, solar-powered fridge, collapsible bed, and a basic supply of clothes, gear, and supplies. I was inspired by the opportunity to explore the country, the idea of a minimalist, nomadic lifestyle, and the action-packed, well-edited content of van-life YouTubers. <br /><br />

    Although sometimes I regret not documenting my travels more formally on a blog or Instagram,
    it felt more important to follow my internal compass on my journeys and remain present. Three years later, I’m left with the stories I remember, friends I stay in touch with, and photos on my camera roll!

    Here are some greats:
    {filenames.map((filename) => {
        const isVideo = filename.endsWith(".mp4") || filename.endsWith(".MP4") || filename.endsWith(".mov") || filename.endsWith(".MOV");
        const src = `${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/van/${filename}`;
        return isVideo ? (
            <video
                key={filename}
                src={src}
                controls
                className="w-full h-auto rounded my-3"
                preload="metadata"
            />
        ) : (
            <Image
                key={filename}
                src={src}
                alt={filename}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded my-3"
                priority
            />
        );
    })}

</>

export const travelLeaf: Leaf = {
    key: "travel",
    title: "Travel",
    nodeDescription: "Oh, the places you will go..",
    description: travelDescription,
    dates: "September 2021 - December 2024",
    style: {
        backgroundColor: colors.green[500]
    }
};