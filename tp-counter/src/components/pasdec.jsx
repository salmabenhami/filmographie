import React from "react";
function Pasdec(props){
    return(
        <div>
        <p>Pas de decrementation-composant</p>
        <button onClick={() => props.op(1)}>1</button>
        <button onClick={() => props.op(2)}>2</button>
        <button onClick={() => props.op(3)}>3</button>
        <button onClick={() => props.op(4)}>4</button>
    </div>
    )
}
export default Pasdec