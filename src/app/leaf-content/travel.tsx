import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const travelDescription = `
Although sometimes I regret not documenting my travels more formally on a blog or Instagram, it felt more important to follow my internal compass on my journeys and remain present. I’m left with the stories I remember, friends I stay in touch with, and photos on my camera roll! Here are some greats:
`;

export const travelLeaf: Leaf = {
    key: "travel",
    title: "Travel",
    nodeDescription: "Oh, the places you will go..",
    description: travelDescription,
    style: {
        backgroundColor: colors.green[500]
    }
};