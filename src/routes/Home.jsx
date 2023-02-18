import Banner from "../components/Banner"
import BannerEye from "../components/BannerEye"

const Home = ({theme}) => {
    return (
        <section>
            <Banner theme={theme}></Banner>
            <BannerEye theme={theme}></BannerEye>
        </section>
    )
}

export default Home