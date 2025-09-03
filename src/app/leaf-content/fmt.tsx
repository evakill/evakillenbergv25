import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const fmtDescription = `
As a 5-person fellowship cohort, we organized a housing campaign focused on promoting affordable, sustainable, and accessible housing through local zoning code reform. We studied organizing tactics and housing justice; researched policy, planned events, expanded base, and wrote and delivered public comment to the City of Bozeman. 
`;

export const fmtLeaf: Leaf = {
    key: "fmt",
    title: "Forward Montana",
    nodeDescription: "I was a member of a 12-week Housing Fellowship, organizing for pro-housing zoning code reform in Bozeman.",
    description: fmtDescription,
    dates: "April 2025 - June 2025",
    style: {
        backgroundColor: colors.green[800]
    }
};