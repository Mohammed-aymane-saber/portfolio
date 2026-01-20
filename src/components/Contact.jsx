import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');

    const contacts = [
        {
            icon: <HiOutlineEnvelope className="text-2xl" />,
            label: isEn ? "Email" : "E-mail",
            value: "mohammedaymanesaber@gmail.com",
            href: "mailto:mohammedaymanesaber@gmail.com"
        },
        {
            icon: <HiOutlinePhone className="text-2xl" />,
            label: isEn ? "Phone" : "Téléphone",
            value: "+212 600-000000",
            href: "tel:+212600000000"
        },
        {
            icon: <HiOutlineMapPin className="text-2xl" />,
            label: isEn ? "Location" : "Localisation",
            value: isEn ? "Tétouan, Morocco" : "Tétouan, Maroc",
            href: "#"
        }
    ];

    return (
        <section id="contact" className="section bg-gray-950">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="section-title mb-4">{t('contact.title')}</h2>
                        <p className="text-gray-400">{t('contact.subtitle')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {isEn
                                    ? "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                                    : "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités pour faire partie de vos visions."}
                            </p>

                            <div className="space-y-4">
                                {contacts.map((contact, index) => (
                                    <motion.a
                                        key={index}
                                        href={contact.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-primary-500/50 transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 group-hover:bg-primary-500/20 transition-colors">
                                            {contact.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{contact.label}</p>
                                            <p className="text-white font-medium">{contact.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-3xl">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">
                                        {isEn ? 'NAME' : 'NOM'}
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder={isEn ? 'John Doe' : 'Votre nom'}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">EMAIL</label>
                                    <input
                                        type="email"
                                        className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">MESSAGE</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder={isEn ? 'How can I help you?' : 'Comment puis-je vous aider ?'}
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary w-full justify-center"
                                >
                                    <span>{isEn ? 'Send Message' : 'Envoyer le message'}</span>
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
 