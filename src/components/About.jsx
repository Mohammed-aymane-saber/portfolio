import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="section bg-gray-950">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    About
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-primary-500">→</span> Education
                        </h3>
                        <div className="pl-6">
                            <p className="text-gray-300 font-medium">École Nationale des Sciences Appliquées (ENSA)</p>
                            <p className="text-gray-400">Génie Informatique</p>
                            <p className="text-gray-500 text-sm font-mono">2022 - Present</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-primary-500">→</span> What I Do
                        </h3>
                        <div className="pl-6 space-y-2">
                            <p className="text-gray-300">
                                I build <span className="text-primary-400 font-semibold">full-stack web applications</span> with focus on clean architecture, scalability, and performance.
                            </p>
                            <p className="text-gray-300">
                                My approach combines <span className="text-primary-400 font-semibold">modern backend frameworks</span> (Laravel, Java, Node.js, ASP.NET Core) with <span className="text-primary-400 font-semibold">dynamic frontends</span> (React, Angular, Vue, Next), fully containerized with <span className="text-primary-400 font-semibold">Docker & Docker Compose</span> for consistent development and production environments.
                            </p>
                            <p className="text-gray-300">
                                I implement <span className="text-primary-400 font-semibold">REST APIs</span>, handle authentication/authorization, and follow software engineering best practices including design patterns and clean code principles.
                            </p>
                            <p className="text-gray-300">
                                On the <span className="text-primary-400 font-semibold">DevOps</span> side, I automate workflows using <span className="text-primary-400 font-semibold">GitHub Actions</span> (CI/CD), manage infrastructure on <span className="text-primary-400 font-semibold">AWS & Azure</span>, and have a solid command of <span className="text-primary-400 font-semibold">Linux (CLI)</span> and <span className="text-primary-400 font-semibold">Git</span> for version control.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-primary-500">→</span> Looking For
                        </h3>
                        <div className="pl-6">
                            <p className="text-gray-300">
                                <span className="text-primary-400 font-semibold">Internship</span> or <span className="text-primary-400 font-semibold">Junior Developer</span> opportunities where I can contribute to real-world projects, learn from experienced engineers, and grow my technical expertise.
                            </p>
                            <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 font-mono">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Available for opportunities
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
