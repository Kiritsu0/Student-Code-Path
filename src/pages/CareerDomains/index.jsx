import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaJs } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrResources } from "react-icons/gr";

const domains = [
  {
    title: "Web Development",
    subdomains: [
      {
        name: "Frontend Development",
        description:
          "Building user interfaces using HTML, CSS, JavaScript, and modern frameworks like React, Vue, and Angular.",
        salary: "$60,000 - $120,000 per year",
        languages: [<FaJs className="text-amber-400 text-2xl rounded-full" />],
        resources: [
          {
            tool: "HTML & CSS",
            youtube: [
              {
                title: "HTML & CSS Full Course",
                url: "https://youtube.com/htmlcsscourse",
              },
              {
                title: "CSS Flexbox & Grid Tutorial",
                url: "https://youtube.com/cssflexgrid",
              },
            ],
            documentation: [
              {
                title: "MDN HTML Guide",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
              },
              { title: "CSS Tricks", url: "https://css-tricks.com/" },
            ],
          },
          {
            tool: "JavaScript",
            youtube: [
              {
                title: "JavaScript Crash Course",
                url: "https://youtube.com/xyz",
              },
              {
                title: "ES6 Features Explained",
                url: "https://youtube.com/abc",
              },
            ],
            documentation: [
              {
                title: "MDN JavaScript Guide",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
              { title: "JavaScript.info", url: "https://javascript.info/" },
            ],
          },
          {
            tool: "React",
            youtube: [
              { title: "React Basics", url: "https://youtube.com/reactbasics" },
              {
                title: "React Hooks Explained",
                url: "https://youtube.com/reacthooks",
              },
            ],
            documentation: [
              { title: "React Official Docs", url: "https://react.dev/" },
              { title: "React Patterns", url: "https://reactpatterns.com/" },
            ],
          },
        ],
      },
      {
        name: "Backend Development",
        description:
          "Handling server-side logic, databases, and API integrations using Node.js, Python, Ruby, and Java.",
        salary: "$70,000 - $130,000 per year",
        languages: [],
        resources: [],
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
        languages: [],
        resources: [],
      },
      {
        name: "Deep Learning",
        description:
          "Creating neural networks and advanced AI models for applications like image recognition and NLP.",
        salary: "$90,000 - $160,000 per year",
        languages: [],
        resources: [],
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

            {/* Expandable Content with Smooth Animation */}
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
                  <div key={subIndex} className="mb-4">
                    <h2 className="text-xl font-bold text-gray-800">
                      {sub.name}
                    </h2>
                    <div className="ml-5">
                      <p className="text-gray-600">{sub.description}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Salary: {sub.salary}
                      </p>
                      <Link to="/roadmaps" className="font-extrabold underline">
                        View the Complete Career Roadmap
                      </Link>
                      <div className="mt-5">
                        <h2 className="font-bold text-lg before:content-['•'] before:text-blue-500 before:text-2xl before:mr-2">
                          Associated Programming Languages:
                        </h2>
                        <div className="ml-5">
                          {sub.languages.map((language, i) => (
                            <Link
                              to="/languages"
                              key={i}
                              className="inline-block"
                            >
                              {language}
                            </Link>
                          ))}
                        </div>
                        <div>
                          <h2 className="font-bold text-lg before:content-['•'] before:text-blue-500 before:text-2xl before:mr-2">
                            Resources
                          </h2>
                          <div className="ml-5">
                            {sub.resources.map((resource) => (
                              <div>
                                <h2>{resource.tool}</h2>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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
