const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="Site Logo" className="h-10" /> */}
          <span className="text-xl font-semibold">Student Code Path</span>
        </div>

        {/* Contact Info */}
        <div className="text-center space-x-2 md:text-left mt-4 md:mt-0">
          <a
            href="mailto:husseindeeb162@gmail.com"
            className="text-blue-400 hover:underline"
          >
            husseindeeb162@gmail.com
          </a>
          <a href="tel:+961 70 063 612" className="text-blue-400 hover:underline">
            +961 70 063 612
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Student Code Path. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
