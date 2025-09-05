import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const utopiaDescription = <>
    Uruguayan writer Eduardo Galeano writes of utopia, “Utopia is on the horizon. I move two steps closer; it moves two steps further away. I walk another ten steps and the horizon runs ten steps further away. As much as I may walk, I&apos;ll never reach it. So what&apos;s the point of utopia? The point is this: to keep walking.” I believe that without the ability to imagine worlds we would like to live in, we are powerless to change the world that exists. Utopian dreaming motivates me to revolutionize my life to reflect my ideals — to begin the march towards the horizon with my feet grounded in the present. <br /><br />

    Fortunately, I have found a group of brilliant people who share this belief, and are committed to practicing utopianism together. We democratically decide on study material and meet biweekly to discuss our readings. Some of our recent units have been: Social Ecology, mutual aid, co-cities, degrowth economics, and Emergent Strategy. If you are interested in joining, <a href="mailto:evakillenberg@gmail.com">let us know!</a><br /><br />

    Read more on my path to utopianism and my visions of utopia in this <a
        href="/utopia.pdf"
        target="_blank"
        rel="noopener noreferrer"
    >
        reflection
    </a> I wrote for a community newsletter.</>

export const utopiaLeaf: Leaf = {
    key: "utopia",
    title: "Utopia Together Reading Club",
    nodeDescription: "Collective imagination for transformative change",
    description: utopiaDescription,
    dates: "September 2024 - Present",
    style: {
        backgroundColor: colors.green[400]
    }
};