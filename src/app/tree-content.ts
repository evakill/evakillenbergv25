import { Root } from "./types";
import colors from 'tailwindcss/colors';


export const tree: Root = {
    title: "Eva",
    key: "",
    children: {
        "work":
        {
            key: "work",
            title: "work",
            description: "contributions to the world",
            children: {
                "digital": {
                    key: "digital",
                    title: "digital",
                    description: "code deployed",
                    children: {},
                    style: {
                        backgroundColor: colors.green[400]
                    }
                },
                "community": {
                    key: "community",
                    title: "community",
                    description: "IRL",
                    children: {},
                    style: {
                        backgroundColor: colors.green[600]
                    }
                }
            },
            style: {
                backgroundColor: colors.green[500]
            }
        },
        "play": {
            key: "play",
            title: "play",
            description: "life-enriching activities",
            children: {},
            style: {
                backgroundColor: colors.green[600]
            }
        },
        "study": {
            key: "study",
            title: "study",
            description: "continual growth",
            children: {},
            style: {
                backgroundColor: colors.green[700]
            }
        },
        "practice": {
            key: "practice",
            title: "practice",
            description: "intentional repetition",
            children: {},
            style: {
                backgroundColor: colors.green[400]
            }
        },
    }
}