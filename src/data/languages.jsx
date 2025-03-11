import { FaJsSquare, FaJava } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiSwift, SiGo } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

const languages = [
  {
    name: "JavaScript",
    icon: <FaJsSquare style={{color: "#F7DF1E"}} />,
    description: "JavaScript is a versatile, high-level programming language primarily used for web development. It allows developers to create dynamic and interactive user interfaces in combination with HTML and CSS. It runs in web browsers and can also be used for backend development with Node.js.",
    strengths: [
      "Highly versatile (used for both frontend and backend development)",
      "Supported by all modern web browsers",
      "Large and active developer community",
      "Rich ecosystem with frameworks like React, Vue, and Angular",
      "Asynchronous capabilities with async/await and Promises"
    ],
    weaknesses: [
      "Can have inconsistent behavior across different browsers",
      "Not ideal for CPU-intensive tasks due to single-threaded nature",
      "Frequent updates can sometimes lead to breaking changes",
      "Loose typing can lead to unexpected runtime errors"
    ],
    popularFields: ["Web Development", "Frontend Development", "Backend Development (Node.js)", "Mobile Development (React Native)"]
  },
  {
    name: "Python",
    icon: <SiPython style={{color: "#306998"}} />,
    description: "Python is a powerful, high-level programming language known for its readability and ease of use. It is widely used in scientific computing, artificial intelligence, data science, and backend web development.",
    strengths: [
      "Easy-to-read syntax and beginner-friendly",
      "Extensive libraries for AI, machine learning, and data science (NumPy, Pandas, TensorFlow)",
      "Strong community support and extensive documentation",
      "Versatile, used in web development, scripting, and automation"
    ],
    weaknesses: [
      "Slower execution speed compared to compiled languages like C++",
      "Not ideal for mobile development",
      "High memory consumption in large-scale applications"
    ],
    popularFields: ["Data Science", "Machine Learning", "Web Development", "Automation", "Scientific Computing"]
  },
  {
    name: "Java",
    icon: <FaJava style={{color: "#007396"}} />,
    description: "Java is a widely-used, object-oriented programming language known for its platform independence, thanks to the Java Virtual Machine (JVM). It is commonly used in enterprise applications, Android development, and large-scale backend systems.",
    strengths: [
      "Platform-independent (Write Once, Run Anywhere)",
      "Strong memory management and security features",
      "Excellent for building large-scale enterprise applications",
      "Huge ecosystem with frameworks like Spring and Hibernate"
    ],
    weaknesses: [
      "Verbose syntax compared to modern languages like Python",
      "Higher memory consumption",
      "Can be slower than languages like C or C++"
    ],
    popularFields: ["Enterprise Software", "Android Development", "Backend Development", "Big Data Processing"]
  },
  {
    name: "C++",
    icon: <SiCplusplus style={{color: "#00599C"}} />,
    description: "C++ is a high-performance programming language widely used for system programming, game development, and real-time applications. It provides fine control over system resources, making it a preferred choice for performance-critical software.",
    strengths: [
      "High performance and efficiency",
      "Supports object-oriented programming and low-level memory manipulation",
      "Used in game engines like Unreal Engine",
      "Strong standard library (STL) with powerful data structures and algorithms"
    ],
    weaknesses: [
      "Steeper learning curve compared to higher-level languages",
      "Manual memory management can lead to memory leaks",
      "Lack of garbage collection requires careful resource handling"
    ],
    popularFields: ["Game Development", "System Programming", "Embedded Systems", "High-Performance Computing"]
  },
  {
    name: "C#",
    icon: <TbBrandCSharp style={{color: "#68217A"}} />,
    description: "C# is a modern, object-oriented programming language developed by Microsoft. It is widely used in desktop applications, game development (Unity), and enterprise software.",
    strengths: [
      "Strongly typed and object-oriented",
      "Excellent integration with .NET framework",
      "Used in Unity game development",
      "Automatic memory management (garbage collection)"
    ],
    weaknesses: [
      "Primarily Windows-focused, though cross-platform support has improved",
      "Larger applications may require significant system resources"
    ],
    popularFields: ["Game Development", "Enterprise Software", "Desktop Applications", "Web Development (ASP.NET)"]
  },
  {
    name: "Swift",
    icon: <SiSwift style={{color: "#F05138"}} />,
    description: "Swift is Apple's programming language for iOS, macOS, watchOS, and tvOS development. It is designed to be fast, safe, and expressive.",
    strengths: [
      "Optimized for performance and safety",
      "Easy-to-read syntax",
      "Memory management with ARC (Automatic Reference Counting)",
      "Seamless integration with Apple's ecosystem"
    ],
    weaknesses: [
      "Limited to Apple's platforms",
      "Smaller community compared to languages like JavaScript or Python"
    ],
    popularFields: ["iOS Development", "macOS Development", "Mobile App Development"]
  },
  {
    name: "Go",
    icon: <SiGo style={{color: "#00ADD8"}} />,
    description: "Go (Golang) is a statically typed, compiled language developed by Google. It is designed for efficiency, scalability, and concurrency, making it ideal for cloud computing and backend services.",
    strengths: [
      "High performance and efficiency",
      "Built-in concurrency support",
      "Simple syntax and easy to learn",
      "Strong standard library"
    ],
    weaknesses: [
      "Limited third-party libraries compared to Python or JavaScript",
      "Less suitable for frontend or UI-heavy applications"
    ],
    popularFields: ["Cloud Computing", "Backend Development", "Networking", "System Programming"]
  }
];



export default languages;