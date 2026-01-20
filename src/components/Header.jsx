import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const navItems = [
        { key: 'about', label: t('nav.about') },
        { key: 'experience', label: t('nav.experience') },
        { key: 'skills', label: t('nav.skills') },
        { key: 'projects', label: t('nav.projects') },
        { key: 'how-i-build', label: t('nav.howIBuild') },
        { key: 'contact', label: t('nav.contact') }
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-4 md:px-8 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 text-xl font-bold font-mono"
                    >
                        <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain rounded-md" />
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        {navItems.map((item, index) => (
                            <li key={item.key}>
                                <motion.button
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{ y: -2, color: '#0ea5e9' }}
                                    onClick={() => scrollToSection(item.key)}
                                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium relative text-sm"
                                >
                                    {item.label}
                                </motion.button>
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-6"
                    >
                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 text-gray-300 hover:text-primary-400 font-bold font-mono text-sm transition-colors border border-gray-800 px-3 py-1.5 rounded-lg bg-gray-900/50"
                            >
                                <span className="uppercase">{i18n.language.slice(0, 2)}</span>
                                <svg className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-24 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl z-50 overflow-y-hidden"
                                    >
                                        <button
                                            onClick={() => toggleLanguage('en')}
                                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-800 transition-colors ${i18n.language.startsWith('en') ? 'text-primary-400' : 'text-gray-400'}`}
                                        >
                                            English
                                        </button>
                                        <button
                                            onClick={() => toggleLanguage('fr')}
                                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-800 transition-colors ${i18n.language.startsWith('fr') ? 'text-primary-400' : 'text-gray-400'}`}
                                        >
                                            Français
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <a
                            href="https://github.com/Mohammed-aymane-saber"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="https://linkedin.com/in/mohammed-aymane-saber-630615318"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
