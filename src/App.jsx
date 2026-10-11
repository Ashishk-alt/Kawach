import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Awareness from "./pages/Awareness";
import Challenges from "./pages/Challenges";
import Assessment from "./pages/Assessment";
import Chatbot from "./pages/Chatbot";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;