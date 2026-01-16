import { motion } from 'framer-motion';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold mb-6"
                        >
                            Mohammed Aymane{' '}
                            <span className="text-gradient">Saber</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-2xl md:text-3xl text-gray-400 mb-4 font-medium"
                        >
                            Software Engineering Student
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl text-gray-500 mb-12 font-mono"
                        >
                            Full-Stack Development & DevOps
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('projects')}
                                className="btn-primary"
                            >
                                <span>View Projects</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>

                            <motion.a
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 1)" }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/Mohammed-aymane-saber"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>GitHub</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Image Placeholder/Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                                <img
                                    src="/profile.png"
                                    alt="Mohammed Aymane Saber"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-400/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-20 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block cursor-pointer"
                        onClick={() => scrollToSection('about')}
                    >
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>

    );
};

export default Hero;
