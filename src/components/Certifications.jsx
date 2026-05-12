import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineBadgeCheck, HiOutlineExternalLink } from 'react-icons/hi';
import { SiAmazonwebservices, SiDocker, SiKubernetes } from 'react-icons/si';

const Certifications = () => {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');

    const certifications = [
        {
            title: "AWS Cloud Quest: Cloud Practitioner",
            issuer: "Amazon Web Services (AWS)",
            date: "Oct 12, 2025",
            icon: <SiAmazonwebservices className="text-[#FF9900]" />,
            link: "https://www.credly.com/badges/e9d6919b-2579-4960-8cff-833dedf4efc7/public_url",
            skills: ["Cloud Computing", "AWS Services", "Security"]
        },
        {
            title: "Containers & Kubernetes Essentials",
            issuer: "IBM",
            date: "Apr 5, 2026",
            icon: (
                <div className="flex gap-2">
                    <SiDocker className="text-[#2496ED]" />
                    <SiKubernetes className="text-[#326CE5]" />
                </div>
            ),
            link: "https://www.credly.com/badges/39ad037e-0489-453d-ac5b-605161241a7d/public_url",
            skills: ["Docker", "Kubernetes", "Containerization"]
        }
    ];

    return (
        <section id="certifications" className="section bg-gray-950 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="section-title mb-4">{t('certifications.title')}</h2>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-widest border-l-2 border-primary-500 pl-4">
                        {t('certifications.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-900/40 border border-gray-800 p-6 rounded-2xl hover:border-primary-500/50 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-3xl">
                                    {cert.icon}
                                </div>
                                <div className="text-xs font-mono text-gray-500 bg-gray-950 px-2 py-1 rounded">
                                    {cert.date}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-primary-500 text-sm font-medium mb-4">
                                {cert.issuer}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {cert.skills.map((skill, i) => (
                                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors group/link"
                            >
                                <HiOutlineBadgeCheck className="text-primary-500 text-lg" />
                                <span>{isEn ? "Verify Certificate" : "Vérifier le certificat"}</span>
                                <HiOutlineExternalLink className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Info Box */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-3xl gap-8"
                >
                    <div className="max-w-2xl">
                        <h4 className="text-xl font-bold text-white mb-2">
                            {isEn ? "Continuous Learning" : "Apprentissage Continu"}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {isEn 
                                ? "I am committed to staying updated with the latest technologies and industry standards. My certification path focuses on Cloud Architecture and DevOps."
                                : "Je m'engage à rester à jour avec les dernières technologies et les standards de l'industrie. Mon parcours de certification se concentre sur l'Architecture Cloud et le DevOps ."}
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-500">
                            <HiOutlineBadgeCheck className="text-3xl" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
