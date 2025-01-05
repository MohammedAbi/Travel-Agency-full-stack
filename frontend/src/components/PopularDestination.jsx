import React, { useEffect, useState } from "react";

const PopularDestination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch("http://localhost:8080/api/destinations")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setDestinations(data);
      })
      .catch((error) => {
        console.error("Error fetching destinations:", error);
      });
  }, []);

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">
          Popular Destinations
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <img
                src={city.image}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{city.title}</h4>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
