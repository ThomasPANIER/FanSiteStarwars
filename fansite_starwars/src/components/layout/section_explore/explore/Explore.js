
import {Link} from "react-router-dom";
import Elements from "./Elements";



function Explore() {
    const items = [
        "Films",
        "Personnages",
        "Planètes",
        "Espèces",
        "Vaisseaux",
        "Véhicules"
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