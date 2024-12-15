import { useState } from "react";
import Details from "./MovieDetails";
import Sort from "./SortButtons";
import Pagination from "./pagination";
import Favoris from "./Favoris";

function Afficher(props) {
  const [select, setSelec] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const filmsPerPage = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedFilms = props.films.slice(
    (currentPage - 1) * filmsPerPage,
    currentPage * filmsPerPage
  );

  return (
    <div>
      <div id="content">
        {paginatedFilms.map((elt) => (
          <div id="element"
            key={elt.title}
          >
            <p><span>Titre: </span>{elt.title}</p>
            <p><span>Genre: </span>{elt.genre}</p>
            <p><span>Année de réalisation: </span>{elt.releaseYear}</p>
            <p><span>Note: </span>{elt.rating}</p>
            <button onClick={() => setSelec(elt)}>Plus de détails</button>
            <button onClick={() => props.ajouterAuxFavoris(elt)}>Ajouter aux Favoris</button>            
          </div>
        ))}
      </div>
      {select && (
        <div id="element2">
          <Details
            title={select.title}
            director={select.director}
            releaseYear={select.releaseYear}
            genre={select.genre}
            rating={select.rating}
          />
          <button onClick={() => setSelec(null)}>Retour</button>
        </div>
      )}
      <Pagination
        films={props.films}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      
    </div>
  );
}

export default Afficher;