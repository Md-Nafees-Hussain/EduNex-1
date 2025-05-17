"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaLaptopCode,
  FaComments,
  FaCode,
  FaWrench,
  FaRocket,
} from "react-icons/fa";
import {
  MdSchool,
  MdSupportAgent,
  MdVerified,
} from "react-icons/md";
import Navbar from "../components/navbar/navBar";
import Footer from "../components/footer";
import CTA from "../components/CTA";

export default function ServicesPage() {
  const serviceTabs = {
    Institutions: [
      {
        icon: MdSchool,
        title: "Learning Management Systems",
        description:
          "Robust platforms for schools, colleges, and coaching centers.",
      },
      {
        icon: MdVerified,
        title: "Student Information Systems",
        description: "Track admissions, grades, and attendance effortlessly.",
      },
    ],
    Educators: [
      {
        icon: FaChalkboardTeacher,
        title: "Live & Recorded Classes",
        description: "Interactive teaching tools for seamless delivery.",
      },
      {
        icon: FaLaptopCode,
        title: "Course Builder Tools",
        description: "Create, manage, and monetize your own curriculum.",
      },
    ],
    Students: [
      {
        icon: FaUsers,
        title: "Self-paced Learning",
        description:
          "Access content anytime, with gamified learning modules.",
      },
      {
        icon: MdSupportAgent,
        title: "Doubt-Solving Support",
        description: "Connect with mentors instantly and resolve queries fast.",
      },
    ],
  };

  const tabs = Object.keys(serviceTabs) as (keyof typeof serviceTabs)[];
  const [activeTab, setActiveTab] = useState<keyof typeof serviceTabs>("Institutions");

  return (
    <div>
      <Navbar />
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="py-16 px-6 md:px-12 lg:px-24 text-center"
>
  <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500">
    Our Services
  </h1>
  <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
    Empowering educators and learners with cutting-edge tools and personalized learning experiences.
  </p>
</motion.section>



      {/* Our Services Tabs */}
      <section id="services">
        <motion.section className="text-center mt-6 px-6 md:px-12 lg:px-24">
          

          <div className="flex justify-center gap-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-label={`Switch to ${tab} services`}
                className={`py-2 px-4 rounded-t-lg font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-6"
            >
              {serviceTabs[activeTab].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    layoutId={`service-card-${index}`}
                    whileHover={{ scale: 1.05, rotate: 0.5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-full max-w-sm p-6 border rounded-lg shadow-md flex flex-col items-center text-center bg-white/80 backdrop-blur-md"
                  >
                    <IconComponent
                      className="text-4xl text-blue-600 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.section>
      </section>
      {/* Why Choose EduNex */}
      <section id="why" className="w-full px-6 md:px-12 lg:px-24 py-16 space-y-16">
        <motion.section className="text-center">
          <motion.h2
            className="text-2xl font-bold mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Why Choose EduNex?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {[{
              icon: MdVerified,
              title: "Trusted by Institutions",
              description: "EduNex is a reliable platform trusted by leading institutions.",
            }, {
              icon: FaUsers,
              title: "User-Friendly Interface",
              description: "Designed with simplicity, ensuring a seamless experience.",
            }, {
              icon: MdSupportAgent,
              title: "24/7 Technical Support",
              description: "Our team is available round the clock for assistance.",
            }].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="w-full max-w-sm p-6 border rounded-lg shadow-md flex flex-col items-center text-center bg-white/80 backdrop-blur-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 0.5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <IconComponent className="text-4xl text-blue-600 mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </section>

      {/* How It Works */}
      <section id="process" className="relative text-center px-6 md:px-12 lg:px-24 bg-slate-50 py-20">
        <motion.h2
          className="text-2xl font-bold mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        <div className="relative max-w-5xl mx-auto space-y-20">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 rounded-full -translate-x-1/2 z-0" />

          {[
            { step: "Consultation", desc: "Discuss your needs and goals.", icon: FaComments },
            { step: "Development", desc: "We build a customized solution.", icon: FaCode },
            { step: "Customization", desc: "Tailor the platform to your needs.", icon: FaWrench },
            { step: "Deployment & Support", desc: "Launch with ongoing assistance.", icon: FaRocket },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={`relative md:grid md:grid-cols-2 items-center ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`${
                    index % 2 === 0
                      ? 'md:col-start-1 text-right md:pr-10'
                      : 'md:col-start-2 text-left md:pl-10'
                  } text-center md:text-inherit`}
                >
                  <h3 className="text-lg font-semibold">{item.step}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-10">
                  <Icon className="text-2xl" aria-hidden="true" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* Success Stories */}
      <section id="success">
        <motion.section
          className="bg-white py-16 px-6 md:px-12 lg:px-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Real results from institutions that partnered with EduNex.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: "XYZ Coaching",
                quote: "Reduced training time by 60% with our LMS integration.",
                img: "/resources/XYZ-Coaching.jpg",
                alt: "Students at XYZ Coaching Center",
              },
              {
                name: "FutureLearn Academy",
                quote: "Improved student engagement by 40% using gamified learning.",
                img: "/resources/academy.jpg",
                alt: "Classroom at FutureLearn Academy",
              },
              {
                name: "Bright Scholars Institute",
                quote: "Automated over 75% of admin work with our EdTech tools.",
                img: "/resources/scholar-institute.jpg",
                alt: "Tech-enabled learning at Bright Scholars Institute",
              },
            ].map((cs, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <img
                  src={cs.img}
                  alt={cs.alt}
                  loading="lazy"
                  className="w-full h-40 object-cover rounded"
                />
                <p className="text-sm text-gray-600 italic">"{cs.quote}"</p>
                <p className="font-semibold text-blue-600 mt-auto">{cs.name}</p>
              </motion.div>
            ))}
          </div>

          <button
            className="mt-10 bg-blue-600 text-white px-6 py-2 rounded hover:scale-105 transition"
            aria-label="View all case studies"
          >
            View All Case Studies
          </button>
        </motion.section>
      </section>

      {/* Diagonal Section Separator */}
      <div className="relative h-16 -mb-16 z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500"
          style={{
            clipPath: "polygon(0 0, 100% 100%, 100% 0, 0 100%)",
          }}
        />
      </div>

      {/* CTA */}
      <section id="contact">
        <motion.section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-center">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Ready to Work with Us?
          </motion.h2>
          <p className="mt-4">Let's build the future of education together.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            animate={{ scale: [1, 1.015, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="mt-6 bg-white text-blue-700 font-bold py-3 px-6 rounded-lg cursor-pointer shadow hover:shadow-lg transition"
            aria-label="Contact Us"
          >
            Contact Us
          </motion.button>
        </motion.section>
      </section>

      <Footer />
    </div>
  );
}
