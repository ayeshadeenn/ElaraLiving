import SiteLayout from "../components/layout/sitelayout";
import Hero from "../components/home/hero";
import Intro from "../components/home/intro";
import Statement from "../components/home/statement";

function Home () {
    return (
        <SiteLayout>
            <Hero />
            <Intro />
            <Statement />
        </SiteLayout>
        
    )
}
export default Home;