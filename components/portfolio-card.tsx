
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { ArrowDown, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Portfolio } from "@/types/type"

interface Props{
project:Portfolio
}

export const PortfolioCard = ({project}:Props) =>{
    return (
        <Card>
            <CardContent className="space-y-3 flex flex-col items-start justify-center w-full">
            <Image 
            src={project.image}
            alt={project.title}
            width={300}
            height={300}
            className="object-contain overflow-hidden rounded-lg shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.8)_inset]  dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.16)_inset] p-1.5 w-full"
            />
                <div className="flex items-center justify-between w-full">
                <h3 className="text-xl font-bold dark:text-gray-300">{project.title}</h3>
                <div className="flex items-center gap-x-2">
             <Heart className="size-3.5 stroke-rose-500"/>
             <p className="text-muted-foreground">{project.react}</p>
                </div>
               
                </div>
          
                <p className="text-muted-foreground">{project.desc}</p>
                {project.externalLink &&   <Link href={project.externalLink as string} className="hover:scale-110 transition-all duration-300 group">
                <Button type="button" className="group-hover:bg-primary group-hover:text-white">
                External Link
                </Button>
                </Link>}
         
                <div className="space-y-3">
                   <p className="flex items-center gap-x-3 text-base font-semibold text-muted-foreground">Technology <span><ArrowDown className="size-3.5 text-primary"/></span></p> 
                  <div className="flex gap-3 flex-wrap items-center">
                {project.technology?.map((tech,index)=>(
                    <Button key={index} className="hover:scale-110 duration-300 transition-all rounded-full p-1" size={"icon"}>
                        <Image
                        src={tech.image}
                        alt={"next js"}
                        width={40}
                        height={40}
                        className="object-cover rounded-full"
                        />
                    </Button>
                ))}
                </div>
                </div>
          


            </CardContent>
        </Card>
    )
}