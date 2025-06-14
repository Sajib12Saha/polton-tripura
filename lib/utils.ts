import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Sansita_Swashed } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const sansita = Sansita_Swashed({
  weight:[
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  subsets:[
    "latin"
  ]
})