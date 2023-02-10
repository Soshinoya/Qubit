import Advantages from "../components/Advantages/Advantages"
import Analytics from "../components/Analytics/Analytics"
import Offer from "../components/Offer/Offer"
import Partners from "../components/Partners/Partners"

const Home = () => {
    return (
        <main className="main">
            <Offer />
            <Partners />
            <Analytics />
            <Advantages />
        </main>
    )
}

export default Home