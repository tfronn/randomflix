interface FilmPosterProps {
  filmPosterInfo: string;
}

export function FilmPoster({filmPosterInfo}: FilmPosterProps) {
  
  return (
    <img src={filmPosterInfo} alt="Poster do filme" className="h-auto w-24 sm:w-40 lg:w-48 xl:w-60 xs:w-32 sm:mr-4 md:mr-8 shadow-lg dark:shadow-none"/>
  )
}