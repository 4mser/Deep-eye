import AboutHome from "../components/AboutHome"
import Title from "../components/Title"

const Home = ({theme}) => {
    return (
        <section>
            <Title></Title>
            <AboutHome theme={theme}></AboutHome>
        </section>
    )
}

export default Home