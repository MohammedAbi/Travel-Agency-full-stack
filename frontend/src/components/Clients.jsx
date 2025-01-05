import React, { useEffect, useState } from "react";

// const testimonials = [
//   {
//     name: "John Doe",
//     image: "/Images/me2.png",
//     text: "This travel agency provided excellent service and helped us plan the perfect vacation.",
//     location: "New York, USA",
//   },
//   {
//     name: "Jane Smith",
//     image: "/Images/me.png",
//     text: "Our trip was wonderful—lots of great memories were made. All the arrangements (flights, hotels, cars, cab transfers) went as planned.",
//     location: "Los Angeles, USA",
//   },
//   {
//     name: "Emily Johnson",
//     image: "/Images/me2.png",
//     text: "We were absolutely delighted and thrilled with the overall customer service provided by the staff and the quality of food and accommodations.",
//     location: "Chicago, USA",
//   },
// ];

const Clients = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
      // Fetch data from the backend API
      fetch("http://localhost:8080/api/testimonials")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setTestimonials(data);
        })
        .catch((error) => {
          console.error("Error fetching destinations:", error);
        });
    }, []);

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <img
                src={testimonial.image}
                alt=""
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 ">{testimonial.location}</p>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
