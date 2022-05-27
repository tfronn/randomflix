import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <header className="flex fixed top-0 left-0 w-full justify-between items-center px-8 py-2 drop-shadow-lg dark:bg-zinc-900 bg-zinc-200 border-b border-zinc-300 dark:border-zinc-900 font-display text-zinc-800 dark:text-zinc-200">
      <a className="flex items-center justify-between hover:opacity-80" href="/">
        <img src={logoImg} alt="logo rocketflix" className="w-12 h-12" />
        <h1 className="font-display text-2xl ml-4 invisible sm:visible md:visible">
          RandomFlix
        </h1>
      </a>
    </header>
  )
}