import Typewriter from 'typewriter-effect';
import { MainButton } from './main-button';
import { SecondaryButton } from './secondary-button';
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="pb-40 px-8 flex flex-col-reverse items-center justify-center xl:grid xl:grid-cols-5 overflow-hidden">
            <div className="xl:col-span-3 h-full flex flex-col justify-between py-12 gap-8">
                <div className="text-center xl:text-left">
                    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                        <span className="bg-primary inline-block text-transparent bg-clip-text">Olá, eu sou Leonardo,</span>
                        <span className='flex flex-col gap-4 sm:flex-row justify-center xl:justify-start'>
                            desenvolvedor
                            <Typewriter options={{ strings: ['Front-end', 'Back-end', 'Full-stack'], autoStart: true, loop: true,  }}
                            />
                        </span>
                    </h1>
                    <p className="font-bold  opacity-40 mt-4 px-4 sm:px-8 lg:px-16 xl:px-0">Desenvolvo aplicações Web há 1 ano, tenho experiências com interfaces intuitivas e bonitas, utilizando React. Recentemente adquiri conhecimentos com tecnologias back-end utilizando NodeJs, tenho aplicado estes conhecimentos a 8 meses.  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row xl:justify-start xl:gap-8">
                    <MainButton>Download CV</MainButton>
                    <SecondaryButton>Meus Projetos</SecondaryButton>
                </div>
            </div>
            <div className="w-60 relative hidden xl:col-start-4 xl:col-span-2 sm:block xl:w-80 xl:ml-auto">
                <img
                    className="rounded-full z-10 relative p-2" src="https://avatars.githubusercontent.com/u/108422791?v=4" alt="Foto de Leonardo sorrindo, um homem branco de cabelo liso medio, utilizando oculos."
                />
                <div className="size-full bg-gradient-to-t from-[#3f0391] to-[#d72626] absolute top-0 rounded-full animate-[spin_10s_linear_infinite]"></div>
            </div>
        </motion.section>
    )
}