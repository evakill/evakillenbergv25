import Image from "next/image";
import Link from "next/link";

export default function ReadmePage() {
    return (
        <div className="max-w-2xl mx-auto py-12 px-4 whitespace-pre-line">
            <Link href="/" className="text-lg fixed left-10 top-5">&laquo; Back to the site</Link>
            <div className="flex items-end  gap-4">
                <Image
                    src="/favicon.ico"
                    alt="Tree"
                    width={40}
                    height={40}
                    className="rounded my-4"
                />
                <h1 className="text-5xl font-bold my-3">README</h1>
            </div>
            <hr />
            <p className="mt-3">Thanks for checking out my website!</p>

            <h2 className="text-2xl font-bold mt-6">First, some context…</h2>
            <Image
                src="/contributions.png"
                alt="Contributions in the last year"
                width={800}
                height={200}
                className="rounded my-4"
            />
            {`After leaving my job as a Software Engineer at the end of 2024, I took a break. Programming had been a consistent part of my life since I started my computer science degree in 2017, then learned how to build applications in 2018. While I was in college, I worked on side projects, integrated coding into my non-CS classes, worked as a contracted developer, and even did a COVID hackathon from quarantine. When I graduated, I jumped into the tech workforce as a software engineer at a startup for 3.5 years, and contributing to an open-source repository on the side. Then, in 2025, I decided I wanted a change. If I stopped coding, what would fill the space?

            I entered 2025 with a clean slate. At times, I felt unmoored without the routine of a full-time job and the psychological security it granted me. But this discomfort forced me to create meaningful work and activities for myself. I occupied my time with learning new skills and studying new ideas, becoming involved in my community, playing outside, cooking good food, and deepening my relationships. This chapter felt challenging, exciting, and nourishing.

            In July, I picked up a programming project for my tenant union, pulling some open data files into a database and running SQL queries. After the project, I realized those were the first lines of code I had written in 6 months. I also realized the project had energized me, reawakening the technical side of my brain in a way that felt really good.

            I had created a personal website in December of 2020, as I was finishing college and applying for jobs. I LOVE this site, and all the care and creativity I put into it. It struck me that the site is now 5 years old, and lots of life has happened since it was developed. I decided to update my web presence, not by changing or adding to the original site (I like the idea of an archive), but by making a new one, as a way to stick my toes back into the software development world.

            After shaking off the rust, and deciding on a fun theme for the side, I was off to the races. I am happy to share my freshly-deployed 2025 website to the world, and to be reconnecting to the creative technologist side of myself, who is back from a well-deserved and -enjoyed break!`}

            <h2 className="text-2xl font-bold mt-6">About the site</h2>

            {`The theme for this site is…. “tree”! Many of my adventures in the last six months have been firmly rooted in the physical world. Trees feel symbolic of this, while harkening back to a classic data structure that programmers know and love. (And I was itching for some recursion, I guess.)

            To move through the site, you will follow thematic "branches" to "leaves" of content, each describing an important element of my last 5 years: things I've worked on, organizations I've been involved with, things I've learned, ways I have grown. The leaves contain anecdotes, pictures, links, and ideas. It's like a resume, but more holistic and human.

            I wanted the site to be visually playful and interesting, while reinforcing the tree theme. As I iterated on the design, it became more and more tree-like, using a color palette of browns and greens, a font that reminds me of etched letters, fun forest imagery, and thumbnails that looked like tree rings on a stump.

            I enjoyed the reflective act of putting together the content for this site, and the visual and technological symbolism. I really love how it turned out. I hope you enjoy exploring this era of Eva.`}

            <Image
                src="/site-preview.png"
                alt="Site Preview"
                width={800}
                height={400}
                className="rounded my-4"
            />

            <h2 className="text-2xl font-bold mt-6">Into the weeds…</h2>

            {`For those of you who move through technological spaces:

            This site was built with Typescript, NextJS (with Static Generation), Tailwind; and deployed with Github Pages.

            Some special features:`}
            <ul className="list-disc list-inside ml-4">
                <li className="mt-2">
                    The content for my site is stored as an object in <code>tree-content</code>. The <code>generateStaticParams</code> recursively traverses this tree to create the statically generated pages based on the content. A catch-all page in <code>[[...slug]]/page.tsx</code> renders the requested tree node from the URL.  This allows me the flexibility to add new branches and leaves, or modify the tree structure, with no need to change any boilerplate.
                </li>
                <li className="mt-2">
                    I had a vision for thumbnails of text that wrap around my tree like tree rings, displaying the current path of the node and allowing users to navigate through the branches. This was tricky to get right. The rings are rendered as SVGs and require a fixed size. I use a context to get the window size and calculate the dimensions of the thumbnails, which is needed in several places throughout the app. This also solved a remounting problem that caused an annoying flash as the thumbnails resized.
                </li>
                <li className="mt-2">
                    The tree is composed on <code>GridNodes</code>, which are represent either branches or leaves in the tree, are rendered in a square grid, and are clickable. <code>GridLeaf</code>s are full-grid, scrollable containers that render the full content of a leaf. To keep my tree neat, I store the leaf contents in their own files.
                </li>
                <li className="mt-2">
                    This was my first time using Tailwind for styling, and I really liked it - it made things like flex grids, colors, transitions much more streamlined and easy to integrate.
                </li>
            </ul>

            <h2 className="text-2xl font-bold mt-6">Bye!</h2>
            Check back in 5 years for the next iteration :)
        </div>
    );
}