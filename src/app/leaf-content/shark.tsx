import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const sharkDescription = `
In February of 2024, I was bit by a shark! Yes, seriously. If you want the full story, you’ll have to call me.

When I was home recovering after the incident, my activity was limited to walking. Needing some fresh air and with a lot to think about, I decided to start a walking and writing ritual to process the experience of the attack. This turned into a regular practice for me that month, allowing me to excavate the trauma of the experience while connecting with my surroundings.
`;

export const sharkLeaf: Leaf = {
    key: "shark",
    title: "Shark Walks",
    nodeDescription: "It’s kinda a long story…",
    description: sharkDescription,
    links: ['https://shark-walks.notion.site/Shark-Walks-8bec521df460476aba47410d017119d1?pvs=74'],
    style: {
        backgroundColor: colors.green[500]
    }
};