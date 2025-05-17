"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import Navbar from "../components/navbar/navBar";
import Footer from "../components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

<Head>
  <title>Our Clients | EduNex</title>
  <meta name="description" content="Discover how EduNex empowers institutions and businesses across industries with impactful EdTech solutions." />
</Head>


// Client Logos
const clients = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png", alt: "Tesla Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple Logo" },
];

// Stats Section Data
const stats = [
  { label: "Students Benefited", value: "10,000+", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" },
  { label: "Customers Served", value: "500+", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { label: "Courses Available", value: "250+", icon: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png" },
  { label: "Certified Tutors", value: "1,200+", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" },
];

// Slider Settings
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

export default function ClientsPage() {
  return (
    <>
      <Navbar />

      <main className="w-full overflow-hidden">
        {/* Hero Section */}
        <section className="py-12 px-6 md:px-12 lg:px-24 text-center">
    <motion.h1
      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500 tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Our Clients, Our Success
    </motion.h1>

  <motion.p
    className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    Trusted by industry leaders across various sectors who believe in the EduNex mission.
  </motion.p>
</section>

<section className="py-16 bg-white px-4 md:px-20">
          <motion.h2
            className="text-3xl font-bold text-center mb-10 tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Impact in Numbers
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-blue-100 shadow-md rounded-lg flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={60}
                  height={60}
                  loading="lazy"
                  className="object-contain"
                />
                <h3 className="mt-4 text-3xl font-semibold text-blue-800 tracking-tight">{stat.value}</h3>
                <p className="mt-2 text-gray-700 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="client-stories">
  <motion.section
    className="bg-white py-16 px-6 md:px-12 lg:px-24 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-bold mb-4">Partner Highlights</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      We collaborate with visionary institutions and organizations who trust EduNex to power their growth. Here's how some of them have made remarkable strides with us.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {[
        {
          name: "XYZ Coaching",
          quote: "EduNex helped streamline our entire training process — from classroom delivery to student progress tracking.",
          img: "/resources/XYZ-Coaching.jpg",
          alt: "XYZ Coaching team",
        },
        {
          name: "FutureLearn Academy",
          quote: "Our faculty now uses interactive tools from EduNex that make lessons more engaging and measurable.",
          img: "/resources/academy.jpg",
          alt: "FutureLearn Academy teachers",
        },
        {
          name: "Bright Scholars Institute",
          quote: "We’ve saved hundreds of hours thanks to automation and the centralized dashboard EduNex provides.",
          img: "/resources/scholar-institute.jpg",
          alt: "Bright Scholars Institute session in progress",
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
      aria-label="View more client highlights"
    >
      View More Client Stories
    </button>
  </motion.section>
</section>

        {/* Stats Section */}
        

        {/* Our Clients - Auto Carousel */}
        <section className="py-16 bg-gray-100">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-center mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Clients
          </motion.h2>

          <div className="container mx-auto overflow-hidden">
            <Slider {...sliderSettings} className="w-full">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="flex justify-center items-center"
                >
                  <div className="relative w-[120px] h-[80px] flex items-center justify-center">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={120}
                      height={80}
                      loading="lazy"
                      className="object-contain"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </section>
        {/* Call-to-Action */}
        <section className="py-16 bg-blue-700 text-white text-center">
          <motion.h2
            className="text-3xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Ready to Work with Us?
          </motion.h2>
          <p className="mt-4 text-white/80 leading-relaxed">Let's build the future of education together.</p>
          <Link href="/contact" passHref>
            <motion.button
              aria-label="Contact Us"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-white text-blue-700 font-bold py-3 px-6 rounded-lg cursor-pointer shadow hover:shadow-lg transition"
            >
              Contact Us
            </motion.button>
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}
