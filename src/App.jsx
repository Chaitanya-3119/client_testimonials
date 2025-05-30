import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import HomePage from './pages/HomePage'
import IoTPage from './pages/IoTPage'
import AnalyticsPage from './pages/AnalyticsPage'
import ContactPage from './pages/ContactPage'
import WebDevPage from './pages/WebDevPage'
import TestingPage from './pages/TestingPage'
import EmbeddedPage from './pages/EmbeddedPage'
import TeamPage from './pages/TeamPage'
import TestimonialsPage from './pages/TestimonialsPage'

// Wrapper to access route-aware features like useLocation
function AppContent() {
  const location = useLocation()


  const showChatBot = location.pathname !== '/contact'

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iot" element={<IoTPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/webdev" element={<WebDevPage />} />
        <Route path="/testing" element={<TestingPage />} />
        <Route path="/embedded" element={<EmbeddedPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
      <Footer />
      {showChatBot && <ChatBot />}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
