import * as leaves from "./leaf-content";
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
                    children: {
                        "replica": leaves.replicaLeaf,
                        "one-army": leaves.oneArmyLeaf,
                        "city-phl": leaves.cityPhlLeaf,
                        "ergbot": leaves.ergbotLeaf
                    },
                    style: {
                        backgroundColor: colors.green[600]
                    }
                },
                "community": {
                    key: "community",
                    title: "community",
                    description: "in-person impact",
                    children: {
                        "btu": leaves.btuLeaf,
                        "fmt": leaves.fmtLeaf, // TODO
                    },
                    style: {
                        backgroundColor: colors.green[500]
                    }
                }
            },
            style: {
                backgroundColor: colors.green[400]
            }
        },
        "play": {
            key: "play",
            title: "play",
            description: "life-enriching activities",
            children: {
                "vanlife": {
                    key: "vanlife",
                    title: "I lived in a van",
                    description: "",
                    children: {
                        "build": leaves.buildLeaf,
                        "travel": leaves.travelLeaf
                    },
                    style: {
                        backgroundColor: colors.green[400]
                    }
                },
                "activities": leaves.activitiesLeaf
            },
            style: {
                backgroundColor: colors.green[600]
            }
        },
        "study": {
            key: "study",
            title: "study",
            description: "continual growth",
            children: {
                "nature": leaves.natureLeaf,
                "utopia": leaves.utopiaLeaf,
                "housing": leaves.housingLeaf
            },
            style: {
                backgroundColor: colors.green[600]
            }
        },
        "practice": {
            key: "practice",
            title: "practice",
            description: "intentional repetition",
            children: {
                "writing": {
                    key: "writing",
                    title: "Writing",
                    children: {
                        "shark": leaves.sharkLeaf,
                        "letters": leaves.lettersLeaf
                    },
                    style: {
                        backgroundColor: colors.green[500]
                    }
                },
                "spanish": leaves.spanishLeaf,
                "drums": leaves.drumsLeaf
            },
            style: {
                backgroundColor: colors.green[500]
            }
        },
    }
}