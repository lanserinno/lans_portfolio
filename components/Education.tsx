export default function Education() {
  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'University of Makati',
      year: '2026',
      type: 'College',
    },
    {
      degree: 'STEM',
      institution: 'Benigno "Ninoy" Aquino Highschool',
      year: '2022',
      type: 'Senior High School',
    },
  ]

  return (
    <section id="education" className="flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mt-1">{edu.type}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-lg font-semibold text-white">{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
