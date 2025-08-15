import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Resume from '../components/Resume';

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main>
        <Resume />
      </main>
      <Footer />
    </>
  );
}
