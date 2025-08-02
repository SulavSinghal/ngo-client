import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ActivitiesPage from './pages/Activity'; // import here
import ActivityDetails from './components/ActivityDetails';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/activities/:id" element={<ActivityDetails />} /> 
            {/* Other routes */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
