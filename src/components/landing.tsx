import {
  FaUserCheck,
  FaUserPlus,
  FaComments,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import landing from "../assets/landing.jpg";
import { useNavigate } from "react-router";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
const testimonials = [
  "Amazing service! Highly professional and efficient.",
  "Top-notch builders! Completed my project on time.",
  "Great communication and quality work!",
];

export default function ConstructionLanding() {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const offset = 80; // Adjust according to navbar height
    if (section) {
      const topPosition = section.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < testimonials[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + testimonials[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setText("");
      setCharIndex(0);
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [charIndex, index]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-10 py-4">
        <h1 className="text-xl font-bold">
          Cons-<span className="text-yellow-500">Truction</span>
        </h1>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => scrollToSection("services")}
          >
            Services
          </li>
          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => scrollToSection("our-works")}
          >
            Our Works
          </li>
          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => scrollToSection("testimonials")}
          >
            Testimonials
          </li>
          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Contact us
          </li>
        </ul>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg"
          onClick={() => navigate("/login")}
        >
          Start a Project
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-17 py-10">
        <div className="md:w-1/2">
          <h2 id="home" className="text-4xl font-bold text-black mb-4">
            Your Blueprint and Dreams come true
          </h2>
          <p className="text-yellow-600 text-xl mb-6">
            Find Trusted Builders or Become One
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Are you looking for skilled builders for your next project? Or are
            you a professional builder looking to grow your network and get more
            projects? Our platform connects clients with top-rated construction
            professionals seamlessly.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg">
              Our Service
            </button>
            <button className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex  justify-center">
          <div className="relative">
            <img src={landing} alt="Construction Worker" className="mt-10" />
            <div className="absolute top-0 left-0 bg-yellow-500 w-32 h-32 rounded-full -z-10"></div>
          </div>
        </div>
      </section>
      <div className="pb-5 mt-5" id="services">
        <p className="px-60 text-4xl font-bold">
          Build, Connect, and Grow with the Best in{" "}
          <span className="text-yellow-500">Construction!</span>
        </p>
      </div>

      {/* Services Section */}
      <section className="px-10 py-16 flex flex-wrap justify-center gap-6">
        {/* Card Component */}
        {[
          {
            icon: <FaUserCheck className="text-4xl text-yellow-500 mb-4" />,
            title: "Discover Builders",
            description:
              "Browse through a list of verified builders with detailed profiles, past projects, and customer reviews.",
          },
          {
            icon: <FaUserPlus className="text-4xl text-yellow-500 mb-4" />,
            title: "Create Your Profile",
            description:
              "Are you a builder? Sign up, showcase your expertise, and get discovered by potential clients.",
          },
          {
            icon: <FaComments className="text-4xl text-yellow-500 mb-4" />,
            title: "Seamless Communication",
            description:
              "Connect with builders, discuss projects, and get quotes—all in one place.",
          },
          {
            icon: <FaStar className="text-4xl text-yellow-500 mb-4" />,
            title: "Transparent Reviews & Ratings",
            description:
              "Choose the best builders based on real customer feedback.",
          },
          {
            icon: <FaShieldAlt className="text-4xl text-yellow-500 mb-4" />,
            title: "Admin-Verified Profiles",
            description:
              "Ensuring a safe and trustworthy environment for both clients and builders.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 w-64 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-white"
          >
            {item.icon}
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>
      <section id="our-works" className="px-10 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Our Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src={work1}
            alt="Work 1"
            className="rounded-lg w-100 h-100 shadow-lg"
          />
          <img
            src={work2}
            alt="Work 2"
            className="rounded-lg w-100 h-100 shadow-lg"
          />
          <img
            src={work3}
            alt="Work 3"
            className="rounded-lg w-100 h-100 shadow-lg"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-10 py-16 bg-gray-100">
        <section
          id="testimonials"
          className="px-10 py-16 bg-gray-100 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
          <p className="text-xl font-semibold bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto">
            "{text}"
          </p>
        </section>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="px-10 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="border p-2 rounded h-32"
          ></textarea>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
