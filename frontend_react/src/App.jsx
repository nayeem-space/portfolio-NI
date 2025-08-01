import {
  About,
  Education,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Education />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
