"use client";

import { useState } from "react";
import { motion } from "motion/react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    setSuccessMessage(
      "¡Gracias por tu interés! Nos pondremos en contacto contigo pronto."
    );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setError("");
  };

  return (
    <section
  className="bg-[#f8fffd] min-h-screen py-16 scroll-snap-start flex justify-center items-center"
  id="formulario"
>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <h2 className="text-3xl font-bold text-[#00231b] font-bakbak mb-8 text-center">
      Solicita una Demo
    </h2>
    <h5 className="font-poppins text-base md:text-lg p-2  text-center  ">Completa el formulario y nuestro equipo se comunicara con vos para brindarte atencion.</h5>
   <div className="flex items-center justify-center  ">
   <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg md:w-[40rem] mt-12"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-semibold font-poppins text-[#00231b]"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-2 w-full font-lato px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#554dfe]"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block font-poppins text-sm font-semibold text-[#00231b]"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-2 w-full font-lato px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#554dfe]"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block font-poppins text-sm font-semibold text-[#00231b]"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="mt-2 w-full px-4 font-lato py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#554dfe]"
        ></textarea>
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-500 text-sm mb-4">{successMessage}</p>
      )}
      <button
        type="submit"
        className="w-full font-lato py-2 bg-[#554dfe] text-white font-semibold rounded-lg hover:bg-[#3d3bc8] transition"
      >
        Solicitar Demo
      </button>
    </form>
   </div>
  </motion.div>
</section>

  );
}

export default ContactForm;
