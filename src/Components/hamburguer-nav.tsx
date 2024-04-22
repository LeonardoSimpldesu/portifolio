import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

export function HamburguerNav() {

    const [active, setActive] = useState(false)

    function openAndCloseMenu() {
        setActive(!active)
    }

    return (
        <>
            <Menu strokeWidth={3} size={32} className="float-right mr-4 mt-4 sm:hidden" onClick={() => { openAndCloseMenu() }} />
            <div className={`bg-[rgb(0,0,0,0.4)] w-full h-screen fixed z-10 transition-all ${active ? 'block' : 'hidden'}`} >
                <div className="bg-[#1A1B28] w-[60%] h-screen float-right py-8 px-6 flex flex-col gap-4 relative" onBlur={() => { openAndCloseMenu() }}>
                    {/* <h1 className="text-xl font-bold">
                    {"</"}<span className="text-primary">Leonardo</span>{">"}
                </h1> */}
                    <X strokeWidth={3} className="absolute right-8" onClick={() => { openAndCloseMenu() }} />
                    <img src="L.svg" className="w-8" alt="" />
                    <ul className="gap-2 flex flex-col">
                        <li className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100 '><Link to='technologies-section' onClick={() => { openAndCloseMenu() }} smooth={true} duration={700}>Tecnologias</Link></li>
                        <li className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'><Link to='projects-section' onClick={() => { openAndCloseMenu() }} smooth={true} duration={500}>Projetos</Link></li>
                        <li className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'><Link to='contacts-section' onClick={() => { openAndCloseMenu() }} smooth={true} duration={500}>Contatos</Link></li>
                    </ul>
                    <div className="mt-auto ml-auto">
                        <a href="https://github.com/LeonardoSimpldesu" target="_blank"><i className="text-4xl devicon-github-original transition-all duration-300 hover:text-primary mr-4"></i></a>
                        <a href="https://www.linkedin.com/in/leonardo-de-souza-almeida-101541241/" target="_blank"><i className="text-4xl devicon-linkedin-plain transition-all duration-300 hover:text-primary"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}