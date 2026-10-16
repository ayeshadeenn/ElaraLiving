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
                <div className="relative mt-6 min-h-[650px]">

                    {/* Main Image */}
                    <div className="mx-auto w-[70%] md:w-[55%]">
                        <img src={mainImage} alt="Portrait" className="h-auto w-full object-cover"></img>
                    </div>

                    {/* Small Overlapping Image */}
                    <div className="absolute left-[5%] top-[35%] w-[28%]">
                        <img src={overlappingImage} alt="Overlapping" className="h-auto w-full object-cover"></img>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Intro;