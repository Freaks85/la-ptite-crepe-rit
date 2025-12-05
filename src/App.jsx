import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './sections';
import { HomePage, MenuPage, ReservationPage, GiftCardPage } from './pages';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carte" element={<MenuPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/cheque-cadeau" element={<GiftCardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
