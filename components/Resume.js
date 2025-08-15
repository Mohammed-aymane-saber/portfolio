import { motion, useScroll, useTransform } from 'framer-motion';
import ParallaxTilt from 'react-parallax-tilt';
import { useRef } from 'react';
import Background3D from './3d-background';

export default function Resume() {
  return (
    <>
      <Background3D />
    
    <section id="resume" className="container py-5">
      <h2 className="fw-bold mb-5 text-center text-gradient" style={{background: 'linear-gradient(90deg,#fff,#fff,#fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: '#11998e'}}>Resume</h2>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <ParallaxTilt glareEnable={true} glareMaxOpacity={0.25} scale={1.02} tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} style={{background: 'linear-gradient(120deg,#11998e11,#f6d36511)'}}>
            {(() => {
  function ResumeCardWithScrollAnim() {
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
        <div className="mx-auto" style={{maxWidth:'700px'}}>
          <div className="fs-4 fw-light text-center mb-4">
            {/* Personal summary or headline here */}
            Passionate Computer Science Engineering Student with a focus on DevOps and modern web technologies.
          </div>
          <div className="row g-4 mb-4">
  <motion.div className="col-md-6" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1, duration:0.6, type:'spring'}}> 
    <div className="resume-section-card p-3 rounded-4 shadow-sm h-100 bg-transparent border border-2 border-success-subtle">
      <div className="d-flex align-items-center mb-2">
        <i className="bi bi-mortarboard-fill fs-3 me-2 text-gradient" style={{color:'#11998e'}}></i>
        <span className="fw-semibold fs-5">Education</span>
      </div>
      <div className="ps-2">
        <div className="fw-bold">Computer Science Engineering</div>
        <div className="text-muted">ENSA Tétouan, Morocco</div>
        <span className="badge rounded-pill bg-success-subtle text-success">2021–2026</span>
      </div>
    </div>
  </motion.div>
  <motion.div className="col-md-6" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2, duration:0.6, type:'spring'}}> 
    <div className="resume-section-card p-3 rounded-4 shadow-sm h-100 bg-transparent border border-2 border-warning-subtle">
      <div className="d-flex align-items-center mb-2">
        <i className="bi bi-briefcase-fill fs-3 me-2 text-gradient" style={{color:'#f6d365'}}></i>
        <span className="fw-semibold fs-5">Experience</span>
      </div>
      <div className="ps-2">
        <div className="fw-bold">DevOps Intern</div>
        <div className="text-muted">[Company], Summer 2024</div>
      </div>
    </div>
  </motion.div>
  <motion.div className="col-md-6" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.3, duration:0.6, type:'spring'}}> 
    <div className="resume-section-card p-3 rounded-4 shadow-sm h-100 bg-transparent border border-2 border-info-subtle">
      <div className="d-flex align-items-center mb-2">
        <i className="bi bi-lightning-charge-fill fs-3 me-2 text-gradient" style={{color:'#38ef7d'}}></i>
        <span className="fw-semibold fs-5">Skills</span>
      </div>
      <div className="ps-2">
        <span className="badge bg-info-subtle text-info me-2 mb-2">DevOps</span>
        <span className="badge bg-info-subtle text-info me-2 mb-2">Docker</span>
        <span className="badge bg-info-subtle text-info me-2 mb-2">CI/CD</span>
        <span className="badge bg-info-subtle text-info me-2 mb-2">React</span>
        <span className="badge bg-info-subtle text-info me-2 mb-2">Next.js</span>
        <span className="badge bg-info-subtle text-info me-2 mb-2">Bootstrap</span>
        <span className="badge bg-info-subtle text-info me-2 mb-2">Node.js</span>
      </div>
    </div>
  </motion.div>
  <motion.div className="col-md-6" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.4, duration:0.6, type:'spring'}}> 
    <div className="resume-section-card p-3 rounded-4 shadow-sm h-100 bg-transparent border border-2 border-primary-subtle">
      <div className="d-flex align-items-center mb-2">
        <i className="bi bi-patch-check-fill fs-3 me-2 text-gradient" style={{color:'#11998e'}}></i>
        <span className="fw-semibold fs-5">Certifications</span>
      </div>
      <div className="ps-2">
        <span className="badge bg-primary-subtle text-primary">[Certification Name]</span>
      </div>
    </div>
  </motion.div>
</div>
          <div className="text-center mt-4">
            <a href="/resume.pdf" className="btn btn-outline-primary px-4 py-2 color-black" download>Download Resume (PDF)</a>
          </div>
        </div>
      </motion.div>
    );
  }
  return <ResumeCardWithScrollAnim />;
})()}
          </ParallaxTilt>
        </div>
      </div>
    </section>
    </>
  );
}
