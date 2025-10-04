import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Droplets, Sun, Wind, Thermometer, Award } from "lucide-react";

const Missions = () => {
  const missions = [
    {
      title: "Drought Survival",
      description: "Navigate through a severe drought using limited water resources. Prioritize crops and implement water-saving techniques.",
      icon: Sun,
      difficulty: "Hard",
      parameters: ["Temperature: 35-40°C", "Humidity: 20-30%", "Precipitation: <10mm"],
      badge: "🏆 Master Conservationist",
    },
    {
      title: "Flood Management",
      description: "Protect your farm from excessive rainfall and flooding. Build drainage systems and choose flood-resistant crops.",
      icon: Droplets,
      difficulty: "Medium",
      parameters: ["Precipitation: 200-300mm", "Humidity: 80-90%", "Soil Moisture: High"],
      badge: "🌊 Flood Controller",
    },
    {
      title: "Heat Wave Challenge",
      description: "Manage crop health during extreme temperature conditions. Use shade systems and adjust irrigation schedules.",
      icon: Thermometer,
      difficulty: "Hard",
      parameters: ["Temperature: 38-45°C", "Cloud Cover: <10%", "Evaporation: High"],
      badge: "🔥 Heat Master",
    },
    {
      title: "Storm Preparedness",
      description: "Prepare your farm for an incoming storm. Secure equipment, protect livestock, and minimize crop damage.",
      icon: Wind,
      difficulty: "Medium",
      parameters: ["Wind Speed: 60-80km/h", "Precipitation: 100-150mm", "Cloud Cover: 90-100%"],
      badge: "⛈️ Storm Survivor",
    },
    {
      title: "Perfect Season",
      description: "Optimize your farm during ideal weather conditions. Maximize yield and achieve the highest efficiency rating.",
      icon: Cloud,
      difficulty: "Easy",
      parameters: ["Temperature: 20-25°C", "Humidity: 50-60%", "Precipitation: 50-75mm"],
      badge: "🌟 Optimal Farmer",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-primary/20 text-primary border-primary/40";
      case "Medium":
        return "bg-secondary/20 text-secondary border-secondary/40";
      case "Hard":
        return "bg-destructive/20 text-destructive border-destructive/40";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/40";
    }
  };

  return (
    <section id="missions" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-earth-green"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Mission Scenarios
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Test your skills across diverse climate challenges and earn exclusive badges
            </p>
          </div>

          {/* Missions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:glow-green group hover:-translate-y-2"
                >
                  <div className="space-y-4">
                    {/* Icon & Difficulty */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <Badge className={getDifficultyColor(mission.difficulty)}>
                        {mission.difficulty}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground">{mission.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mission.description}
                    </p>

                    {/* Parameters */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Mission Parameters
                      </p>
                      {mission.parameters.map((param, i) => (
                        <p key={i} className="text-xs text-muted-foreground">
                          • {param}
                        </p>
                      ))}
                    </div>

                    {/* Badge Reward */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium text-secondary">
                          {mission.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Achievement System Info */}
          <Card className="p-8 md:p-12 bg-gradient-space border-secondary/20 glow-blue">
            <div className="text-center space-y-6">
              <div className="flex justify-center gap-4 text-4xl mb-4">
                🏆 🌟 ⭐ 🎖️ 🥇
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Achievement System
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete missions to earn exclusive badges and unlock new farming technologies. 
                Track your progress, compete with friends, and become the ultimate data-driven farmer!
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <p className="text-sm text-muted-foreground">Total Missions</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">∞</div>
                  <p className="text-sm text-muted-foreground">Replayability</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Missions;
