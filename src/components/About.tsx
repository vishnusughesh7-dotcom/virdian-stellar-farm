import { Card } from "@/components/ui/card";
import { Target, BookOpen, TrendingUp, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission",
      description: "Spreading awareness about NASA datasets and sustainable agriculture through engaging gameplay.",
    },
    {
      icon: BookOpen,
      title: "Learn",
      description: "Understand climate patterns, crop management, and data-driven farming decisions.",
    },
    {
      icon: TrendingUp,
      title: "Grow",
      description: "Develop problem-solving skills while managing resources in realistic scenarios.",
    },
    {
      icon: Globe,
      title: "Explore",
      description: "Discover how space data connects to Earth's agricultural systems and climate.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-earth-green"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              About VIRDIAN
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              An educational farming simulation that bridges space science and sustainable agriculture
            </p>
          </div>

          {/* Main Description */}
          <Card className="p-8 md:p-12 mb-12 bg-card/50 backdrop-blur-sm border-primary/20 glow-green">
            <div className="space-y-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Game Synopsis
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In VIRDIAN, you step into the role of a modern farmer equipped with NASA's cutting-edge 
                Earth observation data. Manage your farm's resources, adapt to changing climate conditions, 
                and make data-driven decisions to ensure sustainable crop production.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Navigate challenges like droughts, unexpected rainfall, and temperature fluctuations 
                using real satellite data. Learn how space technology helps us understand and protect 
                our planet's agricultural future.
              </p>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:glow-green group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Learning Outcomes */}
          <Card className="mt-12 p-8 md:p-12 bg-gradient-space border-secondary/20 glow-blue">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              What You'll Learn
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2 text-center">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="text-lg font-semibold text-secondary">Climate Understanding</h4>
                <p className="text-sm text-muted-foreground">
                  How weather patterns affect agriculture
                </p>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="text-lg font-semibold text-secondary">Data Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Interpreting NASA satellite information
                </p>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-4xl mb-3">♻️</div>
                <h4 className="text-lg font-semibold text-secondary">Sustainability</h4>
                <p className="text-sm text-muted-foreground">
                  Resource management and conservation
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
