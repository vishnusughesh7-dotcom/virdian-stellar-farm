import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, ExternalLink, BookOpen, GraduationCap } from "lucide-react";
import nasaImage from "@/assets/nasa-data-visual.jpg";

const Resources = () => {
  const datasets = [
    {
      name: "POWER Data Access Viewer",
      description: "NASA's Prediction Of Worldwide Energy Resources with meteorological and solar data.",
      category: "Weather & Climate",
      link: "#",
    },
    {
      name: "Earth Observations (NEO)",
      description: "Satellite imagery and data visualizations of Earth's climate and environmental systems.",
      category: "Satellite Imagery",
      link: "#",
    },
    {
      name: "MODIS",
      description: "Moderate Resolution Imaging Spectroradiometer data for vegetation and land use monitoring.",
      category: "Agriculture",
      link: "#",
    },
    {
      name: "SMAP",
      description: "Soil Moisture Active Passive mission data for tracking soil moisture levels globally.",
      category: "Soil Science",
      link: "#",
    },
    {
      name: "GPM",
      description: "Global Precipitation Measurement mission providing rainfall data worldwide.",
      category: "Precipitation",
      link: "#",
    },
    {
      name: "Landsat",
      description: "Long-term Earth observation data for tracking land use and agricultural changes.",
      category: "Land Monitoring",
      link: "#",
    },
  ];

  const educationalResources = [
    {
      title: "NASA Earth Science Education",
      description: "Curriculum resources and lesson plans for educators",
      icon: GraduationCap,
    },
    {
      title: "Climate Kids",
      description: "NASA's climate science website for students",
      icon: BookOpen,
    },
    {
      title: "Earth Observatory",
      description: "Stories and images about Earth's climate and environment",
      icon: Database,
    },
  ];

  return (
    <section id="resources" className="py-20 md:py-32 relative bg-gradient-space">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-space-blue"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              NASA Data & Resources
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the real datasets powering VIRDIAN's educational experience
            </p>
          </div>

          {/* Feature Image */}
          <div className="mb-16 rounded-2xl overflow-hidden border-2 border-primary/30 glow-green">
            <img
              src={nasaImage}
              alt="NASA Earth Observation Data"
              className="w-full h-auto"
            />
          </div>

          {/* Connection Explanation */}
          <Card className="p-8 md:p-12 mb-12 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="space-y-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                How Space Data Shapes Farming
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                VIRDIAN connects real NASA satellite observations to farming gameplay. Players use 
                actual Earth observation data to make informed decisions about crop management, 
                irrigation, and climate adaptation—just like modern precision agriculture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From soil moisture readings to precipitation forecasts, every data point in the game 
                reflects real-world measurements that scientists and farmers use to understand our planet.
              </p>
            </div>
          </Card>

          {/* Datasets Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              NASA Datasets in VIRDIAN
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {datasets.map((dataset, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-secondary/40 transition-all duration-300 hover:glow-blue group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground mb-2">
                          {dataset.name}
                        </h4>
                        <p className="text-xs text-secondary font-medium mb-3">
                          {dataset.category}
                        </p>
                      </div>
                      <Database className="w-6 h-6 text-secondary flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {dataset.description}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between group-hover:text-secondary"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Educational Resources */}
          <Card className="p-8 md:p-12 bg-gradient-earth border-primary/40 glow-green">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary-foreground">
              For Educators & Students
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {educationalResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary-foreground">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-primary-foreground/80">
                      {resource.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <ExternalLink className="mr-2 w-5 h-5" />
                Explore NASA Education
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;
