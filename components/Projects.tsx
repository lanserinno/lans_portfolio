'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Project {
    id: number
    name: string
    shortDescription: string
    year: string
    role: string
    techStack: string[]
    contributions: string[]
    photos: string[]
    siteLink?: string
    githubLink: string
}

const projects: Project[] = [
    {
        id: 1,
        name: 'WorkAble',
        shortDescription: 'Job recommender system for PWD (Persons with Disability)',
        year: '2025',
        role: 'Backend Developer',
        techStack: ['Laravel', 'PHP', 'PostgreSQL'],
        contributions: [
            'Built multi-step authentication (email verification, profile completion, PWD ID verification) with Google OAuth integration and 2-step email verification',
            'Developed job posting workflow (3 steps: basic info, skills, accessibility) with PESO verification',
            'Implemented job application system with file upload, status workflow (pending → hired/rejected), and fit score calculation',
            'Built role-based authentication (PWD users, companies, PESO/PDAO admins) with multi-guard system',
            'Implemented PWD ID verification workflow and company user verification with approval/rejection tracking',
            'Created PESO/PDAO dashboards with analytics, hiring trends, success rates, and PostgreSQL aggregate queries',
            'Created real time notification system for job updates, verifications, and welcome messages with read/unread tracking',
            'Company reporting system for workplace misconduct with PESO/PDAO forwarding',
            'Guest browsing system (jobs/companies) with search and login modal triggers',
            'Company profile management (info, about, benefits, gallery) with image upload',
            'Secure file handling for resumes and PWD ID images with validation',
        ],
        photos: [
            '/workable_screenshots/home_page.png',
            '/workable_screenshots/sign_in.png',
            '/workable_screenshots/guest_page.png',
            '/workable_screenshots/dashboard_statistics.png',
            '/workable_screenshots/job_posting.png',
            '/workable_screenshots/notif_page.png',
            '/workable_screenshots/recommended_jobs.png',
        ],
        githubLink: 'https://github.com/lanserinno/workable-client',
    },
    {
        id: 2,
        name: 'BaybayInscribe',
        shortDescription: 'AI-powered Baybayin learning platform',
        year: '2024',
        role: 'Backend Developer',
        techStack: ['Next.js (React)', 'TypeScript', 'PostgreSQL/Drizzle', 'Better Auth', 'JWT', 'OAuth (Google/Facebook)'],
        contributions: [
            'Designed and implemented end-to-end authentication (email/password + OAuth), session handling, and password reset flows to streamline onboarding and keep access secure.',
            'Built user profile management APIs (create/update/fetch) with validation and completion gating (terms, notifications, unique usernames) to support a guided onboarding experience.',
            'Implemented role-based access controls and admin-only endpoints to protect sensitive operations and maintain governance across the platform.',
            'Modeled and migrated PostgreSQL schemas (users, sessions, profiles) with Drizzle, ensuring data integrity and reliable persistence for auth/profile workflows.',
            'Integrated auth and profile services with the frontend/mobile clients, providing clear contracts, error handling, and fallbacks for a smooth user experience.',
        ],
        photos: [
            '/baybayinscribe_photos/baybayinscribe1.jpg',
            '/baybayinscribe_photos/baybayinscribe2 (2).jpg',
        ],
        siteLink: 'https://beta.baybayinscribe.top',
        githubLink: 'https://github.com/UMak-Gilas-Tech/baybayinscribe-client',
    },
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <>
            <section id="projects" className="flex items-center justify-center px-6 py-12">
                <div className="max-w-6xl w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="group cursor-pointer bg-gray-800/50 rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 transform border border-gray-700/50"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">{project.year}</p>
                                    </div>
                                    <svg
                                        className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-all group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>

                                <p className="text-gray-300 mb-4">
                                    {project.shortDescription}
                                </p>

                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-200">
                                        <span className="font-normal">{project.role}</span>
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 3).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full border border-gray-600/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="text-xs px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full border border-gray-600/50">
                                                +{project.techStack.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
                    onClick={() => setSelectedProject(null)}
                >
                    <div className="min-h-screen px-4 py-8 flex items-center justify-center">
                        <div
                            className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full p-8 relative animate-fadeIn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        {selectedProject.name}
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300">
                                        {selectedProject.shortDescription} | {selectedProject.year}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Role</h4>
                                    <p className="text-gray-700 dark:text-gray-300">{selectedProject.role}</p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Contributions</h4>
                                    <ul className="space-y-2">
                                        {selectedProject.contributions.map((contribution, idx) => (
                                            <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                                                <span className="text-blue-500 mr-2 mt-1.5">•</span>
                                                <span>{contribution}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Screenshots</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {selectedProject.photos.map((photo, idx) => (
                                            <div
                                                key={idx}
                                                className="relative w-full h-32 cursor-pointer hover:scale-105 transition-transform"
                                                onClick={() => setSelectedImage(photo)}
                                            >
                                                <Image
                                                    src={photo}
                                                    alt={`${selectedProject.name} screenshot ${idx + 1}`}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    {selectedProject.siteLink && (
                                        <a
                                            href={selectedProject.siteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                        >
                                            Visit Site
                                        </a>
                                    )}
                                    <a
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Enlarged screenshot"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
