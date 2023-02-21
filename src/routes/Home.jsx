import Banner from "../components/Banner"

const Home = ({theme}) => {
    return (
        <section>
            <Banner theme={theme}></Banner>
            <div className="about">
                <h2>Somos una plataforma dedicada a la investigación y reflexión sobre la mente humana y sus estados no-ordinarios de conciencia. Nos esforzamos por comprender cómo estos estados han estado involucrados en la evolución del cerebro humano, analizando datos de las experiencias otorgadas por nuestros usuarios.

                <br /><br />

                Como parte de nuestro compromiso con la rigurosidad, promovemos el conocimiento en cuanto al uso de sustancias psicoactivas, abogando por reducir los riesgos asociados al uso indebido de estos compuestos, mientras investigamos sus posibles usos terapéuticos y de desarrollo humano.

                <br /><br />

                Estamos enfocados en proporcionar información precisa y confiable sobre estos temas, a través de investigaciones rigurosas y una comunicación transparente y responsable, preocupandonos profundamente por la salud y el bienestar de nuestros usuarios, y  comprometidos en hacer nuestra contribución al avance de la comprensión de la mente humana de manera ética, legal y sin tabúes. </h2>
            </div>
        </section>
    )
}

export default Home