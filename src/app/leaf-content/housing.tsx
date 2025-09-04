import colors from "tailwindcss/colors";
import { Leaf } from "../types";
import Link from "next/link";

const housingDescription = <>Housing feels like a natural and exciting area of focus to me. I’ve been the beneficiary of a stable home since childhood, giving me the latitude to dream and experiment. I’ve been influenced by unconventional living models: attending boarding school as a teenager and living in a van for three years as a young adult. In my travels I’ve been drawn to intentional communities of different shapes and sizes, and feel inspired by collective living and how it pairs with self-governance, climate resilience, and communalism. I see housing as a foundational aspect of our lives: a basic need; a space for care, rest, and connection—and potentially, a political nexus for building power and shaping change. I have a vision for housing that is all of these things and more. <br /><br />

    However, in many places and for many people, this foundation is crumbling beneath our feet. Our housing system is broken, for the same reason that so many of our systems are broken: it is a vehicle for profiteering and exploitation. Bozeman is feeling the pain deeply. It is one of many small, desirable cities ensnared by multinational corporate real estate speculation. This has forced undemocratic, unsustainable growth on the urban landscape and natural environment. I feel inspired to bring transformative change to this community by creating alternative options for housing ownership and operation—ones that prevent this extractive cycle and its deleterious effects, and create the opportunity for connective, ecological, and democratic living from the ground up.<br /><br />

    In addition to my community organizing work with <Link href="/work/community/fmt">Forward Montana</Link> and <Link href="/work/community/btu">Bozeman Tenants United</Link>, here are some people, projects, movements, ideas, and experiences that have informed my thinking:

    <ul className="list-disc list-inside ml-4 my-2">
        <li>
            <a href="https://culdesac.com/">Culdesac</a>: A planned car-free neighborhood; building cities for people, not cars
        </li>
        <li>
            <a href="https://www.ic.org/foundation-for-intentional-community/">Intentional Communities Movement</a>: Promoting models of living based on shared resources, co-governance, and connection. I attended the Intentional Communities Conference at Twin Oaks in 2024 and engaged in the Sirius Community Internship program in 2025.
        </li>
        <li>
            <a href="https://www.strongtowns.org/">Strong Towns</a>: Proposing a model of development in U.S. cities based on iterative, community-driven, sustainably-financed development.
        </li>
        <li>
            <a href="https://climateandcommunity.org/research/vienna-green-social-housing/">Vienna Green Social Housing</a>: A model of municipally-owned, affordable, and ecological housing model in Vienna, Austria.
        </li>
        <li>
            Almost Buying a House: In 2023, I went under contract on a little cabin in the woods in Putney, Vermont. The deal fell through after inspection, but the process forced me to reckon with the opportunities and risks of homeownership.
        </li>
        <li>
            <a href="https://www.arcosanti.org/">Arcosanti</a>: An experiment in architecture, ecology, and urbanism in the Arizona desert. I visited in 2022.
        </li>
        <li>
            Frank Lloyd Wright: Iconic American architect, famous for integrating natural themes into designs. I toured three of his homes on my most recent drive through the midwest.
        </li>
    </ul>
</>;

export const housingLeaf: Leaf = {
    key: "housing",
    title: "Housing",
    nodeDescription: "Designing better containers for our lives",
    description: housingDescription,
    style: {
        backgroundColor: colors.green[400]
    }
};