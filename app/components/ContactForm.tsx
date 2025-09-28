export default function ContactForm() {
  return (
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
  );
}