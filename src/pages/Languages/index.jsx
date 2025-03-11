import languages from "../../data/languages";

function Languages() {
  return (
    <div className="max-w-4xl pt-24 mx-auto px-4">
      <div className="flex flex-col gap-8">
        {languages.map((language, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-teal-50 rounded-lg shadow-blue-400 shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            {language.name ? (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-4">
                  {language.icon}
                  <span>{language.name}</span>
                </h2>
                <p className="text-lg text-gray-600">{language.description}</p>

                {/* Strengths Section */}
                <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">Strengths:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {language.strengths.map((strength, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-500">✔</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses Section */}
                <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">Weaknesses:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {language.weaknesses.map((weakness, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-red-500">✘</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fields Section */}
                <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">Fields:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {language.popularFields.map((field, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-blue-500">⭐</span>
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">No Information on this language</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
