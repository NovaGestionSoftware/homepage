"use client";
import { motion } from "motion/react";
import ListaPrecios from "../ComponentesIndividuales/ListaPrecios";
import Button3 from "../ComponentesIndividuales/Button3";
import Button4 from "../ComponentesIndividuales/Button4";
import Button1 from "../ComponentesIndividuales/Button1";
import { Check, CheckCheck, CheckCircle } from "lucide-react";
function Precios() {
  const pricingPlans = [
    {
      title: "Básico",
      price: "$29/mes",
      features: ["Gestión de stock", "Reportes básicos", "Soporte estándar"],
    },
    {
      title: "Profesional",
      price: "$59/mes",
      features: ["Todo en Básico", "Gestión de ventas", "Reportes avanzados","Gestión de ventas", "Reportes avanzados"],
    },
    {
      title: "Premium",
      price: "$99/mes",
      features: [
        "Todo en Profesional",
        "Cobranzas automáticas",
        "Soporte prioritario",
      ],
    },
  ];

  return (
    <section
      className="bg-[#f8fffd] scroll-snap-start min-h-screen py-16 flex justify-center items-center"
      id="precios"
    >
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#00231b] mb-8 font-bakbak">
          Planes de Precios
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
         gap-8   items-end h-[40rem]"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`shadow-md py-14 px-6 w-80 h-[38rem] rounded-lg 
                hover:shadow-lg transition transform hover:scale-105 
                 [box-shadow:5px_5px_rgb(85_77_254)] hover:translate-x-[3px]
                  hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]" ${
                    index === Math.floor(pricingPlans.length / 2)
                      ? "bg-emerald-50/50 py-24 border border-gray-300 -top-5 relative"
                      : "bg-white"
                  }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3
                className={`text-2xl mb-4 ${
                  index === Math.floor(pricingPlans.length / 2)
                    ? "text-gray-700 dark:text-gray-500"
                    : "text-[#00231b]"
                }`}
              >
                {plan.title}
              </h3>
              <p
                className={`font-semibold text-6xl pt-2 pb-3 mb-4 ${
                  index === Math.floor(pricingPlans.length / 2)
                    ? "text-black dark:text-gray-500"
                    : "text-[#554dfe]"
                }`}
              >
                {plan.price}
              </p>
              <ul className="text-left text-gray-600 space-y-4 
               px-4 py-2 mt-10 h-56">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span
                      className={`flex items-center justify-center w-5 h-5  mr-2  rounded-full`}
                    >
                     <CheckCircle />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

           <div className=" mt-12">
           <Button3 text="Solicitar" href="#formulario"   />
           </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Precios;
