import { Button } from "@/components/ui/button";
import { Rocket, Leaf, Database } from "lucide-react";
import heroImage from "@/assets/hero-farm-space.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="VIRDIAN - Farming meets Space Exploration"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-glow"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-glow delay-100"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary rounded-full animate-glow delay-200"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Title */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-earth-green">VIRDIAN</span>
            <br />
            <span className="text-foreground">Learn Farming,</span>
            <br />
            <span className="text-space-blue">Explore Space Data</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Play. Learn. Grow smarter with NASA data.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Manage resources, tackle climate challenges, and discover how real space data 
            shapes sustainable agriculture. Experience farming through the lens of NASA's 
            Earth observation technology.
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Sustainable Farming</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-secondary/20">
              <Database className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Real NASA Data</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Climate Science</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 glow-green">
              <Rocket className="mr-2" />
              Play Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-secondary hover:bg-secondary/10"
              onClick={() => {
                const element = document.querySelector("#how-to-play");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Team Credit */}
          <p className="text-sm text-muted-foreground pt-8">
            Developed by <span className="text-primary font-semibold">Terra_Bytes</span>
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
