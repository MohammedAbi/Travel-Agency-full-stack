import React from "react";
import {
  FaConciergeBell,
  FaHotel,
  FaPlane,
  FaUmbrellaBeach,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlane className="text-4xl text-blue-500" />,
    title: "Flight Booking",
    description:
      "We provide easy and quick flight booking services to make your travel hassle-free.",
  },
  {
    icon: <FaHotel className="text-4xl text-blue-500" />,
    title: "Hotel Reservations",
    description:
      "Find and book accommodations that suit your preferences and budget.",
  },
  {
    icon: <FaUmbrellaBeach className="text-4xl text-blue-500" />,
    title: "Beach Holidays",
    description:
      "Explore and book relaxing beach destinations for your perfect getaway.",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-blue-500" />,
    title: "Concierge Services",
    description:
      "Access personalized assistance for travel planning, dining, and more.",
  },
];

const Services = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <div className="mb-4">{service.icon}</div>

              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
