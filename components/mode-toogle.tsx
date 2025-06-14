"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme()

  const toggle_theme = () => {
    // Toggle between light and dark theme
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }
  
  return (
    <Button
      size="icon"
      onClick={toggle_theme}
    >
      {/* Sun icon for light mode */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 stroke-primary" />
      {/* Moon icon for dark mode */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 stroke-primary" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
