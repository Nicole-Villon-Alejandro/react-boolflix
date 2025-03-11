export function Card ({data, type}) {

    const title = type === "movies" ? data.title : data.name
    const originalTitle = type === "movies" ? data.original_title : data.original_name


    return (
        <>
        <li>
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
        </li>
        <div>
            <h2>{title}</h2>
            <p>
                {originalTitle}
            </p>
            <p>
                ligua: {data.original_language}

            </p>
            <p>
                Voto: {data.vote_average}

            </p>
        </div>


        </>
        
    )
}