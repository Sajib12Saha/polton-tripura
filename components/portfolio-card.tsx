
import { PortfolioType } from "@/data"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

interface Props{
project:PortfolioType
}

export const PortfolioCard = ({project}:Props) =>{
    return (
        <Card>
            <CardContent className="space-y-3 flex flex-col items-start justify-center w-full">
            <Image 
            src={project.imgUrl}
            alt={"Polton Tripura"}
            width={300}
            height={300}
            className="object-contain overflow-hidden rounded-lg shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.8)_inset]  dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.16)_inset] p-1.5 w-full"
            />

   {project.desc && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {project.desc}
          </p>
        )}

            </CardContent>
        </Card>
    )
}