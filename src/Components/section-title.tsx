import { motion } from "framer-motion"

export function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: .5, delay: 2,  }}
            className="flex flex-col gap-2 justify-center items-center lg:flex-row">
            <div className="w-40 border-2 border-primary hidden lg:block"></div>
            <h2 className="text-center text-4xl font-bold mx-12">{children}</h2>
            <div className="w-64 border-2 border-primary lg:w-40"></div>
        </motion.div>
    )
}