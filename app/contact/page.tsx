"use client";
import React from "react";
import Navbar from "../components/navbar/navBar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pb-1 mt-6 px-6 md:px-12 lg:px-24 text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

  <motion.p
    className="mt-4 text-gray-600 max-w-xl mx-auto text-base leading-relaxed"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    We’d love to hear from you. Let us know how we can help.
  </motion.p>
</section>


      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col items-center">
        {/* Contact Form */}
        <motion.div
          className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm/>
          
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              ),
              label: "Phone",
              value: "+1 (555) 123-4567",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              ),
              label: "Email",
              value: "info@example.com",
            },
            {
              icon: (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </>
              ),
              label: "Location",
              value: "123 Business Ave, City, State 12345",
            },
          ].map(({ icon, label, value }, index) => (
            <div key={index}>
              <div className="flex justify-center mb-4">
                <svg
                  className="w-10 h-10 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {icon}
                </svg>
              </div>
              <h3 className="font-semibold text-blue-800">{label}</h3>
              <p className="text-gray-700 mt-2">{value}</p>
            </div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
