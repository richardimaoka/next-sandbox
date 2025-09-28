export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 md:py-32 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Unlock Your Potential with AI
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Our cutting-edge AI solutions empower businesses to innovate,
          automate, and achieve unprecedented growth.
        </p>
        <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
          Get Started Today
        </button>
      </div>
    </section>
  );
}
