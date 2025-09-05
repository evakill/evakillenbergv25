import colors from "tailwindcss/colors";
import { Leaf } from "../types";
import Image from "next/image"

const fmtDescription = <>
    As a 5-person fellowship cohort, we organized a housing campaign focused on promoting affordable, sustainable, and accessible housing through local zoning code reform. We studied organizing tactics and housing justice; researched policy, planned events, expanded base, and wrote and delivered public comment to the City of Bozeman.

    Key moments included facilitating a discussion of 40 young people about how zoning impacts housing, the environment, and transportation; proposing the Graduated Square Foot Cap policy as a mechanism to incentivize more affordable development; and creating an interactive neighborhood display at our community art show.

    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/fractopolis.jpeg`}
        alt="Fractopolis art show"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
    />

    This fellowship was the perfect entry point to explore engaging with local government, participating in community-led change, and understanding housing policy. Working closely with the zoning code connected to my studies of urbanism and city planning. It also was a great introduction to Bozeman, my new hometown; its community leaders, politics, challenges, and what makes it special.
</>

export const fmtLeaf: Leaf = {
    key: "fmt",
    title: "Forward Montana",
    nodeDescription: "Organizing for zoning code reform in Bozeman as a Housing Fellow.",
    description: fmtDescription,
    dates: "April 2025 - June 2025",
    links: ['https://forwardmontana.org/'],
    style: {
        backgroundColor: colors.green[400]
    }
};