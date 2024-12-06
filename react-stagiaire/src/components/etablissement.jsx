import React, { useState } from "react";
import Stagiaire from "./stagiaire";
import Btn from "./btn";
function Etablissement(){
    const[stagiaire,setstagiaire]=useState(
        [
            {
                "id": "1",
                "Nom": "Bertie Yates",
                "Filière": "TDI",
                "Image": "https://th.bing.com/th/id/OIP.7WA6mH7oqsGTo_duc43GqwHaHa?rs=1&pid=ImgDetMain",
                "age": "20"
            },
            {
                "id": "2",
                "Nom": "Hester Hogan",
                "Filière": "TRI",
                "Image": "https://th.bing.com/th/id/OIP.7WA6mH7oqsGTo_duc43GqwHaHa?rs=1&pid=ImgDetMain",
                "age": "18"
            },
            {
                "id": "3",
                "Nom": "Larry Little",
                "Filière": "TDI",
                "Image": "https://th.bing.com/th/id/OIP.7WA6mH7oqsGTo_duc43GqwHaHa?rs=1&pid=ImgDetMain",
                "age": "22"
            },
            {
                "id": "4",
                "Nom": "Sean Walsh",
                "Filière": "TDI",
                "Image": "https://th.bing.com/th/id/OIP.7WA6mH7oqsGTo_duc43GqwHaHa?rs=1&pid=ImgDetMain",
                "age": "19"
            },
            {
                "id": "5",
                "Nom": "Lola Gardner",
                "Filière": "TRI",
                "Image": "https://th.bing.com/th/id/OIP.7WA6mH7oqsGTo_duc43GqwHaHa?rs=1&pid=ImgDetMain",
                "age": "18"
            }
        ]
    )
    const all = () => {
        setstagiaire([
            {
                "id": "1",
                "Nom": "Bertie Yates",
                "Filière": "TDI",
                "Image": "https://th.bing.com/th/id/OIP.7WA6mH7oqsGTo_duc43GqwHaHa?rs=1&pid=ImgDetMain",
                "age": "20"
            },
            {
                "id": "2",
                "Nom": "Hester Hogan",
                "Filière": "TRI",
                "Image": "https://th.bing.com/th/id/OIP.7WA6mH7oqsGTo_duc43GqwHaHa?rs=1&pid=ImgDetMain",
                "age": "18"
            },
            {
                "id": "3",
                "Nom": "Larry Little",
                "Filière": "TDI",
                "Image": "https://th.bing.com/th/id/OIP.7WA6mH7oqsGTo_duc43GqwHaHa?rs=1&pid=ImgDetMain",
                "age": "22"
            },
            {
                "id": "4",
                "Nom": "Sean Walsh",
                "Filière": "TDI",
                "Image": "https://th.bing.com/th/id/OIP.7WA6mH7oqsGTo_duc43GqwHaHa?rs=1&pid=ImgDetMain",
                "age": "19"
            },
            {
                "id": "5",
                "Nom": "Lola Gardner",
                "Filière": "TRI",
                "Image": "https://th.bing.com/th/id/OIP.7WA6mH7oqsGTo_duc43GqwHaHa?rs=1&pid=ImgDetMain",
                "age": "18"
            }
        ])
    }
    const Tdi=()=>{
        const tdistg=stagiaire.filter(elt=>elt.Filière==="TDI")
        setstagiaire(tdistg)
    }
    const Tri=()=>{
        const tristag=stagiaire.filter(elt=>elt.Filière=="TRI")
        setstagiaire(tristag)
    }
    
    return(
        <div id="parent">
            <h1>Nombre d'étudiants: {stagiaire.length} </h1>
            <div>
                {stagiaire.map((elt)=>(

                <div id="content" key={elt.id}>
                    <img src={elt.Image} alt="" />
                    <div id="title">
                        <h3>{elt.Nom}-{elt.Filière}</h3>
                        <h5>Age: {elt.age}</h5>
                    </div>
                </div>
                ))}
                <br />
                <div id="btn">
                    <button onClick={(e)=>setstagiaire([])}>CLEAR ALL</button>
                    <button onClick={all}>ALL</button>
                    <button onClick={Tdi}>Filière TDI</button>
                    <button onClick={Tri}>Filière TRI</button> 
                </div>
            </div>
            {/* <Stagiaire stg={stagiaire} /> */}
            {/* <Btn clear={(e)=>setstagiaire([])}
                all={all}
                tdi= {Tdi}
                tri={Tri} /> */}
    </div>  
    )
}
export default Etablissement