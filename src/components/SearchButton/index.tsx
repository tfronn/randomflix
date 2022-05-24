import logoImg from '../../assets/logo.svg'

interface SearchButtonProps {
  onSearchButtonClick: () => void;
  onSearchButtonPress: () => void;
}

export function SearchButton({onSearchButtonClick, onSearchButtonPress}: SearchButtonProps) {
  return (
    <div onClick={onSearchButtonPress}>
    <button onClick={onSearchButtonClick} className="w-auto h-12 px-3 flex items-center justify-between bg-opacity-60 hover:bg-opacity-80 ease-in-out duration-200 hover:text-zinc-900 dark:hover:bg-zinc-700 bg-zinc-400 sm:bg-opacity-30 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 rounded-md mb-2 sm:mb-7">
      <img src={logoImg} alt="logo rocketflix" className="w-6 h-6 mr-2" />
      <p className="font-display">Encontrar filme</p>
    </button>
  </div>
  )
}