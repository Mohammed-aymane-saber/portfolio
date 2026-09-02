import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    nav: {
                        about: "About",
                        experience: "Experience",
                        skills: "Skills",
                        projects: "Projects",
                        howIBuild: "How I Build",
                        certifications: "Certifications",
                        contact: "Contact"
                    },

                    hero: {
                        title: "Mohammed Aymane Saber",
                        subtitle: "Software Engineering Student",
                        desc: "Full-Stack Development & DevOps",
                        cta: "View Projects"
                    },

                    about: {
                        title: "About Me",
                        subtitle: "Software Engineer & DevOps Enthusiast",
                        mindset: "The Engineering Mindset",
                        path: "Academic Path",
                        focus: "Current Focus",
                        availability: "Open for Opportunities",
                        availabilityDesc: "Ready for Internship / Junior Roles",
                        p1: "I focus on building <1>Full-stack applications</1> with a strong emphasis on clean architecture, scalability, and reliable performance. My objective is to effectively connect complex backend systems with intuitive and seamless user experiences.",
                        p2: "My approach combines <1>modern backend frameworks</1> such as Laravel and ASP.NET Core with <1>reactive frontends</1> built using React, Vue, and Next.js.",
                        p3: "I strongly value <1>infrastructure-as-code</1> and automation. From designing secure RESTful APIs to containerizing complete application environments with <1>Docker</1>, I aim to maintain consistency across development, testing, and production stages.",
                        p4: "On the <1>DevOps</1> side, I work with automated CI/CD pipelines using <1>GitHub Actions</1> and have hands-on experience deploying and managing applications on cloud platforms such as <1>AWS and Azure</1>."
                    },

                    experience: {
                        title: "Experience",
                        subtitle: "My Professional Journey",

                        jinglepay: {
                            role: "FinOps Intern",
                            location: "Remote · UAE",
                            period: "July 2026 — September 2026",
                            desc: "Cloud cost analysis and optimization across JinglePay's AWS and Azure environments, applying FinOps practices to improve resource efficiency and cloud cost visibility.",
                            achievements: [
                                "Analyzed AWS and Azure cloud costs, resource utilization, and infrastructure configurations to identify optimization opportunities.",
                                "Identified and implemented rightsizing, cleanup, and autoscaling optimizations across AWS and Azure resources.",
                                "Worked on optimization opportunities involving AWS EKS, RDS, EC2, and Azure services including App Service Plans, Application Gateway, and Cosmos DB.",
                                "Implemented and improved autoscaling strategies to reduce idle cloud capacity and improve resource efficiency.",
                                "Identified approximately $9K/month in estimated recurring savings from quantified optimization actions."
                            ]
                        },

                        procom: {
                            role: "Full-Stack Developer Intern",
                            company: "Procom Tech",
                            location: "Agadir, Morocco",
                            period: "July 2025 — August 2025",
                            desc: "Design and development of a mobile ERP solution (SystemePDA) for commercial management and real-time stock tracking.",
                            achievements: [
                                "Implementation of a Mono-repo architecture unifying Backend (Laravel 12) and Mobile (React Native).",
                                "Development of a complex REST API with secure authentication via Laravel Sanctum.",
                                "Optimized stock data synchronization between PDA terminals and the central server.",
                                "Configuration of a containerized development environment with Docker."
                            ]
                        }
                    },

                    common: {
                        viewDetails: "VIEW DETAILS",
                        problemSolved: "PROBLEM SOLVED",
                        coreStack: "CORE STACK",
                        architecture: "TECHNICAL ARCHITECTURE",
                        repo: "GITHUB REPO",
                        downloadCV: "DOWNLOAD CV"
                    },

                    howIBuild: {
                        title: "How I Build Things",
                        subtitle: "My approach to software development emphasizes clean architecture, best practices, and sustainable code. Here's my typical workflow:",
                        principles: "Key Principles",
                        cleanCode: "Clean Code",
                        cleanCodeDesc: "Readable, maintainable, and well-documented code that other developers can understand.",
                        scalability: "Scalability",
                        scalabilityDesc: "Design systems that can grow and adapt to changing requirements.",
                        security: "Security First",
                        securityDesc: "Implement proper authentication, validation, and data protection from the start."
                    },

                    contact: {
                        title: "Contact",
                        subtitle: "Let's build something together"
                    },

                    skills: {
                        title: "Skills"
                    },

                    projects: {
                        title: "Projects",
                        subtitle: "Selection of engineering solutions & architectures"
                    },

                    certifications: {
                        title: "Certifications",
                        subtitle: "Official recognitions of my technical expertise"
                    }
                }
            },

            fr: {
                translation: {
                    nav: {
                        about: "À propos",
                        experience: "Expérience",
                        skills: "Compétences",
                        projects: "Projets",
                        howIBuild: "Méthodologie",
                        certifications: "Certifications",
                        contact: "Contact"
                    },

                    hero: {
                        title: "Mohammed Aymane Saber",
                        subtitle: "Étudiant en Génie Informatique",
                        desc: "Développement Full-Stack & DevOps",
                        cta: "Voir mes Projets"
                    },

                    about: {
                        title: "À Propos",
                        subtitle: "Ingénieur Logiciel & Passionné DevOps",
                        mindset: "L'état d'esprit Ingénieur",
                        path: "Parcours Académique",
                        focus: "Focus Actuel",
                        availability: "Disponible",
                        availabilityDesc: "Prêt pour stage / poste Junior",
                        p1: "Je me concentre sur la création d'<1>applications Full-stack</1> avec un fort accent sur l'architecture propre, la scalabilité et la performance fiable. Mon objectif est de connecter efficacement des systèmes backend complexes à des expériences utilisateur intuitives.",
                        p2: "Mon approche combine des <1>frameworks backend modernes</1> tels que Laravel et ASP.NET Core avec des <1>frontends réactifs</1> construits avec React, Vue et Next.js.",
                        p3: "J'accorde une grande importance à l'<1>infrastructure-as-code</1> et à l'automatisation. De la conception d'API REST sécurisées à la conteneurisation d'environnements d'application complets avec <1>Docker</1>, je vise à maintenir la cohérence entre les étapes de développement, de test et de production.",
                        p4: "Côté <1>DevOps</1>, je travaille avec des pipelines CI/CD automatisés via <1>GitHub Actions</1> et j'ai une expérience pratique du déploiement et de la gestion d'applications sur des plateformes cloud comme <1>AWS et Azure</1>."
                    },

                    experience: {
                        title: "Expérience",
                        subtitle: "Mon Parcours Professionnel",

                        jinglepay: {
                            role: "Stagiaire FinOps",
                            location: "À distance · Émirats arabes unis",
                            period: "Juillet 2026 — Septembre 2026",
                            desc: "Analyse et optimisation des coûts cloud sur les environnements AWS et Azure de JinglePay, avec l'application de pratiques FinOps pour améliorer l'efficacité des ressources et la visibilité sur les coûts cloud.",
                            achievements: [
                                "Analyse des coûts cloud AWS et Azure, de l'utilisation des ressources et des configurations d'infrastructure afin d'identifier les opportunités d'optimisation.",
                                "Identification et mise en œuvre d'optimisations de rightsizing, de nettoyage et d'autoscaling sur les ressources AWS et Azure.",
                                "Travail sur des opportunités d'optimisation concernant AWS EKS, RDS, EC2 ainsi que des services Azure tels que les App Service Plans, Application Gateway et Cosmos DB.",
                                "Mise en œuvre et amélioration de stratégies d'autoscaling afin de réduire les capacités cloud inutilisées et d'améliorer l'efficacité des ressources.",
                                "Identification d'environ 9,7 k$ par mois d'économies récurrentes estimées grâce aux optimisations quantifiées."
                            ]
                        },

                        procom: {
                            role: "Stagiaire Développeur Full-Stack",
                            company: "Procom Tech",
                            location: "Agadir, Maroc",
                            period: "Juillet 2025 — Août 2025",
                            desc: "Conception et développement d'une solution ERP mobile (SystemePDA) pour la gestion commerciale et le suivi des stocks en temps réel.",
                            achievements: [
                                "Mise en place d'une architecture Mono-repo unifiant le Backend (Laravel 12) et le Mobile (React Native).",
                                "Développement d'une API REST complexe avec authentification sécurisée via Laravel Sanctum.",
                                "Optimisation de la synchronisation des données de stock entre les terminaux PDA et le serveur central.",
                                "Configuration de l'environnement de développement conteneurisé avec Docker."
                            ]
                        }
                    },

                    common: {
                        viewDetails: "VOIR DÉTAILS",
                        problemSolved: "PROBLÈME RÉSOLU",
                        coreStack: "STACK TECHNIQUE",
                        architecture: "ARCHITECTURE TECHNIQUE",
                        repo: "DÉPÔT GITHUB",
                        downloadCV: "TÉLÉCHARGER CV"
                    },

                    howIBuild: {
                        title: "Ma Méthodologie",
                        subtitle: "Mon approche du développement logiciel privilégie l'architecture propre, les bonnes pratiques et un code durable. Voici mon flux de travail type :",
                        principles: "Principes Clés",
                        cleanCode: "Code Propre",
                        cleanCodeDesc: "Un code lisible, maintenable et bien documenté, compréhensible par d'autres développeurs.",
                        scalability: "Scalabilité",
                        scalabilityDesc: "Conception de systèmes capables de grandir et de s'adapter aux changements de besoins.",
                        security: "Sécurité d'abord",
                        securityDesc: "Mise en œuvre d'une authentification, d'une validation et d'une protection des données dès le départ."
                    },

                    contact: {
                        title: "Contact",
                        subtitle: "Construisons l'avenir ensemble"
                    },

                    skills: {
                        title: "Compétences"
                    },

                    projects: {
                        title: "Projets",
                        subtitle: "Sélection de solutions d'ingénierie & d'architectures"
                    },

                    certifications: {
                        title: "Certifications",
                        subtitle: "Reconnaissances officielles de mon expertise technique"
                    }
                }
            }
        },

        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;