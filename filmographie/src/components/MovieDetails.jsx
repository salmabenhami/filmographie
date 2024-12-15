function Details(props){
    return(
        <div >
            <p><span>Titre:</span> {props.title}</p>
            <p><span>Directeur:</span> {props.director}</p>
            <p><span>Année de realisation:</span> {props.releaseYear}</p>
            <p><span>Genre:</span> {props.genre}</p>
            <p><span>Note:</span> {props.rating}</p>
        </div>
    )
}
export default Details;
;
  