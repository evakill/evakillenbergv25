import { Root } from "./types";
import colors from 'tailwindcss/colors';


export const tree: Root = {
    title: "Eva",
    children: [
        {
            title: "work",
            children: [],
            style: {
                background: `linear-gradient(${colors.indigo[400]}, ${colors.indigo[500]})`
            }
        }, {
            title: "play",
            children: [],
            style: {
                background: `linear-gradient(${colors.yellow[400]}, ${colors.yellow[500]})`
            }
        }, {
            title: "learn",
            children: [],
            style: {
                background: `linear-gradient(${colors.emerald[400]}, ${colors.emerald[500]})`
            }
        }, {
            title: "practice",
            children: [],
            style: {
                background: `linear-gradient(${colors.rose[400]}, ${colors.rose[500]})`
            }
        },
    ]
}