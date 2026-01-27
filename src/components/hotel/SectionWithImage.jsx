import React from "react"

const SectionWithImage = ({
    title,
    quote,
    image,
    overlayImage, // inventory-only modal
    character,
    isReversed = false
}) => {
    const hasOverlay = Boolean(overlayImage)

    return (
        <section className="py-20">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {/* CONTENT */}
                    <div
                        className={`
                            flex flex-col
                            ${isReversed ? "lg:order-2" : "lg:order-1"}
                            lg:col-span-1
                        `}
                    >
                        <h3 className="mb-6 text-yellow-600 font-semibold text-lg">
                            {title}
                        </h3>

                        {/* QUOTE */}
                        <div className="relative mb-6">
                            <span className="absolute -top-3 left-6 text-yellow-400 bg-[#fff9e6] px-1 text-[48px] leading-none">
                                “
                            </span>
                            <div className="border-2 border-dashed border-yellow-400 rounded-2xl p-6 pt-8 italic text-gray-600">
                                {quote}
                            </div>
                        </div>

                        {/* EXPLORE */}
                        <button
                            className="
                                w-fit mb-10 px-6 py-2
                                bg-[#EAB308] text-white font-bold text-sm
                                tracking-widest rounded-lg
                                border-2 border-black
                                shadow-[3px_3px_0_#000]
                                hover:translate-x-[1px]
                                hover:translate-y-[1px]
                                hover:shadow-[1px_1px_0_#000]
                                transition
                            "
                        >
                            EXPLORE
                        </button>

                        {/* CHARACTER */}
                        {character && (
                            <div className={`hidden lg:block ${isReversed ? "self-end" : "self-start"}`}>
                                <img src={character} alt="" className="w-[180px]" />
                            </div>
                        )}
                    </div>

                    {/* IMAGE FRAME */}
                    <div
                        className={`
                            ${isReversed ? "lg:order-1" : "lg:order-2"}
                            lg:col-span-3 flex justify-center
                        `}
                    >
                        <div className="relative border-[20px] border-black rounded-[48px] overflow-hidden shadow-2xl w-full max-w-[978px] aspect-[978/639]">

                            {/* MAIN IMAGE */}
                            <img
                                src={image}
                                alt={title}
                                className={`w-full h-full object-cover ${
                                    hasOverlay ? "opacity-60" : ""
                                }`}
                            />

                            {/* DARK DIM LAYER (Inventory only) */}
                            {hasOverlay && (
                                <div className="absolute inset-0 bg-black/30" />
                            )}

                            {/* FLOATING MODAL (Inventory only) */}
                            {hasOverlay && (
                                <div
                                    className="
                                        absolute top-1/2 left-1/2
                                        -translate-x-1/2 -translate-y-1/2
                                        bg-white rounded-2xl
                                        shadow-2xl
                                        p-4
                                        max-w-[420px]
                                        w-[85%]
                                    "
                                >
                                    <img
                                        src={overlayImage}
                                        alt="Inventory Modal"
                                        className="w-full h-auto rounded-xl"
                                    />
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionWithImage
