import { Root } from "./types";
import colors from 'tailwindcss/colors';


export const tree: Root = {
    title: "Eva",
    children: {
        "work":
        {
            key: "work",
            title: "work",
            description: "contributions to the world",
            children: {},
            style: {
                backgroundColor: colors.indigo[500]
            }
        },
        "play": {
            key: "play",
            title: "play",
            description: "life-enriching activities",
            children: {},
            style: {
                backgroundColor: colors.yellow[500]
            }
        },
        "study": {
            key: "study",
            title: "study",
            description: "continual growth",
            children: {},
            style: {
                backgroundColor: colors.emerald[500]
            }
        },
        "practice": {
            key: "practice",
            title: "practice",
            description: "intentional repetition",
            children: {},
            style: {
                backgroundColor: colors.rose[500]
            }
        },
    }
}