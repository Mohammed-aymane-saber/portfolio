import { motion } from 'framer-motion';
import {
    SiLaravel, SiNodedotjs, SiDotnet, SiReact, SiJavascript, SiAngular, SiVuedotjs,
    SiNextdotjs, SiTailwindcss, SiDocker, SiAmazonwebservices, SiGit, SiOracle,
    SiLinux, SiMysql, SiPostgresql, SiMongodb, SiGithub, SiPostman, SiPrometheus, SiGrafana, SiTerraform, SiKubernetes
} from 'react-icons/si';
import { FaJava, FaWindows, FaCode } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');

    const iconMap = {
        'Laravel': <SiLaravel />,
        'Java': <FaJava />,
        'Node.js': <SiNodedotjs />,
        'ASP.NET Core': <SiDotnet />,
        'React': <SiReact />,
        'JavaScript': <SiJavascript />,
        'Angular': <SiAngular />,
        'Vue': <SiVuedotjs />,
        'Next': <SiNextdotjs />,
        'Tailwind CSS': <SiTailwindcss />,
        'Docker': <SiDocker />,
        'AWS': <SiAmazonwebservices />,
        'Azure': <VscAzure />,
        'Prometheus': <SiPrometheus />,
        'Grafana': <SiGrafana />,
        'Terraform': <SiTerraform />,
        'Kubernetes': <SiKubernetes />,
        'Oracle Database': <SiOracle />,
        'Git': <SiGit />,
        'Linux': <SiLinux />,
        'MySQL': <SiMysql />,
        'PostgreSQL': <SiPostgresql />,
        'MongoDB': <SiMongodb />,
        'GitHub': <SiGithub />,
        'VS Code': <FaCode />,
        'Postman': <SiPostman />,
        'Windows': <FaWindows />,
    };

    const skillCategories = [
        {
            title: isEn ? 'Backend' : 'Développement Backend',
            skills: ['Laravel', 'Java', 'Node.js', 'ASP.NET Core', 'Spring Boot', 'REST API', 'Design Patterns', 'MVC Architecture', 'OOP']
        },
        {
            title: isEn ? 'Frontend' : 'Développement Frontend',
            skills: ['React', 'JavaScript', 'Angular', 'Vue', 'Next', 'API Integration', 'Responsive Design', 'Tailwind CSS']
        },
        {
            title: isEn ? 'DevOps' : 'Opérations de Développement',
            skills: ['Docker', 'AWS', 'CI/CD', 'Azure', 'Git', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana']
        },
        {
            title: isEn ? 'Database' : 'Base de données',
            skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Oracle Database']
        },
        {
            title: isEn ? 'Tools & Systems' : 'Outils & Systèmes',
            skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux', 'Windows', 'Docker']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section bg-gray-900">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    {t('skills.title')}
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            variants={categoryVariants}
                            className="skill-category"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="text-primary-500 font-mono">//</span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                                        whileHover={{ scale: 1.05, borderColor: '#0ea5e9' }}
                                        className="skill-tag flex items-center gap-2"
                                    >
                                        {iconMap[skill] && (
                                            <span className="text-primary-400">
                                                {iconMap[skill]}
                                            </span>
                                        )}
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 p-6 bg-gray-950 border border-gray-800 rounded-lg"
                >
                    <p className="text-gray-400 text-sm font-mono">
                        <span className="text-primary-500">~$</span> Constantly learning and exploring new technologies.
                        <br />
                        <span className="text-primary-500">~$</span> Focus on understanding fundamentals over chasing trends.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
