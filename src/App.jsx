import { NavBar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Technology } from "./components/technology";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 1300,
    offset: 0,
  });

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
