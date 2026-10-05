import heroImage from "../../assets/images/hero.png";

function Hero () {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* Hero Image */}
             <img src={heroImage} alt="Hero Image" className="absolute inset-0 h-full w-full object-cover object-center" />

             {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Brand text */}
            <div className="absolute inset-0 flex items-center justify-start px-10 sm:px-[12%] md:px-[30%]">
                <div className="text-center">
                <h1 className="font-elara-display text-5xl leading-[0.9] text-[#24150f] md:text-7xl lg:text-8xl xl:text-9xl">
                    Elara
                </h1>

                <p className="font-elara-display mt-2 text-5xl tracking-[0.08em] text-[#24150f] md:text-7xl lg:text-8xl xl:text-9xl">
                    Living
                </p>
                </div>
            </div>

        </section>
    )
}

export default Hero;