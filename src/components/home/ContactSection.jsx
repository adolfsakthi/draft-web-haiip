export default function ContactSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0b1220] to-[#101a2c] py-16 md:py-28">

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 lg:px-16 gap-12 lg:gap-0">

        {/* LEFT CONTENT */}
        <div className="w-full max-w-[620px]">

          <h2 className="text-white text-[32px] md:text-[56px] leading-[1.1] font-semibold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            We're Here To <br />
            Connect And <br />
            Assist You
          </h2>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-300 max-w-[520px] leading-relaxed">
            Have questions about the summit? Need help with registration or travel? Our team is ready to assist you.
          </p>

          {/* CONTACT INFO GRID */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-white">

            {/* PHONE */}
            <div>
              <h4 className="text-lg font-semibold tracking-wide mb-1">PHONE</h4>
              <p className="text-base text-gray-300 leading-tight">+91 9036122890</p>
            </div>

            {/* WHATSAPP */}
            <div>
              <h4 className="text-lg font-semibold tracking-wide mb-1">WHATSAPP</h4>
              <p className="text-base text-gray-300 leading-tight">+91 9036122890</p>
            </div>

            {/* EMAIL */}
            <div>
              <h4 className="text-lg font-semibold tracking-wide mb-1">EMAIL</h4>
              <p className="text-base text-gray-300 leading-tight">support@hezee.co.in</p>
            </div>

            {/* ADDRESS */}
            {/* ADDRESS */}
            <div>
              <h4 className="text-lg font-semibold tracking-wide mb-1">ADDRESS</h4>
              <p className="text-base text-gray-300 leading-snug whitespace-normal sm:whitespace-nowrap">
                Richi Complex, No-131, 2nd Floor <br />
                St.Anthony's Road, 5th Main, 4th Cross <br />
                Chinnappa Layout, Kammanahalli <br />
                St.Thomas Town, Bangalore–560084
              </p>
            </div>


          </div>

        </div>

        {/* RIGHT FORM CARD */}
        <div className="w-full max-w-[520px] bg-white rounded-[30px] md:rounded-[60px] p-8 md:p-14 shadow-2xl">

          <h3 className="text-2xl font-semibold text-black mb-2">
            GET IN TOUCH
          </h3>

          <p className="text-gray-600 mb-8 md:mb-12 text-sm md:text-base">
            Have questions about our software solutions?
          </p>

          {/* FORM */}
          <form className="space-y-6 md:space-y-10">

            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-400 py-2 md:py-3 text-base md:text-lg outline-none focus:border-black transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-400 py-2 md:py-3 text-base md:text-lg outline-none focus:border-black transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-gray-400 py-2 md:py-3 text-base md:text-lg outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows="1"
                className="w-full border-b border-gray-400 py-2 md:py-3 text-base md:text-lg outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-8 md:mt-12 w-full bg-[#0b1220] text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-black transition active:scale-95"
            >
              Send message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
