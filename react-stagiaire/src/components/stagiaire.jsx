import React from "react";
function Stagiaire(props){
    return(
        <div>
            {props.stg.map((elt)=>(
                <div id="content" key={elt.id}>
                <img src={elt.Image} alt="" />
                <div id="title">
                    <h3>{elt.Nom}-{elt.Filière}</h3>
                    <h5>Age: {elt.age}</h5>
                </div>
            </div>
            ))}
        </div>
    )
}
export default Stagiaire