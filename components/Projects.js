import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParallaxTilt from 'react-parallax-tilt';

const projects = [
  {
    title: 'Project One',
    img: 'https://via.placeholder.com/600x300',
    desc: 'A brief description of your project. Highlight the main features and technologies used.',
    details: 'Here are more details about Project One. You can add links, screenshots, or more text.'
  },
  {
    title: 'Project Two',
    img: 'https://via.placeholder.com/600x300',
    desc: 'A brief description of your project. Highlight the main features and technologies used.',
    details: 'Here are more details about Project Two. You can add links, screenshots, or more text.'
  }
];

export default function Projects() {
  const [modal, setModal] = useState(null);
  return (
    <section id="projects" className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Projects</h2>
      <div className="row">
        {projects.map((project, i) => (
  <motion.div className="col-md-6 mb-4" key={i}
    initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
    transition={{delay:0.1 + i*0.12, duration:0.6, type:'spring'}}
  >
    <ParallaxTilt glareEnable={true} glareMaxOpacity={0.25} scale={1.02} tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} style={{background: 'linear-gradient(120deg,#11998e11,#f6d36511)'}}>
      <motion.div
        className={`about-card shadow-sm rounded-4 p-4 mb-5 ${typeof window !== 'undefined' && document.body.getAttribute('data-theme') === 'dark' ? 'bg-dark text-light' : 'bg-light'}`}
        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(17,153,142,0.18)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="d-flex align-items-center mb-2">
          <i className="bi bi-window-stack fs-3 me-2 text-gradient" style={{color:'#11998e'}}></i>
          <h5 className="card-title mb-0 fw-semibold">{project.title}</h5>
        </div>
        <img src={project.img} className="card-img-top rounded-3 mb-3" alt={project.title} />
        <div className="card-body p-0">
          <p className="card-text mb-2">{project.desc}</p>
          <div className="mb-3">
            <span className="badge bg-info-subtle text-info me-2 mb-1">React</span>
            <span className="badge bg-success-subtle text-success me-2 mb-1">Bootstrap</span>
            <span className="badge bg-warning-subtle text-warning me-2 mb-1">Node.js</span>
            {/* Add more tags as needed */}
          </div>
          <motion.button
            className="btn btn-outline-primary px-3 py-2"
            whileHover={{ scale: 1.09, backgroundColor: '#11998e', color: '#fff', borderColor: '#11998e' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            onClick={() => setModal(i)}
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    </ParallaxTilt>
  </motion.div>
))}
      </div>
      <AnimatePresence>
        {modal !== null && (
          <motion.div
            className="modal fade show"
            style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="modal-dialog modal-dialog-centered"
              initial={{ scale: 0.8, y: 60 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 60 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{projects[modal].title}</h5>
                  <button type="button" className="btn-close" onClick={() => setModal(null)}></button>
                </div>
                <div className="modal-body">
                  <img src={projects[modal].img} className="img-fluid mb-3" alt={projects[modal].title} />
                  <p>{projects[modal].details}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
