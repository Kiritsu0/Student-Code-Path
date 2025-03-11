import { FaYoutube, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";
import resources from "../../data/resources";

const Resources = () => {
  return (
    <div className="p-6 pt-24 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Developer Resources
      </h1>
      <div className="space-y-6">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="shadow-lg shadow-blue-400 rounded-lg p-6"
          >
            {/* resource Card */}
            <h2 className="text-3xl font-semibold text-white dark:text-gray-900">
              {resource.title}
            </h2>

            <div className="mt-4 space-y-6">
              {resource.subresources.map((subresource) => (
                <div
                  key={subresource.name}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4"
                >
                  {/* Subresource Card */}
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {subresource.name}
                  </h3>

                  {subresource.resources.length > 0 ? (
                    <div className="space-y-4 mt-4">
                      {subresource.resources.map((resource) => (
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
                      No resources available for this subresource.
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
