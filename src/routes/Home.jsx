import Banner from "../components/Banner"

const Home = ({theme}) => {
    return (
        <section>
            <Banner theme={theme}></Banner>
            <div className="about">
                <h2>Somos una plataforma dedicada a la investigación y reflexión sobre la mente humana y los estados no-ordinarios de conciencia. <br /> <br />

                Nuestro objetivo es proporcionar información rigurosa y promover el conocimiento sobre el uso de sustancias psicoactivas, con el fin de reducir los riesgos asociados al uso indebido de estos compuestos e investigar sus usos terapéuticos y de desarrollo humano.</h2>
            </div>
        </section>
    )
}

export default Home