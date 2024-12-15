function Favoris(props) {
    const { favoris } = props;

    if (favoris.length === 0) {
        return <p>Aucun film ajouté aux favoris.</p>;
    }

    return (
        <div id="element3">
            {favoris.map((elt, index) => (
                <div key={index} id="element2">
                    <p><strong>{elt.title}</strong></p>
                    <p>Réalisateur: {elt.director}</p>
                    <p>Année: {elt.releaseYear}</p>
                    <p>Genre: {elt.genre}</p>
                    <p>Note: {elt.rating}</p>
                </div>
            ))}
        </div>
    );
}

export default Favoris;
