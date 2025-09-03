import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const oneArmyDescription = `
I first learned about One Army through YouTube! Project Kamp’s channel showcases a cool, international group of young people living together, managing the land, building sustainable infrastructure in central Portugal. I traced Project Kamp back to “One Army”, an umbrella organization which also includes Precious Plastic, a DIY plastic recycling ecosystem, and other sustainability-focused projects. One Army builds a “Community Platform” to give these projects an online space to connect interested people and share knowledge. The Community Platform is an open source repository, and I quickly jumped into making contributions, then stepping into a maintainer role.

As a maintainer, I reviewed contributions of developers from around the world, participated in maintainer meetups, and worked closely with project stakeholders to moderate content and iterate on features. Key projects included building an email notification service and integrating user profiles with Patreon.

When I traveled to Europe for a maintainer meetup in 2023, I stayed an extra two weeks to live and work at Project Kamp. I had an awesome time working (chopping bushes, designing lids for poop compost containers…), eating from the storage container kitchen, and hanging out with fun, like-minded people.

One Army taught me how to work within the orchestrated chaos of an open source repository. It also instilled the importance of open-source, not only on GitHub, but as a way to hold and share knowledge. All One Army projects have an intense focus on documentation and accessibility to replicate their work anywhere in the world, creating decentralized, networked change. I think this model is super inspiring and an effective way to approach the massive problems of our generation.

I left my maintainer role in August of 2024 to spend more time on non-programming projects, needing a little space from the computer. I’m grateful to have worked with the wonderful people at One Army and to have contributed to a world-changing mission.
`;

export const oneArmyLeaf: Leaf = {
    key: "one-army",
    title: "One Army Community Platform",
    nodeDescription: "When I wasn't coding for my day job, I helped maintain an awesome open-source project that brings communities together to solve global problems.",
    description: oneArmyDescription,
    dates: "December 2022 - August 2024",
    links: [
        "https://platform.onearmy.earth/",
        "https://github.com/ONEARMY/community-platform"
    ],
    style: {
        backgroundColor: colors.green[400]
    }
}
