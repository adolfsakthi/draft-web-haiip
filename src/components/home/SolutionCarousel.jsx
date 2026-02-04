import React from "react";
import { Link } from "react-router-dom";

const solutionCards = [
  { title: "HRMS cum Payroll Management System", image: "/card/payroll.png", path: "/hr-management" },
  { title: "Leave Management System", image: "/card/leave.jpg", path: "/leave-management" },
  { title: "Hotel Management System", image: "/card/hotel.png", path: "/hotel-management" },
  { title: "Canteen Management System", image: "/card/cateen.png", path: "/canteen-management" },
  { title: "GYM Management System", image: "/card/gym.png", path: "/gym-management" },
  { title: "Campus Management System", image: "/card/campus.jpg", path: "/campus-management" },
  { title: "Visitor Management System", image: "/card/visitor.jpg", path: "/visitor-management" },
];

const SolutionCarousel = () => {
  return (
    <section className="flex justify-center bg-white overflow-hidden pb-10">
      {/* SECTION FRAME */}
      <div className=" w-full min-h-[380px] overflow-hidden px-4">
        {/* MARQUEE CONTAINER */}
        <div className="flex h-full gap-8 animate-marquee items-start pt-4">
          {[...solutionCards, ...solutionCards].map((card, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <Link
                key={`${card.title}-${idx}`}
                to={card.path}
                className={`
                  shrink-0 
                  w-[193px] h-[240px]
                  rounded-[12px]
                  border border-white/20
                  shadow-2xl
                  flex flex-col justify-between
                  p-4
                  transition-all duration-300 hover:scale-105
                  ${isEven ? "mt-0" : "mt-12"}
                `}
                style={{
                  backgroundImage: 'url(/slides/bg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {isEven ? (
                  <>
                    {/* TOP: Logo */}
                    <div className="bg-white rounded-[5px] h-[32px] flex justify-center items-center shadow-sm w-full">
                      <img
                        src="/logo.png"
                        alt="Hezee Access"
                        className="h-[22px] object-contain"
                      />
                    </div>

                    {/* MIDDLE: Title */}
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-white text-center font-bold line-clamp-2" style={{ fontFamily: 'Poppins', fontSize: '14px', lineHeight: '13px', fontWeight: 700, letterSpacing: '0%' }}>
                        {card.title}
                      </h3>
                    </div>

                    {/* BOTTOM: Image (IMAGE ONLY) */}
                    <div className="w-full h-[110px] overflow-hidden rounded-[8px] bg-white">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* TOP: Image (IMAGE ONLY) */}
                    <div className="w-full h-[110px] overflow-hidden rounded-[8px] bg-white">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* MIDDLE: Title */}
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-white text-center font-bold line-clamp-2" style={{ fontFamily: 'Poppins', fontSize: '14px', lineHeight: '13px', fontWeight: 700, letterSpacing: '0%' }}>
                        {card.title}
                      </h3>
                    </div>

                    {/* BOTTOM: Logo */}
                    <div className="bg-white rounded-[12px] h-[32px] flex justify-center items-center shadow-sm w-full">
                      <img
                        src="/logo.png"
                        alt="Hezee Access"
                        className="h-[20px] object-contain"
                      />
                    </div>
                  </>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionCarousel;