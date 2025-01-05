import express from "express";
const app = express();
import cors from "cors";

const PORT = process.env.PORT || 8080;
app.use(cors());

const destinations = [
  {
    image: "/Images/gal1.jpg",
    title: "Paris, France",
    description:
      "The city of light draws millions of visitors every year with its unforgettable ambiance.",
  },
  {
    image: "/Images/gal2.jpg",
    title: "Bali, Indonesia",
    description:
      "An island paradise known for its lush landscapes, rich culture, and warm hospitality.",
  },
  {
    image: "/Images/gal3.png",
    title: "New York City, USA",
    description:
      "A bustling metropolis blending modern skyscrapers with diverse neighborhoods and iconic landmarks.",
  },
  {
    image: "/Images/gal4.jpg",
    title: "Tokyo, Japan",
    description:
      "A city rich in history, culture, and iconic landmarks like the Imperial Palace and Shibuya Crossing.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    image: "/Images/me2.png",
    text: "This travel agency provided excellent service and helped us plan the perfect vacation.",
    location: "New York, USA",
  },
  {
    name: "Jane Smith",
    image: "/Images/me.png",
    text: "Our trip was wonderful—lots of great memories were made. All the arrangements (flights, hotels, cars, cab transfers) went as planned.",
    location: "Los Angeles, USA",
  },
  {
    name: "Emily Johnson",
    image: "/Images/me2.png",
    text: "We were absolutely delighted and thrilled with the overall customer service provided by the staff and the quality of food and accommodations.",
    location: "Chicago, USA",
  },
];

app.get("/api/destinations", (req, res) => {
  res.json(destinations);
});
app.get("/api/testimonials", (req, res) => {
  res.json(testimonials);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
