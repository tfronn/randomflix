import { IMG_URL } from "../../lib/api/api";
import { Header } from "../Header";

  interface FilmInfoProps {
    pageFilmInfo: {
      filmName?: string
      filmOverview?: string
      filmPoster?: string
      filmFailed?: string
    }
  }

export function FilmPage({pageFilmInfo}: FilmInfoProps) {
  const filmInfo = pageFilmInfo
  
  
  return (
  <div className="dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-[#1E46A3] dark:via-black dark:to-[#C12A23]  to-blue-400 from-[#C12A23] h-screen w-full flex items-center justify-center flex-col dark:text-zinc-200 text-zinc-800 max-h-fit">
    <Header />
      <div className="h-2/5 lg:w-2/3 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center sm:-mt-52">
          <h1 className="flex mx-4 mt-8 sm:mt-0 font-bold text-xl sm:text-2xl md:text-4xl font-display px-4 text-center w-full">
          {`Que tal assistir ${filmInfo.filmName}`}
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center px-4 py-8 md:w-4/5 md:mt-12 lg:mt-24">
          <img src={`${IMG_URL}${filmInfo.filmPoster}`} alt={`Poster do filme ${filmInfo.filmName}`} className="h-auto w-40 md:mr-8"/>
          <div className="flex flex-col items-center text-justify bg-zinc-200 dark:bg-transparent py-2 rounded-md px-4 mt-2">
            <h1 className="font-display text-2xl font-semibold">{filmInfo.filmName}
            </h1>
            <p className="flex w-full text-lg overflow-auto md:overflow-y-scroll scrollbar-track-transparent scrollbar-thin md:scrollbar-none max-h-32 md:max-h-60 mt-4 lg:max-h-52">{filmInfo.filmOverview}</p>
          </div>
        </div>
      </div>
  </div>
  )
}