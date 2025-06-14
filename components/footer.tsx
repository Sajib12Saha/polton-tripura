
import Link from "next/link"
import { Button } from "./ui/button"
import Image  from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { SocialMedia } from "@/types/type"
import { SOCIAL_IMAGE } from "@/data"

interface Props {
 socialMedia:SocialMedia[];
 address:string;
 phone:string;
 email:string;
 name:string;
}

export const Footer = ({socialMedia, email, address, phone, name}:Props) =>{
    const year = new Date().getFullYear();
    return(
        <div className="space-y-4 max-w-7xl mx-auto px-10 my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
        <h3 className="dark:text-gray-300 font-semibold text-lg">Contact</h3>
              <ul className="space-y-4 text-base font-medium">
    <li className="flex items-center gap-3 text-muted-foreground cursor-pointer hover:text-primary hover:underline">
  <Phone className="w-4 h-4 text-primary" />
  <a href={`tel:${phone}`} className="hover:text-primary hover:underline">
    {phone}
  </a>
</li>
<li className="flex items-center gap-3 text-muted-foreground cursor-pointer hover:text-primary hover:underline">
  <Mail className="w-4 h-4 text-primary" />
  <a href={`mailto:${email}`} className="hover:text-primary hover:underline">
    {email}
  </a>
</li>
              <li className="flex items-center gap-3  text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                {address}
              </li>
            
            </ul>
                </div>
                <div>
                <h3 className="dark:text-gray-300 text-lg font-semibold">Get the latest information</h3>
                <p className="text-muted-foreground text-sm">Stay updated with the newest trends, insights, and innovations in the industry. </p>
                <div className="flex gap-6 mt-6">
                                   {socialMedia.map((sm, index) => {
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
                </div>

            </div>
            <div className="flex items-center flex-col justify-center">
          <p className="text-sm text-muted-foreground"> © {year} {name}. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm">
        <Link href="#" className="hover:text-primary text-muted-foreground">
          Terms & Service
        </Link>
        <Link href="#" className="hover:text-primary text-muted-foreground">
          Privacy Policy
        </Link>
        </div>           
            </div>
        </div>
    )
}


