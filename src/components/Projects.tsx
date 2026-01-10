import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Database,
      title: "Student Result Management System",
      description: "Developed an application to manage student records and calculate results using Python and SQLite.",
      technologies: ["Python", "SQLite", "Database Management"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce App by Using Flutter",
      description: "Created a shopping app featuring product listings, cart management, and Firebase authentication.",
      technologies: ["Flutter", "Firebase", "Mobile Development"],
      color: "bg-secondary/10 text-secondary",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="p-6 shadow-md hover-lift animate-slide-up" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className={`w-14 h-14 rounded-lg ${project.color} flex items-center justify-center mb-4`}>
                <project.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIdx) => (
                  <Badge key={techIdx} variant="outline" className="border-primary/30">
                    {tech}
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

export default Projects;
