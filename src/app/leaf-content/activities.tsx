import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const activitiesDescription = `
This body loves to MOVE! Here are some of the ways I’ve been doing so…

- In 2021, I learned how to play the phenomenon called Pickleball. My favorite pickleball memory is playing in Oaxaca, Mexico with my friends Kelly, Adam, and Nic, and trying to explain the rules in Spanish to man who stopped by and wanted to join.
- In 2022, I lived on a Jiu Jitsu compound for 2 months and learned the art and joy of rolling around!
- On my travels, I would scour the internet for pickup soccer groups, playing with footballers across the country.
- In July of 2024, I kicked off my surfing career with a surf camp on the NorthWest coast of Spain. I surfed my way down the coast of California in December 2024 with my boyfriend/surf partner, finding some epic waves. Might be hometown bias, but I love surfing in my little corner of Rhode Island. I cannot get enough.
- In January of 2025, I moved to Montana for my first hardcore winter. I committed to become a better skiier, and had lots of fun (and some frustration) in the process. It’s hard to beat a morning where you can walk 10 minutes to the mountain shuttle, ski from 8 to 11, and be home by noon.
- In July of 2025, I completed my first century bike ride with my boyfriend Rio and friend Oliver! Powered by snickers bars and gatorade, we spun around central New Hampshire for 6.5 hours. I trained in Bozeman, exploring beautiful canyon roads and mountain views. Shoutout to the Bozeman Bike Kitchen for teaching me how to tune and maintain my bike!
`;

export const activitiesLeaf: Leaf = {
    key: "activities",
    title: "Activities",
    description: activitiesDescription,
    style: {
        backgroundColor: colors.green[500]
    }
};