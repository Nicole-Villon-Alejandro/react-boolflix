import { Card } from "./Card"


export function ResultsList({type, items}) {
    return (
        <section>
            <p>
                Resultados : {items.length}

            </p>
            <ul >
                { 
                  items && items.length > 0 ? (
                      items.map(item => <Card key={item.id} data={item} type={type} />)
                    ) : (
                      <li>No hay resultados</li>
                    )
                }
            </ul>

        </section>
    )
}