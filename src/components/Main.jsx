import { useGlobalContext } from "../context/GlobalContext"

export function Main() {

  const { movies,  tvs} = useGlobalContext()

  const HandleStars = (vote) => Math.ceil(vote / 2)

    
  return (
    <main>
      <h1>Peliculas</h1>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}-{ HandleStars (parseInt (movie.vote_average))}</li>
        })}
      </ul>

      <h1>Series</h1>
      <ul>
        {tvs.map((tv) => {
          return <li key={tv.id}>{tv.name}-{ HandleStars (parseInt (tv.vote_average))}</li>
        })}
      </ul>





    </main>
  )
}