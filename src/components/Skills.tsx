import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "bg-primary/10 text-primary",
      skills: ["C", "Python", "Java"],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      color: "bg-secondary/10 text-secondary",
      skills: ["Git", "VS Code", "Android Studio", "Firebase", "SQLite"],
    },
    {
      icon: Brain,
      title: "Areas of Interest",
      color: "bg-accent/10 text-accent",
      skills: ["App Development", "Web Development", "Problem Solving", "Flutter"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="p-6 shadow-md hover-lift animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge key={skillIdx} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
