import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        id="main-header"
        className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50 flex justify-between items-center px-8 py-4"
      >
        <div className="text-2xl font-bold">3D Car Customizer</div>
        <nav className="space-x-6 font-medium">
          <a href="#models" className="hover:text-blue-500 transition">
            Models
          </a>
          <a href="#features" className="hover:text-blue-500 transition">
            Features
          </a>
          <a href="#booking" className="hover:text-blue-500 transition">
            Booking
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen text-white text-center px-6"
        style={{
          backgroundImage: "url('/assets/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Foreground Content */}
        <div className="relative space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-bold">
            Redefining the Future of Driving
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Personalize every detail of your car with cutting-edge 3D technology.
          </p>

          {/* Navigate to Configurator Page */}
          <Link
            to="/customize"
            className="inline-block px-6 py-3 rounded-2xl bg-white text-black no-underline font-semibold hover:bg-blue-100 transition"
          >
            Customize Your Car
          </Link>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 bg-gray-50 text-center px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-12">Our Models</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src="/assets/images/f.avif"
              alt="Toyota Land Cruiser"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Toyota Land Cruiser</h3>
            <p className="text-gray-600">
              Luxury meets performance with unmatched efficiency.
            </p>
           <p className="text-gray-600">
            Customization Starts From ₹170,000.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src="/assets/images/ru.jpg"
              alt="Jeep Rubicon"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jeep Rubicon</h3>
            <p className="text-gray-600">
              Off-road beast with rugged design and unmatched performance.
            </p>
            <p className="text-gray-600">
              Customization Starts From ₹100,000.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src="/assets/images/br.jpg"
              alt="Ford Bronco"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Ford Bronco</h3>
            <p className="text-gray-600">
              A rugged SUV built for off-road adventure and classic style.
            </p>
            <p className="text-gray-600">
              Customization Starts From ₹200,000.
            </p>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white text-center px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8">Why Choose 3D Car Customizer?</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>🚗 See Before You Buy</li>
          <li>👓 Immersive AR/VR</li>
          <li>🖥️ 3D Real-Time Configurator</li>
          <li>✨ Personalized Luxury</li>
        </ul>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gray-100 text-center px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8">Book Your Experience</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
          Ready to customize and experience your dream car?  
          Contact us directly to book a demo or consultation.
        </p>
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto">
          <p className="font-semibold">📧 Email:</p>
          <p className="mb-4">semicolonsociety@hackathon.com</p>
          <p className="font-semibold">📞 Phone:</p>
          <p className="mb-4">+918585858585 </p>
          <Link
            to="/customize"
            className="inline-block mt-4 px-6 py-3 rounded-2xl bg-white-600 text-white font-semibold "
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 text-center py-8 mt-auto">
        <p>© 2025 Semicolon Society. All rights reserved.</p>
        <p>Contact: semicolonsociety@hackathon.com</p>
        <div className="mt-4">
          <p className="font-semibold">Developers:</p>
          <p>Darshan Girish Nayak</p>
          <p>Abhishek R H</p>
          <p>Akshay C M</p>
          <p>Amith M Gowda</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
