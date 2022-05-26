import logoImg from '../../assets/logo.svg'

export function NoFilmPoster() {
  return (
    <div className="flex flex-col items-center text-center justify-center font-bold shadow-lg dark:shadow-none text-xs xs:text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl mx-4 p-4 rounded-md dark:bg-opacity-10 bg-zinc-50 bg-opacity-40 h-auto w-24 xs:w-32 md:w-36 lg:w-44 xl:w-56 2xl:w-60 sm:mr-4 md:mr-8 ">
      <p>Ops,<br></br> foi mal</p>
      <img src={logoImg} alt="Logo rocketflix" className="w-12 h-12" />
      <p>Não achei <br></br> o poster!</p>
    </div>
  )
}