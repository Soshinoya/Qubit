import Abilities from "../components/Abilities/Abilities"
import Advantages from "../components/Advantages/Advantages"
import Analytics from "../components/Analytics/Analytics"
import BrandsSlider from "../components/BrandsSlider/BrandsSlider"
import Offer from "../components/Offer/Offer"
import Partners from "../components/Partners/Partners"
import Preview from "../components/Preview/Preview"

const Home = () => {
    return (
        <main className="main">
            <Offer />
            <Partners />
            <Analytics />
            <Advantages />
            <Preview />
            <Abilities />
            <BrandsSlider />
        </main>
    )
}

export default Home