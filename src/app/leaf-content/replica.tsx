import colors from "tailwindcss/colors"
import { Leaf } from "../types"
import Image from "next/image"

const replicaDescription = <>
    After graduating in May 2021 with a major in Computer Science and a minor in Urban Studies, I was stoked to join Replica - an urban data startup at the intersection of planning and technology. I was inspired by the mission to empower decision makers with the information needed to make more informed, sustainable, and equitable decisions. <br /><br />

    For 3.5 years, I worked as a full - stack developer on the application team, building geospatial data tools from end to end.Key projects included migrating the core data API to a Python microservice, optimizing the map interface in a frontend rewrite, creating a monitoring service to detect bugs and facilitate failsafe iteration, and leading the full - stack product development of a travel gate analysis application.
    <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/replica.png`}
        alt="Replica"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded my-3"
        priority
    />
    I decided to leave Replica at the end of 2024.  It was bittersweet, but I feel confident it was the right choice.The company had changed a lot from the one I joined, and my life path was calling me in a different direction. Luckily, I have some amazing friends from my Replica era that I stay in contact with to this day, and I wish the company success!
</>

export const replicaLeaf: Leaf = {
    key: "replica",
    title: "Replica",
    nodeDescription: "This is the urban data startup where I had my first full time SWE job!",
    description: replicaDescription,
    dates: "June 2021 - December 2024",
    links: ["https://replicahq.com/"],
    style: {
        backgroundColor: colors.green[500]
    }
}