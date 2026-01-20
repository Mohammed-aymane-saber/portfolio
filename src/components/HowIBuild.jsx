import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HowIBuild = () => {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');

    const process = [
        {
            phase: '01',
            title: isEn ? 'Planning & Architecture' : 'Planification & Architecture',
            items: isEn ? [
                'Define clear requirements and user stories',
                'Design database schema and relationships',
                'Create UML diagrams (Use Case, Class, Sequence)',
                'Plan API endpoints and data flow',
                'Choose appropriate design patterns'
            ] : [
                'Définir des exigences et user stories claires',
                'Concevoir le schéma de la base de données',
                'Créer des diagrammes UML (Cas d\'utilisation, Classe, Séquence)',
                'Planifier les services API et le flux de données',
                'Choisir les design patterns appropriés'
            ]
        },
        {
            phase: '02',
            title: isEn ? 'Development' : 'Développement',
            items: isEn ? [
                'Backend first: Build REST API with proper validation',
                'Follow MVC/layered architecture',
                'Implement authentication and authorization',
                'Write clean, maintainable code following SOLID principles',
                'Frontend: Integrate API with React, manage state efficiently'
            ] : [
                'Backend d\'abord : API REST avec validation stricte',
                'Respect de l\'architecture MVC / en couches',
                'Implémenter l\'authentification et l\'autorisation',
                'Code propre et maintenable (principes SOLID)',
                'Frontend : Intégration API avec React et gestion d\'état'
            ]
        },
        {
            phase: '03',
            title: isEn ? 'Version Control & Collaboration' : 'Contrôle de Version & Collaboration',
            items: isEn ? [
                'Git workflow: feature branches, meaningful commits',
                'Code reviews and pull requests',
                'Follow conventional commit messages',
                'Maintain clean git history'
            ] : [
                'Workflow Git : branches de fonctionnalités, commits explicites',
                'Revues de code et pull requests',
                'Respect des messages de commit conventionnels',
                'Maintien d\'un historique Git propre'
            ]
        },
        {
            phase: '04',
            title: isEn ? 'Deployment & DevOps' : 'Déploiement & DevOps',
            items: isEn ? [
                'Containerize with Docker (multi-stage builds)',
                'Set up CI/CD pipelines (GitHub Actions)',
                'Deploy to cloud (AWS/other platforms)',
                'Configure environment variables properly',
                'Monitor application health and logs'
            ] : [
                'Conteneurisation Docker (builds multi-étapes)',
                'Mise en place de pipelines CI/CD (GitHub Actions)',
                'Déploiement Cloud (AWS / autres plateformes)',
                'Configuration stricte des variables d\'environnement',
                'Monitoring de la santé de l\'application et des logs'
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
                    {t('howIBuild.title')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-400 max-w-3xl mb-12"
                >
                    {t('howIBuild.subtitle')}
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
                            {t('howIBuild.principles')}
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="space-y-1">
                                <p className="text-primary-400 font-semibold text-sm">{t('howIBuild.cleanCode')}</p>
                                <p className="text-gray-400 text-sm">{t('howIBuild.cleanCodeDesc')}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-primary-400 font-semibold text-sm">{t('howIBuild.scalability')}</p>
                                <p className="text-gray-400 text-sm">{t('howIBuild.scalabilityDesc')}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-primary-400 font-semibold text-sm">{t('howIBuild.security')}</p>
                                <p className="text-gray-400 text-sm">{t('howIBuild.securityDesc')}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tech stack preference & Quote */}
                <div className="grid md:grid-cols-12 gap-8 mt-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="md:col-span-12 lg:col-span-7 p-8 bg-gray-950 border border-gray-800 rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <svg className="w-24 h-24 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V4C14.017 3.44772 14.4647 3 15.017 3H21.017C21.5693 3 22.017 3.44772 22.017 4V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V4C3.017 3.44772 3.46472 3 4.017 3H10.017C10.5693 3 11.017 3.44772 11.017 4V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z" />
                            </svg>
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-center">
                            <p className="text-2xl md:text-3xl text-white font-medium italic mb-4 leading-tight">
                                "If it hurts, do it more often."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-8 bg-primary-500" />
                                <span className="text-primary-400 font-mono text-sm font-bold tracking-widest uppercase">Jez Humble</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="md:col-span-12 lg:col-span-5 p-6 bg-gray-950/50 border border-gray-800/50 rounded-3xl flex items-center"
                    >
                        <p className="text-gray-400 text-sm font-mono leading-relaxed">
                            <span className="text-primary-500">~$</span> {isEn ? 'Stack choices follow requirements.' : 'Choix tech adaptés aux besoins.'}<br />
                            <span className="text-primary-500">~$</span> {isEn ? 'Proven tech & clean history.' : 'Propre historique & tech éprouvées.'}<br />
                            <span className="text-primary-500">~$</span> {isEn ? 'Scale via automation.' : 'Scalabilité via l\'automatisation.'}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowIBuild;
