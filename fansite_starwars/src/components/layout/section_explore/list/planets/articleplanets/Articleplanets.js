
import React from "react";


function Articleplanets(props) {
    return(
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.name}</h3>
                <p>{props.article.rotation_period}</p>
                <p>{props.article.orbital_period}</p>
                <p>{props.article.diameter}</p>
                <p>{props.article.climate}</p>
                <p>{props.article.gravity}</p>
                <p>{props.article.terrain}</p>
                <p>{props.article.surface_water}</p>
                <p>{props.article.population}</p>
            </article>
        </div>
    )
}

export default Articleplanets;