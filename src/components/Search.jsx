import { useState, useEffect } from "react"



export function Search() {

    const [query, setQuery] = useState('')




    return (
      <> 
        <form>
            <input type="text" onChange={ e => setQuery (e.target.value)} />
            <button type="submit">Search</button>
        </form>


      </>
    )
  }