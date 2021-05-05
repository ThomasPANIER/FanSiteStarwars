
function Articlefilm(props) {
    return(
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.title}</h3>
                <p>{props.article.episode_id}</p>
                <p>{props.article.director}</p>
                <p>{props.article.producer}</p>
                <p>{props.article.release_date}</p>
            </article>
        </div>
    )
}

export default Articlefilm;