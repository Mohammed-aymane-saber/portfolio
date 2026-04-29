import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');
    const [selectedProject, setSelectedProject] = useState(null);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    const projects = useMemo(() => [
        {
            id: 1,
            title: 'VerdeNET - Marketplace de Services à Domicile',
            shortDesc: isEn ? 'Full-Stack Home Services Marketplace with real-time features.' : 'Plateforme Full-Stack de services à domicile avec temps réel.',
            description: isEn
                ? 'A complete Full-Stack platform connecting clients and providers, featuring real-time notifications, schedule management, and automated invoicing.'
                : 'Une plateforme Full-Stack complète mettant en relation clients et prestataires, avec notifications temps réel, gestion de planning et facturation automatisée.',
            problem: isEn
                ? 'Need for a centralized solution for domestic services management (cleaning, gardening, etc.) with precise tracking and instant communication.'
                : 'Besoin d\'une solution centralisée pour la gestion des services domestiques (ménage, jardinage, etc.) avec un suivi précis et une communication instantanée entre acteurs.',
            stack: ['Laravel 12', 'Vue.js 3', 'Docker', 'MySQL', 'Laravel Reverb', 'Tailwind CSS'],
            architecture: isEn ? [
                'Backend: Laravel 12 REST API with Sanctum & Socialite (Google) auth',
                'Frontend: Vue.js 3 SPA with Vite for a reactive and modern interface',
                'Real-Time: WebSockets via Laravel Reverb for notifications and intervention tracking',
                'Deployment on AWS: Multi-container Docker architecture (Nginx, PHP-FPM, MySQL)'
            ] : [
                'Backend : API REST Laravel 12 avec authentification Sanctum & Socialite (Google)',
                'Frontend : SPA Vue.js 3 avec Vite pour une interface réactive et moderne',
                'Temps Réel : WebSockets via Laravel Reverb pour les notifications et suivis d\'interventions',
                'Déploiement sur AWS : Architecture multi-conteneurs Docker (Nginx, PHP-FPM, MySQL)'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/VerdeNet',
            image: '/projects/verdenet.png',
            highlights: ['Laravel 12 & Vue 3', isEn ? 'Real-Time Notifications' : 'Notifications Temps Réel', isEn ? 'Multi-role Management' : 'Gestion Multi-rôles', 'Docker-Ready'],
            gridSize: 'lg:col-span-2'
        },
        {
            id: 2,
            title: 'E-Commerce Marketplace with AI Chatbot',
            shortDesc: isEn ? 'Marketplace with smart Chatbot and Web Services.' : 'Marketplace avec Chatbot intelligent et Web Services.',
            description: isEn
                ? 'An advanced multi-cooperative e-commerce platform integrating a smart Chatbot, order tracking system, and asynchronous Web Services.'
                : 'Une plateforme e-commerce multi-coopérative avancée intégrant un Chatbot intelligent, un système de suivi de commandes et des services Web asynchrones.',
            problem: isEn
                ? 'Need to digitize cooperative sales processes while offering automated customer support and a smooth user experience.'
                : 'Nécessité de numériser les processus de vente des coopératives tout en offrant un support client automatisé et une expérience utilisateur fluide.',
            stack: ['ASP.NET Web Forms', 'C#', 'SQL Server', 'ASMX Web Services', 'Bootstrap 5', 'n8n (Chatbot Automation)'],
            architecture: isEn ? [
                'Modular Backend: Architecture based on ASMX Web Services for separation of concerns',
                'Smart Chatbot: Virtual assistant integration via Web Services to guide users',
                'Order Lifecycle: Complete management system with tracking number generation',
                'Data Integration: SQL Server stored procedures optimized for multi-vendor inventory',
                'Deployment: Database and app deployed on Azure (SQL Database & Web App)'
            ] : [
                'Modular Backend : Architecture basée sur des Services Web ASMX pour la séparation des préoccupations',
                'Smart Chatbot : Intégration d\'un assistant virtuel via Web Services pour guider les utilisateurs',
                'Order Lifecycle : Système complet de gestion des commandes avec génération de numéros de suivi',
                'Data Integration : Procédures stockées SQL Server optimisées pour la gestion de stocks multi-vendeurs',
                'Déploiement : Base de Données et application sur Azure (Azure SQL Database & Web App)'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/Multi_cooperative_Web_Form_Projet',
            image: '/projects/ecommerce.png',
            highlights: ['AI-powered Chatbot', 'Real-time Tracking', 'Asynchronous Web Services', 'Admin Management Suite'],
            gridSize: 'lg:col-span-1'
        },
        {
            id: 3,
            title: 'Enterprise CI/CD & Smart Queue System',
            shortDesc: isEn ? 'Automated DevOps infrastructure with CI/CD pipeline.' : 'Infrastructure DevOps automatisée avec pipeline CI/CD.',
            description: isEn
                ? 'An intelligently orchestrated queue management platform, emphasizing robust architecture and high-performance automated deployment.'
                : 'Une plateforme de gestion de file d\'attente intelligement orchestrée, mettant l\'accent sur une architecture robuste et un déploiement automatisé haute performance.',
            problem: isEn
                ? 'Need to eliminate information asymmetry in high-traffic environments via scalable infrastructure and continuous error-free deployment.'
                : 'Nécessité d\'éliminer l\'asymétrie d\'information dans les environnements à fort trafic via une infrastructure scalable et un déploiement continu sans erreur.',
            stack: ['Docker', 'GitHub Actions', 'AWS EC2', 'Laravel', 'React', 'Nginx'],
            architecture: isEn ? [
                'Advanced CI/CD: Automated pipeline (GitHub Actions) for tests, containerization, and AWS EC2 deployment.',
                'Docker Orchestration: Isolated multi-container architecture (App, Web, DB) with Health Checks.',
                'State Machine Logic: Robust status management engine (BOOKED → WAITING → DONE).',
                'Smart Algorithms: Real-time EWT (Estimated Wait Time) calculations based on active counters.'
            ] : [
                'Advanced CI/CD : Pipeline automatisé (GitHub Actions) gérant les tests, la conteneurisation et le déploiement sur AWS EC2.',
                'Docker Orchestration : Architecture multi-conteneurs isolée (App, Web, DB) avec Health Checks.',
                'State Machine Logic : Moteur de gestion d\'états robuste (BOOKED → WAITING → DONE).',
                'Smart Algorithms : Calculs d\'EWT (Estimated Wait Time) en temps réel basés sur la vélocité des guichets.'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/CI-CD_Pipeline',
            highlights: ['Automated AWS Deployment', 'Docker Health Monitoring', 'Real-time Algorithmics', 'DevOps Infrastructure'],
            image: '/projects/devops.png',
            gridSize: 'lg:col-span-1'
        },
        {
            id: 4,
            title: 'SystemePDA - Système de Gestion Commerciale Mobile',
            shortDesc: isEn ? 'Real-time synchronized Web & Mobile ERP solution.' : 'Solution ERP Web & Mobile synchronisée en temps réel.',
            description: isEn
                ? 'A complete commercial management solution (ERP) including a web back-office and a mobile app for PDA terminals, synchronized in real-time.'
                : 'Une solution complète de gestion commerciale (ERP) comprenant un back-office web et une application mobile pour terminaux PDA, synchronisés en temps réel.',
            problem: isEn
                ? 'Need for companies to manage stocks and sales smoothly between center office (Web) and field agents (Mobile/PDA).'
                : 'Nécessité pour les entreprises de gérer leurs stocks et leurs ventes de manière fluide entre un bureau central (Web) et des agents sur le terrain (Mobile/PDA).',
            stack: ['Laravel 12', 'React Native (Expo)', 'Inertia.js', 'Tailwind CSS', 'Sanctum (API Auth)', 'SQLite/MySQL'],
            architecture: isEn ? [
                'Backend Hub: Robust Laravel 12 API ensuring business logic and Sanctum auth',
                'Web Dashboard: Responsive admin interface using Inertia.js stack',
                'Mobile PDA App: Cross-platform app developed with Expo, optimized for field data entry',
                'Monorepo Strategy: Unified management of backend and mobile for total consistency'
            ] : [
                'Backend Hub : API Laravel 12 robuste assurant la logique métier et l\'authentification via Sanctum',
                'Web Dashboard : Interface d\'administration réactive utilisant la stack Inertia.js',
                'Mobile PDA App : Application cross-platform développée avec Expo, optimisée pour la saisie terrain',
                'Monorepo Strategy : Gestion unifiée du backend et du mobile pour une cohérence totale'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/Stage-SystemePDA',
            image: '/projects/systemepda.png',
            highlights: ['Multi-platform (Web & Mobile)', 'Inertia & Laravel 12', 'Stock Real-time', 'Architecture Monorepo'],
            gridSize: 'lg:col-span-2'
        },
        {
            id: 5,
            title: 'PétitionsEnLigne - Plateforme de Mobilisation',
            shortDesc: isEn ? 'Petition system with progression tracking.' : 'Système de pétitions avec suivi de progression.',
            description: isEn
                ? 'A platform allowing users to create, sign and support social causes. Includes dynamic signature management with goals and notifications.'
                : 'Une plateforme permettant aux utilisateurs de créer, signer et soutenir des causes sociales. Inclut une gestion dynamique des signatures avec objectifs.',
            problem: isEn
                ? 'Need for a centralized and secure tool to facilitate community mobilization and track petition impact.'
                : 'Besoin d\'un outil centralisé et sécurisé pour faciliter la mobilisation communautaire et le suivi de l\'impact des pétitions.',
            stack: ['PHP Native', 'MySQL', 'Firebase', 'Tailwind CSS', 'SMTP (PHPMailer)'],
            architecture: isEn ? [
                'Backend Hub: PHP scripting with PDO for efficient data and signature management',
                'Security & Notifications: Firebase auth and PHPMailer integration for SMTP confirmations',
                'Dynamic UI: Modern interface with Tailwind CSS and infinite scroll features',
                'Analytics: Automated success rate calculation based on set goals'
            ] : [
                'Backend Hub : Scripting PHP avec PDO pour une gestion performante des données et des signatures',
                'Security & Notifications : Authentification Firebase et intégration de PHPMailer pour confirmations SMTP',
                'Dynamic UI : Interface moderne avec Tailwind CSS intégrant le défilement infini',
                'Analytics : Calcul automatique du taux de réussite par rapport aux objectifs fixés'
            ],
            github: 'https://github.com/Mohammed-aymane-saber/Tp3-Gestion-Petition',
            highlights: ['Firebase Integration', 'Infinite Scroll UI', 'Progress Bar Tracking', 'SMTP Email Notifications'],
            image: '/projects/petitions.png',
            gridSize: 'lg:col-span-2'
        },
        {
            id: 6,
            title: 'Club & Event Management System',
            shortDesc: isEn ? 'Full associative management with automated certificate generation.' : 'Gestion associative complète avec génération de certificats.',
            description: isEn
                ? 'An associative management platform to manage university clubs, organize events and automatically generate participation certificates.'
                : 'Une plateforme permettant de piloter des clubs universitaires, d\'organiser des événements et de générer automatiquement des certificats.',
            problem: isEn
                ? 'Difficulty for administrators to track club creation requests and produce participation certificates at scale.'
                : 'Difficulté pour les administrateurs de suivre les demandes de création de clubs et de produire des attestations de manière industrielle.',
            stack: ['PHP Native', 'MySQL', 'Bootstrap', 'TCPDF/FPDF (Certificats)', 'Google reCAPTCHA', 'Cron Jobs'],
            architecture: isEn ? [
                'Modular Logic: Structured PHP architecture for easier maintenance',
                'Automation Engine: Use of scheduled tasks (Cron Jobs) for event status updates',
                'Security Layer: Anti-spam protection via Google reCAPTCHA and token-based password recovery',
                'Document Generation: Dynamic PDF certificate engine with participant preview'
            ] : [
                'Modular Logic : Architecture PHP structurée par modules pour une maintenance facilitée',
                'Automation Engine : Utilisation du Cron pour la mise à jour automatique des statuts',
                'Security Layer : Protection anti-spam via Google reCAPTCHA et récupération de mot de passe',
                'Document Generation : Moteur de création dynamique de certificats PDF avec prévisualisation'
            ],
            github: 'https://github.com/AmineElBiydi/Event_Club_Manager',
            image: '/projects/club.png',
            highlights: ['Automated PDF Generation', 'Advanced Admin Dashboard', 'Password Recovery Workflow', 'reCAPTCHA Integration'],
            gridSize: 'lg:col-span-1'
        },
        {
            id: 7,
            title: 'Sports Facility & Tournament Management System',
            shortDesc: isEn ? 'Multi-field reservation system and sports tournament management.' : 'Système de réservation multi-terrains et gestion de tournois.',
            description: isEn
                ? 'A sports complex management platform allowing field reservation by partitions, team management and tournament organization with statistics tracking.'
                : 'Une plateforme de complexes sportifs permettant la réservation de terrains, la gestion d\'équipes et l\'organisation de tournois.',
            problem: isEn
                ? 'Need to digitize complex sports field reservations (multi-field) and automate competition and billing management.'
                : 'Nécessité de digitaliser la réservation de terrains sportifs complexes et d\'automatiser la gestion des compétitions et facturations.',
            stack: ['PHP (MVC)', 'Firebase Cloud Storage', 'TCPDF', 'Clean Architecture', 'Bootstrap', 'JavaScript (AJAX)'],
            architecture: isEn ? [
                'Layered Architecture: Rigorous structure with separation of concerns (Controllers, Services, Repositories)',
                'Cloud Integration: Use of Firebase for data and storage management via Kreait PHP',
                'Complex Reservation Engine: Partition management system with real-time availability check',
                'Tournament Management: Complete module for tournament creation, match management and stats'
            ] : [
                'Layered Architecture : Structure rigoureuse avec séparation des responsabilités (Controllers, Services)',
                'Cloud Integration : Utilisation de Firebase pour les données via l\'interface Kreait PHP',
                'Complex Reservation Engine : Système de gestion de créneaux avec vérification en temps réel',
                'Tournament Management : Module complet pour la création de tournois, gestion de matchs et stats'
            ],
            github: 'https://github.com/AmineElBiydi/MiniProject_2',
            highlights: ['Cloud Integration (Firebase)', 'Tournament & Match Engine', 'Automated Invoicing (TCPDF)', 'Service-Repository Pattern'],
            image: '/projects/terrains.png',
            gridSize: 'lg:col-span-3'
        }
    ], [isEn]);

    return (
        <section id="projects" className="section bg-gray-950 relative">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="section-title mb-4">{t('projects.title')}</h2>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-widest border-l-2 border-primary-500 pl-4">
                        {t('projects.subtitle')}
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
                            className={`group cursor-pointer relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-primary-500/50 transition-all duration-500 ${project.gridSize} h-[280px] sm:h-[320px] md:h-[400px]`}
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
                            <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                                <div className="space-y-2 md:space-y-3">
                                    <div className="flex gap-2">
                                        {project.highlights.slice(0, 2).map((h, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-tighter font-bold text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded border border-primary-500/20">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm line-clamp-2 font-light">
                                        {project.shortDesc}
                                    </p>
                                    <div className="flex items-center gap-2 pt-2 text-primary-500 font-mono text-xs font-bold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        {t('common.viewDetails')}
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
                                className="relative bg-gray-900 border border-gray-800 rounded-3xl w-full max-w-5xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto overflow-x-hidden shadow-2xl"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 text-gray-400 hover:text-white bg-gray-800/80 md:bg-gray-800/50 rounded-full backdrop-blur-md transition-colors border border-white/5"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="flex flex-col">
                                    {/* Modal Image Section */}
                                    <div className="p-4 md:p-10 bg-gray-950/30 border-b border-gray-800/50">
                                        <div className="relative group/browser w-full md:max-w-[95%] mx-auto">
                                            <div className="bg-gray-800/80 backdrop-blur-md rounded-t-xl py-2.5 px-4 border-t border-x border-gray-700/50 flex items-center gap-2">
                                                <div className="flex gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                                                </div>
                                                <div className="mx-auto flex items-center gap-2">
                                                    <div className="w-[100px] md:w-[220px] h-4 md:h-5 bg-gray-900/50 rounded-full flex items-center justify-center px-2 md:px-3 border border-gray-700/30">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500/20 mr-1.5 md:mr-2"></div>
                                                        <span className="text-[9px] md:text-[10px] text-gray-500 font-mono truncate">{selectedProject.title.toLowerCase().replace(/\s+/g, '-')}.dev</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative border-x border-b border-gray-700/50 rounded-b-xl overflow-hidden bg-gray-900 shadow-2xl">
                                                <img
                                                    src={selectedProject.image}
                                                    alt={selectedProject.title}
                                                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modal Content */}
                                    <div className="p-6 md:p-12">
                                        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10">
                                            <div className="lg:col-span-12">
                                                <div className="flex flex-col gap-6 mb-8">
                                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                                        <div>
                                                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                                                                {selectedProject.title}
                                                            </h3>
                                                            <p className="text-primary-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">{isEn ? 'TECHNICAL PROJECT FILE' : 'DOSSIER TECHNIQUE PROJET'}</p>
                                                        </div>
                                                        <div className="flex gap-3">
                                                            <a
                                                                href={selectedProject.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all font-bold text-sm border border-gray-700"
                                                            >
                                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                                </svg>
                                                                {t('common.repo')}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-300 leading-relaxed font-light text-base md:text-lg max-w-3xl">
                                                        {selectedProject.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-8">
                                                <div className="space-y-6">
                                                    <div className="space-y-4">
                                                        <h4 className="text-sm font-bold text-primary-400 uppercase tracking-widest font-mono flex items-center gap-2">
                                                            <span className="w-1 h-4 bg-primary-500 rounded-full"></span>
                                                            {t('common.problemSolved')}
                                                        </h4>
                                                        <p className="text-gray-400 italic text-sm bg-gray-950/40 p-5 rounded-xl border border-gray-800/50 leading-relaxed">
                                                            {selectedProject.problem}
                                                        </p>
                                                    </div>

                                                    <div className="space-y-4">
                                                        <h4 className="text-sm font-bold text-primary-400 uppercase tracking-widest font-mono flex items-center gap-2">
                                                            <span className="w-1 h-4 bg-primary-500 rounded-full"></span>
                                                            {t('common.coreStack')}
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
                                                        {t('common.architecture')}
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
