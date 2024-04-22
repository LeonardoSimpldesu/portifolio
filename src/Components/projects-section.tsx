import { ProjectCard } from "./project-card";
import { SectionTitle } from "./section-title";

export function ProjectsSections() {
    return (
        <section className="py-16">
            <SectionTitle>PROJETOS</SectionTitle>
            <div className="flex flex-col gap-12 mt-12 px-12 lg:grid lg:grid-cols-2 2xl:grid-cols-3">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}