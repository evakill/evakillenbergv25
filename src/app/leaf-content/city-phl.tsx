import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const cityPhlDescription = `
As an intern at OIT, I worked on releasing Philadelphia campaign finance data to the public through the city's Open Data program. This involved writing an ETL script to clean and transform some legacy datasets to make them more user-friendly and digestible.

My favorite part of this internship was seeing a public agency from the inside! As I was thinking about my first job out of college, I was weighing options in both public and private sector. My experience reinforced some public sector stereotypes — think Parks and Rec, with coding — but I left with a positive impression of the people I worked with. They had grit, passion, and generosity that makes them excellent coworkers and public servants.
`;

export const cityPhlLeaf: Leaf = {
    key: "city-phl",
    title: "City of Philadelphia",
    nodeDescription: "As part of my Urban Studies minor, I spent my Senior spring at uPenn working as an intern at the City of Philadelphia Office of Innovation and Technology.",
    description: cityPhlDescription,
    dates: "February 2021 - May 2021",
    style: {
        backgroundColor: colors.green[800]
    }
};