import Head from 'next/head';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSections from '../components/AboutSections';
import Background3D from '../components/3d-background';


export default function Home() {
  return (
    <>
      <Background3D />
      <Head>
        
        <title style={{color: '#11998e'}}>My Portfolio</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css" />
      </Head>
      <Navbar />
      <main>
        <AboutSections />
      </main>
      <Footer />
    </>
  );
}
