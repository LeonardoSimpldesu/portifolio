import { ProjectCard } from "./project-card";

export function ProjectsSections(){
    return(
        <section>
            <h2 className="text-center text-4xl mb-12 font-bold">PROJETOS</h2>
            <div className="grid grid-cols-3 gap-12">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </section>
    )
}