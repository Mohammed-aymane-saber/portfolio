import { motion, useScroll, useTransform } from 'framer-motion';
import ParallaxTilt from 'react-parallax-tilt';
import { useRef } from 'react';

export default function AboutSections() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);

  return (
    <div ref={ref}>
      {/* Hero/Header Section */}
      <header className="py-5 bg-light">
        <div className="container pb-5">
          <div className="row gx-5 align-items-center justify-content-center">
           

            <div className="col-12 text-center">
              <ParallaxTilt glareEnable={true} glareMaxOpacity={0.2} scale={1.04} tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={1500} className="h-100">
                <img src="/profile.jpg" alt="Profile" className="profile-img mb-4 rounded-circle shadow" style={{width:300, height:300, objectFit:'cover', border: '5px solid #fff'}} />
              </ParallaxTilt>
              <h1 className="display-4 fw-bolder mb-2">
                <span className="text-gradient d-inline" style={{background: 'linear-gradient(90deg,#fff,#fff,#fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: '#11998e'}}>Mohammed Aymane Saber</span>
              </h1>
              <div className="fs-4 fw-light mb-2"
                style={{color: typeof window !== 'undefined' && document.body.getAttribute('data-theme') === 'dark' ? '#fff' : '#6c757d'}}>
                Computer Science Engineering Student
                </div>
                <div className="fs-4 fw-light mb-2"
                style={{color: typeof window !== 'undefined' && document.body.getAttribute('data-theme') === 'dark' ? '#fff' : '#6c757d'}}>
                Tétouan, Morocco
                </div>
              <div className="d-flex justify-content-center fs-2 gap-4 mb-3">
                <a title="LinkedIn" href="https://www.linkedin.com/in/mohammed-aymane-saber-630615318/" target="_blank" rel="noopener"><i className="bi bi-linkedin" style={{color:'black'}}></i></a>
                <a title="GitHub" href="https://github.com/Mohammed-AymaneSaber" target="_blank" rel="noopener"><i className="bi bi-github" style={{color:'black'}}></i></a>
                {/* Add more social icons as needed */}
                <a title="Email" href="aymanesaber13@gmail.com" target="_blank" rel="noopener"><i className="bi bi-envelope" style={{color:'black'}}></i></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      
      {/* About Card Section */}
      <section className="container px-5 mt-5 ">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <ParallaxTilt glareEnable={true} glareMaxOpacity={0.25} scale={1.02} tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} style={{background: 'linear-gradient(120deg,#11998e11,#f6d36511)'}}>
              <motion.div
  style={{ rotateX, scale }}
  className={`about-card shadow-sm rounded-4 p-4 mb-5 ${typeof window !== 'undefined' && document.body.getAttribute('data-theme') === 'dark' ? 'bg-dark text-light' : 'bg-light'}`}
  initial={{ opacity: 0, y: 48 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.2, ease: 'easeInOut' }}
>
                <h2 className="display-6 fw-bolder text-center mb-5">
                  <span className="text-gradient d-inline" style={{background: 'linear-gradient(90deg,#fff,#fff,#fff)', WebkitBackgroundClip: 'text', color:'#11998e'}}>About Me</span>
                </h2>
                <div className="mx-auto" style={{maxWidth:'700px'}}>
                  <div className="fs-4 fw-light text-center mb-4">
                    My name is Mohammed Aymane Saber, a passionate Computer Science Engineering student at ENSA Tétouan, Morocco.
                  </div>
                  <p className="mb-3 text-center">
                    I am deeply interested in <strong style={{color:'#11998e'}}>DevOps</strong>, always seeking to bridge the gap between development and operations through automation and scalable solutions. My academic journey has equipped me with a solid foundation in software engineering, system administration, and modern web technologies.
                  </p>
                  <p className="mb-3 text-center">
                    Throughout my studies and personal projects, I have developed several web applications and tools, including:
                  </p>
                  <ul className="mb-3">
                    <li><strong>Personal Portfolio Website</strong> – Designed and built this very site using HTML, CSS, JavaScript, and Bootstrap to showcase my skills and projects.</li>
                    <li><strong>DevOps Automation Scripts</strong> – Created scripts for CI/CD pipelines, Docker containerization.</li>
                    <li><strong>Academic Projects</strong> – Participated in team-based software engineering projects, focusing on clean code, agile methods, and collaborative development.</li>
                  </ul>
                  <p className="mb-3 text-center">
                    I am always eager to learn new technologies and contribute to impactful projects. My goal is to become a skilled DevOps engineer, leveraging cloud platforms and automation to deliver robust, scalable solutions.
                  </p>
                  <div className="text-center mt-4">
                    <a className="btn btn-outline-primary px-4 py-2 color-black" href="/projects">See My Projects</a>
                    <a className="btn btn-outline-secondary px-4 py-2 ms-2 color-black" href="/contact">Contact Me</a>
                  </div>
                </div>
              </motion.div>
            </ParallaxTilt>
          </div>
        </div>
      </section>
    </div>
  );
}
