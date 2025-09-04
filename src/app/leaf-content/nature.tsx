import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const natureDescription = `
I love being a student of the outdoors. My travels in my tiny van led me to be outside far more than I ever have been in my life—spending weekends hiking, swimming, camping, and marveling over the natural beauty of this country. 

I’ve also gravitated to more integrated opportunities to learn about the natural world through the WWOOF program. I have grown and harvested olives at a 40-acre olive grove in Northern California, and tended to goats, chickens, rabbits, tomatoes, and cucumbers on an urban farm in Portland, Oregon. In western Massachusetts, I worked in a community garden that feeds 30 people, watching the patterns of dozens of vegetables and herbs and the insects and creatures they attract.

I’ve also developed an interest in natural building, volunteering at Community Rebuilds in Moab, UT and helping build straw bale houses. In my internship at an intentional community in Massachusetts, I worked on a tiny house using wood frame construction, slip straw insulation, and cobb walls. I have almost convinced my parents to let me build a cobb pizza oven in their backyard :)

Taking a course called “Rewilding 101” with Peter Michael Bauer put more language and context to my natural studies. Over our 300,000 year evolution as a species, our bodies have lived in the modern world for only a tiny fraction of time. I believe being in relationship with nature connects us to our biological and anthropological history, and teaches us important lessons about change, harmony, reciprocity, and the cyclical nature of life.
`

export const natureLeaf: Leaf = {
    key: "nature",
    title: "The Natural World",
    nodeDescription: "Learning from the greatest teachers",
    description: natureDescription,
    style: {
        backgroundColor: colors.green[600]
    }
};