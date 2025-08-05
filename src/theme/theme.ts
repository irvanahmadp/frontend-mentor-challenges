export type Theme = "light" | "dark"

const STORAGE_KEY = "theme"

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === "light" || value === "dark") return value

    return null
  } catch {
    return null
  }
}

export function getPreferredTheme(): Theme {
  if (typeof window == "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {

  }
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function resolveInitialTheme(): Theme {
  return getStoredTheme() || getPreferredTheme()
}