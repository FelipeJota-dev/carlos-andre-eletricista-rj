import { HelmetProvider } from 'react-helmet-async';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Videos } from './components/Videos';
import { Testimonials } from './components/Testimonials';
import { LocalSEO } from './components/LocalSEO';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingComponents } from './components/FloatingComponents';

export default function App() {
  return (
    <HelmetProvider>
      <SEOHead />
      <div className="min-h-screen bg-white font-sans scroll-smooth">
        <Header />
        
        <main>
          <Hero />
          <About />
          <Services />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12" />
          <Gallery />
          <Videos />
          <Testimonials />
          <LocalSEO />
          <FAQ />
        </main>
        
        <Footer />
        <FloatingComponents />
      </div>
    </HelmetProvider>
  );
}
