import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
      {
            title: 'VerdeNET - Marketplace de Services à Domicile',
            description: 'Une plateforme Full-Stack complète mettant en relation clients et prestataires, avec notifications temps réel, gestion de planning et facturation automatisée.',
            problem: 'Besoin d\'une solution centralisée pour la gestion des services domestiques (ménage, jardinage, etc.) avec un suivi précis et une communication instantanée entre acteurs.',
            stack: ['Laravel 12', 'Vue.js 3', 'Docker', 'MySQL', 'Laravel Reverb', 'Tailwind CSS'],
            architecture: [
                'Backend : API REST Laravel 12 avec authentification Sanctum & Socialite (Google)',
                'Frontend : SPA Vue.js 3 avec Vite pour une interface réactive et moderne',
                'Temps Réel : WebSockets via Laravel Reverb pour les notifications et suivis d\'interventions',
                'Déploiement : Architecture multi-conteneurs Docker (Nginx, PHP-FPM, MySQL, phpMyAdmin)'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/VerdeNet',
            highlights: ['Laravel 12 & Vue 3', 'Notifications Temps Réel (Reverb)', 'Gestion Multi-rôles (Client/Intervenant/Admin)', 'Infrastructure Docker-Ready']
        },
        {
            title: 'E-Commerce Marketplace with AI Chatbot',
            description: 'Une plateforme e-commerce multi-coopérative avancée intégrant un Chatbot intelligent, un système de suivi de commandes et des services Web asynchrones.',
            problem: 'Nécessité de numériser les processus de vente des coopératives tout en offrant un support client automatisé et une expérience utilisateur fluide.',
            stack: ['ASP.NET Web Forms', 'C#', 'SQL Server', 'ASMX Web Services', 'Bootstrap 5', 'n8n (Chatbot Automation)'],
            architecture: [
                'Modular Backend : Architecture basée sur des Services Web ASMX pour la séparation des préoccupations (Auth, Inventaire, Dashboard)',
                'Smart Chatbot : Intégration d\'un assistant virtuel via Web Services pour guider les utilisateurs dans leurs recherches',
                'Order Lifecycle : Système complet de gestion des commandes avec génération de numéros de suivi et historique client',
                'Data Integration : Procédures stockées SQL Server optimisées pour la gestion de stocks multi-vendeurs'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/Multi_cooperative_Web_Form_Projet',
            highlights: ['AI-powered Chatbot', 'Real-time Tracking', 'Asynchronous Web Services', 'Admin Management Suite']
        },
        {
            title: 'DevOps CI/CD Pipeline',
            description: 'Automated deployment pipeline with Docker, GitHub Actions, and Azure.',
            problem: 'Streamline development workflow with automated testing, building, and deployment.',
            stack: ['Docker', 'GitHub Actions', 'Azure', 'Nginx', 'Shell Scripts'],
            architecture: [
                'Containerization: Multi-stage Docker builds',
                'CI/CD: GitHub Actions workflows',
                'Deployment: Automated Azure deployment',
                'Monitoring: Health checks and logging'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/devops-pipeline',
            highlights: ['Multi-stage Builds', 'Automated Testing', 'Zero-downtime Deployment', 'Infrastructure as Code']
        },
        {
            title: 'Academic Project - UML Design',
            description: 'Complete software engineering project following UML methodology and design patterns.',
            problem: 'Apply software engineering principles to design and implement a complex system.',
            stack: ['Java', 'UML', 'Design Patterns', 'MySQL', 'JavaFX'],
            architecture: [
                'Design: Complete UML diagrams (Use Case, Class, Sequence)',
                'Patterns: Factory, Singleton, Observer, MVC',
                'Backend: Java with layered architecture',
                'Database: MySQL with normalized schema'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/academic-project',
            highlights: ['Design Patterns', 'UML Documentation', 'Layered Architecture', 'SOLID Principles']
        }
    ];

    return (
        <section id="projects" className="section bg-gray-950">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Projects
                </motion.h2>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card"
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Left side - Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-primary-400 mb-2">Problem Solved:</h4>
                                        <p className="text-gray-400 text-sm">{project.problem}</p>
                                    </div>

                                    {/* Stack */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-primary-400 mb-2">Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm font-mono border border-gray-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Architecture */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-primary-400 mb-2">Architecture:</h4>
                                        <ul className="space-y-1">
                                            {project.architecture.map((item, i) => (
                                                <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                                    <span className="text-primary-500 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Highlights */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-primary-400 mb-2">Key Features:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.highlights.map((highlight) => (
                                                <span
                                                    key={highlight}
                                                    className="px-2 py-1 bg-primary-500/10 text-primary-300 rounded text-xs font-medium border border-primary-500/20"
                                                >
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-3 mt-6">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 text-sm border border-gray-700"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            View Code
                                        </a>
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 text-sm"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
