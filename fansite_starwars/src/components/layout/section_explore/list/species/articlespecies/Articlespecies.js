
import React from "react";


function Articlespecies(props) {
    return(
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.name}</h3>
                <p>{props.article.classification}</p>
                <p>{props.article.designation}</p>
                <p>{props.article.average_height}</p>
                <p>{props.article.skin_colors}</p>
                <p>{props.article.hair_colors}</p>
                <p>{props.article.eye_colors}</p>
                <p>{props.article.average_lifespan}</p>
                <p>{props.article.homeworld}</p>
                <p>{props.article.language}</p>
            </article>
        </div>
    )
}

export default Articlespecies;