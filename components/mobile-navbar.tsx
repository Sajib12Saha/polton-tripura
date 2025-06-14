'use client'
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import Image from "next/image"
import { Separator } from "./ui/separator"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { SocialMedia } from "@/types/type"
import { NAV_ITEMS, SOCIAL_IMAGE } from "@/data"


interface Props {
 socialMedia?:SocialMedia[];
 primaryImage?:String;
 name?:String;
 professionBio?:string;
}

export const MobileNavbar = ({socialMedia, primaryImage, name, professionBio}:Props) =>{

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const naving = (href:string) =>{
    router.push(href)
    setIsOpen(false)
  }

    return (
       <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="block md:hidden" asChild>
            <Button>
              <Menu className="stroke-primary size-5"/>
            </Button>
        </SheetTrigger>
        <SheetContent className="space-y-4 p-6 px-12 overflow-y-auto" side="left">
        <SheetTitle className="sr-only">Nav item</SheetTitle>
            <div className="space-y-2">
           <div className="relative size-14 rounded-full p-2 shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.16)_inset]">
             <Image
                src={primaryImage as string || ""}
                alt={name as string || ""}
                width={70}
                height={70}
                className="overflow-hidden rounded-full object-cover"
                 />
            </div>

                   <div>

                   </div>
            </div>
            <Separator/>
        <div className="flex flex-col items-start gap-y-4">
      {NAV_ITEMS.map(({ label, href }, index) => (
        <div key={index} className="group" onClick={()=>naving(href)}>
          <p className="whitespace-nowrap text-base font-medium lg:text-lg text-accent-foreground group-hover:text-primary transition-colors ">
            {label}
          </p>
        </div>
      ))}
    </div>
    <Separator/>
         <p className="text-base font-semibold text-primary">FIND WITH ME</p>
            <div className="flex items-center gap-x-2 flex-wrap">
                    {socialMedia?.map((sm, index) => {
  const platform = SOCIAL_IMAGE.find(
    (p) => p.name.toLowerCase() === sm.platformName.toLowerCase()
  );

  if (!platform) return null;

  return (
    <Link
      key={index}
      href={sm.platformLink}
      className="hover:scale-110 transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button size="icon">
        <Image
          src={platform.img}
          alt={platform.name}
          width={27}
          height={27}
          className="object-cover rounded-full"
        />
      </Button>
    </Link>
  );
})}
                </div>

        </SheetContent>
       </Sheet>
    )
}