import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './utils/ScrollToTop';
import { Layout } from './components/Layout';

const App = () => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Reset footer visibility on route change
    setShowFooter(false);
    
    // Delay footer rendering
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 1000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <Layout>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <div className="container-width section">
              <Home />
            </div>
          </main>
          <AnimatePresence>
            {showFooter && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
          <ScrollToTop />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;