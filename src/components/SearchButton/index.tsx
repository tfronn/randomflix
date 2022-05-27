import logoImg from '../../assets/logo.svg'

interface SearchButtonProps {
  onSearchButtonClick: () => void;
  onSearchButtonPress: () => void;
}

export function SearchButton({onSearchButtonClick, onSearchButtonPress}: SearchButtonProps) {
  return (
  <div className="flex flex-col items-center rounded-md bg-transparent sm:bg-zinc-200 sm:bg-opacity-50 mx-4 px-4 py-4 w-fit sm:hover:bg-opacity-70 dark:bg-transparent sm:shadow-lg dark:shadow-none">
    <div onClick={onSearchButtonPress}>
      <button onClick={onSearchButtonClick} className="w-fit py-4 2xl:px-8 px-4 flex items-center justify-between bg-opacity-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md font-semibold text-base cursor-pointer bg-zinc-300 hover:bg-zinc-400 hover:bg-opacity-50 text-zinc-800 dark:text-zinc-200 ease-in-out duration-200 mb-2 sm:mb-7 shadow-xl">
        <img src={logoImg} alt="logo rocketflix" className="w-6 h-6 3xl:w-16 3xl:h-16 3xl:mr-4 mr-2" />
        <p className="font-display 3xl:text-2xl">Encontrar filme</p>
      </button>
    </div>
    <p className="font-display text-center text-lg lg:text-xl xl:text-2xl 3xl:text-4xl hidden xs:flex dark:text-zinc-200 text-zinc-800">
      Clique em "Encontrar Filme" que traremos informações de alguns filmes para você assistir hoje.
    </p>
  </div>
  )
}


