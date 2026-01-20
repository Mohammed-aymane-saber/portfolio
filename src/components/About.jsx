import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineRocketLaunch, HiOutlineCommandLine } from 'react-icons/hi2';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        initial: { scale: 0.95, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        hover: {
            y: -5,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="about" className="section bg-gray-950 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="section-title mb-4">{t('about.title')}</h2>
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-primary-500/50" />
                        <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
                            {t('about.subtitle')}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-12 gap-12 lg:gap-20"
                >
                    {/* Narrative Column */}
                    <div className="lg:col-span-12 xl:col-span-7 space-y-8">
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary-500/10 rounded-xl border border-primary-500/20 text-primary-400 shrink-0 mt-1">
                                    <HiOutlineCommandLine className="text-2xl" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white">{t('about.mindset')}</h3>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        <Trans i18nKey="about.p1">
                                            I focus on building <span className="text-primary-400 font-semibold underline decoration-primary-500/30 underline-offset-4">Full-stack applications</span> with a strong emphasis on clean architecture, scalability, and reliable performance. My objective is to effectively connect complex backend systems with intuitive and seamless user experiences.
                                        </Trans>
                                    </p>
                                </div>
                            </div>

                            <div className="pl-14 space-y-4 text-gray-400 leading-relaxed border-l border-gray-800 ml-7">
                                <p>
                                    <Trans i18nKey="about.p2">
                                        My approach combines <span className="text-white font-medium">modern backend frameworks</span> such as Laravel  and ASP.NET Core with <span className="text-white font-medium">reactive frontends</span> built using React, Vue, and Next.js.
                                    </Trans>
                                </p>
                                <p>
                                    <Trans i18nKey="about.p3">
                                        I strongly value <span className="text-primary-400 font-mono">infrastructure-as-code</span> and automation. From designing secure RESTful APIs to containerizing complete application environments with <span className="text-white font-medium">Docker</span>, I aim to maintain consistency across development, testing, and production stages.
                                    </Trans>
                                </p>
                                <p>
                                    <Trans i18nKey="about.p4">
                                        On the <span className="text-primary-400 font-semibold">DevOps</span> side, I work with automated CI/CD pipelines using <span className="text-white font-medium">GitHub Actions</span> and have hands-on experience deploying and managing applications on cloud platforms such as <span className="text-white font-medium">AWS and Azure</span>.
                                    </Trans>
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Stats/Cards Column */}
                    <div className="lg:col-span-12 xl:col-span-5 space-y-6">
                        {/* Education Card */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <HiOutlineAcademicCap className="text-8xl text-primary-500" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 text-primary-400 mb-6">
                                    <HiOutlineAcademicCap className="text-2xl" />
                                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em]">{t('about.path')}</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">École Nationale des Sciences Appliquées</h4>
                                <p className="text-primary-400 font-medium mb-1">Génie Informatique (Full-stack & DevOps)</p>
                                <p className="text-gray-500 text-sm font-mono tracking-tighter">2022 — PRESENT • ENSA TETOUAN</p>
                            </div>
                        </motion.div>

                        {/* Current Focus Card */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <HiOutlineLightBulb className="text-8xl text-yellow-500" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 text-yellow-400 mb-6">
                                    <HiOutlineLightBulb className="text-2xl" />
                                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em]">{t('about.focus')}</span>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    I am currently deepening my expertise in <span className="text-white font-semibold">Cloud Computing</span> and <span className="text-white font-semibold">DevOps</span>.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'AWS'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-800/50 rounded-full text-[10px] font-mono text-gray-400 border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Availability Bar */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-primary-500/5 border border-primary-500/20 p-6 rounded-2xl flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">{t('about.availability')}</p>
                                    <p className="text-gray-500 text-xs">{t('about.availabilityDesc')}</p>
                                </div>
                            </div>
                            <HiOutlineRocketLaunch className="text-2xl text-primary-500/50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
