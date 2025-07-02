import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { SocialMedia } from "@/types/type";
import { SOCIAL_IMAGE } from "@/data";

interface Props {
  socialMedia: SocialMedia[];
  address: string;
  phone: string;
  email: string;
  name: string;
}

export const Footer = ({ socialMedia, email, address, phone, name }: Props) => {
  const year = new Date().getFullYear();

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-6 py-12">
      {/* Grid layout with 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold dark:text-gray-300">Contact</h3>
          <ul className="space-y-3 text-base font-medium">
            <li className="flex items-center gap-3 text-muted-foreground hover:text-primary hover:underline">
              <Phone className="w-4 h-4 text-primary" />
              <a href={`tel:${phone}`}>{phone}</a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground hover:text-primary hover:underline">
              <Mail className="w-4 h-4 text-primary" />
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              {address}
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold dark:text-gray-300">Stay Connected</h3>
          <p className="text-sm text-muted-foreground">
            Follow on social media for updates and projects.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {socialMedia.map((sm, index) => {
              const platform = SOCIAL_IMAGE.find(
                (p) => p.name.toLowerCase() === sm.platformName.toLowerCase()
              );
              if (!platform) return null;

              return (
                <Link
                  key={index}
                  href={sm.platformLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all duration-300"
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

      {/* Footer Bottom Section */}
      <div className="flex flex-col items-center justify-center gap-2 text-sm">
        <p className="text-muted-foreground">
          © {year} Sajib Chandra Saha. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://sajibchandrasaha.vercel.app"
            className="hover:text-primary text-muted-foreground"
          >
            Terms & Service
          </Link>
          <Link
            href="https://sajibchandrasaha.vercel.app"
            className="hover:text-primary text-muted-foreground"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
