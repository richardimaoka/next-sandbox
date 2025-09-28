export default function Pricing() {
  return (
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
  );
}