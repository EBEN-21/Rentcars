import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Offer from "./components/Offer";
import Rentals from "./components/Rentals";
import Testimonial from "./components/Testimonial";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Works />
      <Offer />
      <Rentals />
      <Testimonial />
      <Hero2 />
      <Footer />
    </div>
  );
}
