import React from "react";

const SmartOrbit = () => {
  return (
    <section className="flex justify-center bg-white py-24">
      <div className="relative w-[1200px] h-[620px]">

        {/* HEADER */}
        <div className="mb-20 flex items-start justify-between">
          <div className="flex items-center gap-4 text-4xl font-semibold text-black">
            <img src="/Star.png" alt="star" className="w-14 h-14 object-contain" />
            <h2 style={{ fontFamily: "Orbitron, sans-serif" }}>
              Explore our product categories
            </h2>
          </div>

          <div className="relative pl-6 max-w-[380px]">
            <div className="absolute left-0 top-1 h-[80%] w-[3px] bg-[#cf3d9c]" />

            <p
              className="
                text-lg italic font-medium leading-relaxed
                bg-gradient-to-b from-[#cf3d9c] via-[#b44bb2] to-[#5b38c6]
                bg-clip-text text-transparent
              "
            >
              Access control, video surveillance, gates, vehicle inspection and more.
            </p>
          </div>
        </div>

        {/* ================= ORBIT IMAGE ================= */}
      <img
  src="/orbit.png"
  alt=""
  className="
    absolute top-[60px] left-0
    w-full h-full
    object-contain
    pointer-events-none
    z-0
  "
/>


        {/* LEFT HUMAN DECOR */}
       <img
  src="/human.png"
  alt=""
  className="
    absolute right-[-160px] bottom-[-160px]
    w-[240px]
    object-contain
    pointer-events-none
    z-0
  "
/>


        

      </div>
    </section>
  );
};

export default SmartOrbit;
