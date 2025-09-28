export default function Features() {
  return (
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
  );
}