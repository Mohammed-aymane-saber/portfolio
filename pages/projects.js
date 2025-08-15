import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Background3D from '../components/3d-background';

export default function ProjectsPage() {
  return (
    <>
      <Background3D />
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
