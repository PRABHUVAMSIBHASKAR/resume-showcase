import { Home, User, Code, Briefcase, GraduationCap, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "education", icon: GraduationCap, label: "Education" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const current = sections.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 right-6 z-50 flex gap-2 p-2 card-3d rounded-2xl backdrop-blur-sm bg-card/80">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative p-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(270_80%_60%/0.5)]"
                : "hover:bg-muted"
            }`}
            aria-label={item.label}
          >
            <Icon className="w-5 h-5" />
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card border border-border rounded-lg text-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
