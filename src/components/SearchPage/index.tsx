import axios from "axios"
import { useState } from "react"
import { API_KEY, BASE_URL, IMG_URL, language } from "../../lib/api/api"
import { FilmPage } from "../FilmPage"
import { Loading } from "../Loading"
import { LoadingButton } from "../LoadingButton"
import { NoFilmPage } from "../NoFilmPage"
import { SearchButton } from "../SearchButton"

interface FilmProps {
  filmName?: string
  filmOverview?: string
  filmPoster?: string | null
  filmFailed?: string 
  }

export function SearchPage() {
  const [isFilm, setIsFilm] = useState(false)
  const [filmInfo, setFilmInfo] = useState<FilmProps>({} as FilmProps)
  const [isLoadingFilm, setIsLoadingFilm] = useState(false)



  function generateRandomFilmId(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)  
  }
  
  async function handleSearch() {
    const randomFilm = generateRandomFilmId(1, 100000)
    setIsLoadingFilm(true)
    try {
      
      const film = await axios
      .get(`${BASE_URL}${randomFilm}?${API_KEY}&${language}`)
      .then(response => response.data)
      
      const filmName = film.original_title
      const filmOverview = film.overview
      const filmPath = film.poster_path
      
      if (filmPath === null) {
        let filmPoster = null
        setFilmInfo({filmName, filmOverview, filmPoster})
      } else {
      let filmPoster = await axios
      .get(`${IMG_URL}${filmPath}`)
      .then(response => response.request.responseURL)    
      setFilmInfo({filmName, filmOverview, filmPoster})
      }
      setTimeout(() => setIsLoadingFilm(false), 300) 
    } 
    catch(response) {
      setTimeout(() => setIsLoadingFilm(false), 300)
      const filmFailed = `success: "false"`
      setTimeout(() => setFilmInfo({filmFailed}), 300)
    }
  }
  return (
       <>
    {isFilm === false
      ?
      (
        <div className="flex flex-col items-center justify-center h-screen w-full overflow-auto scrollbar-thin scrollbar-track-transparent">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-base xs:text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-display mb-12 dark:text-zinc-200 text-zinc-800">
              Não sabe o que assistir?
            </h1>
          </div>
          <SearchButton onSearchButtonPress={() => setIsFilm(true)} onSearchButtonClick={handleSearch}/> 
        </div>
      )
      :
      (
      <>
      {filmInfo.filmFailed ? (
        <div className="flex flex-col items-center justify-center h-screen w-full overflow-auto scrollbar-thin scrollbar-track-transparent">
          { isLoadingFilm === true ? <Loading /> :
          <>
            <NoFilmPage />
            <SearchButton onSearchButtonPress={() => setIsFilm(true)} onSearchButtonClick={handleSearch}/> 
          </>
          }
        </div>
        ) : (
        <div className="flex flex-col items-center justify-center h-screen w-full overflow-auto scrollbar-thin scrollbar-track-transparent pt-12">
          { isLoadingFilm === true ? <Loading /> :
          <>
            <FilmPage pageFilmInfo={filmInfo}/>
            <SearchButton onSearchButtonPress={() => setIsFilm(true)} onSearchButtonClick={handleSearch}/>
          </>
          }
        </div>
          )}
        </>
      )}
      </>
  )
}