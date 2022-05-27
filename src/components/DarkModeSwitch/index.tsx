import { Popover } from '@headlessui/react'
import { Moon, Sun } from 'phosphor-react'
import useDarkMode from '../../hooks/useDarkMode';

export function DarkModeSwitch() {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <Popover className="absolute top-4 right-8 dark:text-zinc-200 text-zinc-800 cursor-pointer w-12 h-8 dark:bg-zinc-700 bg-zinc-300 hover:bg-zinc-400 dark:hover:bg-zinc-600 ease-in-out duration-200 flex items-center justify-center rounded-md" onClick={() => setTheme(colorTheme)} id="theme-toggle">
      { colorTheme === "light" 
        ?
        <Sun className="w-6 h-6 rounded-md" />
        :
        <Moon className="w-6 h-6 rounded-md" />
      }
    </Popover>
  )
}