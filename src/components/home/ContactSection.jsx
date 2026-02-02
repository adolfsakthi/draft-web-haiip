export default function ContactSection() {
  return (
    <section className="relative w-full bg-[#0f1729] py-20 md:py-28">

      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start justify-between px-6 lg:px-20 gap-16 lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 max-w-[600px]">

          <h2
            className="text-white leading-[1.15] mb-8"
            style={{
              fontFamily: 'Zen Dots, sans-serif',
              fontSize: '56px',
              fontWeight: 400
            }}
          >
            We're Here To<br />
            Connect And<br />
            Assist You
          </h2>

          <p
            className="text-gray-300 mb-16 max-w-[480px]"
            style={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '30px',
              letterSpacing: '0%'
            }}
          >
            Have questions about the summit? Need help with registration or travel? Our team is ready to assist you.
          </p>

          {/* CONTACT INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-y-10 text-white">

            {/* PHONE */}
            <div>
              <h4
                className="mb-2"
                style={{
                  fontFamily: 'Zen Dots',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textTransform: 'uppercase'
                }}
              >
                PHONE
              </h4>
              <p
                className="text-gray-300"
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '30px',
                  letterSpacing: '0%'
                }}
              >
                +91 9036122890
              </p>
            </div>

            {/* WHATSAPP */}
            <div className="-ml-40">
              <h4
                className="mb-2"
                style={{
                  fontFamily: 'Zen Dots',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textTransform: 'uppercase'
                }}
              >
                WHATSAPP
              </h4>
              <p
                className="text-gray-300"
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '30px',
                  letterSpacing: '0%'
                }}
              >
                +91 9036122890
              </p>
            </div>

            {/* EMAIL */}
            <div>
              <h4
                className="mb-2"
                style={{
                  fontFamily: 'Zen Dots',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textTransform: 'uppercase'
                }}
              >
                EMAIL
              </h4>
              <p
                className="text-gray-300"
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '30px',
                  letterSpacing: '0%'
                }}
              >
                support@hezee.co.in
              </p>
            </div>

            {/* ADDRESS */}
            <div className="-ml-40">
              <h4
                className="mb-2"
                style={{
                  fontFamily: 'Zen Dots',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textTransform: 'uppercase'
                }}
              >
                ADDRESS
              </h4>
              <p
                className="text-gray-300"
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  whiteSpace: 'nowrap'
                }}
              >
                Richi Complex, No-131, 2nd Floor<br />
                St.Anthony's Road, 5th Main, 4th cross<br />
                Chinnappa Layout, Kammanahalli,<br />
                St.Thomas Town, Bangalore–560084
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT FORM CARD */}
        <div
          className="bg-white shadow-2xl"
          style={{
            width: '533px',
            height: '608px',
            borderRadius: '50px',
            padding: '48px',
            gap: '10px',
            opacity: 1
          }}
        >

          <h3
            className="text-black"
            style={{
              fontFamily: 'Zen Dots',
              fontSize: '26px',
              fontWeight: 400,
              lineHeight: '30px',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            GET IN TOUCH
          </h3>

          <p
            className="text-gray-600"
            style={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '30px',
              letterSpacing: '0%',
              marginBottom: '32px'
            }}
          >
            Have questions about our software solutions?
          </p>

          {/* FORM */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <div>
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 outline-none focus:border-gray-600 transition-colors placeholder-gray-400"
                style={{
                  width: '420px',
                  height: '40px',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  opacity: 1,
                  gap: '10px'
                }}
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-300 outline-none focus:border-gray-600 transition-colors placeholder-gray-400"
                style={{
                  width: '420px',
                  height: '40px',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  opacity: 1,
                  gap: '10px'
                }}
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                className="border-b border-gray-300 outline-none focus:border-gray-600 transition-colors placeholder-gray-400"
                style={{
                  width: '420px',
                  height: '40px',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  opacity: 1,
                  gap: '10px'
                }}
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows="1"
                className="border-b border-gray-300 outline-none focus:border-gray-600 transition-colors resize-none placeholder-gray-400"
                style={{
                  width: '420px',
                  height: '40px',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  opacity: 1,
                  gap: '10px'
                }}
              />
            </div>

            <button
              type="submit"
              className="bg-[#0f1729] text-white rounded-9 hover:bg-[#1a2438] transition-colors active:scale-[0.98]"
              style={{
                width: '420px',
                padding: '16px',
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 500,
                marginTop: '16px'
              }}
            >
              Send message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
