import axios from "axios"
import { useState } from "react"
import { DarkModeSwitch } from "./components/DarkModeSwitch"
import { FilmPage } from "./components/FilmPage"
import { Header } from "./components/Header"
import { Loading } from "./components/Loading"
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
  const [isLoadingFilm, setIsLoadingFilm] = useState(false)
  
  function generateRandomFilmId(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)  
  }
  
  async function handleSearch() {
    const randomFilm = generateRandomFilmId(1, 10000)
    setIsLoadingFilm(true)
    try {
      const film = await axios
      .get(`${BASE_URL}${randomFilm}?${API_KEY}&${language}`)
      .then(response => response.data)
      const filmName = film.original_title
      const filmOverview = film.overview
      const filmPoster = film.poster_path
      
      setFilmInfo({filmName, filmOverview, filmPoster})
      setIsLoadingFilm(false)
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
      <div className="flex flex-col items-center justify-center h-screen w-full overflow-auto scrollbar-thin scrollbar-track-transparent">
        <Header />
        <DarkModeSwitch />
        <SearchPage />
        <SearchButton onSearchButtonPress={() => setIsFilm(true)} onSearchButtonClick={handleSearch}/>
      </div>
    )
    :
    (
    <>
    {filmInfo.filmFailed ? (
      <div className="flex flex-col items-center justify-center h-screen w-full overflow-auto scrollbar-thin scrollbar-track-transparent">
        { isLoadingFilm === false ? <Loading /> :
        <>
          <Header />
          <DarkModeSwitch />
          <NoFilmPage />
          <SearchButton onSearchButtonClick={handleSearch} onSearchButtonPress={() => setIsFilm(true)}/>
        </>
        }

        
      </div>
      ) : (
      <div className="flex flex-col items-center justify-center h-screen w-full overflow-auto scrollbar-thin scrollbar-track-transparent pt-12">
        { isLoadingFilm === true ? <Loading /> :
        <>
          <Header />
          <DarkModeSwitch />
          <FilmPage pageFilmInfo={filmInfo}/>
          <SearchButton onSearchButtonClick={handleSearch} onSearchButtonPress={() => setIsFilm(true)}/>
        </>
        }
      </div>
        )}
      </>
    )}
  </>
)}

export default App
