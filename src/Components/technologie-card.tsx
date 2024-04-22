import { motion } from "framer-motion"

export function TechnologieCard({ name, src }: { name: string, src: string }) {
    return (
        <motion.div
            transition={{ ease: "easeOut", duration: .2}}
            whileHover={{ scale: 1.1 }}
            className="bg-[#28293C] w-52 flex flex-col justify-center items-center aspect-square rounded-md hover:bg-[#3e405f] 2xl:w-full">
            <i className={"text-8xl " + src}></i>
            <p className="mt-4 text-lg font-semibold">{name}</p>
        </motion.div>
    )
}