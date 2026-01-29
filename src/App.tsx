import { useEffect } from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative bg-gray-900">
      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <SectionWrapper>
        <Highlights />
      </SectionWrapper>

      <SectionWrapper>
        <Services />
      </SectionWrapper>

      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper>
        <Capabilities />
      </SectionWrapper>

      <SectionWrapper>
        <Process />
      </SectionWrapper>

      <SectionWrapper>
        <CTA />
      </SectionWrapper>

      <Footer />
    </div>
  );
}

export default App;
