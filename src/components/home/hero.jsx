import heroImage from "../../assets/images/hero.png";

function Hero () {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* Hero Image */}
             <img src={heroImage} alt="Hero Image" className="absolute inset-0 h-full w-full object-cover object-center" />

             {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Brand text */}
            <div className="absolute inset-0 flex items-center justify-start px-10 sm:px-[15%] md:px-[12%] xl:px-[15%]">
                <h1 className="whitespace-nowrap font-elara-display text-6xl leading-none text-[#B2A28E] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">
                    Elara Living
                </h1>
            </div>

        </section>
    )
}

export default Hero;