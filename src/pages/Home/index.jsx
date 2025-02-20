import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./style.css";

const Home = () => {
  // Refs for sections that should animate on scroll
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Check when sections come into view
  const section1InView = useInView(section1Ref, {
    margin: "-100px 0px",
  });
  const section2InView = useInView(section2Ref, {
    margin: "-100px 0px",
  });
  const section3InView = useInView(section3Ref, {
    margin: "-100px 0px",
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section (Always visible) */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: 'url(/background.jpg)' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-6xl font-bold text-white overflow-hidden"
        >
          <span className="relative z-10">
            Start Your Programming Journey with
            <span className="text-blue-300"> Student Code Path!</span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          We provide all the resources, roadmaps, and guidance you need to
          become a skilled developer. No more confusion, no more wasted time—
          just a clear, structured path to success in programming.
        </motion.p>
        <motion.button
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-white hover:bg-gray-200 text-gray-900 text-lg font-semibold rounded-lg shadow-lg"
        >
          Get Started
        </motion.button>
      </section>
      {/* Importance of Choosing the Right Path */}
      <section ref={section1Ref} className="py-16 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center">
          Why Choosing the Right Path is Important?
        </h2>
        <div className="mt-10 max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={section1InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="p-6 bg-gray-700 rounded-lg shadow-md relative overflow-hidden"
          >
            <p className="text-lg">
              When I started, I had no plan—just jumping from one tutorial to
              another. I wasted{" "}
              <span className="text-yellow-400 font-bold">
                1 year and 4 months
              </span>{" "}
              learning random technologies that didn’t connect together.
              <br /> <br />
              Now, after more than{" "}
              <span className="text-yellow-400 font-bold">3 years</span> of
              coding, I realized how important it is to have the right guidance
              from the start. That’s why I created this platform—to help people
              who have the passion and ambition for coding find the best way to
              begin their journey. No one should go through the same struggle I
              did.
            </p>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 animate-[shine_2s_linear_infinite]"></span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={section1InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 bg-gray-700 rounded-lg shadow-md relative overflow-hidden"
          >
            <p className="text-lg">
              Without a clear goal, you’ll keep jumping between languages and
              frameworks without real progress. That’s why{" "}
              <span className="text-blue-300 font-bold">Student Code Path</span>{" "}
              exists—to guide you with a structured plan, helping you learn the
              right things in the right order.
            </p>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 animate-[shine_2s_linear_infinite]"></span>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={section2Ref} className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          What You’ll Get with Student Code Path
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Structured Roadmaps",
              desc: "Access carefully selected roadmap to guide your learning journey.",
              emoji: "🧭",
            },
            {
              title: "Curated Learning Resources",
              desc: "Find the best tutorials and courses tailored to whatever field you choose to learn.",
              emoji: "📚",
            },
            {
              title: "Explore Career Paths",
              desc: "Get a clear breakdown of different programming fields—understand what each domain offers and whether it's the right fit for you.",
              emoji: "🎯",
            },
            {
              title: "AI Coding Assistant",
              desc: "Ask our AI bot anything about programming to make your coding journey smoother and easier.",
              emoji: "🤖",
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={section2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="relative p-6 bg-gray-800 rounded-lg shadow-md"
            >
              <div className="text-5xl">{item.emoji}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section ref={section3Ref} className="py-16 px-6 bg-blue-400 text-center">
        <h2 className="text-3xl font-bold">Start Learning Today!</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Don’t waste time guessing what to learn next. Follow a proven roadmap
          and start coding with confidence today!
        </p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={section3InView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-white text-blue-400 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-200"
        >
          Get Your Learning Plan
        </motion.button>
      </section>
    </div>
  );
};

export default Home;
