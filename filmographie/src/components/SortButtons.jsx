import { useState } from "react";

function Sort(props) {
  const [trie, setTrie] = useState(true);

  function trienote() {
    const sortedMovies = [...props.films].sort((a, b) =>
      trie ? a.rating - b.rating : b.rating - a.rating
    );
    props.setFilms(sortedMovies);  
    setTrie(!trie);
  }
  const [trieann,settrianne]=useState(true)
  function trieannee(){
    const sortyear=[...props.films].sort((a,b)=>trieann?a.releaseYear-b.releaseYear : b.releaseYear-a.releaseYear
  )
  props.setFilms(sortyear)
  settrianne(!trieann)
  }

  return (
    <div>
      <button onClick={trienote}>
        Trier par note {trie ? 'croissant' : 'décroissant'}
      </button>
      <button onClick={trieannee}> Trier par année {trieann ? 'croissant' : 'décroissant'}</button>
    </div>
  )
}
export default Sort