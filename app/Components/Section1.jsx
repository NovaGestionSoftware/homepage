"use client";
import Image from "next/image";
import { motion } from "motion/react";

function CaracteristicasDestacadas() {
  const features = [
    {
      title: "Gestión de Inventario Inteligente",
      description:
        "Organiza tus productos y controla el stock en tiempo real con actualizaciones automáticas.",
      icon: (
        <Image
          width={80}
          height={60}
          src={"/checklist.png"}
          alt="Invetario inteligente"
          className="p-1"
        />
      ), // Puedes usar íconos o imágenes
    },
    {
      title: "Informes Personalizados",
      description:
        "Genera informes detallados sobre ventas, impuestos y rendimiento.",
      icon: (
        <Image
          width={80}
          height={60}
          src={"/monitor.png"}
          alt="Informe"
          className="p-1"
        />
      ),
    },
    {
      title: "Cobranza Simplificada",
      description:
        "Monitorea el estado de las cobranzas con recordatorios automáticos.",
      icon: (
        <Image
          width={80}
          height={60}
          src={"/payment.png"}
          alt="Cobranza Segura"
          className="p-1"
        />
      ),
    },
    {
      title: "Interfaz Intuitiva",
      description:
        "Diseñada para ser fácil de usar, incluso para usuarios sin experiencia técnica.",
      icon: (
        <Image
          width={80}
          height={60}
          src={"/user-interface.png"}
          alt="Interfaz Intuitiva"
          className="p-1"
        />
      ),
    },
  ];

  return (
    <section
      className="bg-[#f8fffd] min-h-screen py-16 scroll-snap-start flex justify-center items-center"
      id="caracteristicas"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center "
      >
        <h2 className="text-4xl font-bold tracking-tight text-[#00231b] font-bakbak">
          Características Destacadas
        </h2>
        <p className="mt-2 text-lg font-lato font-semibold text-gray-600">
          Descubre cómo nuestro software puede ayudarte a transformar tu
          negocio.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4  flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold font-poppins text-[#00231b]">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 font-lato">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default CaracteristicasDestacadas;
