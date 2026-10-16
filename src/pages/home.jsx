import SiteLayout from "../components/layout/sitelayout";
import Hero from "../components/home/hero";
import Intro from "../components/home/intro";

function Home () {
    return (
        <SiteLayout>
            <Hero />
            <Intro />
        </SiteLayout>
        
    )
}
export default Home;