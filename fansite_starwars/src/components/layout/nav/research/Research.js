
import React from "react";
import axios from "axios";



//const url = "https://swapi.dev/api/";
// axios.get (
//     url: 'https://api.github.com/users/hacktivist123',
//   );
   

function Research() {
    return(
        <div className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Recherche</button>
        </div>
    );
}

export default Research;