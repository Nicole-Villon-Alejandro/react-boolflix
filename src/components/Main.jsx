import { useGlobalContext } from "../context/GlobalContext"

export function Main() {

  const { movies,  tvs} = useGlobalContext()

    
  return (
    <main>
      <h1>Peliculas</h1>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>
        })}
      </ul>

      <h1>Series</h1>
      <ul>
        {tvs.map((tv) => {
          return <li key={tv.id}>{tv.name}</li>
        })}
      </ul>





    </main>
  )
}