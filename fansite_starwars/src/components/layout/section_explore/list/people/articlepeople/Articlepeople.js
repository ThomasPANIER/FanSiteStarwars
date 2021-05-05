
import React from "react";


function Articlepeople(props) {
    return(
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.name}</h3>
                <p>{props.article.height}</p>
                <p>{props.article.mass}</p>
                <p>{props.article.hair_color}</p>
                <p>{props.article.skin_color}</p>
                <p>{props.article.eye_color}</p>
                <p>{props.article.birth_color}</p>
                <p>{props.article.gender}</p>
            </article>
        </div>
    )
}

export default Articlepeople;