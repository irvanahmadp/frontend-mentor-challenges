import { createContext, useEffect, useState, type ReactNode } from "react"
import { applyTheme, persistTheme, resolveInitialTheme, type Theme } from "./theme"

type ThemeHook = {
  theme: Theme
  setTheme: (t: Theme) => void
  toggle: () => void
}

const ThemeContext = createContext<ThemeHook>({
  theme: "dark",
  setTheme: () => {},
  toggle: () => {},
})

export function useTheme(): ThemeHook {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light"

    return resolveInitialTheme()
  })

  useEffect(() => {
    applyTheme(theme)
    persistTheme(theme)
  }, [theme])

  const setTheme = (t: Theme) => setThemeState(t)
  const toggle = () => setThemeState((t) => t === "dark" ? "light" : "dark")

  return {theme, setTheme, toggle}
}

export function ThemeProvider({children}: {children: ReactNode}) {
  const themeHook = useTheme()

  return (
    <ThemeContext value={themeHook}>{children}</ThemeContext>
  )
}