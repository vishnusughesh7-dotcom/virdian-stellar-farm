const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3
                className="text-2xl font-bold text-earth-green"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                VIRDIAN
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn Farming, Explore Space Data
              </p>
              <p className="text-xs text-muted-foreground">
                Developed by Terra_Bytes
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">
                Game
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#how-to-play" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    How to Play
                  </a>
                </li>
                <li>
                  <a href="#missions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Missions
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    NASA Data
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Terra_Bytes. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with NASA Open Data • Educational Purpose
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
