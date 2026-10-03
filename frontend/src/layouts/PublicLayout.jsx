import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppFloatingButton from '../components/common/WhatsAppFloatingButton';

export default function PublicLayout() {
  const location = useLocation();

  // Scroll to top automatically on route changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-parlour-cream text-parlour-charcoal font-sans selection:bg-parlour-rose/25 selection:text-parlour-burgundy">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
