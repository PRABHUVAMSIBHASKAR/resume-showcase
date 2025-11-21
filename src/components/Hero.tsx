import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient glow-text">
                Chintalapudi Prabhu Vamsi Bhaskar
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                Software Developer
              </p>
            </div>

            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Passionate Computer Science student focused on app development, web development, 
              and problem-solving. Building innovative solutions with Flutter, Python, and Java.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a href="tel:9550457066" className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>9550457066</span>
              </a>
              <a href="mailto:bhaskar.chintalapudi@sasi.ac.in" className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>bhaskar.chintalapudi@sasi.ac.in</span>
              </a>
              <span className="inline-flex items-center gap-2 text-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>Tadepalligudem, AP</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button 
                size="lg" 
                className="card-3d bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="card-3d border-primary/50 hover:border-primary"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative card-3d rounded-full p-2 bg-gradient-to-br from-primary/20 to-secondary/20">
                <img 
                  src={profileImage} 
                  alt="Prabhu Vamsi Bhaskar" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
