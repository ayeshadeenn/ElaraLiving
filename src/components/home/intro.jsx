import mainImage from "../../assets/images/homeMainImage.png"
import overlappingImage from "../../assets/images/overlappingImage.png"

function Intro() {
    return (
        <section className="bg-white px-6 py-20 sm:px-10 md:px-16 lg:px-20">
            <div className="mx-auto max-w-[1100px]">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                        Curating Timeless Design.
                    </h2>

                    <p className="mt-4 text-xs uppercase tracking-[0.25em] text-black">
                        A little of the story
                    </p>
                </div>

                {/* Images+Text */}
                <div className="relative mt-6 lg:min-h-[650px]">

                    {/* Main Image */}
                    <div className="mx-auto w-[70%] md:w-[50%]">
                        <img src={mainImage} alt="Portrait" className="h-auto w-full object-cover"></img>
                    </div>

                    {/* Small Overlapping Image */}
                    <div className="absolute left-[5%] top-[35%] md:top-[25%] lg:top-[35%] w-[28%]">
                        <img src={overlappingImage} alt="Overlapping" className="h-auto w-full object-cover"></img>
                    </div>

                    {/* Story Card */}
                    <div className="relative z-10 mx-auto mt-6 w-full max-w-xl bg-white p-6 lg:absolute lg:right-0 lg:top-[25%] lg:w-[35%] shadow-sm sm:p-8 lg:p-10">
                        <h3 className="text-xl md:text-2xl xl:text-4xl leading-tight">
                            It all started with a love for beautiful spaces.
                        </h3>

                        <p className="mt-4 text-xs lg:text-sm xl:text-base leading-[1.6] text-black/80"> 
                            From inspiration to creating spaces that feel personal,
                            thoughtful and timeless, this is a little part of my story. 
                            From inspiration to creating spaces that feel personal,
                            thoughtful and timeless, this is a little part of my story.
                        </p>

                        <button type="button" className="mt-6 border border-black px-3 py-2 tracking-wide transition hover:bg-black hover:text-white sm:px-5 sm:py-3 text-sm md:text-sm xl:text-base">
                            Our Whole Story →
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Intro;