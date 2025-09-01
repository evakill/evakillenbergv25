import { Root } from "./types";
import colors from 'tailwindcss/colors';


export const tree: Root = {
    title: "Eva",
    children: [
        {
            title: "work",
            children: [],
            style: {
                backgroundColor: colors.indigo[500]
            }
        }, {
            title: "play",
            children: [],
            style: {
                backgroundColor: colors.yellow[500]
            }
        }, {
            title: "learn",
            children: [],
            style: {
                backgroundColor: colors.emerald[500]
            }
        }, {
            title: "practice",
            children: [],
            style: {
                backgroundColor: colors.rose[500]
            }
        },
    ]
}