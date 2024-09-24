import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        theme="dark"
        transition:Slide
      />
    </main>
  );
};
export default App;
