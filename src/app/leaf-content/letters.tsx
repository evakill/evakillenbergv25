import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const lettersDescription = <>
    Letters from love is a practice, created by Elizabeth Gilbert (author of <i>Eat Pray Love</i> and <i>Big Magic</i>), to write a letter addressed to yourself from Love. If Love were speaking to you, what would it say? What advice would it give? This practice gives me creative permission to speak to myself with compassion, and respect; breaking cycles of self-judgement and reminding me to be more loving to myself and others.<br /><br />

    Here is a letter I wrote to myself, from Love, in November of 2024:

    <p className="bg-white rounded-sm p-5 m-5">

        My little do -er,

        <br /><br />

        Look at you! Behold your magnificence! The strong legs that support you, the invincible gut, the straight spine, the fearless hands, the smiling eyes, the beautiful mane. You are a wonder. You are a vessel of life, as limitless as your imagination and as sensitive as an insect. What will you choose to do tomorrow?<br /><br />

        Whatever it may be, my dear, it will be the right thing. Let your planning cease, let your mind make room for the space and light that fills today.Your only responsibility is to exist.To be alive at this precious moment, after which will come another moment, no less precious.Let yourself move slowly, and feel; let your steps quicken, and feel the same. Say hello to the golden treetops, who can see the whole valley and the one beyond, but don’t miss the chance to watch you run by. Smell the eucalyptus, accept its punch to your nostrils, let its wildness surprise your wildness. Bake bread, infusing the dough with your boldness, filling the kitchen with yeasty fumes. Meditate in dreamy waves, lose the breath and find it again, judge nothing. Give your love to the ones around you and the ones far away. Watching you absorb the world and the world absorb you fills me with awe.<br /><br />

        And those thoughts, the ones that fill you with frustration and self - hatred, let me love those too. Let me smother them with kisses and forgiveness. Let me render them powerless with my acceptance and tenderness. For it is only your hate, the hate that splatters so indiscriminately, that makes you feel this way. The thoughts are not you. The thoughts are not you. Unclench your fists and surrender to the natural way, the true way, the way of love. When the way feels hard to find, look no further than me, because I will be loving you, always and forever.<br /><br />

        Love, love
    </p>
</>;

export const lettersLeaf: Leaf = {
    key: "letters",
    title: "Letters from Love",
    nodeDescription: "Healing practice from Elizabeth Gilbert",
    description: lettersDescription,
    links: ['https://elizabethgilbert.substack.com?utm_source=navbar&utm_medium=web'],
    style: {
        backgroundColor: colors.green[600]
    }
};