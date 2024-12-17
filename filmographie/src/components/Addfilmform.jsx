import { useState } from "react";

function Addfilm(props) {
    const [titre, settitre] = useState('');
    const [director, setdirector] = useState('');
    const [realiseyear, setrealise] = useState('');
    const [genre, setgenre] = useState('');
    const [rating, setrating] = useState('');
    const [data, setdata] = useState(false);
    const[msg,setmsg]=useState("")
    const Handlesubmit = (e) => {
        e.preventDefault();
        if(!titre.trim() || !director.trim() || !realiseyear.trim()|| !genre.trim()|| !rating.trim()){
            setmsg("les champs sont obligatoires")
            return
        }
        // setdata(true);
        const movie = {
            title: titre,
            director: director,
            releaseYear: realiseyear,
            genre: genre,
            rating: rating
        };
        const copymovie = [...props.films];
        copymovie.push(movie);
        props.setFilms(copymovie);
        
    }
    const reinitialiser=(e)=>{
        e.preventDefault()
        settitre("")
        setdirector("")
        setrealise("")
        setgenre('Genre')
        setrating("")
    }


    return (
        <div>
            <form id="formulaire" onSubmit={Handlesubmit}>
                <fieldset>
                    <legend>Ajouter un film</legend>
                    <label htmlFor="">Titre: </label> 
                    <input type="text" value={titre} id="input" onChange={(e) => settitre(e.target.value)} /> <br />
                    <label htmlFor="">Directeur: </label> 
                <input type="text" value={director} id="input" onChange={(e) => setdirector(e.target.value)} /> <br />
                <label htmlFor="">Année de réalisation: </label> 
                <input type="number" value={realiseyear} id="input" onChange={(e) => setrealise(e.target.value)} /> <br />
                <label htmlFor="">Genre: </label> 
                <select value={genre} onChange={(e) => setgenre(e.target.value)}>
                    <option value="">Sélectionnez un genre</option>
                    {(() => {
                        const seenGenres = new Set(); 
                        return props.films.map((elt, index) => {
                            if (seenGenres.has(elt.genre)) {
                                return null; 
                            }
                            seenGenres.add(elt.genre)
                            return (
                                <option key={index} value={elt.genre}>
                                    {elt.genre}
                                </option>
                            )
                        })
                    })()}
                </select>
 <br />
                Rating: <input type="number" value={rating} id="input" onChange={(e) => setrating(e.target.value)} />
                <button type="submit">Envoyer</button>
                <button type="submit" onClick={reinitialiser}>Reinitialiser</button><br />
                <span style={{color:'red'}}>{msg}</span>
                </fieldset>
            </form>
            {/* {data && (
                <>
                    <p>{titre}</p>
                    <p>{director}</p>
                </>
            )} */}
        </div>
    );
}

export default Addfilm;