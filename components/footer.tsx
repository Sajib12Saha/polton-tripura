"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { SOCIAL_MEDIA } from "@/data"


export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="space-y-6 max-w-7xl mx-auto px-6 py-12">
      {/* Grid layout with 2 sections */}
      <div className="flex flex-col justify-start md:items-center md:justify-around md:flex-row gap-8">
        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold dark:text-gray-300">Contact</h3>
          <ul className="space-y-3 text-base font-medium">
            <li className="flex items-center gap-3 text-muted-foreground hover:text-primary hover:underline">
              <Phone className="w-4 h-4 text-primary" />
              <a href={`tel:+8801608731422`}>+8801608731422</a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground hover:text-primary hover:underline">
              <Mail className="w-4 h-4 text-primary" />
              <a href={`mailto:skillpaltanbd@gmail.com`}>skillpaltanbd@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              Bazar road, Khagrachari, Chittagong, Bangladesh
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
            {SOCIAL_MEDIA.map((sm, index) => (
              <Link
                key={index}
                href={sm.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-300"
              >
                <Button size="icon">
                  <Image
                    src={sm.platform}
                    alt="social icon"
                    width={27}
                    height={27}
                    className="object-cover rounded-full"
                  />
                </Button>
              </Link>
            ))}
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
    </footer>
  )
}
