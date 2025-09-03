import colors from "tailwindcss/colors";
import { Leaf } from "../types";
import Image from "next/image"

const buildDescription = <>
    I often say building the van was one of my favorite parts of van life. I purchased an empty cargo van in June, and was sleeping, cooking, and working out of it in August. This came down to many, many hours with my dad’s corded drill and jigsaw in my parent’s driveway. Luckily, I have lots of footage to remember the process! Check out my “vanstagram” where I documented the transformation:

    <div className="my-4 flex justify-center">
        <iframe
            src="https://www.instagram.com/p/CSRgKAcL1Od/embed"
            width="400"
            height="480"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            allow="encrypted-media"
            title="Instagram"
            className="rounded"
        ></iframe>
    </div>


    One of my first stops on the road was “Gutted”, a festival / production set of a van building TV show.. yes, for real. In reality TV format, three teams, composed of famous vanlife YouTubers, builders, and DIY-ers, competed to do a full conversion in 5 days. (Vanlife was riding a high at this point.) Tickets were sold to come see the process unfold and hang out with other nomads in the desert of Colorado. I was sold! I would end up being a production assistant on the set of Gutted season 2, and was a hopeful participant of Gutted season 3, before the show flopped.

    At Gutted, the “TinyHomeTours” YouTube channel interviewed me and showcased my van - check out the video here:

    <div className="my-4 flex justify-center">
        <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/yM8Ck8ULaCA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded"
        ></iframe>
    </div>

    In January of 2023, I decided to upgrade and remodel the “kitchen” half of my van. For a month and a half, I hung out in Tucson and joined the local makerspace. This round of building, I had access to a plethora of tools and equipment to create my vision. I also joined a nearby pottery studio with the ambition to create a clay sink for my updated design. This process taught me a lot about building and the importance of community creative spaces! Here are some photos of the remodel:

    I love my little home, and while I no longer live in it full time, I am deeply attached to this container that has held my creativity and explorations, and love having a adventure-mobile for wherever life takes me.
    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/van.jpg`}
        alt="Van from the back"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
        priority
    />
    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/van-kitch.jpg`}
        alt="Van kitchen"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
        priority
    />
    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/van-sink.jpg`}
        alt="Van sink"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
        priority
    />

</>;

export const buildLeaf: Leaf = {
    key: "build",
    title: "Build",
    nodeDescription: "Creating my dream tiny home (on wheels)",
    description: buildDescription,
    style: {
        backgroundColor: colors.green[400]
    }
};