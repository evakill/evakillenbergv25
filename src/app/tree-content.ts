import { Root } from "./types";
import colors from 'tailwindcss/colors';


export const tree: Root = {
    title: "Eva",
    children: [
        {
            title: "work",
            description: "contributions to the world",
            children: [],
            style: {
                backgroundColor: colors.indigo[500]
            }
        }, {
            title: "play",
            description: "life-enriching activities",
            children: [],
            style: {
                backgroundColor: colors.yellow[500]
            }
        }, {
            title: "learn",
            description: "continual growth",
            children: [],
            style: {
                backgroundColor: colors.emerald[500]
            }
        }, {
            title: "practice",
            description: "intentional repetition",
            children: [],
            style: {
                backgroundColor: colors.rose[500]
            }
        },
    ]
}