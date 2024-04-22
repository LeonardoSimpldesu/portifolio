import { motion } from "framer-motion"

export function SecondaryButton({ children }: { children: React.ReactNode }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-lg font-bold w-44 h-14 rounded border-2 border-primary text-primary shadow-lg hover:shadow-primary/30 hover:bg-primary hover:text-white active:bg-primary/30 transition-colors duration-200">
            {children}
        </motion.button>
    )
}