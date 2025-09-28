import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Unlock Your Potential with AI</h1>
          <p>Revolutionary AI solutions designed to boost your productivity and creativity.</p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="hero-image">
          <Image src="/globe.svg" alt="AI Globe" width={500} height={500} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Powerful Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Intelligent Automation</h3>
            <p>Automate repetitive tasks and free up your time for what matters most.</p>
          </div>
          <div className="feature-item">
            <h3>Advanced Analytics</h3>
            <p>Gain deep insights with AI-powered data analysis and reporting.</p>
          </div>
          <div className="feature-item">
            <h3>Creative Content Generation</h3>
            <p>Generate high-quality content, from text to images, in seconds.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <p>"This AI product has transformed our workflow. Absolutely essential!"</p>
            <h4>- Jane Doe, CEO TechCorp</h4>
          </div>
          <div className="testimonial-item">
            <p>"Incredible accuracy and speed. Highly recommend to any business."</p>
            <h4>- John Smith, Marketing Director</h4>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2>Flexible Pricing Plans</h2>
        <div className="pricing-grid">
          <div className="pricing-item">
            <h3>Basic</h3>
            <p className="price">$29<span>/month</span></p>
            <ul>
              <li>500 AI Credits</li>
              <li>Basic Support</li>
              <li>Standard Features</li>
            </ul>
            <button className="btn-secondary">Choose Plan</button>
          </div>
          <div className="pricing-item featured">
            <h3>Pro</h3>
            <p className="price">$59<span>/month</span></p>
            <ul>
              <li>2000 AI Credits</li>
              <li>Priority Support</li>
              <li>All Features</li>
            </ul>
            <button className="btn-primary">Choose Plan</button>
          </div>
          <div className="pricing-item">
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <ul>
              <li>Unlimited AI Credits</li>
              <li>Dedicated Support</li>
              <li>Custom Integrations</li>
            </ul>
            <button className="btn-secondary">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  );
}
