import { use, useState } from "react";
function Search(props){
  const[recherche,setrech]=useState('')
  const[table,settable]=useState(props.films)
  function Filtrer(){
    const res=table.filter((elt)=>
      elt.title.toLowerCase().includes(recherche.toLowerCase()) || elt.genre.toLowerCase().includes(recherche.toLowerCase()))
      props.setFilms(res)
  }

  return (
    <div>
      <button id="search2" type="submit" onClick={Filtrer}>Chercher</button>
      <input id="search" type="text" onChange={(e) => setrech(e.target.value)} />
    </div>
  )
}
export default Search