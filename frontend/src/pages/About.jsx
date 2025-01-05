import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/Images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl text-center font-bold text-white mb-4">
            About
          </h4>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src="/Images/hero.png"
              alt="About Us"
              className="rounded-lg shadow-md w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-start">
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              We are passionate travel agency committed to provideing the best
              travel experiences for our clients. Our team of dedicated
              professionals works tirelessly to ensure your trips are seamless
              and unforgettable
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              Our mission is to create amazing travel experiences that inspire
              and enrich the lives of our clients. We believe in personalized
              service, attention to detail, and providing exceptional value
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
