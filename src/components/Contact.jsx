import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("loading");
        setResult(isEn ? "Sending..." : "Envoi en cours...");

        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResult(isEn ? "Message sent successfully!" : "Message envoyé avec succès !");
                event.target.reset();
            } else {
                console.error("Error", data);
                setStatus("error");
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error", error);
            setStatus("error");
            setResult(isEn ? "Something went wrong. Please try again." : "Une erreur est survenue. Veuillez réessayer.");
        }
    };

    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const contacts = [
        {
            icon: <HiOutlineEnvelope className="text-2xl" />,
            label: isEn ? "Email" : "E-mail",
            value: "mohammedaymanesaber@gmail.com",
            action: () => handleCopy("mohammedaymanesaber@gmail.com"),
            isCopy: true
        },
        {
            icon: <HiOutlinePhone className="text-2xl" />,
            label: isEn ? "Phone" : "Téléphone",
            value: "+212 632-249348",
            href: "tel:+212632249348"
        },
        {
            icon: <HiOutlineMapPin className="text-2xl" />,
            label: isEn ? "Location" : "Localisation",
            value: isEn ? "Fes, Morocco" : "Fes, Maroc",
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
                                    contact.isCopy ? (
                                        <motion.div
                                            key={index}
                                            onClick={contact.action}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-primary-500/50 transition-all group cursor-pointer"
                                        >
                                            <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 group-hover:bg-primary-500/20 transition-colors">
                                                {contact.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{contact.label}</p>
                                                <p className="text-white font-medium">
                                                    {copied ? (isEn ? "Copied!" : "Copié !") : contact.value}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ) : (
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
                                    )
                                ))}

                                <motion.a
                                    href="/Cv-Mohammed-Aymane-Saber.pdf"
                                    download
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-center justify-center gap-3 p-4 bg-primary-500/5 border border-primary-500/20 rounded-2xl text-primary-400 font-bold hover:bg-primary-500/10 transition-all group"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>{t('common.downloadCV')}</span>
                                </motion.a>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-3xl">
                            <form onSubmit={onSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">
                                        {isEn ? 'NAME' : 'NOM'}
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder={isEn ? 'Your name' : 'Votre nom'}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">EMAIL</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder={isEn ? 'Your email' : 'Votre email'}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">MESSAGE</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder={isEn ? 'Let\'s Work Together' : 'Travailons ensemble'}
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={status === "loading"}
                                    className={`btn-primary w-full justify-center ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
                                >
                                    <span>{status === "loading" ? (isEn ? "Sending..." : "Envoi...") : (isEn ? 'Send Message' : 'Envoyer le message')}</span>
                                </motion.button>

                                {result && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`text-center text-sm font-mono mt-4 ${status === "success" ? "text-green-400" : status === "error" ? "text-red-400" : "text-primary-400"
                                            }`}
                                    >
                                        {result}
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
