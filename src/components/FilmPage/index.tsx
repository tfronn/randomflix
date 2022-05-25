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
  <div className="text-zinc-800 dark:text-zinc-200 font-display">
    <Header />
      <div className="mt-12">
        <div className="mt-12">
          <h1 className="mx-auto font-bold text-xl sm:text-4xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-display px-4 text-center w-full">
          {`Que tal assistir ${filmInfo.filmName}`}
          </h1>
        </div>
        <div className="flex flex-col mx-auto sm:flex-row items-center px-4 py-8 md:w-4/5 md:mt-12 lg:mt-24">
          <img src={`${IMG_URL}${filmInfo.filmPoster}`} alt={`Poster do filme ${filmInfo.filmName}`} className="h-auto w-24 sm:w-40 lg:w-48 xl:w-60 sm:mr-4 md:mr-8"/>
          <div className="flex flex-col items-center text-justify bg-zinc-200 bg-opacity-40 dark:bg-transparent py-2 rounded-md px-4 mt-2 hover:bg-opacity-80 max-w-7xl">
            <h1 className="font-display text-2xl 2xl:text-5xl font-semibold">
              {filmInfo.filmName}
            </h1>
            <p className="w-full text-lg 2xl:text-xl overflow-auto md:overflow-y-scroll scrollbar-track-transparent scrollbar-thin max-h-32 md:max-h-60 mt-4 lg:max-h-52">
              {filmInfo.filmOverview}
            </p>
          </div>
        </div>
      </div>
  </div>
  )
}