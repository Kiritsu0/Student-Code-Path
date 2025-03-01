import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaArrowRight,
  FaJs,
  FaReact,
  FaNode,
  FaVuejs,
  FaAngular,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiMongodb, SiExpress } from "react-icons/si";

const domains = [
  {
    title: "Web Development",
    subdomains: [
      {
        name: "Frontend Development",
        description:
          "Building user interfaces using HTML, CSS, JavaScript, and modern frameworks like React, Vue, and Angular.",
        salary: "$60,000 - $120,000 per year",
        languages: [<FaJs className="text-yellow-300 text-2xl rounded-full" />],
      },
      {
        name: "Backend Development",
        description:
          "Handling server-side logic, databases, and API integrations using Node.js, Python, Ruby, and Java.",
        salary: "$70,000 - $130,000 per year",
        languages: ["Node.js", "Python", "Java"],
      },
    ],
    techStacks: [
      {
        name: {
          letters: ["M", "E", "R", "N"],
          words: [
            <span style={{ color: "#4DB33D" }}>MongoDB</span>,
            <span style={{ color: "#444" }}>ExpressJs</span>,
            <span style={{ color: "#61DAFB" }}>ReactJs</span>,
            <span style={{ color: "#68A063" }}>NodeJs</span>,
          ],
        },
        icons: [
          <SiMongodb style={{ color: "#4DB33D" }} />,
          <SiExpress style={{ color: "#444" }} />,
          <FaReact style={{ color: "#61DAFB" }} />,
          <FaNode style={{ color: "#68A063", fontSize: "3rem" }} />,
        ],
      },
      {
        name: {
          letters: ["M", "E", "V", "N"],
          words: [
            <span style={{ color: "#4DB33D" }}>MongoDB</span>,
            <span style={{ color: "#444" }}>ExpressJs</span>,
            <span style={{ color: "#42b883" }}>VueJs</span>,
            <span style={{ color: "#68A063" }}>NodeJs</span>,
          ],
        },
        icons: [
          <SiMongodb style={{ color: "#4DB33D" }} />,
          <SiExpress style={{ color: "#444" }} />,
          <FaVuejs style={{ color: "#42b883" }} />,
          <FaNode style={{ color: "#68A063", fontSize: "3rem" }} />,
        ],
      },
      {
        name: {
          letters: ["M", "E", "A", "N"],
          words: [
            <span style={{ color: "#4DB33D" }}>MongoDB</span>,
            <span style={{ color: "#444" }}>ExpressJs</span>,
            <span style={{ color: "#DD0031" }}>AngularJs</span>,
            <span style={{ color: "#68A063" }}>NodeJs</span>,
          ],
        },
        icons: [
          <SiMongodb style={{ color: "#4DB33D" }} />,
          <SiExpress style={{ color: "#444" }} />,
          <FaAngular style={{ color: "#DD0031" }} />,
          <FaNode style={{ color: "#68A063", fontSize: "3rem" }} />,
        ],
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    subdomains: [
      {
        name: "Machine Learning",
        description:
          "Developing algorithms that allow computers to learn and make predictions based on data.",
        salary: "$80,000 - $150,000 per year",
        languages: ["Python", "R"],
      },
      {
        name: "Deep Learning",
        description:
          "Creating neural networks and advanced AI models for applications like image recognition and NLP.",
        salary: "$90,000 - $160,000 per year",
        languages: ["Python", "TensorFlow"],
      },
    ],
  },
  {
    title: "Cyber Security",
    subdomains: [
      {
        name: "Ethical Hacking",
        description:
          "Testing and securing systems by identifying vulnerabilities before malicious hackers do.",
        salary: "$70,000 - $140,000 per year",
        languages: [],
        resources: [],
      },
      {
        name: "Network Security",
        description:
          "Protecting digital infrastructures from cyber threats using firewalls, encryption, and monitoring tools.",
        salary: "$75,000 - $145,000 per year",
        languages: [],
        resources: [],
      },
    ],
  },
];

const CareerDomains = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="p-6 pt-24 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Career Domains
      </h1>
      <div className="space-y-4">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            {/* Header Section */}
            <motion.div
              className="flex justify-between items-center p-4 bg-blue-500 text-white text-lg font-semibold cursor-pointer transition"
              onClick={() => toggleExpand(index)}
            >
              <span>{domain.title}</span>
              <motion.div
                animate={{ rotate: expanded === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.div>
            </motion.div>

            {/* Expandable Content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={
                expanded === index
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.5 }}
              className="overflow-hidden bg-gray-100"
            >
              <div className="p-4">
                {domain.subdomains.map((sub, subIndex) => (
                  <div key={subIndex} className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {sub.name}
                    </h2>
                    <p className="text-gray-600 mb-2">{sub.description}</p>
                    <p className="text-gray-500 text-sm mb-3">
                      Salary: {sub.salary}
                    </p>
                    <Link
                      to="/roadmaps"
                      className="font-semibold text-blue-600 underline transition inline-flex items-center gap-1"
                    >
                      <FaArrowRight className="text-blue-500 text-sm transition-transform duration-200 group-hover:translate-x-1" />
                      Complete Career Roadmap{" "}
                    </Link>

                    {/* Programming Languages */}
                    <div className="mt-5">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <span className="text-blue-500 text-2xl">•</span>
                        Associated Programming Languages:
                      </h3>
                      <div className="ml-5 mt-2 flex flex-wrap gap-3">
                        {sub.languages.map((language, i) => (
                          <Link
                            to="/languages"
                            key={i}
                            className="text-blue-600 font-medium"
                          >
                            {language}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {subIndex !== 1 && <hr className="my-5 border-gray-300" />}
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Tech Stacks Section */}
            {domain.techStacks && domain.techStacks.length > 0 && (
              <div className="p-4 bg-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Most used Tech Stacks:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {domain.techStacks.map((stack, stackIndex) => (
                    <div
                      key={stackIndex}
                      className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
                    >
                      <h4 className="text-lg font-semibold text-gray-700 flex gap-2">
                        {stack.name?.letters?.map((letter, index) => (
                          <span
                            key={index}
                            className="relative group cursor-pointer transition"
                          >
                            {/* Default letter */}
                            <span className="group-hover:opacity-0 transition">
                              {letter}
                            </span>

                            {/* Full word (shown on hover) */}
                            <span className="absolute left-0 top-0 font-bold min-w-[80px] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 group-hover:relative transition-all duration-500">
                                {stack.name.words[index]}
                            </span>
                          </span>
                        ))}
                      </h4>
                      <div className="flex items-center gap-3 mt-2 text-3xl text-blue-500">
                        {stack.icons.map((icon, iconIndex) => (
                          <span
                            key={iconIndex}
                            className="hover:brightness-150 cursor-pointer"
                          >
                            {icon}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerDomains;
