import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Search from './components/search';
import Sort from './components/SortButtons';
import Addfilm from './components/Addfilmform';
import Afficher from './components/MovieList';
import Details from './components/MovieDetails';
import Favoris from './components/Favoris';
import Footer from './components/footer';
function App() {
  const [films, setFilms] = useState([
    {
      "title": "Inception",
      "director": "Christopher Nolan",
      "releaseYear": 2010,
      "genre": "Science Fiction",
      "rating": 8.8
    },
    {
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "releaseYear": 1972,
      "genre": "Crime",
      "rating": 9.2
    },
    {
      "title": "The Dark Knight",
      "director": "Christopher Nolan",
      "releaseYear": 2008,
      "genre": "Action",
      "rating": 9.0
    },
    {
      "title": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "releaseYear": 1994,
      "genre": "Crime",
      "rating": 8.9
    },
    {
      "title": "Schindler's List",
      "director": "Steven Spielberg",
      "releaseYear": 1993,
      "genre": "Historical Drama",
      "rating": 9.0
    },
    {
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "releaseYear": 1994,
      "genre": "Drama",
      "rating": 9.3
    },
    {
      "title": "Forrest Gump",
      "director": "Robert Zemeckis",
      "releaseYear": 1994,
      "genre": "Comedy-Drama",
      "rating": 8.8
    },
    {
      "title": "The Matrix",
      "director": "Lana Wachowski, Lilly Wachowski",
      "releaseYear": 1999,
      "genre": "Science Fiction",
      "rating": 8.7
    },
    {
      "title": "Fight Club",
      "director": "David Fincher",
      "releaseYear": 1999,
      "genre": "Drama",
      "rating": 8.8
    },
    {
      "title": "The Lord of the Rings: The Return of the King",
      "director": "Peter Jackson",
      "releaseYear": 2003,
      "genre": "Fantasy",
      "rating": 9.0
    }
  ]);
  const [favoris, setFavoris] = useState([]);

  const ajouterAuxFavoris = (film) => {
      if (!favoris.some((fav) => fav.title === film.title)) {
          setFavoris([...favoris, film])
      }
  };
  return (
    <div className="App">
      <Header />
      <Addfilm films={films} setFilms={setFilms} />
      <Search films={films} setFilms={setFilms}  />
      <Sort films={films} setFilms={setFilms}/>
      <h2>Liste des Films</h2>
      <Afficher films={films}  ajouterAuxFavoris={ajouterAuxFavoris} />

      <h2>Mes Favoris</h2>
      <Favoris favoris={favoris} />
      <Footer/>      
    </div>
  );
}

export default App;