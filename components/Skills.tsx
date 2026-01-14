import Image from 'next/image'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend & Core Skills',
      skills: [
        'RESTful API Development',
        'Authentication & Authorization',
        'Role-Based Access Control',
        'Database Design'
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        'Detail Oriented',
        'Fast - Learner',
        'Team Player',
        'Adaptable',
        'Problem Solver',
        'Decision Making',
        'Critical Thinking',
        'Resilience',
        'Self-Motivation',
        'Self-Discipline',
        'Self-Awareness',
        'Self-Improvement',
      ]
    },
  ]

  const techStack = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  ]

  return (
    <section id="skills" className="flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Skills & Tech Stack
        </h2>

        <div className="space-y-12">
          {/* Core Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Backend & Core Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {skillCategories[0].skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform border border-gray-700/50"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillCategories[1].skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform border border-gray-700/50"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-200 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack with Icons */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Tech Stack
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 transform group border border-gray-700/50"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs font-medium text-gray-200 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
