import { motion } from 'framer-motion';

const HowIBuild = () => {
    const process = [
        {
            phase: '01',
            title: 'Planning & Architecture',
            items: [
                'Define clear requirements and user stories',
                'Design database schema and relationships',
                'Create UML diagrams (Use Case, Class, Sequence)',
                'Plan API endpoints and data flow',
                'Choose appropriate design patterns'
            ]
        },
        {
            phase: '02',
            title: 'Development',
            items: [
                'Backend first: Build REST API with proper validation',
                'Follow MVC/layered architecture',
                'Implement authentication and authorization',
                'Write clean, maintainable code following SOLID principles',
                'Frontend: Integrate API with React, manage state efficiently'
            ]
        },
        {
            phase: '03',
            title: 'Version Control & Collaboration',
            items: [
                'Git workflow: feature branches, meaningful commits',
                'Code reviews and pull requests',
                'Follow conventional commit messages',
                'Maintain clean git history'
            ]
        },
        {
            phase: '04',
            title: 'Deployment & DevOps',
            items: [
                'Containerize with Docker (multi-stage builds)',
                'Set up CI/CD pipelines (GitHub Actions)',
                'Deploy to cloud (AWS/other platforms)',
                'Configure environment variables properly',
                'Monitor application health and logs'
            ]
        }
    ];

    return (
        <section id="how-i-build" className="section bg-gray-900">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    How I Build Things
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-400 max-w-3xl mb-12"
                >
                    My approach to software development emphasizes clean architecture, best practices, and sustainable code. Here's my typical workflow:
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8">
                    {process.map((step, index) => (
                        <motion.div
                            key={step.phase}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card relative"
                        >
                            {/* Phase number */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center font-mono font-bold text-lg">
                                {step.phase}
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <ul className="space-y-2">
                                    {step.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional insights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12"
                >
                    <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            Key Principles
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="space-y-1">
                                <p className="text-primary-400 font-semibold text-sm">Clean Code</p>
                                <p className="text-gray-400 text-sm">Readable, maintainable, and well-documented code that other developers can understand.</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-primary-400 font-semibold text-sm">Scalability</p>
                                <p className="text-gray-400 text-sm">Design systems that can grow and adapt to changing requirements.</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-primary-400 font-semibold text-sm">Security First</p>
                                <p className="text-gray-400 text-sm">Implement proper authentication, validation, and data protection from the start.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tech stack preference */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 p-6 bg-gray-950 border border-gray-800 rounded-lg"
                >
                    <p className="text-gray-400 text-sm font-mono">
                        <span className="text-primary-500">~$</span> Tech stack choices depend on project requirements, not trends.
                        <br />
                        <span className="text-primary-500">~$</span> Prefer proven technologies with strong community support.
                        <br />
                        <span className="text-primary-500">~$</span> Always optimize for maintainability and team collaboration.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HowIBuild;
