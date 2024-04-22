import { Mail, MapPin, Phone } from "lucide-react";
import { SectionTitle } from "./section-title";

export function Footer() {
    return (
        <footer className="bg-[#28293C] w-full">
            <div className="container mx-auto text-center py-12">
                <SectionTitle>Meus Contatos</SectionTitle>
                <div className="flex flex-col justify-center items-center gap-4 mt-12 lg:flex-row lg:flex-wrap">
                    <div className="text font-bold px-8 py-2 w-fit rounded border-2 border-primary bg-primary"><Mail className="inline" /> leonardodesouzaalmeidas@gmail.com</div>
                    <div className="text-lg font-bold px-8 py-2 w-fit rounded border-2 border-primary bg-primary"><MapPin className="inline" /> Belo Horizonte, Minas Gerais</div>
                    <div className="text-lg font-bold px-8 py-2 w-fit rounded border-2 border-primary bg-primary"><Phone className="inline" /> +55 (31) 98378-1618</div>
                </div>
            </div>
        </footer>
    )
}