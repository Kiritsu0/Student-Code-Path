import { useState } from "react";
import { FaMapSigns, FaCode, FaBriefcase, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/10 shadow-lg p-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div
        className="text-2xl font-bold text-white"
      >
        Student Code Path
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 text-white text-lg">
        <a className="flex items-center gap-2 cursor-pointer transition hover:scale-110">
          <FaMapSigns /> Roadmap
        </a>
        <a className="flex items-center gap-2 cursor-pointer transition hover:scale-110">
          <FaCode /> Programming
        </a>
        <a className="flex items-center gap-2 cursor-pointer transition hover:scale-110">
          <FaBriefcase /> Careers
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl z-10">
        {isOpen ? <IoClose /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-screen w-2/3 bg-black/80 p-6 flex flex-col items-center gap-6 text-white text-lg"
        >
          <a className="flex items-center gap-2 transition">
            <FaMapSigns /> Roadmap
          </a>
          <a className="flex items-center gap-2 transition">
            <FaCode /> Programming
          </a>
          <a className="flex items-center gap-2 transition">
            <FaBriefcase /> Careers
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
