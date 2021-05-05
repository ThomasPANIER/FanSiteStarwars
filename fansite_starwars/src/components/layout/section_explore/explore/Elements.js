
import {Link} from "react-router-dom";


function Elements(props) {
    return(        
        <div className="col-12 col-sm-6 col-md-4">
            <div className="bg-secondary m-3 py-5 text-center">
                {/* <Link className="text-white" to="/">{props.content}</Link> */}
                <Link className="text-white" to={'/'+ props.content}>{props.content}</Link>
            </div>
        </div>
    )
}

export default Elements;
