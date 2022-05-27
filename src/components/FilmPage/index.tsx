import { IMG_URL } from "../../lib/api/api";
import { FilmPoster } from "../FilmPoster";
import { NoFilmOverview } from "../NoFilmOverview";
import { NoFilmPoster } from "../NoFilmPoster";

 export interface FilmInfoProps {
    pageFilmInfo: {
      filmName?: string
      filmOverview?: string
      filmPoster?: string | null
      filmFailed?: string
    }
  }

export function FilmPage({pageFilmInfo}: FilmInfoProps) {
  const filmInfo = pageFilmInfo

  return (
  <div className="text-zinc-800 dark:text-zinc-200 font-display">
    <div className="mt-12">
      <h1 className="mx-auto font-bold text-xl sm:text-4xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-display px-4 text-center w-full">
      {`Que tal assistir ${filmInfo.filmName}`}
      </h1>
    </div>
    <div className="flex flex-col mx-auto sm:flex-row items-center px-4 py-2 md:w-4/5 md:mt-12 lg:mt-24 md:mb-24">
      {// filmInfo.filmPoster != null ? (<img src={filmInfo.filmPoster} alt={`Poster do filme ${filmInfo.filmName}`} className="h-auto w-24 sm:w-40 lg:w-48 xl:w-60 xs:w-32 sm:mr-4 md:mr-8 shadow-lg dark:shadow-none"/>) : <NoFilmPoster /> } 
      filmInfo.filmPoster != null ? <FilmPoster filmPosterInfo={filmInfo.filmPoster}/> : <NoFilmPoster />
      }
      <div className="flex flex-col items-center text-justify bg-zinc-200 bg-opacity-40 dark:bg-transparent rounded-md px-4 mt-2 hover:bg-opacity-70 max-w-7xl py-4 shadow-lg dark:shadow-none">
        <h1 className="font-display text-2xl 2xl:text-5xl font-semibold">
          {filmInfo.filmName}
        </h1>
        { filmInfo.filmOverview === "" ? <NoFilmOverview filmNameInfo={filmInfo.filmName}/> : <p className="w-full xs:text-lg sm:text-xl 3xl:text-2xl overflow-auto md:overflow-y-scroll scrollbar-track-transparent scrollbar-thin max-h-32 md:max-h-60 mt-4 lg:max-h-52">
          {filmInfo.filmOverview}
            </p> 
        }     
      </div>
    </div>
  </div>
  )
}