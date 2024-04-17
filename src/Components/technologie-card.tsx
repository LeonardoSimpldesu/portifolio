export function TechnologieCard({name, src}: {name: string, src: string}){
    return(
        <div className="bg-[#28293C] flex flex-col justify-center items-center aspect-square rounded-md">
            <i className={"text-8xl " + src}></i>
            <p className="mt-4 text-lg font-semibold">{name}</p>
        </div>
    )
}