function Statement() {
    return (
        <section className="bg-white px-6 py-20">
            <div className="mx-auto w-full max-w-[1200px]">

                {/* Main Statement */}
                <h2 className="mx-auto md:max-w-[580px] lg:max-w-[850px] xl:max-w-[1180px] text-center text-xl leading-[1.2] tracking-[0.02em] sm:text-2xl lg:text-4xl xl:text-5xl">
                    This is a space dedicated to elevating your everyday.
                    To help you elevate your home, your space, your home, your space...
                </h2>

                {/* Description Columns */}
                <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:mt-16 sm:gap-10 lg:mt-20 lg:gap-16 md:max-w-[580px] lg:max-w-[850px] xl:max-w-[1180px]">

                    {/* Left Column */}
                    <p className="text-base leading-[1.6] sm:text-lg md:text-xl">
                        Thoughtfully curated interiors, timeless materials
                        and meaningful details. A space for discovering
                        inspiration and creating a home that reflects
                        your personality and lifestyle.
                    </p>
                    
                    {/* Right Column */}
                    <div className="text-sm leading-[1.5] sm:text-base text-black/80">
                        <p>
                            Explore ideas that bring warmth, balance and
                            character into your home. From natural textures
                            to considered details, discover a more personal
                            approach to living.
                        </p>
                        <p>
                            Find inspiration in simplicity, craftsmanship
                            and the beauty of everyday moments.
                        </p>

                    </div>

                </div>

            </div>
            
        </section>
    )
}

export default Statement;