import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CebuToday from './sections/CebuToday';
import ServicesGrid from './sections/ServicesGrid';
import Transportation from './sections/Transportation';
import Weather from './sections/Weather';
import Emergency from './sections/Emergency';
import BeforeYouGo from './sections/BeforeYouGo';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CebuToday />
        <ServicesGrid />
        <Transportation />
        <Weather />
        <Emergency />
        <BeforeYouGo />
      </main>
      <Footer />
    </>
  );
}
