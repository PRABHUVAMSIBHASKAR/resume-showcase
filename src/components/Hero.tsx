import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient glow-text">
            Baki Prem Pavan Reddy
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Software Developer
          </p>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate Computer Science student focused on app development, web development, 
          and problem-solving. Building innovative solutions with Flutter, Python, and Java.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        <div className="flex flex-wrap justify-center gap-4">
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
    </section>
  );
};

export default Hero;
