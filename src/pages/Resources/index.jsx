import { FaBook, FaYoutube, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";

const domains = [
  {
    title: "Web Development",
    subdomains: [
      {
        name: "Frontend Development",
        resources: [
          {
            tool: "HTML & CSS",
            youtube: [
              {
                title: "HTML & CSS For Absolute Beginners",
                url: "https://youtube.com/playlist?list=PL4-IK0AVhVjOJs_UjdQeyEZ_cmEV3uJvx&si=jDQs0AEb5EL_oKNr",
              },
              {
                title: "CSS Flexbox Tutorial",
                url: "https://youtu.be/u044iM9xsWU?si=HgYPrsU-nFlQy0P2",
              },
            ],
            documentation: [
              {
                title: "MDN Web Docs - HTML",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
              },
              { title: "MDN Web Docs - CSS",
                url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
              },
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
        resources: [
          {
            tool: "ExpressJs",
            youtube: [
              {
                title: "HTML & CSS For Absolute Beginners",
                url: "https://youtube.com/playlist?list=PL4-IK0AVhVjOJs_UjdQeyEZ_cmEV3uJvx&si=jDQs0AEb5EL_oKNr",
              },
              {
                title: "CSS Flexbox Tutorial",
                url: "https://youtu.be/u044iM9xsWU?si=HgYPrsU-nFlQy0P2",
              },
            ],
            documentation: [
              {
                title: "MDN Web Docs - HTML",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
              },
              { title: "MDN Web Docs - CSS",
                url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
              },
            ],
          },
          {
            tool: "MongoDB",
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
            tool: "JWT",
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
    ],
  },
  {
    title: "Artificial Intelligence",
    subdomains: [
      {
        name: "Machine Learning",
        languages: [],
        resources: [],
      },
      {
        name: "Deep Learning",
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
        languages: [],
        resources: [],
      },
      {
        name: "Network Security",
        languages: [],
        resources: [],
      },
    ],
  },
];

const Resources = () => {
  return (
    <div className="p-6 pt-24 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Developer Resources
      </h1>
      <div className="space-y-6">
        {domains.map((domain) => (
          <div
            key={domain.title}
            className="shadow-lg shadow-blue-400 rounded-lg p-6"
          >
            {/* Domain Card */}
            <h2 className="text-3xl font-semibold text-white dark:text-gray-900">
              {domain.title}
            </h2>

            <div className="mt-4 space-y-6">
              {domain.subdomains.map((subdomain) => (
                <div
                  key={subdomain.name}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4"
                >
                  {/* Subdomain Card */}
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {subdomain.name}
                  </h3>

                  {subdomain.resources.length > 0 ? (
                    <div className="space-y-4 mt-4">
                      {subdomain.resources.map((resource) => (
                        <div
                          key={resource.tool}
                          className="bg-gray-300 dark:bg-gray-600 rounded-lg p-4 border-l-4 border-blue-500"
                        >
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {resource.tool}
                          </h4>

                          <div className="space-y-3 mt-3">
                            {/* YouTube Tutorials */}
                            {resource.youtube && resource.youtube.length > 0 && (
                              <div>
                                <h5 className="font-semibold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                                  <FaYoutube className="text-red-500" /> YouTube Tutorials
                                </h5>
                                <ul className="mt-2 space-y-1">
                                  {resource.youtube.map((video) => (
                                    <li key={video.title}>
                                      <a
                                        href={video.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline inline-flex items-center gap-1"
                                      >
                                        <FaExternalLinkAlt className="text-xs" /> {video.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Documentation */}
                            {resource.documentation && resource.documentation.length > 0 && (
                              <div>
                                <h5 className="font-semibold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                                  <FaFileAlt className="text-green-500" /> Documentation
                                </h5>
                                <ul className="mt-2 space-y-1">
                                  {resource.documentation.map((doc) => (
                                    <li key={doc.title}>
                                      <a
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-500 hover:underline inline-flex items-center gap-1"
                                      >
                                        <FaExternalLinkAlt className="text-xs" /> {doc.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">
                      No resources available for this subdomain.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
