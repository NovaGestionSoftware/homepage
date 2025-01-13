import Image from "next/image";
import Navbar from "./Components/Navigation";
import HeroSection from "./Components/HeroSection";
import CaracteristicasDestacadas from "./Components/Section1";
import Opiniones from "./Components/Section2";
import Precios from "./Components/Section3";
import ContactForm from "./Components/Section4";

export default function Home() {
  return (
    <div className="overflow-x-hidden scroll-snap-y-mandatory">
      <Navbar />
      <div className="pt-16"> {/* Padding para evitar que el contenido quede cubierto por el navbar */}
        <HeroSection />
        <CaracteristicasDestacadas />
        <Opiniones />
        <Precios />
        <ContactForm />
      </div>
    </div>
  );
}
