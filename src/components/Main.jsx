import { useGlobalContext } from "../context/GlobalContext"
import { ResultsList } from "./ResultsList"


export function Main() {

  const { movies,  tvs} = useGlobalContext()

  const HandleStars = (vote) => Math.ceil(vote / 2)

    
  return (

    <main>
      <h1>Peliculas</h1>
      <ResultsList type="movies" items={movies} />
        {/*<ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}-{ HandleStars (parseInt (movie.vote_average))}</li>
        })}
        </ul>*/}

      <h1>Series</h1>
      <ResultsList type="tvs" items={tvs} />
      {/*<ul>
        {tvs.map((tv) => {
          return <li key={tv.id}>{tv.name}-{ HandleStars (parseInt (tv.vote_average))}</li>
        })}
      </ul>*/}


    </main>
  )
}