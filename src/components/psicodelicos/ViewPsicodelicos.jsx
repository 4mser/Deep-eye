import Lsd from "./Lsd"
import TripsUsers from "../TripsUsers"


const ViewPsicodelicos = ({id, tema}) => {

    

    return (
        <section className="psychedelics-sections">
            <section className="info-sustancias">
                {id===1 ? <Lsd tema={tema}></Lsd> : null}

            </section>

            <aside className="trips-windows">
                <TripsUsers tema={tema}></TripsUsers>
            </aside> 
        </section>
    )
}

export default ViewPsicodelicos