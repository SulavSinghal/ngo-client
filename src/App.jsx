import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages/Home';
import ActivitiesPage from './pages/Activity'; // import here
import ActivityDetails from './components/ActivityDetails';
import Volunteer from './pages/Volunteer';
import Team from './pages/Team';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/activities/:id" element={<ActivityDetails />} /> 
            <Route path="/team" element={<Team />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
