import { Card } from "@/components/ui/card";
import { Mouse, Keyboard, Smartphone, Lightbulb } from "lucide-react";
import gameplayImage from "@/assets/gameplay-dashboard.jpg";

const HowToPlay = () => {
  const steps = [
    {
      number: "01",
      title: "Access NASA Data",
      description: "View real-time satellite information about your farm's location including temperature, humidity, and precipitation forecasts.",
    },
    {
      number: "02",
      title: "Plan Your Crops",
      description: "Choose which crops to plant based on climate data and seasonal patterns. Each crop has different requirements and yields.",
    },
    {
      number: "03",
      title: "Manage Resources",
      description: "Allocate water, nutrients, and labor efficiently. Monitor livestock health and adapt to changing conditions.",
    },
    {
      number: "04",
      title: "Complete Missions",
      description: "Tackle environmental challenges like droughts, floods, and pests. Earn rewards and unlock new farming technologies.",
    },
  ];

  const controls = [
    { icon: Mouse, label: "Mouse", desc: "Click and drag to navigate" },
    { icon: Keyboard, label: "Keyboard", desc: "Arrow keys to move" },
    { icon: Smartphone, label: "Touch", desc: "Swipe and tap controls" },
  ];

  return (
    <section id="how-to-play" className="py-20 md:py-32 relative bg-gradient-space">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-space-blue"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How to Play
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the art of data-driven farming in four simple steps
            </p>
          </div>

          {/* Gameplay Image */}
          <div className="mb-16 rounded-2xl overflow-hidden border-2 border-secondary/30 glow-blue">
            <img
              src={gameplayImage}
              alt="VIRDIAN Gameplay Dashboard"
              className="w-full h-auto"
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-8 bg-card/30 backdrop-blur-sm border-border hover:border-secondary/40 transition-all duration-300 hover:glow-blue"
              >
                <div className="flex gap-6">
                  <div className="text-6xl font-bold text-secondary/20" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {step.number}
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Controls */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              Controls
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {controls.map((control, index) => {
                const Icon = control.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{control.label}</h4>
                    <p className="text-sm text-muted-foreground">{control.desc}</p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Tips Card */}
          <Card className="mt-8 p-8 bg-gradient-earth border-primary/40 glow-green">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-primary-foreground flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-primary-foreground">Pro Tips</h4>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>• Check weather forecasts daily to plan irrigation schedules</li>
                  <li>• Diversify crops to minimize risk from climate events</li>
                  <li>• Complete daily missions for bonus resources and achievements</li>
                  <li>• Use historical data patterns to predict future conditions</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
