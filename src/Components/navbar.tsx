import { Link } from 'react-scroll'
import { motion } from "framer-motion"
export function NavBar() {


    return (
        <nav>
            {/* bg-[#1F2144] */}
            <div
                className="container mx-auto w-full flex items-center  justify-between py-4 px-8">
                <motion.h1 initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: .2}} className="text-2xl font-bold tracking-wider">
                    {"</"}<span className="text-primary">Leonardo</span>{">"}
                </motion.h1>
                <div className="flex items-center gap-8">
                    <ul className="flex text-lg font-semibold gap-8">
                        {/* <li><Link to='hero-section' smooth={true} duration={500}>Home</Link></li> */}
                        <motion.li initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: .5 }} className='cursor-pointer transition-all duration-300 hover:text-red-500 '><Link to='technologies-section' smooth={true} duration={700}>Tecnologias</Link></motion.li>
                        <motion.li initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: .7 }} className='cursor-pointer transition-all duration-300 hover:text-red-500'><Link to='projects-section' smooth={true} duration={500}>Projetos</Link></motion.li>
                        <motion.li initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1 }} className='cursor-pointer transition-all duration-300 hover:text-red-500'><Link to='contacts-section' smooth={true} duration={500}>Contatos</Link></motion.li>
                    </ul>
                    <motion.a initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.2 }} href="https://github.com/LeonardoSimpldesu" target="_blank"><i className="text-4xl devicon-github-original transition-all duration-300 hover:text-primary"></i></motion.a>
                    <motion.a initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.5 }} href="https://www.linkedin.com/in/leonardo-de-souza-almeida-101541241/" target="_blank"><i className="text-4xl devicon-linkedin-plain transition-all duration-300 hover:text-primary"></i></motion.a>
                </div>
            </div>
        </nav>
    )
}