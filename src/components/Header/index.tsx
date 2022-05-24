import logoImg from '../../assets/logo.svg';
import { DarkModeSwitch } from '../DarkModeSwitch';

export function Header() {
  return (
    <header className="flex absolute top-0 left-0 w-full justify-between items-center px-8 py-2 drop-shadow-lg dark:bg-zinc-900 bg-zinc-200 border-b border-zinc-300 dark:border-zinc-900">
      <a className="flex items-center justify-between hover:opacity-80" href="/">
        <img src={logoImg} alt="logo rocketflix" className="w-12 h-12" />
        <h1 className="font-display text-2xl absolute left-24 hidden sm:flex">RocketFlix</h1>
      </a>
    <DarkModeSwitch />
    </header>
  )
}