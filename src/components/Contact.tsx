import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, Languages } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <Card className="p-8 shadow-lg">
          <p className="text-center text-lg text-foreground/80 mb-8">
            I'm actively seeking opportunities to apply my academic knowledge in a practical 
            and collaborative environment. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a 
              href="mailto:prem.baki@sasi.ac.in"
              className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">prem.baki@sasi.ac.in</p>
              </div>
            </a>

            <a 
              href="tel:9550457066"
              className="flex items-center gap-3 p-4 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors group"
            >
              <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">9550457066</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
              <div className="p-2 bg-background rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Tadepalligudem, Andhra Pradesh</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
              <div className="p-2 bg-background rounded-lg">
                <Calendar className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date of Birth</p>
                <p className="font-medium">November 7, 2006</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted md:col-span-2">
              <div className="p-2 bg-background rounded-lg">
                <Languages className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Languages</p>
                <p className="font-medium">English, Telugu</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
              asChild
            >
              <a href="mailto:prem.baki@sasi.ac.in">Send Email</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2"
              asChild
            >
              <a href="tel:9550457066">Call Now</a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
