import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faChartLine, faCloud } from '@fortawesome/free-solid-svg-icons';

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
              <FontAwesomeIcon icon={faRobot} className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Automation</h3>
            <p className="text-gray-600">
              Automate repetitive tasks and free up your team to focus on
              what matters most.
            </p>
          </div>
          <div className="p-8 shadow-lg rounded-lg bg-gray-50 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="text-indigo-600 mb-4">
              <FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
            <p className="text-gray-600">
              Gain deep insights from your data with advanced AI analytics and
              reporting.
            </p>
          </div>
          <div className="p-8 shadow-lg rounded-lg bg-gray-50 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="text-indigo-600 mb-4">
              <FontAwesomeIcon icon={faCloud} className="w-12 h-12 mx-auto" />
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