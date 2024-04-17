
export function HeroSection(){
    return(
        <section className="grid grid-cols-4 items-center">
            <div className="col-span-2 h-full flex flex-col justify-between py-12">
                <div className="">
                    <h1 className="text-6xl font-bold">
                        <span className="bg-primary inline-block text-transparent bg-clip-text">Olá, eu sou Leonardo,</span>
                        desenvolvedor Front-end
                    </h1>
                    <p className="font-bold opacity-40 mt-4">Desenvolvo aplicações Web há 1 anos, tenho experiencias com interfaces intuitivas e bonitas, utilizando React. Recentemente adquiri conhecimentos com tecnologias back-end utilizando NodeJs, tenho aplicado estes conhecimentos a 8 meses.  </p>
                </div>
                <div className="flex gap-8">
                    <button className="text-lg font-bold w-44 h-14 rounded border-2 border-primary bg-primary">Download CV</button>
                    <button className="text-lg font-bold w-44 h-14 rounded border-2 border-primary text-primary">Meus Projetos</button>
                </div>
            </div>
            <img className="col-start-4 rounded-full" src="https://avatars.githubusercontent.com/u/108422791?v=4" alt="Foto de Leonardo sorrindo, um homem branco de cabelo liso medio, utilizando oculos."/>
        </section>
    )
}