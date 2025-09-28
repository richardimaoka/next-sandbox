import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Powerful Features Designed for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 shadow-lg rounded-lg bg-gray-50 hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M15 10V6a3 3 0 00-3-3 3 0 00-3 3v4a3 3 0 003 3 3 0 003-3zm-6 0h.01M12 15h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Automation</h3>
              <p className="text-gray-600">
                Automate repetitive tasks and free up your team to focus on
                what matters most.
              </p>
            </div>
            <div className="p-8 shadow-lg rounded-lg bg-gray-50 hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Gain deep insights from your data with advanced AI analytics and
                reporting.
              </p>
            </div>
            <div className="p-8 shadow-lg rounded-lg bg-gray-50 hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 8a8 8 0 01-8-8c0-5.523 4.38-10 9.792-10A8.013 8.013 0 0112 20z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Our AI platform scales with your business, from startups to
                enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <p className="text-gray-700 italic mb-4">
                "This AI product has transformed our workflow. The efficiency
                gains are incredible!"
              </p>
              <p className="font-semibold text-indigo-600">- Jane Doe, CEO of TechCorp</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <p className="text-gray-700 italic mb-4">
                "An indispensable tool for any modern business. Highly
                recommend their innovative solutions."
              </p>
              <p className="font-semibold text-indigo-600">- John Smith, Founder of InnovateX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-5xl font-extrabold text-indigo-600 mb-6">
                $29<span className="text-xl font-medium">/month</span>
              </p>
              <ul className="text-gray-700 mb-8 space-y-2">
                <li>5 AI Models</li>
                <li>1000 API Calls/month</li>
                <li>Basic Support</li>
              </ul>
              <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                Choose Basic
              </button>
            </div>
            <div className="p-8 border border-indigo-600 rounded-lg shadow-xl transform scale-105">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-5xl font-extrabold text-indigo-600 mb-6">
                $79<span className="text-xl font-medium">/month</span>
              </p>
              <ul className="text-gray-700 mb-8 space-y-2">
                <li>20 AI Models</li>
                <li>10000 API Calls/month</li>
                <li>Priority Support</li>
                <li>Advanced Analytics</li>
              </ul>
              <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                Choose Pro
              </button>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-5xl font-extrabold text-indigo-600 mb-6">
                Custom
              </p>
              <ul className="text-gray-700 mb-8 space-y-2">
                <li>Unlimited AI Models</li>
                <li>Unlimited API Calls</li>
                <li>Dedicated Support</li>
                <li>Custom Integrations</li>
              </ul>
              <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Get in Touch
          </h2>
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; 2025 AI Product. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}