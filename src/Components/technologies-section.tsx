import { TechnologieCard } from "./technologie-card";

export function TechnologiesSection(){

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
            name: "PostGress",
            src: "devicon-postgresql-plain colored"
        },
    ]

    return(
        <section className="w-full">
            <h2 className="text-center text-4xl mb-12 font-bold">TECNOLOGIAS</h2>
            <div className="grid grid-cols-5 gap-8 w-full">
                {technologiesList.map((e, i) => {
                    return(
                        <TechnologieCard name={e.name} src={e.src} key={i}/>
                    )
                })}
            </div>
        </section>
    )
}