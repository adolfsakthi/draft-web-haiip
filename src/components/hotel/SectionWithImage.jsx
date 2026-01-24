import React from "react"
import character from "../../assets/images/hotel/character.png"
import character2 from "../../assets/images/hotel/character2.jpeg"
import character3 from "../../assets/images/hotel/character3.jpeg"

const characters = [character, character2, character3]

const SectionWithImage = ({
    title,
    quote,
    image,
    index,
    isReversed = false,
    buttonText = "EXPLORE",
}) => {
    const characterImage = characters[index % characters.length]

    return (
        <section className="bg-[#fff9e6] py-28">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">

                    {/* CONTENT */}
                    <div
                        className={`flex flex-col h-full justify-start relative 
            ${isReversed ? "lg:order-2" : "lg:order-1"} lg:col-span-1`}
                    >
                        <h3 className="text-3xl font-bold text-yellow-600 mb-6 flex items-center gap-2">
                            {title}
                        </h3>

                        <div className="border-2 border-dashed border-yellow-500 rounded-2xl p-6 text-gray-700 text-lg leading-relaxed mb-8">
                            <span className="text-5xl text-yellow-500 leading-none block mb-2">“</span>
                            {quote}
                        </div>

                        <button className="bg-yellow-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-yellow-600 transition w-fit">
                            {buttonText}
                        </button>

                        {/* CHARACTER (AUTO-ROTATED) */}
                        <div
                            className={`mt-auto pt-10 hidden lg:block ${isReversed ? "self-end" : "self-start"
                                }`}
                        >
                            <img
                                src={characterImage}
                                alt="Character"
                                className="w-[180px] h-auto"
                            />
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div
                        className={`${isReversed ? "lg:order-1" : "lg:order-2"
                            } lg:col-span-2 flex justify-center items-start`}
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full max-w-[1100px] min-h-[500px] object-cover rounded-3xl shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionWithImage
