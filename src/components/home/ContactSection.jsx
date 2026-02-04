export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-[#0d1628] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 gap-16 lg:gap-24">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <h2
            className="text-white leading-[1.1] mb-8"
            style={{
              fontFamily: 'Zen Dots, sans-serif',
              fontSize: 'min(56px, 10vw)',
              fontWeight: 400
            }}
          >
            We're Here To<br />
            Connect And<br />
            Assist You
          </h2>

          <p
            className="text-gray-400 mb-16 max-w-lg"
            style={{
              fontFamily: 'Poppins',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.6',
            }}
          >
            Have questions about our software solutions? Need help with integration or pricing? Our team is ready to assist you.
          </p>

          {/* CONTACT INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {/* PHONE */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-xl" style={{ fontFamily: 'Zen Dots', fontWeight: 400 }}>
                PHONE
              </h4>
              <a
                href="tel:+919036122890"
                className="text-gray-300 text-lg font-medium hover:text-white transition-colors"
                style={{ fontFamily: 'Poppins' }}
              >
                +91 9036122890
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-xl" style={{ fontFamily: 'Zen Dots', fontWeight: 400 }}>
                WHATSAPP
              </h4>
              <a
                href="https://wa.me/919036122890?text=Good%20to%20see%20you,%20how%20may%20help%20you%20today?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-lg font-medium hover:text-white transition-colors"
                style={{ fontFamily: 'Poppins' }}
              >
                +91 9036122890
              </a>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-xl" style={{ fontFamily: 'Zen Dots', fontWeight: 400 }}>
                EMAIL
              </h4>
              <a
                href="mailto:support@hezee.co.in"
                className="text-gray-300 text-lg font-medium hover:text-white transition-colors"
                style={{ fontFamily: 'Poppins' }}
              >
                support@hezee.co.in
              </a>
            </div>

            {/* ADDRESS */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-xl" style={{ fontFamily: 'Zen Dots', fontWeight: 400 }}>
                ADDRESS
              </h4>
              <a
                href="https://maps.app.goo.gl/M2FBUHX3352a8vhu5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-base leading-relaxed hover:text-white transition-colors"
                style={{ fontFamily: 'Poppins' }}
              >
                Richi Complex, No-131, 2nd Floor<br />
                St.Anthony's Road, 5th Main, 4th cross<br />
                Chinnappa Layout, Kammanahalli,<br />
                St.Thomas Town, Bangalore–560084
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="w-full lg:w-[540px] bg-white rounded-[60px] p-10 md:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
          <h3
            className="text-black mb-4"
            style={{
              fontFamily: 'Zen Dots',
              fontSize: '28px',
              fontWeight: 400,
            }}
          >
            GET IN TOUCH
          </h3>

          <p
            className="text-gray-500 mb-10 text-lg"
            style={{ fontFamily: 'Poppins', fontWeight: 400 }}
          >
            Have questions about our software solutions?
          </p>

          <form className="flex flex-col gap-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none focus:border-[#0d1628] transition-all placeholder:text-gray-400"
                style={{ fontFamily: 'Poppins' }}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none focus:border-[#0d1628] transition-all placeholder:text-gray-400"
                style={{ fontFamily: 'Poppins' }}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none focus:border-[#0d1628] transition-all placeholder:text-gray-400"
                style={{ fontFamily: 'Poppins' }}
              />
            </div>

            <div className="relative">
              <textarea
                placeholder="Message"
                rows="1"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none focus:border-[#0d1628] transition-all resize-none placeholder:text-gray-400"
                style={{ fontFamily: 'Poppins' }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0d1628] text-white py-5 rounded-2xl text-xl font-medium transition-all hover:bg-black active:scale-[0.98] mt-4 shadow-lg"
              style={{ fontFamily: 'Poppins' }}
            >
              Send message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
