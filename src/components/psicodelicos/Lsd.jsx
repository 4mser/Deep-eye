import { useState } from 'react';

import { GiTongue, GiBookmarklet, GiKitchenScale, GiAbstract089 } from "react-icons/gi";
import { MdPsychology } from "react-icons/md";

import psicodelicos from '../../data-base/PsicodelicosData.jsx';
import GraficoConsumo from '../graficos/GraficoConsumo.jsx';


const Lsd = ({tema}) => {

    const [showHistoria, setShowHistoria] = useState(false);
    const [showDosificacion, setShowDosificacion] = useState(false);
    const [showPresentacion, setShowPresentacion] = useState(false);
    const [showEfectos, setShowEfectos] = useState(false);
    const [showConsumo, setShowConsumo] = useState(true);
    const [text1, setText1] = useState('+');
    const [text2, setText2] = useState('+');
    const [text3, setText3] = useState('+');
    const [text4, setText4] = useState('+');
    const [text5, setText5] = useState('-');

    
    return (
        <div>
            {psicodelicos.map(psicodelico => {
                if (psicodelico.id === 1) {
                    return (
                        <div key={psicodelico.id}>
                            <h1>{psicodelico.name}</h1>
                            <div className="drug-img-container">
                                <img src={psicodelico.image} alt="Estructura-lsd" className="drug-img"/>
                            </div>
                            <br />

                            <h2 onClick={() => {setShowConsumo(!showConsumo); setText5(text5 === '+' ? '-' : '+') }}> <div className="icons-drugs-info"> <GiAbstract089/> Consumo</div> <p>{text5}</p></h2>
                            <div className="consumo"  style={{ display: showConsumo ? 'block' : 'none' }}>
                                <article className="aside-data">
                                    <div className="data-consumo">
                                        <GraficoConsumo tema={tema}></GraficoConsumo>
                                    </div>   
                                </article>
                            </div>

                            <h2 onClick={() => {setShowHistoria(!showHistoria); setText1(text1 === '+' ? '-' : '+')} }> <div className="icons-drugs-info"> <GiBookmarklet/> Historia</div> <p>{text1}</p></h2>
                            <div className="historia" style={{ display: showHistoria ? 'block' : 'none' }}>
                                <p>La dietilamida de ácido lisérgico, LSD-25 o simplemente LSD es una droga psicodélica que fue descubierta en 1938 por el químico suizo Albert Hofmann mientras estudiaba los alcaloides producidos por el cornezuelo del centeno.</p><br />
                                <p>Durante los primeros años de su investigación, no se dio cuenta de su potencial psicodélico y no fue hasta 1943, mientras trabajaba en el laboratorio, que Hofmann accidentalmente se expuso al LSD al entrar en contacto con su piel y ser absorbido posteriormente durante la recristalización de una muestra. El número 25 (LSD-25) alude al orden que el científico iba dando a los compuestos que sintetizaba y con el cual experimentó sus efectos psicodélicos por primera vez. Después de este incidente, Hofmann continuó investigando sus potentes efectos. Utilizandolo recurrentemente hasta el día de su muerte a los 102 años.</p><br />
                                <p>A partir de entonces, el LSD se convirtió en un tema de interés para muchos científicos y artistas, y se utilizó en diversos estudios médicos y terapéuticos durante la década de 1950 y 1960. Sin embargo, a medida que la droga se popularizó entre el público general, también se convirtió en un símbolo de la contracultura y el movimiento de paz de la época.</p><br />
                                <p>Aunque ha sido utilizado en el pasado para tratar a pacientes con trastornos mentales, actualmente se considera una droga ilegal en la mayoría de los países debido a sus efectos psicodélicos y a la falta de evidencia científica suficiente sobre su seguridad y efectividad a largo plazo. A pesar de esto, el LSD sigue siendo una droga popular entre ciertos grupos y sigue siendo objeto de investigación en el campo de la psicología y la neurociencia.</p><br />

                                <img src="https://www.alexgrey.com/art-images/St.-Albert-&-The-LSD-Revelation-Revolution-2006-Alex-Grey-watermarked.jpg" alt="Abert Hofmann By Alex Grey" />
                                <p>- Albert Hofmann By Alex Grey -</p>

                            </div>

                            <h2 onClick={() => {setShowDosificacion(!showDosificacion); setText2(text2 === '+' ? '-' : '+') }}><div className="icons-drugs-info"> <GiKitchenScale/> Dosificación</div> <p>{text2}</p></h2>
                            <div className="dosificacion"  style={{ display: showDosificacion ? 'block' : 'none' }}>
                                <p>Si hay algo que caracteriza al LSD es su intensidad. Ya que tiene efectos en el organismo en dosis extremadamente bajas, las cuales se miden en microgramos (µg), es decir, la un millonésima parte de un gramo.</p>
                                <p>1 gramo = 1.000.000 microgramos.</p> <br />

                                <p>La dosis mínima de LSD capaz de causar un efecto psicoactivo en humanos está entre los 20 y 30 µg (microgramos). Por tanto, es alrededor de 100 veces más activo que la psilocibina y la psilocina y alrededor de 4.000 veces más activo que la mescalina.</p> <br />

                                <p>Por lo general, las dosis empleadas en las diferentes presentaciones del LSD van desde los 20µg a los 300µg (Siendo esta ya una dosis que podría considerarse alta para el promedio de personas).</p>

                                <div className="dosis-grafica">
                                    <div className="baja">
                                        <p>20µg</p>
                                        <p>Dosis Baja</p>
                                    </div>

                                    <div className="media">
                                        <p>75µg</p>
                                        <p>Dosis Media</p>
                                    </div>

                                    <div className="alta">
                                        <p>200µg</p>
                                        <p>Dosis Alta</p>
                                    </div>
                                </div>

                                <p>Al ser una droga ilegal es realmente difícil saber con exactitud la dosis que tendrá la sustancia al momento de ingerirla, por lo que siempre es mejor optar por probar solo un fragmento para ir conociendo sus efectos.</p>
                            </div>

                            <h2 onClick={() => {setShowPresentacion(!showPresentacion); setText3(text3 === '+' ? '-' : '+') }}> <div className="icons-drugs-info"><GiTongue />Presentaciones</div> <p>{text3}</p></h2>
                            <div className="presentacion" style={{ display: showPresentacion ? 'block' : 'none' }}>
                                <p>El LSD puede presentarse en multiples formatos, los más comunes suelen ser: </p>

                                <ul>
                                    <li>
                                        Blotter o mejor conocido como papel secante. Esta es la típica estampilla que se nos viene a la mente al pensar en el LSD:
                                        <img src="https://pijamasurf.com/wp-content/uploads/10.208.149.45/uploads/2013/04/lsd1.jpg?mrf-size=m" alt="blotter-hofmann" />
                                    </li>

                                    <li>
                                        Gomitas, gelatina o terroncitos de azucar impregnados:
                                        <img src="https://s1.eestatic.com/2016/06/03/actualidad/actualidad_129749882_5944904_1706x1280.jpg" alt="gomitas-lsd" />
                                    </li>

                                    <li>
                                        Micro-puntos, que es una pequeña pastilla de LSD:
                                        <img src="https://preview.redd.it/bq80mn60y8e81.jpg?auto=webp&s=adf765ed478886225c20b5272dfd289d4134550b" alt="micro-punto" />
                                    </li>

                                    <li>
                                        Tabletas de gel:
                                        <img src="https://psytimepharmaceuticals.com/wp-content/uploads/2020/11/IMG_20201119_094422_421.jpg" alt="gel-lsd" />
                                    </li>

                                    <li>
                                        Goteros, que es directamente el LSD líquido:
                                        <img src="https://medellinstyle.com/wp-content/uploads/lsd-1-1-563x360.jpg" alt="gotero-lsd" />
                                    </li>
                                </ul>

                                <p>Recuerda que si no conoces la dosis que estás a punto de ingerir, lo mejor es ir de a poco!</p>
                            </div>

                            <h2 onClick={() => {setShowEfectos(!showEfectos); setText4(text4 === '+' ? '-' : '+')}}><div className="icons-drugs-info"> <MdPsychology/> Efectos</div> <p>{text4}</p></h2>
                            <div className="efectos" style={{ display: showEfectos ? 'block' : 'none' }}>
                                <p>Los efectos del LSD son completamente variables y dependen de multiples factores como la dosis, presencia y proporción de adulterantes y del <a href="#">Set & Setting</a>, que es la mentalidad o ánimo de uno mismo (mindset, abreviado set) y el entorno físico y social en el que se encuentra (setting).</p>

                                <p>Entre los efectos recurrentes se encuentran:</p>

                                <ol>
                                    <li>
                                        <h3>Efectos fisiológicos</h3>
                                        <ul>
                                            <li>Contracciones uterinas</li>
                                            <li>Fiebre</li>
                                            <li>Niveles elevados de glucemia</li>
                                            <li>Erizamiento del vello</li>
                                            <li>Aumento de la frecuencia cardíaca</li>
                                            <li>Transpiración</li>
                                            <li>Pupilas dilatadas</li>
                                            <li>Insomnio</li>
                                            <li>Parestesia</li>
                                            <li>Hiperreflexia</li>
                                            <li>Temblores</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <h3>Efectos en el estado de ánimo</h3>
                                        <ul>
                                            <li>Susceptibilidad emocional que puede llevar tanto a la tristeza intensa como a la euforia. Frecuentemente los sentimientos de euforia y bienestar tienden a evolucionar en muchos sujetos a sensaciones de omnipotencia. En ocasiones, produce un aumento de la ansiedad mientras que en otros casos hay un descenso de los niveles de ansiedad que puede permitir al individuo hablar de temas que normalmente le son dolorosos o difíciles de afrontar.</li>
                                            <li>De igual manera, los sujetos bajo los efectos del LSD tienden a preocuparse por los eventos que suceden en el momento inmediato y a perder interés por los eventos del futuro y del pasado.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <h3>Efectos en el comportamiento interpersonal</h3>
                                        <ul>
                                            <li>El LSD tiende a generar en el sujeto un mayor interés por las relaciones interpersonales. Esto deriva muchas veces en una facilidad para sentirse herido por los demás o ignorado.</li>
                                            <li>En un ambiente psicoterapéutico, ha demostrado en ocasiones aumentar la confianza del sujeto con su psicólogo tratante.</li>
                                            <li>También puede ocasionar reacciones paranoides en el sujeto que la consume.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <h3>Efectos sensoriales y perceptivos</h3>
                                        <ul>
                                            <li>mayor sensibilidad a los estímulos sonoros y visuales en general.</li>
                                            <li>Distorsiones de la imagen corporal.</li>
                                            <li>Distorsiones visuales que suelen ser ilusiones, aunque pueden en ocasiones ser también alucinaciones.</li>
                                            <li>Sinestesia de todo tipo, por ejemplo, oír colores, ver sonidos y percibir sensaciones gustativas al tocar un objeto con una textura determinada. No es que lo asocie o tenga la sensación de sentirlo: lo siente realmente.</li>
                                            <li>Alteración de la percepción del tiempo, por ejemplo, sentir que el tiempo se detiene, o que el tiempo va hacia atrás o que se acelera, etc.</li>
                                            <li>Percepción alterada del mundo externo, como algo inestable y escurridizo.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <h3>Efectos cognitivos</h3>
                                        <ul>
                                            <li>Suele estimular los procesos del pensamiento, ocasionando el paso acelerado de una idea a otra.</li>
                                            <li>Puede ocasionar una disrupción del pensamiento o de los conceptos. Esto se ha interpretado como confusión o pensamiento psicótico, pero también se le ha considerado como un impulso creativo.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <h3>Otros efectos</h3>
                                        <ul>
                                            <li>Sentimientos de unidad con el entorno.</li>
                                            <li>Sensación de comprender la vida y la existencia</li>
                                            <li>Experiencias religiosas y una fuerte tendencia a pensar en términos existenciales.</li>
                                        </ul>
                                    </li>
                                </ol>

                                {/* <GraficosUsuarios></GraficosUsuarios> */}
                            </div>

                            
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Lsd