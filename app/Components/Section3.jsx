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
    className="bg-[#f8fffd] py-8 scroll-snap-start flex flex-col justify-center items-center"
    id="precios"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#00231b] mb-8 text-center font-bakbak">
        Planes de Precios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={`shadow-md p-6 sm:p-8 rounded-lg flex flex-col items-center 
              transition transform hover:scale-105 hover:shadow-lg
              ${
                index === Math.floor(pricingPlans.length / 2)
                  ? "bg-emerald-50/50 border border-gray-300"
                  : "bg-white"
              }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3
              className={`text-lg sm:text-xl font-semibold ${
                index === Math.floor(pricingPlans.length / 2)
                  ? "text-gray-700"
                  : "text-[#00231b]"
              }`}
            >
              {plan.title}
            </h3>
            <p
              className={`font-bold text-3xl sm:text-4xl my-4 ${
                index === Math.floor(pricingPlans.length / 2)
                  ? "text-black"
                  : "text-[#554dfe]"
              }`}
            >
              {plan.price}
            </p>
            <ul className="text-left text-gray-600 space-y-2 mt-4 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#554dfe] mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button3 text="Solicitar" href="#formulario" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  

  );
}

export default Precios;
