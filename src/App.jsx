import { NavBar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Technology } from "./components/technology";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

function App() {
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
