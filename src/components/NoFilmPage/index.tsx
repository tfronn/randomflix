import { FaGithub } from 'react-icons/fa'

export function NoFilmPage() {
  return (
    <div className="text-zinc-800 dark:text-zinc-200 font-display">
      <div className="text-center mx-4">
        <h1 className="font-bold text-xl sm:text-2xl md:text-4xl 3xl:text-8xl mt-12 mb-4 3xl:mb-60">
          Parece que hoje não é dia de filme,<br></br> não encontramos nada :&#40;
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center dark:bg-transparent bg-zinc-200 bg-opacity-50 hover:bg-opacity-60 px-4 py-4 rounded-md mx-4 text-center">
        <p className="text-lg lg:text-2xl 3xl:text-4xl mb-4 2xl:mb-12">
          Que tal aproveitar que não encontrou um filme e conferir o GitHub do criador do site?
        </p>
        <a target="_blank" href="https://github.com/tfronn" className="flex items-center justify-center px-8 py-4 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md font-semibold text-base cursor-pointer bg-zinc-300 hover:bg-zinc-400 hover:bg-opacity-50 ease-in-out duration-200">
          <FaGithub size={28}/>
          <p className="ml-3 hidden sm:flex cursor-pointer">
            Clique aqui para saber mais!
          </p>
          <p className="ml-3 flex sm:hidden cursor-pointer">
            Saiba mais!
          </p>
        </a>
      </div>
      <div className="flex-col md:mt-20 text-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-4xl 3xl:text-8xl mb-2 mt-4 sm:mt-12">
          Quer tentar a sorte outra vez? <br></br>
        </h1>
        <p className="text-xl md:text-2xl mb-0 2xl:mb-12">Clique Novamente</p>
      </div>
    </div>
  )
}