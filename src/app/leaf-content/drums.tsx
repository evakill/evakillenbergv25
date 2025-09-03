import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const drumsDescription = `
Decided to learn the loudest, most impractical instrument.

When my older brother was in high school, he formed a garage band with his friend group. He was the drummer, and so band practices were typically held at my house. I was also often asked to video tape their concerts, which I did with careful attention. Seeing him make music with his friends was inspiring. I developed a fascination with the big, resonant sounds and groovy rhythms of the drums.

In my adulthood, I have encountered musicians with awe and a tinge of envy. I want to be able to make music for and with people! And when imagined future Eva jamming with friends, she was on the drums. I expressed this desire to my brother, and for Christmas he gave me his old drum practice pad and a drum lesson. Since I started lessons in February of 2025, I’ve been hooked.

I love the mechanical learning process of drums - I practice a bit every day, and I can see results as my motor memory catches on. My drum teacher, Alex, has taught me a lot about how the motor cortex functions — how to work slow to fast, give the brain “gap” breaks while learning, quiet the prefrontal cortex once you’ve gotten something down, and avoid deepening bad habits. After playing for a while, my brain feels sore, like it just had a good workout.

I haven’t gotten to band-worthy skills yet, but I like tapping along as my friends playing guitar or sing, and feel my band fantasies getting closer.
`;

export const drumsLeaf: Leaf = {
    key: "drums",
    title: "Drums",
    nodeDescription: "Decided to learn the loudest, most impractical instrument",
    description: drumsDescription,
    style: {
        backgroundColor: colors.green[700]
    }
};