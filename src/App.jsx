import "./App.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <LandingPage />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
