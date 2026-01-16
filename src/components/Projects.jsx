import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    const projects = [
        {
            id: 1,
            title: 'VerdeNET - Marketplace de Services à Domicile',
            shortDesc: 'Plateforme Full-Stack de services à domicile avec temps réel.',
            description: 'Une plateforme Full-Stack complète mettant en relation clients et prestataires, avec notifications temps réel, gestion de planning et facturation automatisée.',
            problem: 'Besoin d\'une solution centralisée pour la gestion des services domestiques (ménage, jardinage, etc.) avec un suivi précis et une communication instantanée entre acteurs.',
            stack: ['Laravel 12', 'Vue.js 3', 'Docker', 'MySQL', 'Laravel Reverb', 'Tailwind CSS'],
            architecture: [
                'Backend : API REST Laravel 12 avec authentification Sanctum & Socialite (Google)',
                'Frontend : SPA Vue.js 3 avec Vite pour une interface réactive et moderne',
                'Temps Réel : WebSockets via Laravel Reverb pour les notifications et suivis d\'interventions',
                'Déploiement sur AWS : Architecture multi-conteneurs Docker (Nginx, PHP-FPM, MySQL, phpMyAdmin)'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/VerdeNet',
            image: '/projects/verdenet.png',
            highlights: ['Laravel 12 & Vue 3', 'Notifications Temps Réel (Reverb)', 'Gestion Multi-rôles (Client/Intervenant/Admin)', 'Infrastructure Docker-Ready'],
            gridSize: 'lg:col-span-2'
        },
        {
            id: 2,
            title: 'E-Commerce Marketplace with AI Chatbot',
            shortDesc: 'Marketplace avec Chatbot intelligent et Web Services.',
            description: 'Une plateforme e-commerce multi-coopérative avancée intégrant un Chatbot intelligent, un système de suivi de commandes et des services Web asynchrones.',
            problem: 'Nécessité de numériser les processus de vente des coopératives tout en offrant un support client automatisé et une expérience utilisateur fluide.',
            stack: ['ASP.NET Web Forms', 'C#', 'SQL Server', 'ASMX Web Services', 'Bootstrap 5', 'n8n (Chatbot Automation)'],
            architecture: [
                'Modular Backend : Architecture basée sur des Services Web ASMX pour la séparation des préoccupations (Auth, Inventaire, Dashboard)',
                'Smart Chatbot : Intégration d\'un assistant virtuel via Web Services pour guider les utilisateurs dans leurs recherches',
                'Order Lifecycle : Système complet de gestion des commandes avec génération de numéros de suivi et historique client',
                'Data Integration : Procédures stockées SQL Server optimisées pour la gestion de stocks multi-vendeurs',
                'Déploiement de la Base de Données et de l\'application sur Azure (Azure SQL Database et Azure Web App)'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/Multi_cooperative_Web_Form_Projet',
            image: '/projects/ecommerce.png',
            highlights: ['AI-powered Chatbot', 'Real-time Tracking', 'Asynchronous Web Services', 'Admin Management Suite'],
            gridSize: 'lg:col-span-1'
        },
        {
            id: 3,
            title: 'DevOps CI/CD Pipeline',
            shortDesc: 'Pipeline automatisé avec Docker et GitHub Actions.',
            description: 'Un pipeline de déploiement automatisé utilisant Docker, GitHub Actions, et Azure pour rationaliser le développement.',
            problem: 'Automatiser le flux de travail (testing, build, déploiement) pour réduire les erreurs et accélérer les mises à jour.',
            stack: ['Docker', 'GitHub Actions', 'Azure', 'Nginx', 'Shell Scripts'],
            architecture: [
                'Containerization : Multi-stage Docker builds pour des images légères',
                'CI/CD : Workflows GitHub Actions pour les tests et déploiements',
                'Deployment : Déploiement automatisé sur Azure Cloud',
                'Infrastructure : Configuration Nginx et scripts Shell pour la maintenance'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/devops-pipeline',
            image: '/projects/devops.png',
            highlights: ['Multi-stage Builds', 'CI/CD Automation', 'Azure Cloud Deployment', 'High Availability'],
            gridSize: 'lg:col-span-1'
        },
        {
            id: 4,
            title: 'SystemePDA - Système de Gestion Commerciale Mobile',
            shortDesc: 'Solution ERP Web & Mobile synchronisée en temps réel.',
            description: 'Une solution complète de gestion commerciale (ERP) comprenant un back-office web et une application mobile pour terminaux PDA, synchronisés en temps réel.',
            problem: 'Nécessité pour les entreprises de gérer leurs stocks et leurs ventes de manière fluide entre un bureau central (Web) et des agents sur le terrain (Mobile/PDA).',
            stack: ['Laravel 12', 'React Native (Expo)', 'Inertia.js', 'Tailwind CSS', 'Sanctum (API Auth)', 'SQLite/MySQL'],
            architecture: [
                'Backend Hub : API Laravel 12 robuste assurant la logique métier et l\'authentification via Sanctum',
                'Web Dashboard : Interface d\'administration réactive utilisant la stack Inertia.js',
                'Mobile PDA App : Application cross-platform développée avec Expo, optimisée pour la saisie rapide sur le terrain',
                'Monorepo Strategy : Gestion unifiée du backend et du mobile pour une cohérence totale'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/Stage-SystemePDA',
            image: '/projects/systemepda.png',
            highlights: ['Multi-platform (Web & Mobile)', 'Inertia & Laravel 12', 'Stock Real-time', 'Architecture Monorepo'],
            gridSize: 'lg:col-span-2'
        }
    ];

    return (
        <section id="projects" className="section bg-gray-950 relative">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="section-title mb-4">Projects</h2>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-widest border-l-2 border-primary-500 pl-4">
                        Selection of engineering solutions & architectures
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className={`group cursor-pointer relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-primary-500/50 transition-all duration-500 ${project.gridSize} aspect-[16/10] md:aspect-auto h-[350px] md:h-[400px]`}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 brightness-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="space-y-3">
                                    <div className="flex gap-2">
                                        {project.highlights.slice(0, 2).map((h, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-tighter font-bold text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded border border-primary-500/20">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm line-clamp-2 font-light">
                                        {project.shortDesc}
                                    </p>
                                    <div className="flex items-center gap-2 pt-2 text-primary-500 font-mono text-xs font-bold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        VIEW DETAILS
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Detail Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-gray-950/80 backdrop-blur-xl"
                            />

                            <motion.div
                                layoutId={`project-${selectedProject.id}`}
                                className="relative bg-gray-900 border border-gray-800 rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-y-auto overflow-x-hidden shadow-2xl"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 z-10 p-2 text-gray-400 hover:text-white bg-gray-800/50 rounded-full backdrop-blur-md transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="flex flex-col">
                                    {/* Modal Image Section - Full Width Browser Mockup */}
                                    <div className="p-6 lg:p-10 bg-gray-950/30 border-b border-gray-800/50">
                                        <div className="relative group/browser max-w-[95%] mx-auto">
                                            {/* Browser Header */}
                                            <div className="bg-gray-800/80 backdrop-blur-md rounded-t-xl py-2.5 px-4 border-t border-x border-gray-700/50 flex items-center gap-2">
                                                <div className="flex gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                                                </div>
                                                <div className="mx-auto flex items-center gap-2">
                                                    <div className="w-[120px] md:w-[220px] h-4 md:h-5 bg-gray-900/50 rounded-full flex items-center justify-center px-3 border border-gray-700/30">
                                                        <div className="w-2 h-2 rounded-full bg-primary-500/20 mr-2"></div>
                                                        <span className="text-[10px] text-gray-500 font-mono truncate">{selectedProject.title.toLowerCase().replace(/\s+/g, '-')}.dev</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Browser Image Container */}
                                            <div className="relative border-x border-b border-gray-700/50 rounded-b-xl overflow-hidden bg-gray-900 shadow-2xl">
                                                <img
                                                    src={selectedProject.image}
                                                    alt={selectedProject.title}
                                                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                                                />
                                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary-500/5 to-transparent opacity-30"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modal Content - Two Column Layout */}
                                    <div className="p-8 lg:p-12">
                                        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10">
                                            {/* Main Info (Left) */}
                                            <div className="lg:col-span-12">
                                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                                                    <div>
                                                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                                            {selectedProject.title}
                                                        </h3>
                                                        <p className="text-primary-400 font-mono text-xs uppercase tracking-widest">TECHNICAL PROJECT FILE</p>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <a
                                                            href={selectedProject.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all font-bold text-sm border border-gray-700"
                                                        >
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                            </svg>
                                                            REPO GITHUB
                                                        </a>
                                                    </div>
                                                </div>
                                                <p className="text-gray-300 leading-relaxed font-light text-lg mb-8 max-w-3xl">
                                                    {selectedProject.description}
                                                </p>
                                            </div>

                                            {/* Details Section (Two Columns) */}
                                            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-8">
                                                <div className="space-y-6">
                                                    <div className="space-y-4">
                                                        <h4 className="text-sm font-bold text-primary-400 uppercase tracking-widest font-mono flex items-center gap-2">
                                                            <span className="w-1 h-4 bg-primary-500 rounded-full"></span>
                                                            PROBLEM SOLVED
                                                        </h4>
                                                        <p className="text-gray-400 italic text-sm bg-gray-950/40 p-5 rounded-xl border border-gray-800/50 leading-relaxed">
                                                            {selectedProject.problem}
                                                        </p>
                                                    </div>

                                                    <div className="space-y-4">
                                                        <h4 className="text-sm font-bold text-primary-400 uppercase tracking-widest font-mono flex items-center gap-2">
                                                            <span className="w-1 h-4 bg-primary-500 rounded-full"></span>
                                                            CORE STACK
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2.5">
                                                            {selectedProject.stack.map((tech) => (
                                                                <span key={tech} className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-xs font-mono border border-gray-700/50 hover:border-primary-500/30 transition-colors">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="text-sm font-bold text-primary-400 uppercase tracking-widest font-mono flex items-center gap-2">
                                                        <span className="w-1 h-4 bg-primary-500 rounded-full"></span>
                                                        TECHNICAL ARCHITECTURE
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {selectedProject.architecture.map((item, i) => (
                                                            <li key={i} className="text-gray-300 text-sm flex items-start gap-4 bg-gray-800/20 p-3 rounded-xl border border-white/5 hover:bg-gray-800/40 transition-all">
                                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 text-[10px] font-bold">
                                                                    {i + 1}
                                                                </div>
                                                                <span className="leading-snug">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
