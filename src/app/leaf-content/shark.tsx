import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const sharkDescription = `
In February of 2024, I was bit by a shark! Yes, seriously. If you want the full story, you’ll have to call me.

When I was home recovering in the month after the incident, my activity was limited to walking. Needing some fresh air and having a lot to think about, I decided to start a walking and writing ritual to process the experience of the attack. This is one of my favorite things I have created. You can find it here:
`;

export const sharkLeaf: Leaf = {
    key: "shark",
    title: "Shark Walks",
    nodeDescription: "It’s kinda a long story…",
    description: sharkDescription,
    style: {
        backgroundColor: colors.green[500]
    }
};