import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import BootstrapJS from '../components/BootstrapJS';
import { ThemeProvider } from '../components/ThemeContext';
import PageTransition from '../components/PageTransition';


export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <BootstrapJS />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </ThemeProvider>
  );
}
