'use client';

import { motion } from "motion/react";
import { MarqueeDemo } from "../ComponentesIndividuales/ReviewCard";

function Opiniones() {
  const opinions = [
    {
      name: "Juan Pérez",
      review: "Este software ha transformado la forma en que gestionamos nuestro inventario. Muy fácil de usar.",
    },
    {
      name: "Ana Gómez",
      review: "Nos ha ayudado a mejorar la eficiencia de nuestro equipo. Los reportes son muy útiles.",
    },
    {
      name: "Carlos Díaz",
      review: "Excelente herramienta, especialmente para automatizar las cobranzas y mantener todo en orden.",
    },
  ];

  return (
    <section className="bg-[#f8fffd] scroll-snap-start min-h-screen py-16 flex justify-center items-center" id="opiniones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#00231b] mb-8 font-bakbak">Opiniones de Clientes</h2>
        <p className="font-lato font-semibold"> Creemos que una buena relacion con nuestros clientes es la clave para el exito, por eso su opinion es muy importante para nuestro desarrollo.</p>
        <div className="grid grid-cols-1  gap-8">
          <MarqueeDemo />
        </div>
      </div>
    </section>
  );
}

export default Opiniones;
