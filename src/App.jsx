import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import HotelManagement from './pages/HotelManagement';
import LeaveManagement from './pages/LeaveManagement';
import VisitorManagement from './pages/VisitorManagement';
import GymManagement from './pages/GymManagement';
import HRManagement from './pages/HRManagement';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* We will add other routes here as we migrate them */}
          <Route path="hotel-management" element={<HotelManagement />} />
          <Route path="hr-management" element={<HRManagement />} />
          <Route path="leave-management" element={<LeaveManagement />} />
          <Route path="visitor-management" element={<VisitorManagement />} />
          <Route path="gym-management" element={<GymManagement />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<div className="p-20 text-center text-red-500">Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
