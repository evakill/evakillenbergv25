import { Root } from "./types";
import colors from 'tailwindcss/colors';
import { cityPhlContent } from "./leaf-content";
import { replicaContent } from "./leaf-content/replica";

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
                        "city-phl": {
                            key: "city-phl",
                            title: "City of Philadelphia",
                            description: "Data Analytics Intern @ City of Philadelphia Office of Innovation and Technology. Released Philadelphia campaign finance data to the public through the city's Open Data program.  \n \n Technologies: Postgres, SQL",
                            dates: "February 2021 - May 2021",
                            style: {
                                backgroundColor: colors.green[800]
                            }
                        },
                        "replica": {
                            key: "replica",
                            title: "Replica",
                            description: `Worked as a full-stack developer on the application team, building geospatial data tools to empower users with insights into trends within their cities. Key projects included migrating the core data API to a Python microservice, delivering a frontend rewrite of the map interface, and leading the full-stack product development of a travel gate analysis application. \n \n Technologies: Typescript, Python, SQL, Postgres, NodeJS, NextJS, Vercel, Storybook, Jest, Mapbox, Docker, CircleCI, Google Cloud Platform`,
                            dates: "June 2021 - December 2024",
                            style: {
                                backgroundColor: colors.green[500]
                            }
                        },
                        "one-army": {
                            key: "one-army",
                            title: "One Army Community Platform",
                            dates: "December 2022 - August 2024",
                            description: "Worked as a contracted maintainer on the Community Platform, an open-source software tool to document and share knowledge between communities that tackle global problems. Reviewed contributions of developers from around the world, participated in maintainer meetups, and worked closely with project stakeholders to moderate content and iterate on features. Key projects included building an email notification service and integrating user profiles with Patreon. \n \n Technologies: Typescript, ReactJS, NodeJS, Firebase (database, hosting, cloud functions, auth, extensions), Docker, CircleCI, Cypress",
                            style: {
                                backgroundColor: colors.green[600]
                            }
                        },
                        "ergbot": {
                            key: "ergbot",
                            title: "Ergbot App",
                            description: "Worked as the lead engineer at Ergbot, a computer vision erg-logging software startup with over 8,000+ unique users over 70+ countries. The Ergbot mobile app processed erg logs from photos within seconds, uploading the data to a personal spreadsheet and team hub. Administrators managed their team and logs via a web interface. Ergbot was aquired by Power Ten Metrics in 2024. Technologies: MongoDB, ExpressJS, NodeJS, React Native, React.",
                            dates: "October 2018 - June 2024",
                            links: ["https://ergbot-beta.herokuapp.com/", "https://www.businesswire.com/news/home/20240714422349/en/ErgBot-Acquired-by-Power-Ten-Metrics-in-Agreement-Between-Rowing-Technology-Companies"],
                            style: {
                                backgroundColor: colors.green[700]
                            }
                        }
                    },
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