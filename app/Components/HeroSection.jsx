'use client'
import { InteractiveGridPattern } from "../../components/ui/interactivePattern";
import Button2 from "../ComponentesIndividuales/Button2";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center
       text-black font-bakbak bg-[#f8fffd] h-[70vh] md:h-[80vh]
        lg:h-[90vh] px-4  min-h-screen py-16 scroll-snap-start"
      id="hero"
    >
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(480px_circle_at_center,white,transparent)] mt-12 z-0 "
        )}
        width={30}
        height={30}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-500"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.6}}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 z-50 ">
          Bienvenido a Nova Sistemas
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Innovación, eficiencia y soluciones adaptadas a tu negocio.
        </p>

        <Button2 text="Descubre Más" href="#caracteristicas" target="_blank" />
      </motion.div>
    </section>
  );
}

export default HeroSection;
