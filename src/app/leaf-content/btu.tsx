import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const btuDescription = `
One day in February, I noticed two people sitting at the coop with matching black and yellow sweatshirts that said “Bozeman Tenants United.” I was heard there was a tenant union in town and was curious to see what it was about, so I approached them and struck up a conversation. Em and Josh are leaders at BTU, and were happy to indulge my interest. After Josh left, Em started asking more about me and my story. Little did I know, I was in the middle of my first one-on-one, a technique used often in the union to form meaningful “public” relationships — ones based on a mutual understanding, trust, and candor. 

In the next week, I attended my first tenant meeting and joined union members knocking doors for the Tenant Right to Counsel Campaign. I quickly learned that I actually enjoyed canvassing, and spent many Sundays that winter and spring talking to strangers on their doorsteps. I also learned how to lead effective one-on-ones, and formed relationships with my fellow union members and those I had met on the door. 

After completing a research training with the Tenant Union Federation, I co-led an effort to start a research team, responsible for collecting and managing data about buildings and landlords in Bozeman. It feels good to be directing my technical skills towards a movement for tenant power. 
`;

export const btuLeaf: Leaf = {
    key: "btu",
    title: "Bozeman Tenants United",
    nodeDescription: "Joined the city-wide tenant union in Bozeman, MT, where tenants and I are fighting for safe, affordable, and dignified housing for all.",
    description: btuDescription,
    dates: "February 2024 - Present",
    style: {
        backgroundColor: colors.green[600]
    }
};