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
                    description: "IRL",
                    children: {
                        "btu": leaves.btuLeaf,
                        "fmt": leaves.fmtLeaf,
                        // "n-church-ave": leaves.nChurchAveLeaf
                    },
                    style: {
                        backgroundColor: colors.green[700]
                    }
                }
            },
            style: {
                backgroundColor: colors.green[800]
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
                backgroundColor: colors.green[700]
            }
        },
        "study": {
            key: "study",
            title: "study",
            description: "continual growth",
            children: {
                "nature": {
                    key: "nature",
                    title: "Natural World",
                    description: "",
                    children: {
                        "natural building": {
                            key: "natural building",
                            title: "Natural Building",
                            description: "",
                            style: {
                                backgroundColor: colors.green[700]
                            }
                        },
                        "gardening": {
                            key: "gardening",
                            title: "Gardening",
                            description: "",
                            style: {
                                backgroundColor: colors.green[800]
                            }
                        },
                        "rewilding": {
                            key: "rewilding",
                            title: "Rewilding 101",
                            description: "",
                            style: {
                                backgroundColor: colors.green[500]
                            }
                        }
                    },
                    style: {
                        backgroundColor: colors.green[600]
                    }

                },
                "politics": {
                    key: "politics",
                    title: "Politics",
                    description: "",
                    style: {
                        backgroundColor: colors.green[400]
                    },
                    children: {
                        "utrc": {
                            key: "utrc",
                            title: "Utopia Together Reading Collective",
                            description: "",
                            style: {
                                backgroundColor: colors.green[600]
                            }
                        },
                        "ise": {
                            key: "ise",
                            title: "Institute for Social Ecology",
                            description: "",
                            style: {
                                backgroundColor: colors.green[600]
                            }
                        },

                    }
                },
                "housing": {
                    key: "housing",
                    title: "Housing",
                    children: {
                        "inspirations": {
                            key: "inspirations",
                            title: "Inspirations",
                            style: {
                                backgroundColor: colors.green[700]
                            }
                        },
                        "sweetwood": {
                            key: "sweetwood",
                            title: "I almost bought a house",
                            style: {
                                backgroundColor: colors.green[600]
                            }
                        },
                        "intentional community": {
                            key: "intentional community",
                            title: "Intentional Community",
                            style: {
                                backgroundColor: colors.green[800]
                            }
                        },
                    },
                    style: {
                        backgroundColor: colors.green[500]
                    }
                }
            },
            style: {
                backgroundColor: colors.green[700]
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
                "meditation": {
                    key: "meditation",
                    title: "Meditation",
                    description: "",
                    style: {
                        backgroundColor: colors.green[400]
                    }
                },
                "yoga": {
                    key: "yoga",
                    title: "Yoga",
                    description: "",
                    style: {
                        backgroundColor: colors.green[600]
                    }
                },
                "spanish": {
                    key: "spanish",
                    title: "Spanish",
                    description: "",
                    style: {
                        backgroundColor: colors.green[700]
                    }
                }
            },
            style: {
                backgroundColor: colors.green[500]
            }
        },
    }
}