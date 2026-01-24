// Blue call-to-action section
export default function CallToAction() {
  return (
    <section className="w-full bg-[#00b6f3] py-12 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Try the LMS for free and simplify leave management instantly.</h2>
        <p className="mb-6 text-base font-light">Hassle-free setup with no hidden charges — a complete solution for leave tracking, approvals, and HR automation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">
          <button className="bg-white text-[#00b6f3] font-semibold px-6 py-2 rounded shadow hover:bg-blue-50 transition">Get a Free Demo</button>
          <button className="border border-white text-white font-semibold px-6 py-2 rounded shadow hover:bg-[#009fd1] transition">Start Your 7 Days Free Trial</button>
        </div>
      </div>
    </section>
  );
}
