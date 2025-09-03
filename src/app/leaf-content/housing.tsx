import colors from "tailwindcss/colors";
import { Leaf } from "../types";

const housingDescription = `Housing feels like a natural and exciting area of focus to me. I’ve been the beneficiary of a stable home since childhood, giving me the latitude to dream and experiment. I’ve been influenced by unconventional living models: attending boarding school as a teenager and living in a van for three years as a young adult. In my travels I’ve been drawn to intentional communities of different shapes and sizes, and feel inspired by collective living and how it pairs with self-governance, climate resilience, and communalism. I see housing as a foundational aspect of our lives: a basic need; a space for care, rest, and connection—and potentially, a political nexus for building power and shaping change. I have a vision for housing that is all of these things and more.

However, in many places and for many people, this foundation is crumbling beneath our feet. Our housing system is broken, for the same reason that so many of our systems are broken: it is a vehicle for profiteering and exploitation. Bozeman is feeling the pain deeply. It is one of many small, desirable cities ensnared by multinational corporate real estate speculation. This has forced undemocratic, unsustainable growth on the urban landscape and natural environment. I feel inspired to bring transformative change to this community by creating alternative options for housing ownership and operation—ones that prevent this extractive cycle and its deleterious effects, and create the opportunity for connective, ecological, and democratic living from the ground up.

In addition to my work with Forward Montana and Bozeman Tenants United, here are some projects, movements, and experience that have informed and inspired my thinking:

- Culdesac
- Intentional Communities Movement
- Arcosanti
- Frank Lloyd Wright
- Almost Buying a House
- StrongTowns
- Vienna Green Social Housing`;

export const housingLeaf: Leaf = {
    key: "housing",
    title: "Housing",
    nodeDescription: "Designing better containers for our lives",
    description: housingDescription,
    dates: "April 2025 - June 2025",
    style: {
        backgroundColor: colors.green[400]
    }
};