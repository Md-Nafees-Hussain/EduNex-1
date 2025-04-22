"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaLaptopCode } from "react-icons/fa";
import { MdSchool, MdSupportAgent, MdVerified } from "react-icons/md";
import Navbar from "../components/navbar/navBar";
import Footer from "../components/footer";

export default function ServicesPage() {
  return (
    <div>
      <Navbar/>
      {/* Hero Section */}
      <motion.section
        className="text-center space-y-6 bg-gradient-to-br from-blue-800 to-blue-500 py-24 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold">Transforming Education with Technology</h1>
        <p className="text-lg max-w-2xl mx-auto text-white font-light">
          Custom e-learning solutions for institutions, coaching centers, and businesses.
        </p>
      </motion.section>

      

      <div className="w-full min-h-screen px-6 md:px-12 lg:px-24 py-12 space-y-16">
        {/* Why Choose EduNex */}
        <motion.section className="text-center">
          <motion.h2
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Why Choose EduNex?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MdVerified, title: "Trusted by Institutions", description: "EduNex is a reliable platform trusted by leading institutions." },
              { icon: FaUsers, title: "User-Friendly Interface", description: "Designed with simplicity, ensuring a seamless experience." },
              { icon: MdSupportAgent, title: "24/7 Technical Support", description: "Our team is available round the clock for assistance." },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 border rounded-lg shadow-md flex flex-col items-center text-center bg-white/80 backdrop-blur-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05}}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <IconComponent className="text-4xl text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
        <div className="border-t border-gray-300 my-10"></div>

        {/* Our Services */}
        <motion.section className="text-center">
          <motion.h2
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FaChalkboardTeacher, title: "Online & Offline Coaching", description: "Comprehensive coaching solutions for educators & students." },
              { icon: FaLaptopCode, title: "Custom EdTech App Development", description: "Tailored e-learning platforms for institutions & businesses." },
              { icon: MdSupportAgent, title: "Advanced Admin Panel", description: "Efficient tools for managing courses, students & staff." },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 border rounded-lg shadow-md flex flex-col items-center text-center bg-white/80 backdrop-blur-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <IconComponent className="text-4xl text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <div className="border-t border-gray-300 my-10"></div>

        {/* How It Works */}
        <motion.section className="text-center">
          <motion.h2
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { step: "Consultation", desc: "Discuss your needs and goals." },
              { step: "Development", desc: "We build a customized solution." },
              { step: "Customization", desc: "Tailor the platform to your needs." },
              { step: "Deployment & Support", desc: "Launch with ongoing assistance." },
            ].map((item, index, arr) => (
              <div key={index} className="flex items-center">
                <motion.div
                  className="relative p-6 border rounded-lg shadow-md flex flex-col items-center text-center transition-all w-48 bg-white/80 backdrop-blur-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-lg font-bold shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mt-6">{item.step}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </motion.div>
                {index < arr.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-blue-600 mx-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.section>
        <div className="border-t border-gray-300 my-10"></div>
        {/* CTA Section inside the Container with negative margins */}


      </div>
      <section className="py-16 bg-blue-700 text-white text-center -mx-6 md:-mx-12 lg:-mx-24">
  <h2 className="text-3xl font-bold">Ready to Work with Us?</h2>
  <p className="mt-4">Let's build the future of education together.</p>
  <Link href="/contact" passHref>
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }}
      whileTap={{ scale: 0.95 }}
      className="mt-6 bg-white text-blue-700 font-bold py-3 px-6 rounded-lg cursor-pointer"
    >
      Contact Us
    </motion.button>
  </Link>
</section>
      <Footer/>
    </div>
  );
}
