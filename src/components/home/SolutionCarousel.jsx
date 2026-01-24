import React from "react";

const solutionCards = [
  { title: "HRMS cum Payroll Management System", image: "/slides/hrms.png" },
  { title: "Leave Management System", image: "/slides/leave.png" },
  { title: "Hotel Management System", image: "/slides/hotel.png" },
  { title: "Canteen Management System", image: "/slides/canteen.png" },
  { title: "GYM Management System", image: "/slides/gym.png" },
  { title: "Campus Management System", image: "/slides/campus.png" },
  { title: "Visitor Management System", image: "/slides/visitor.png" },
];

const SolutionCarousel = () => {
  return (
    <section className="flex justify-center bg-white overflow-hidden mt-2 mb-2">
      {/* SECTION FRAME */}
      <div className="max-w-[1400px] w-full h-[266px] overflow-hidden px-4">
        {/* SCROLL CONTAINER */}
        <div className="flex h-full gap-5 overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {solutionCards.map((card, idx) => (
            <article
              key={card.title}
              className={`
                shrink-0 
                w-[190px] h-[224px]          // ⬅ narrower + taller
                rounded-2xl 
                bg-gradient-to-b from-[#0f1c3f] to-[#0c1534]
                shadow-xl 
                flex flex-col items-center justify-between
                ${idx % 2 === 0 ? "mt-1" : "mt-9"}
              `}
            >
              {/* Image */}
             <img
  src={card.image}
  alt=""
  loading="lazy"
  className="
    rounded-l 
    shadow-xl 
    object-contain
    max-h-[300px]
  "
/>


              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionCarousel;
