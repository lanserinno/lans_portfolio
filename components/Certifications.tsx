import Image from 'next/image'

interface Certification {
    id: number
    name: string
    issuer: string
    year: string
    image: string
}

const certifications: Certification[] = [
    {
        id: 1,
        name: 'Information Technology Specialist – Databases',
        issuer: 'Certiport (Pearson VUE)',
        year: '2025',
        image: '/database_cert/Villena_Database_Cert.png',
    },
    {
        id: 2,
        name: 'HR Essential',
        issuer: 'Virtual Mentors',
        year: '2025',
        image: '/hr_essential/VILLENA_LANS_HR_ESSENTIAL_CERTIFICATE_3HRS.png',
    },
    {
        id: 3,
        name: 'Human Resource Concept Management',
        issuer: 'Gregg Learning',
        year: '2025',
        image: '/hr_resource_management/VILLENA_HUMAN_RESOURCE_MANAGEMENT_CONCEPTS_8HRS.png',
    },
]

export default function Certifications() {
    return (
        <section id="certifications" className="flex items-center justify-center px-6 py-12">
            <div className="max-w-6xl w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                    Certifications
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 transform"
                        >
                            <div className="mb-4">
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {cert.name}
                                </h3>
                                <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                                <p className="text-sm text-gray-500">{cert.year}</p>
                            </div>

                            <div className="relative w-full h-48 bg-gray-900/50 rounded-lg overflow-hidden">
                                <Image
                                    src={cert.image}
                                    alt={cert.name}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
