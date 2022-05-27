import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    if(localStorage.getItem("tema") === "light") {
      return "light"
    } else {
      return "dark"
    }
  });
  const colorTheme = theme === 'light' ? 'dark' : 'light'
  localStorage.setItem("tema", theme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme);
    root.classList.add(theme)
    
  }, [theme])
  return [colorTheme, setTheme] as const;
}