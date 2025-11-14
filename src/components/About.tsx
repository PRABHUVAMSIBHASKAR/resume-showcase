import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="mb-12">
          <Card className="p-8 shadow-md hover-lift">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Career Objective
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              To contribute my technical and creative skills to a growing organization while 
              continuously learning and developing new abilities to achieve both personal and 
              professional growth.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-md hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                <p className="text-foreground/70">
                  Strong foundation in C, Python, and Java with hands-on experience in 
                  modern development tools and frameworks.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-md hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Lightbulb className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-foreground/70">
                  Passionate about creating efficient solutions through app development, 
                  web development, and algorithmic thinking.
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
