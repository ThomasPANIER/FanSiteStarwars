
import React from "react";



import Elements from "./Elements";




function Explore() {
    const items = [
        "films",
        "people",
        "planets",
        "species",
        "starships",
        "vehicles"
    ];

    let itemsList = items.map((item) =>
        <Elements content={item} />
    );

    return(

        <section className="mt-4">

            <p className="text-center fs-6 fw-bolder">
                Laisse toi guider par la force pour cliquer là où tu veux aller.<br></br>
                Il est recommandé aux initiés de ne pas se servir de la souris au profit de la force uniquement.
            </p>
    
            <div className="row m-3">
                {itemsList}
            </div>

        </section>
    );

}

export default Explore;



// function Explore() {
//     return(
//         <section className="mt-4">
//             <p className="text-center fs-6 fw-bolder">
//                 Laisse toi guider par la force pour cliquer là où tu veux aller.<br></br>
//                 Il est recommandé aux initiés de ne pas se servir de la souris au profit de la force uniquement.
//             </p>
    
//             <div className="row m-3">
//                 <div className="col-12 col-sm-6 col-md-4">
//                     <div className="bg-secondary m-3 py-5 text-center">
//                         <Link className="text-white" to="/films">Films</Link>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-4">
//                     <div className="bg-secondary m-3 py-5 text-center">
//                         <Link className="text-white" to="/">?</Link>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-4">
//                     <div className="bg-secondary m-3 py-5 text-center">
//                         <Link className="text-white" to="/">?</Link>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-4">
//                     <div className="bg-secondary m-3 py-5 text-center">
//                         <Link className="text-white" to="/">?</Link>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-4">
//                     <div className="bg-secondary m-3 py-5 text-center">
//                         <Link className="text-white" to="/">?</Link>
//                     </div>
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-4">
//                     <div className="bg-secondary m-3 py-5 text-center">
//                         <Link className="text-white" to="/">?</Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Explore;