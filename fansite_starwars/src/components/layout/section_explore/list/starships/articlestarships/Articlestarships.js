
import React from "react";


function Articlestarships(props) {
    return(
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.name}</h3>
                <p>{props.article.model}</p>
                <p>{props.article.manufacturer}</p>
                <p>{props.article.cost_in_credits}</p>
                <p>{props.article.length}</p>
                <p>{props.article.max_atmosphering_speed}</p>
                <p>{props.article.crew}</p>
                <p>{props.article.passengers}</p>
                <p>{props.article.cargo_capacity}</p>
                <p>{props.article.consumables}</p>
                <p>{props.article.hyperdrive_rating}</p>
                <p>{props.article.MGLT}</p>
                <p>{props.article.starship_class}</p>
            </article>
        </div>
    )
}

export default Articlestarships;