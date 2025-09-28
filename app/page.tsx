import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}