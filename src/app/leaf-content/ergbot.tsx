import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const ergbotDescription = `
Ergbot was Ben’s final project at an application development bootcamp we attended in 2018. The MVP took a picture of an erg screen and processed it into a spreadsheet. He decided to keep it alive and work on productizing it for the wider world. He asked me to join a couple months later, and for the following years I would help develop a more fully featured automatic erg logging platform.

Although I stayed mostly on the coding side of Ergbot, I learned a lot from how Ben grew this idea. He rowed at Penn, and saw an opportunity to build something that would be directly applicable to his life, and useful to rowers and rowing teams everywhere. He worked steadily to push forward the product, bringing in people with complimentary skills to help out.

In 2024, Ergbot was acquired by Power Ten Metrics, by which time the app had 8,000+ unique users over 70+ countries.
`;

export const ergbotLeaf: Leaf = {
    key: "ergbot",
    title: "Ergbot",
    nodeDescription: "For 6 years (!) I helped my friend Ben build an erg-logging app, which got acquired in 2024.",
    description: ergbotDescription,
    dates: "October 2018 - June 2024",
    links: [
        "https://ergbot-beta.herokuapp.com/",
        "https://www.businesswire.com/news/home/20240714422349/en/ErgBot-Acquired-by-Power-Ten-Metrics-in-Agreement-Between-Rowing-Technology-Companies"
    ],
    style: {
        backgroundColor: colors.green[700]
    }
};