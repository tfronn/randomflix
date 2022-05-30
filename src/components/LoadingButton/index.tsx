import { Loading } from "../Loading";

export function LoadingButton() {
  return (
    <div className="flex items-center rounded-md bg-transparent sm:bg-zinc-200 sm:bg-opacity-50 mx-4 px-4 py-4 w-fit sm:hover:bg-opacity-70 dark:bg-transparent sm:shadow-lg dark:shadow-none">
      <div >
        <button disabled className="w-fit py-4 2xl:px-8 px-4 flex items-center justify-between bg-opacity-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md font-semibold text-base cursor-pointer bg-zinc-300 hover:bg-zinc-400 hover:bg-opacity-50 text-zinc-800 dark:text-zinc-200 ease-in-out duration-200 mb-2 sm:mb-7 shadow-xl">
          <Loading />
          <p className="font-display 3xl:text-2xl">Encontrando filme</p>
        </button>
      </div>
    </div>
    )
  }
  
  
