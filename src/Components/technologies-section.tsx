import { SectionTitle } from "./section-title";
import { TechnologieCard } from "./technologie-card";

export function TechnologiesSection() {

    const technologiesList = [
        {
            name: "React",
            src: "devicon-react-original colored"
        },
        {
            name: "TypeScript",
            src: "devicon-typescript-plain colored"
        },
        {
            name: "Tailwind",
            src: "devicon-tailwindcss-original colored"
        },
        {
            name: "NodeJs",
            src: "devicon-nodejs-plain-wordmark colored"
        },
        {
            name: "Git Source Control",
            src: "devicon-git-plain colored"
        },
        {
            name: "JavaScript",
            src: "devicon-javascript-plain colored"
        },
        {
            name: "NextJs",
            src: "devicon-nextjs-plain colored"
        },
        {
            name: "HTML & CSS",
            src: "devicon-html5-plain colored devicon-css3-plain colored"
        },
        {
            name: "Prisma",
            src: "devicon-prisma-original"
        },
        {
            name: "PostGres",
            src: "devicon-postgresql-plain colored"
        },
    ]

    return (
        <section className="w-full my-24">
            <SectionTitle>TECNOLOGIAS</SectionTitle>
            <div className="flex flex-wrap justify-center gap-8 p-12 w-full xl:grid xl:grid-cols-5 ">
                {technologiesList.map((e, i) => {
                    return (
                        <TechnologieCard name={e.name} src={e.src} key={i}/>
                    )
                })}
            </div>
        </section>
    )
}