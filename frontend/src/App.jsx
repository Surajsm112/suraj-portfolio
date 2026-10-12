import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { navLinks } from './data/profile';

const sectionIds = navLinks.map((l) => l.id);

function Layout() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(sectionIds);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main id="main" tabIndex={-1}>
        <Home />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    // reducedMotion="user" disables transform animations when the OS requests reduced motion.
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
