
import React from "react";


function Articlefilm(props) {
    return(
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.title}</h3>
                <span>{props.article.episode_id}</span>
                <span>{props.article.director}</span>
                <span>{props.article.producer}</span>
                <span>{props.article.release_date}</span>
            </article>
        </div>
    )
}

export default Articlefilm;