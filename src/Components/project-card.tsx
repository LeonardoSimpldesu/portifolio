import { ChevronsRight } from "lucide-react";

export function ProjectCard(){
    return(
        <div className="group aspect-[640/421] bg-[url('/devStore.png')] bg-cover bg-center">
           <div className="hidden flex-col gap-4 items-center justify-center text-center bg-black bg-opacity-10 size-full group-hover:flex backdrop-blur-sm">
               <h3 className="text-4xl font-bold">DevStore</h3>
               <p className="w-80 font-medium">Uma página de uma loja de roupas, com consulta de API, filtros de pesquisa, utilizando NextJs e fastify no back-end.</p>
               <a className="text-lg font-bold py-2 px-4 rounded border-2 border-primary bg-primary" href="#">Deploy<ChevronsRight className="ml-2 inline"/></a>
           </div>
        
        </div>
    )
}