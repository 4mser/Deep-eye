import Banner from "../components/Banner"
import About from "./About"

const Home = ({theme}) => {
    return (
        <section>
            <Banner theme={theme}></Banner>
            <About></About>
        </section>
    )
}

export default Home