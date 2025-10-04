import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToPlay from "@/components/HowToPlay";
import Missions from "@/components/Missions";
import Resources from "@/components/Resources";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <HowToPlay />
      <Missions />
      <Resources />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
