import { GB, IT, JP, ES, FR, RO } from "country-flag-icons/react/3x2"

export function Card ({data, type}) {

    const title = type === "movies" ? data.title : data.name
    const originalTitle = type === "movies" ? data.original_title : data.original_name

    //const language = data.original_language
    
    const renderLanguage = (language) => {
        switch (language) {
            case "en":
                return <GB title="English" className="flag" />
            case "it":
                return <IT title="Italian" className="flag" />
            case "ja":
                return <JP title="Japanese" className="flag" />
            case "es":
                return <ES title="Spanish" className="flag" />
            case "fr":
                return <FR title="French" className="flag" />
            case "ro":
                return <RO title="Romanian" className="flag" />
            default:
                return <span>{language}</span>;
        }
    };
    





    return (
        <>
        <li className="card">
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} className="posts"/>
        </li>
        <div className="card-info">
            <h2>{title}</h2>
            <p>
                Original: {originalTitle}
            </p>
            <p>
                Idioma: {renderLanguage (data.original_language)}

            </p>
            <p>
                Voto: <span className="stars">{data.vote_average}</span>

            </p>
        </div>


        </>
        
    )
}