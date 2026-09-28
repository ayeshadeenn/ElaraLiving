import heroImage from "../../assets/images/hero.png";

function Hero () {
    return (
        <section className="grid grid-cols-1 md:grid-cols-[40%_60%]">

            {/* Hero Image */}
            <div className="min-h-[500px] md:min-h-[780px]">
                <img src={heroImage} alt="Hero Image" className="h-full w-full object-cover" />
                
            </div>
        </section>
    )
}

export default Hero;