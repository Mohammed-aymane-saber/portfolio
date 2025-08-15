import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import { useRef } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const ref = useRef(null);

  // Mouse move 3D tilt effect
  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const maxTilt = 10;
    rotateY.set(((x - midX) / midX) * maxTilt);
    rotateX.set(-((y - midY) / midY) * maxTilt);
  }
  function handleMouseLeave() {
    rotateY.set(0);
    rotateX.set(0);
  }

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>

      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">MyPortfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { href: '/', label: 'About' },
              { href: '/projects', label: 'Projects' },
              { href: '/resume', label: 'Resume' },
              { href: '/contact', label: 'Contact' },
            ].map((item, idx) => (
              <motion.li
                className="nav-item"
                key={item.href}
                whileHover={{ scale: 1.13, rotateZ: 2, color: '#11998e' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                style={{ display: 'inline-block', marginLeft: idx === 0 ? 0 : 14 }}
              >
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.button
            className="btn btn-outline-secondary ms-3"
            style={{minWidth: 40}}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            whileHover={{ scale: 1.18, rotateZ: -8, backgroundColor: '#11998e', color: '#fff', borderColor: '#11998e' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

