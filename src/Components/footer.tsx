import { Mail, MapPin, Phone } from "lucide-react";

export function Footer(){
    return (
        <footer className="bg-[#28293C] w-full">
            <div className="container mx-auto text-center py-12">
                <div className="flex justify-center items-center">
                    <div className="w-40 border-2 border-primary"></div>
                        <h2 className="text-center text-4xl font-bold mx-12">Meus Contatos</h2>
                    <div className="w-40 border-2 border-primary"></div>
                </div>
                <div className="flex justify-center items-center gap-4 mt-12">
                    <div className="text-lg font-bold px-8 py-2 w-fit rounded border-2 border-primary bg-primary"><Mail className="inline"/> leonardodesouzaalmeidas@gmail.com</div>
                    <div className="text-lg font-bold px-8 py-2 w-fit rounded border-2 border-primary bg-primary"><MapPin className="inline"/> Belo Horizonte, Minas Gerais</div>
                    <div className="text-lg font-bold px-8 py-2 w-fit rounded border-2 border-primary bg-primary"><Phone className="inline"/> +55 (31) 98378-1618</div>
                </div>
            </div>
        </footer>
    )
}