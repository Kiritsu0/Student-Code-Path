import {
  FaJs,
  FaHtml5,
  FaReact,
  FaNode,
  FaVuejs,
  FaAngular,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiLinux, SiApache, SiMysql, SiPhp, SiGraphql } from "react-icons/si";

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
      {
        name: {
          letters: ["L", "A", "M", "P"],
          words: [
            <span style={{ color: "#000000" }}>Linux</span>,
            <span style={{ color: "#D42020" }}>Apache</span>,
            <span style={{ color: "#00758F" }}>MySQL</span>,
            <span style={{ color: "#777BB4" }}>PHP</span>,
          ],
        },
        icons: [
          <SiLinux style={{ color: "#000000", fontSize: "3rem" }} />,
          <SiApache style={{ color: "#D42020", fontSize: "3rem" }} />,
          <SiMysql style={{ color: "#00758F", fontSize: "3rem" }} />,
          <SiPhp style={{ color: "#777BB4", fontSize: "3rem" }} />,
        ],
      },
      {
        name: {
          letters: ["J", "A", "M"],
          words: [
            <span style={{ color: "#F7DF1E" }}>JavaScript</span>,
            <span style={{ color: "#E535AB" }}>APIs</span>,
            <span style={{ color: "#E34F26" }}>Markup</span>,
          ],
        },
        icons: [
          <FaJs style={{ color: "#F7DF1E", fontSize: "3rem" }} />,
          <SiGraphql style={{ color: "#E535AB", fontSize: "3rem" }} />,
          <FaHtml5 style={{ color: "#E34F26", fontSize: "3rem" }} />,
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

export default domains;