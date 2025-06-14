"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState, ComponentProps } from "react"

export const ThemeProvider = ({ children, ...props }: ComponentProps<typeof NextThemesProvider>) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
