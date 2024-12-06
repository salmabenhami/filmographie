import React, { useState } from "react";
import Valeur from "./valeur";
import Pasinc from "./pasinc";
import Pasdec from "./pasdec";

function Counter(){
    const[count,setcount]=useState(0)

    const incrementer=()=>{
        setcount(count+2)
    }
    const decrementer=()=>{
        setcount(count-2)
    }
    const increment = (value) => {
        setcount(count + value);
    }
    const dect=(value)=>{
        setcount(count-value)
    }


    return(
        <div>
            <div id="res">{count}</div>
            <div id="btn">
                <button onClick={incrementer}>Incrementer</button>
                <button onClick={decrementer}>Decrementer</button>
                <button onClick={(e)=>setcount(0)}>Initialiser</button>
            </div>
            <p>Pas d'incrementation</p>
            <div id='btn2'>
                <button onClick={(e)=>setcount(count+1)}>1</button>
                <button onClick={(e)=>setcount(count+2)}>2</button>
                <button onClick={(e)=>setcount(count+3)}>3</button>
                <button onClick={(e)=>setcount(count+4)}>4</button>
            </div>
            <p>Pas de decrementation</p>
            <div id='btn2' >
                <button onClick={(e)=>setcount(count-1)}>1</button>
                <button onClick={(e)=>setcount(count-2)}>2</button>
                <button onClick={(e)=>setcount(count-3)}>3</button>
                <button onClick={(e)=>setcount(count-4)}>4</button>
            </div>

            {/* <Valeur counter={count} />
            <Pasinc op={increment}/>
            <Pasdec op={dect}/> */}
        </div>
    )
}
export default Counter;