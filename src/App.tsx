import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "@/page";
import Navbar from './components/Navbar';
import Repo from "@/page2";


function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main page with Navbar */}
        <Route path="/" element={<MainPage />} />

        {/* Route for the new page without Navbar */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

const MainPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className='lg:h-90 lg:pr-[calc(100%-80%)]'>
        <Navbar />
      </div>
      <div className='bg-[#FAFAFA] lg:border-l lg:pl-10'>
        <div className='p-0 bg-white border-0 lg:p-10 lg:border lg:rounded-lg'>
          <Repo />
        </div>
      </div>
    </div>
  );
};

export default App;
