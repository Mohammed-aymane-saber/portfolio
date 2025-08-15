import { motion, useScroll, useTransform } from 'framer-motion';
import ParallaxTilt from 'react-parallax-tilt';
import { useRef } from 'react';

export default function Contact() {
  function ContactCardWithScrollAnim() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [60, 0]);
    return (
      <motion.div
        ref={ref}
        style={{ opacity, y: translateY }}
        className={`about-card shadow-sm rounded-4 p-4 mb-5 ${typeof window !== 'undefined' && document.body.getAttribute('data-theme') === 'dark' ? 'bg-dark text-light' : 'bg-light'}`}
        whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(17,153,142,0.18)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <form>
  <div className="row g-3">
    <motion.div className="col-12" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1, duration:0.5, type:'spring'}}>
      <div className="input-group input-group-lg">
        <span className="input-group-text bg-transparent border-success-subtle"><i className="bi bi-person-fill text-success"></i></span>
        <input type="text" className="form-control border-success-subtle" id="name" placeholder="Your Name" style={{boxShadow:'none'}} />
      </div>
    </motion.div>
    <motion.div className="col-12" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2, duration:0.5, type:'spring'}}>
      <div className="input-group input-group-lg">
        <span className="input-group-text bg-transparent border-info-subtle"><i className="bi bi-envelope-fill text-info"></i></span>
        <input type="email" className="form-control border-info-subtle" id="email" placeholder="your@email.com" style={{boxShadow:'none'}} />
      </div>
    </motion.div>
    <motion.div className="col-12" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.3, duration:0.5, type:'spring'}}>
      <div className="input-group">
        <span className="input-group-text bg-transparent border-warning-subtle align-items-start"><i className="bi bi-chat-dots-fill text-warning"></i></span>
        <textarea className="form-control border-warning-subtle" id="message" rows="4" placeholder="Your message" style={{boxShadow:'none'}}></textarea>
      </div>
    </motion.div>
    <motion.div className="col-12 text-center mt-2" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.4, duration:0.5, type:'spring'}}>
      <motion.button
        type="submit"
        className="btn btn-outline-primary px-4 py-2 color-black"
        whileHover={{ scale: 1.09, backgroundColor: '#11998e', color: '#fff', borderColor: '#11998e' }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      >
        <i className="bi bi-send-fill me-2"></i>Send
      </motion.button>
    </motion.div>
  </div>
</form>
      </motion.div>
    );
  }

  return (
    <section id="contact" className="container py-5">
      <h2 className="fw-bold mb-5 text-center text-gradient" style={{background: 'linear-gradient(90deg,#fff,#fff,#fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: '#11998e'}}>Contact</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          <ParallaxTilt glareEnable={true} glareMaxOpacity={0.25} scale={1.02} tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} style={{background: 'linear-gradient(120deg,#11998e11,#f6d36511)'}}>
            <ContactCardWithScrollAnim />
          </ParallaxTilt>
        </div>
      </div>
    </section>
  );
}
