import { GB, IT, JP, ES, FR, RO } from "country-flag-icons/react/3x2"

export function Card ({data, type}) {

    const title = type === "movies" ? data.title : data.name
    const originalTitle = type === "movies" ? data.original_title : data.original_name

    const language = data.original_language
    let flag = null





    return (
        <>
        <li className="card">
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
        </li>
        <div className="card-info">
            <h2>{title}</h2>
            <p>
                Original: {originalTitle}
            </p>
            <p>
                ligua: {data.original_language}

            </p>
            <p>
                Voto: <span className="stars">{data.vote_average}</span>

            </p>
        </div>


        </>
        
    )
}