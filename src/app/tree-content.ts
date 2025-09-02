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
                        "replica": {
                            key: "replica",
                            title: "Replica",
                            shortDescription: "This is the urban data startup where I had my first full time SWE job!",
                            description: `Worked as a full-stack developer on the application team, building geospatial data tools to empower users with insights into trends within their cities. Key projects included migrating the core data API to a Python microservice, delivering a frontend rewrite of the map interface, and leading the full-stack product development of a travel gate analysis application. Technologies: Typescript, Python, SQL, Postgres, NodeJS, NextJS, Vercel, Storybook, Jest, Mapbox, Docker, CircleCI, Google Cloud Platform`,
                            dates: "June 2021 - December 2024",
                            links: ["https://replicahq.com/"],
                            imgPath: "/replica.png",
                            style: {
                                backgroundImage: `url(/replica.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                color: colors.black
                            }
                        },
                        "one-army": {
                            key: "one-army",
                            title: "One Army Community Platform",
                            shortDescription: "When I wasn't coding for my day job, I helped maintain an awesome open-source project that brings communities together to solve global problems.",
                            description: "Worked as a contracted maintainer on the Community Platform, an open-source software tool to document and share knowledge between communities that tackle global problems. Reviewed contributions of developers from around the world, participated in maintainer meetups, and worked closely with project stakeholders to moderate content and iterate on features. Key projects included building an email notification service and integrating user profiles with Patreon. Technologies: Typescript, ReactJS, NodeJS, Firebase (database, hosting, cloud functions, auth, extensions), Docker, CircleCI, Cypress",
                            dates: "December 2022 - August 2024",
                            links: ["https://platform.onearmy.earth/", "https://github.com/ONEARMY/community-platform"],
                            imgPath: "/one-army.png",
                            style: {
                                backgroundColor: colors.green[800]
                            }
                        },
                        "city-phl": {
                            key: "city-phl",
                            title: "City of Philadelphia",
                            shortDescription: "As part of my Urban Studies minor, I spent my Senior spring at uPenn working as an intern at the City of Philadelphia Office of Innovation and Technology.",
                            description: "Data Analytics Intern @ City of Philadelphia Office of Innovation and Technology. Released Philadelphia campaign finance data to the public through the city's Open Data program. Technologies: Postgres, SQL",
                            dates: "February 2021 - May 2021",
                            style: {
                                backgroundColor: colors.green[800]
                            }
                        },
                        "ergbot": {
                            key: "ergbot",
                            title: "Ergbot App",
                            shortDescription: "For 6 years (!) I helped my friend Ben build an erg-logging app, which got aquired in 2024.",
                            description: "Worked as the lead engineer at Ergbot, a computer vision erg-logging software startup with over 8,000+ unique users over 70+ countries. The Ergbot mobile app processed erg logs from photos within seconds, uploading the data to a personal spreadsheet and team hub. Administrators managed their team and logs via a web interface. Ergbot was aquired by Power Ten Metrics in 2024. Technologies: MongoDB, ExpressJS, NodeJS, React Native, React.",
                            dates: "October 2018 - June 2024",
                            links: ["https://ergbot-beta.herokuapp.com/", "https://www.businesswire.com/news/home/20240714422349/en/ErgBot-Acquired-by-Power-Ten-Metrics-in-Agreement-Between-Rowing-Technology-Companies"],
                            imgPath: "/ergbot.png",
                            style: {
                                backgroundColor: colors.green[700]
                            }
                        }
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
                        "btu": {
                            key: "btu",
                            title: "Bozeman Tenants United",
                            shortDescription: "City-wide tenant union..",
                            description: "",
                            style: {
                                backgroundColor: colors.green[600]
                            }
                        },
                        "fmt": {
                            key: "fmt",
                            title: "Forward Montana",
                            shortDescription: "Progressive civic nonprofit...",
                            description: "",
                            style: {
                                backgroundColor: colors.green[800]
                            }
                        },
                        "n-church-ave": {
                            key: "n-church-ave",
                            title: "My Neighborhood",
                            shortDescription: "",
                            description: "",
                            style: {
                                backgroundColor: colors.green[700]
                            }
                        }
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
                    title: "Van Life",
                    shortDescription: "Living the van life...",
                    description: "",
                    style: {
                        backgroundColor: colors.green[400]
                    }
                },
                "physical": {
                    key: "physical",
                    title: "physical",
                    description: "",
                    children: {
                        "bjj": {
                            key: "bjj",
                            title: "Brazilian Jiu-Jitsu",
                            description: "",
                            style: {
                                backgroundColor: colors.green[500]
                            }
                        },
                        "surfing": {
                            key: "surfing",
                            title: "Surfing",
                            description: "",
                            style: {
                                backgroundColor: colors.green[400]
                            }
                        },
                        "skiing": {
                            key: "skiing",
                            title: "Skiing",
                            description: "",
                            style: {
                                backgroundColor: colors.green[500]
                            }
                        },
                        "century": {
                            key: "century",
                            title: "100-mile Bike Ride",
                            description: "",
                            style: {
                                backgroundColor: colors.green[600]
                            }
                        }, "soccer": {
                            key: "soccer",
                            title: "Soccer",
                            description: "",
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