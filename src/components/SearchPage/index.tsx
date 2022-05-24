import { Header } from '../Header';

export function SearchPage() {
  return (
      <div className="dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-[#1E46A3] dark:via-black dark:to-[#C12A23]  to-blue-400 from-[#C12A23] h-screen absolute w-full flex items-center justify-center flex-col dark:text-zinc-200 text-zinc-800">
          <Header />
          <div className="flex absolute top-32 md:top-60">
          <h1 className="font-bold text-xl sm:text-2xl md:text-4xl font-display mb-12">
            Não sabe o que assistir?
          </h1>
        </div>
      </div>
  )
}