import {
  FaJs,
  FaHtml5,
  FaReact,
  FaNode,
  FaVuejs,
  FaAngular,
  FaPython,
  FaJava,
  FaPhp,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiMongodb,
  SiExpress,
  SiLinux,
  SiApache,
  SiMysql,
  SiPhp,
  SiGraphql,
  SiRust,
  SiKotlin,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiRuby } from "react-icons/di";

const domains = [
  {
    title: "Web Development",
    subdomains: [
      {
        name: "Frontend Development",
        description: `Frontend development is the process of creating the visual and interactive parts of a website or web application—the parts
           that users see and interact with directly. It involves designing the layout, styling elements, and adding interactive features that enhance the user experience
           When you visit a website, everything from buttons, menus, animations, forms, and images is handled by frontend development. The goal is to make websites look great, work smoothly, and be easy to use on different devices.`,
        salary: "$60,000 - $120,000 per year",
        languages: [[<FaJs className="text-yellow-300" />, "Javascript"]],
      },
      {
        name: "Backend Development",
        description:
          "Handling server-side logic, databases, and API integrations using Node.js, Python, Ruby, and Java.",
        salary: "$70,000 - $130,000 per year",
        languages: [
          [<FaNode className="text-3xl text-green-600" />, "Nodejs"],
          [<FaPython className="text-yellow-500" title="Python" />, "Python"],
          [<FaJava className="text-blue-600" title="Java" />, "Java"],
          [<FaPhp className="text-3xl text-indigo-600" title="PHP" />, "PHP"],
          [<DiRuby className="text-red-600" title="Ruby" />, "Ruby"],
          [<FaGolang className="text-blue-400" title="Go" />, "Go"],
          [
            <TbBrandCSharp className="text-purple-600" title="Csharp" />,
            "Csharp",
          ],
          [<SiRust className="text-orange-600" title="Rust" />, "Rust"],
          [<SiKotlin className="text-pink-500" title="Kotlin" />, "Kotlin"],
        ],
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
