import Lsd from "./Lsd"
import TripsUsers from "../TripsUsers"


const ViewPsicodelicos = ({id}) => {

    

    return (
        <section className="psychedelics-sections">
            <section className="info-sustancias">
                {id===1 ? <Lsd></Lsd> : null}

            </section>

            <aside className="trips-windows">
                <TripsUsers></TripsUsers>
            </aside> 
        </section>
    )
}

export default ViewPsicodelicos