import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e, email) => {
        e.preventDefault();
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const contacts = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            value: 'mohammedaymanesaber@gmail.com',
            href: 'mailto:mohammedaymanesaber@gmail.com',
            isCopyable: true
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            label: 'LinkedIn',
            value: 'linkedin.com/in/mohammed-aymane-saber-630615318',
            href: 'https://linkedin.com/in/mohammed-aymane-saber-630615318'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            label: 'GitHub',
            value: 'github.com/Mohammed-aymane-saber',
            href: 'https://github.com/Mohammed-aymane-saber'
        }
    ];

    return (
        <section id="contact" className="section bg-gray-950">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Contact
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-xl text-gray-300 mb-12 text-center">
                        Interested in working together? Let's connect!
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {contacts.map((contact, index) => (
                            <motion.div
                                key={contact.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <motion.a
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, borderColor: '#0ea5e9', backgroundColor: 'rgba(17, 24, 39, 0.5)' }}
                                    onClick={contact.isCopyable ? (e) => handleCopyEmail(e, contact.value) : undefined}
                                    className="card flex flex-col items-center text-center group h-full cursor-pointer"
                                >
                                    <div className="w-14 h-14 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                                        <div className="text-primary-500">
                                            {contact.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                                    <p className="text-gray-400 text-sm break-all">{contact.value}</p>

                                    {contact.isCopyable && (
                                        <div className="mt-4 text-xs font-mono text-primary-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                            </svg>
                                            Click to copy
                                        </div>
                                    )}
                                </motion.a>

                                <AnimatePresence>
                                    {contact.isCopyable && copied && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded shadow-lg z-20"
                                        >
                                            Copied!
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 p-6 bg-gray-900 border border-gray-800 rounded-lg text-center"
                    >
                        <p className="text-gray-400">
                            Currently looking for <span className="text-primary-400 font-semibold">internship</span> or <span className="text-primary-400 font-semibold">junior developer</span> opportunities.
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500 font-mono">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Available for opportunities
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
