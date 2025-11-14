import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Sasi Institute of Technology and Engineering",
      university: "JNTU Kakinada",
      year: "2023 – Present",
      grade: "7.6 CGPA",
      current: true,
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Aditya Junior College",
      university: "Board of Intermediate Education, AP",
      year: "2021 – 2023",
      grade: "85%",
    },
    {
      degree: "SSC",
      institution: "Narayana e-Techno School",
      university: "Board of Secondary Education, AP",
      year: "2020 – 2021",
      grade: "97%",
    },
  ];

  const certifications = [
    { name: "Python Basics", provider: "Coursera" },
    { name: "Flutter App Development", provider: "Udemy" },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Education & Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <Card key={idx} className={`p-6 shadow-md hover-lift ${edu.current ? 'border-primary/50' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <span className="text-lg font-medium text-primary">{edu.grade}</span>
                </div>
                <p className="text-foreground/80 font-medium mb-1">{edu.institution}</p>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span>{edu.university}</span>
                  <span>•</span>
                  <span>{edu.year}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-secondary" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="p-5 shadow-md hover-lift">
                <h4 className="text-lg font-semibold mb-1">{cert.name}</h4>
                <p className="text-muted-foreground">{cert.provider}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
