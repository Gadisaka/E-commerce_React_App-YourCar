import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { CardGrid } from "./pages/CardGrid";
import Cars from "./pages/Cars";
import { Footer } from "./pages/Footer";
import Main from "./pages/Main";
import Services from "./pages/Services";
import { Testimonial } from "./pages/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Menu />
      <Cart />
      <About />
      <Services />
      <Cars />
      <CardGrid />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
