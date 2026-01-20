import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineMapPin, HiOutlineCheckCircle } from 'react-icons/hi2';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Stagiaire Développeur Full-Stack",
            company: "Procom Tech",
            location: "Agadir, Maroc",
            period: "Juillet 2025 — Août 2025",
            description: "Conception et développement d'une solution ERP mobile (SystemePDA) pour la gestion commerciale et le suivi des stocks en temps réel.",
            achievements: [
                "Mise en place d'une architecture Mono-repo unifiant le Backend (Laravel 12) et le Mobile (React Native).",
                "Développement d'une API REST complexe avec authentification sécurisée via Laravel Sanctum.",
                "Optimisation de la synchronisation des données de stock entre les terminaux PDA et le serveur central.",
                "Configuration de l'environnement de développement conteneurisé avec Docker."
            ],
            tech: ["Laravel 12", "React Native", "Expo", "Sanctum", "MySQL"]
        }
    ];

    return (
        <section id="experience" className="section bg-gray-950/50 relative overflow-hidden">
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="section-title mb-4">Experience</h2>
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-primary-500/50" />
                        <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
                            My Professional Journey
                        </p>
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l border-gray-800"
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-950 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />

                            <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl hover:border-primary-500/30 transition-all duration-300 group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400 text-sm">
                                            <span className="flex items-center gap-1.5">
                                                <HiOutlineBriefcase className="text-primary-500" />
                                                {exp.company}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <HiOutlineMapPin className="text-primary-500" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-950/50 rounded-full border border-gray-800 text-primary-400 text-xs font-mono">
                                        <HiOutlineCalendar />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-8 leading-relaxed italic">
                                    "{exp.description}"
                                </p>

                                <div className="space-y-4 mb-8">
                                    {exp.achievements.map((achievement, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <HiOutlineCheckCircle className="text-primary-500 mt-1 shrink-0" />
                                            <span className="text-gray-400 text-sm leading-relaxed">
                                                {achievement}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-primary-500/5 text-primary-400 rounded-full text-[10px] font-mono border border-primary-500/10"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
