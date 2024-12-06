import React from "react";
function Btn(props){
    return(
        <div>
            <p>btn composant</p>
            <button onClick={()=>props.clear()}>clear</button>
            <button onClick={()=>props.all()}>all</button>
            <button onClick={()=>props.tdi()}>tdi</button>
            <button onClick={()=>props.tri()}>tri</button>
        </div>
    )
}
export default Btn