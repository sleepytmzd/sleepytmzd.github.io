"use client"

import * as React from "react"
import { Moon, Sun, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"



export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    if(theme === 'dark'){
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <div>
        <button className="btn btn-blue border-2 rounded-lg border-foreground p-2 hover:bg-primary transition-colors" onClick={handleToggle}>
          {theme === 'dark' && (
            <Moon />
          )}
          {theme === 'light' && (
            <Sun />
          )}
          {theme === 'system' && (
            <SunMoon/>
          )}
        </button>
    </div>
  )
}
