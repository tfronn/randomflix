import { GOOGLE_SEARCH } from '../../lib/api/api'

interface FilmNameProps {
   filmNameInfo: string | undefined; 
}

export function NoFilmOverview({filmNameInfo}: FilmNameProps) {
  return (
    <>
    <p className="w-full mt-4 mb-2 text-center xs:text-lg sm:text-xl 3xl:text-2xl">
      Não encontramos palavras para descrever esse filme, para mais informações
    </p>
     <a target="_blank" href={`${GOOGLE_SEARCH}${filmNameInfo}+sinopse`} className="w-fit py-4 2xl:px-8 px-4 flex items-center justify-between bg-opacity-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md font-semibold text-base cursor-pointer bg-zinc-300 hover:bg-zinc-400 hover:bg-opacity-50 text-zinc-800 dark:text-zinc-200 ease-in-out duration-200 shadow-xl">
        Clique aqui
      </a>
    </>
  )
}