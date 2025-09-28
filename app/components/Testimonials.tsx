export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <p className="text-gray-700 italic mb-4">
              &quot;This AI product has transformed our workflow. The efficiency
              gains are incredible!&quot;
            </p>
            <p className="font-semibold text-indigo-600">
              - Jane Doe, CEO of TechCorp
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <p className="text-gray-700 italic mb-4">
              &quot;An indispensable tool for any modern business. Highly recommend
              their innovative solutions.&quot;
            </p>
            <p className="font-semibold text-indigo-600">
              - John Smith, Founder of InnovateX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
