import About from "../components/About";
import Home from "../components/Home";
import Services from "../components/Services";

export default function LandingPage() {
  return (
    <div className="w-full ">
      <Home />
      <About />
      <Services />
    </div>
  );
}
