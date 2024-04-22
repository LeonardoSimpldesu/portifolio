import { motion } from "framer-motion"

export function MainButton({ children }: { children: React.ReactNode }) {
    return (
        <a href={"/Leonardo-Curriculo.pdf"} download="Curriculo Leonardo" target="_blank">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-lg font-bold w-44 h-14 rounded border-2 border-primary bg-primary  shadow-lg hover:shadow-primary/30 active:bg-primary/30 ">
                {children}
            </motion.button>
        </a>
    )
}