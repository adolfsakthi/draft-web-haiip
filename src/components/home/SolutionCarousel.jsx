import React from "react";
import { Link } from "react-router-dom";

const solutionCards = [
  { title: "HRMS cum Payroll Management System", image: "/slides/hrms.png", path: "/hr-management" },
  { title: "Leave Management System", image: "/slides/leave.png", path: "/leave-management" },
  { title: "Hotel Management System", image: "/slides/hotel.png", path: "/hotel-management" },
  { title: "Canteen Management System", image: "/slides/canteen.png", path: "/" },
  { title: "GYM Management System", image: "/slides/gym.png", path: "/gym-management" },
  { title: "Campus Management System", image: "/slides/campus.png", path: "/" },
  { title: "Visitor Management System", image: "/slides/visitor.png", path: "/visitor-management" },
];

const SolutionCarousel = () => {
  return (
    <section className="flex justify-center bg-white overflow-hidden mt-2 mb-2">
      {/* SECTION FRAME */}
      <div className="max-w-[1400px] w-full h-[266px] overflow-hidden px-4">
        {/* SCROLL CONTAINER */}
        {/* MARQUEE CONTAINER */}
        <div className="flex h-full gap-5 animate-marquee">
          {/* First Set of Cards */}
          {[...solutionCards, ...solutionCards].map((card, idx) => (
            <Link
              key={`${card.title}-${idx}`}
              to={card.path}
              className={`
                shrink-0 
                w-[190px] h-[224px]
                rounded-2xl 
                bg-gradient-to-b from-[#0f1c3f] to-[#0c1534]
                shadow-xl 
                flex flex-col items-center justify-between
                ${idx % 2 === 0 ? "mt-1" : "mt-9"}
                hover:scale-105 transition-transform duration-300
              `}
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="
                rounded-l 
                shadow-xl 
                object-contain
                max-h-[300px]
              "
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionCarousel;
