import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Background3D from '../components/3d-background';

export default function ContactPage() {
  return (
    <>
      <Background3D />
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
