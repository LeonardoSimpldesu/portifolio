export function NavBar(){
    return(
        <nav className="bg-[#1F2144]">
            <div className="container mx-auto w-full flex items-center  justify-between py-4">
                <h1 className="text-2xl font-bold">
                    {"<"}/<span className="text-primary">Leonardo</span>{">"}
                </h1>
                <div className="flex items-center gap-8">
                    <ul className="flex text-lg font-semibold gap-8">
                        <li>Home</li>
                        <li>Tecnologias</li>
                        <li>Portifólio</li>
                        <li>Contato</li>
                    </ul>
                    <i className="text-4xl devicon-github-original"></i>
                    <i className="text-4xl devicon-linkedin-plain"></i>
                </div>
            </div>
        </nav>
    )
}