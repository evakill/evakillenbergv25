import colors from "tailwindcss/colors";
import { Leaf } from "../types";
import Image from "next/image"

const activitiesDescription = <>
    This body loves to MOVE! Here’s how I like to do so:
    <ul className="list-disc list-inside ml-4 my-2">
        <li>
            On my travels, I like to find the local pickup soccer group to kick around and make new friends.
        </li>
        <li>Backpacking remains one of my favorite ways to spend a weekend.</li>
        <li>
            In 2021, I first engaged in the phenomenon called Pickleball. My favorite pickleball memory is playing in Oaxaca, Mexico with my friends Kelly, Adam, and Nic, and trying to explain the rules in Spanish to man who stopped by and wanted to join.
        </li>
        <li>
            In 2022, I lived on a Jiu Jitsu compound for 2 months and learned the art and joy of rolling around!
        </li>
        <li>
            In July of 2024, I kicked off my surfing career with a surf camp in Galicia, the northwest coast of Spain. That December, my boyfriend/surf partner and I surfed our way down the California coast, finding some epic waves. In 2025, I found out it’s possible to surf in Montana (!!) and got hooked on river surfing. This might be hometown bias, but my favorite spots are the breaks in my little corner of Rhode Island, where I surf with my Uncle Graham.
        </li>
        <li>
            In January of 2025, I moved to Montana for my first hardcore winter. I committed to become a better skiier, and had lots of fun (and some frustration) in the process - skiing 40 days over the course of the season.
        </li>
        <li>
            In July of 2025, I completed my first century bike ride with my boyfriend Rio and friend Oliver! Powered by snickers bars and gatorade, we spun around central New Hampshire for 6.5 hours. I trained in Bozeman, exploring beautiful canyon roads and mountain views. Special shoutout to the Bozeman Bike Kitchen for teaching me how to tune and maintain my bike!
        </li>
    </ul>
    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/soccer.png`}
        alt="Soccer game"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
    />
    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/ski.png`}
        alt="Skiing"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
    />
    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/surf.png`}
        alt="Surfing"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
    />
    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/pickle.JPG`}
        alt="Pickleball"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
    />
    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/bike.png`}
        alt="Bike"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
    />
    <video
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/riversurf.mov`}
        controls
        className="w-full h-auto rounded my-3"
        preload="metadata"
    />
</>;

export const activitiesLeaf: Leaf = {
    key: "activities",
    title: "Activities",
    nodeDescription: "My favorite ways to play! ",
    description: activitiesDescription,
    links: ["https://www.opensourcebjj.net/", "https://laybacksurfcamp.de/en/home/", "https://www.bozemanbikekitchen.org/"],
    style: {
        backgroundColor: colors.green[500]
    }
};