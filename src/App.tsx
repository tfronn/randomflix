import axios from "axios"
import { useState } from "react"
import { FilmPage } from "./components/FilmPage"
import { NoFilmPage } from "./components/NoFilmPage"
import { SearchButton } from "./components/SearchButton"
import { SearchPage } from "./components/SearchPage"
import { API_KEY, BASE_URL, language } from "./lib/api/api"

interface FilmProps {
  filmName?: string
  filmOverview?: string
  filmPoster?: string
  filmFailed?: string 
  }

function App() {
  const [isFilm, setIsFilm] = useState(false)
  const [filmInfo, setFilmInfo] = useState<FilmProps>({} as FilmProps)
  
  function generateRandomFilmId(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)  
  }
  
  async function handleSearch() {
    const randomFilm = generateRandomFilmId(1, 10000)
  
    try {
      const film = await axios
      .get(`${BASE_URL}${randomFilm}?${API_KEY}&${language}`)
      .then(response => response.data)
      const filmName = film.original_title
      const filmOverview = film.overview
      const filmPoster = film.poster_path
      
      setFilmInfo({filmName, filmOverview, filmPoster})
    } 
    catch(response) {
      const filmFailed = `success: "false"`
      setFilmInfo({filmFailed})
    }
  }
  
  return (
  <>
    {isFilm === false
    ?
    (
    <div className="flex justify-center">
      <SearchPage />
      <div className="h-screen flex items-center">
        <div className="flex flex-col items-center px-4 md:px-8 md:py-8 dark:bg-transparent bg-opacity-80 bg-transparent sm:bg-zinc-200 hover:bg-opacity-100 rounded-md drop-shadow-2xl ease-in-out duration-200 mx-auto sm:w-3/4 lg:w-auto ">
            <SearchButton onSearchButtonPress={() => setIsFilm(true)} onSearchButtonClick={handleSearch}/>
            <p className="font-display text-center hidden sm:flex dark:text-zinc-200 text-zinc-800">
              Clique em "Encontrar Filme" que traremos informações de alguns filmes para você assistir hoje.
            </p>
          </div>
        </div>
    </div>
    )
    :
    (
    <>
    {filmInfo.filmFailed ? (
      <div className="flex justify-center">
        <NoFilmPage />
        <div className="absolute bottom-2 sm:bottom-28 flex flex-col items-center justify-center px-4 md:px-8 md:py-4 lg:py-8 dark:bg-transparent bg-opacity-80 bg-transparent sm:bg-zinc-200 hover:bg-opacity-100 rounded-md drop-shadow-2xl ease-in-out duration-200 mx-auto sm:w-3/4 lg:w-auto ">
          <SearchButton onSearchButtonClick={handleSearch} onSearchButtonPress={() => setIsFilm(true)}/>
          <p className="font-display text-center hidden sm:flex dark:text-zinc-200 text-zinc-800">
            Clique em "Encontrar Filme" que traremos informações de alguns filmes para você assistir hoje.
          </p>
        </div>
      </div>
    ) : (
      <div className="flex justify-center">
        <FilmPage pageFilmInfo={filmInfo}/>
        <div className="absolute bottom-2 sm:bottom-28 flex flex-col items-center justify-center px-4 md:px-8 md:py-8 dark:bg-transparent bg-opacity-80 bg-transparent sm:bg-zinc-200 hover:bg-opacity-100 rounded-md drop-shadow-2xl ease-in-out duration-200 mx-auto sm:w-3/4 lg:w-auto ">
          <SearchButton onSearchButtonClick={handleSearch} onSearchButtonPress={() => setIsFilm(true)}/>
          <p className="font-display text-center hidden sm:flex dark:text-zinc-200 text-zinc-800">
            Clique em "Encontrar Filme" que traremos informações de alguns filmes para você assistir hoje.
          </p>
        </div>
      </div>
    )}
    </>
    )
    }
    
   </>
  )
}

export default App
