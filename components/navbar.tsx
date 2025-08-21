'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { cn, sansita } from "@/lib/utils"
import { ModeToggle } from "./mode-toogle"
import { MobileNavbar } from "./mobile-navbar"
import { SocialMedia } from "@/types/type"
import { NAV_ITEMS } from "@/data"

interface Props {
  name?:string
  primaryImage?:string
  professionBio?:string
  socialMedia?:SocialMedia[];
}

export const Navbar = ({name,primaryImage, socialMedia, professionBio}:Props)  => {
    const router = useRouter()
    const firstName = name?.split(" ")[0] ;
    return (
<nav className="w-full  fixed top-0 z-50 bg-transparent shadow-md backdrop-blur-lg">
  <div className="max-w-7xl mx-auto px-4 py-2 md:py-0 flex justify-between items-center">
    
    <Link
      href="/"
      className={cn("flex gap-x-2 items-center", sansita.className)}
    >
            <div className="relative size-14 rounded-full p-2 shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.16)_inset]">
              <Image
                 src={"/paltan.jpeg"}
                 alt={"Paltan Joy Tripura"}
                 width={70}
                 height={70}
                 className="overflow-hidden rounded-full object-cover"
                  />
             </div>
      <span className="text-sm md:text-md uppercase tracking-wider text-gray-800 dark:text-gray-400">
        {firstName}
      </span>
    </Link>

    <div className="hidden md:flex flex-wrap space-x-4 py-4">
      {NAV_ITEMS.map(({ label, href }, index) => (
        <Link href={href} key={index} className="group">
          <p className="whitespace-nowrap text-sm lg:text-lg text-accent-foreground group-hover:text-primary transition-colors font-medium">
            {label}
          </p>
        </Link>
      ))}
    </div>

    <div className="flex items-center gap-x-6">
      <ModeToggle />
      <MobileNavbar socialMedia={socialMedia} primaryImage= {primaryImage} name={name} professionBio={professionBio}/>
    </div>



  </div>
</nav>

    )
}