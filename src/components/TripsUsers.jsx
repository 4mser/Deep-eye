import GraficoRadarMultiple from "./graficos/GraficoRadarMultiple.jsx";
import GraficoRadar from "./graficos/GraficoRadar.jsx";

import { useState } from "react";

const TripsUsers = ( {tema} ) => {
    const [selectedGrafico, setSelectedGrafico] = useState("generales");
    const [mostrarTextoAdicional, setMostrarTextoAdicional] = useState(false);
    return (
        <div className="trips-stories">
                    <h2 className="trips-destacados">Trips destacados</h2>
                    <br />
                    <div className="user-trip">
                        <div className="user">
                            <div className="user-container">
                                <div className="user-image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdme2RXK7hlmZXVB-Rdxu23j2K2ZJ3QfhhRpx_B6-wHnQq0T0fMMKXKQxkZPh_9s2AFM&usqp=CAU" alt="timothy" />
                                </div>
                                <p>Timothy Leary <span>#Timo25</span></p>
                            </div>
                            
                        </div>
                        
                        <div className="story">
                            <h3>Título que el usuario quiera darle a su trip</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In at assumenda numquam architecto nostrum ipsum iste! Quaerat, iste dolorum. Dicta tenetur veniam iure at ullam laboriosam enim sapiente cumque excepturi..</p>

                            <div style={{display: mostrarTextoAdicional ? "block" : "none"}}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laborum nihil cum fugit provident cumque! Mollitia, sunt, in tenetur perspiciatis nam autem eos quidem dolorum repellat quis fugiat ipsum ad? </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa optio quo odio, explicabo voluptas voluptatem nulla minus fugiat commodi quidem illo modi ea possimus alias doloribus autem sapiente maxime.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium et veritatis, cum sunt error alias laborum consequatur numquam amet corrupti cupiditate, voluptas libero pariatur nemo nisi? Accusamus sint quam amet.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laborum nihil cum fugit provident cumque! Mollitia, sunt, in tenetur perspiciatis nam autem eos quidem dolorum repellat quis fugiat ipsum ad? </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa optio quo odio, explicabo voluptas voluptatem nulla minus fugiat commodi quidem illo modi ea possimus alias doloribus autem sapiente maxime.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium et veritatis, cum sunt error alias laborum consequatur numquam amet corrupti cupiditate, voluptas libero pariatur nemo nisi? Accusamus sint quam amet.</p>
                                
                            </div>
                            <button className="btn-mostrar-story" onClick={() => setMostrarTextoAdicional(!mostrarTextoAdicional)}>
                                Ver {mostrarTextoAdicional ? "menos" : "trip completo"}
                            </button>
                            
                            <h3>Uso</h3>
                            <div className="uso-container">
                                <div className="uso-distintivo"></div> 
                                <p>Recreativo</p>
                            </div>
                            <br />

                            <h3>Efectos</h3>
                            <br />

                            <div className="barra-nav-graf">
                                <div className={selectedGrafico === "generales" ? "btn-graf-user active" : "btn-graf-user"}  onClick={(event) => { event.preventDefault(); setSelectedGrafico("generales") }}>Generales</div>
                                <div className={selectedGrafico === "por_hora" ? "btn-graf-user active" : "btn-graf-user"} onClick={(event) => { event.preventDefault(); setSelectedGrafico("por_hora") }}>Por hora</div>
                            </div>

                            <div className="grafico-user-trip">
                                {selectedGrafico === "generales" && <GraficoRadar tema={tema}></GraficoRadar>}
                                {selectedGrafico === "por_hora" && <GraficoRadarMultiple tema={tema}></GraficoRadarMultiple>}
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default TripsUsers