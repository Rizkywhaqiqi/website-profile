import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";  // <- Gunakan Home dari file terpisah
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-900">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</main>

      <Footer />
    </div>
  );
}

export default App;
