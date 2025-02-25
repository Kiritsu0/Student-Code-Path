import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaArrowRight, FaJs } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                      className="font-semibold text-blue-600 underline transition flex items-center gap-1"
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
                          <Link to="/languages" key={i} className="text-blue-600 font-medium">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerDomains;
