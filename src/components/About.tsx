import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a strong foundation in computer science and hands-on experience 
            in building scalable web applications and intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Education */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-gradient-card border-primary/20 hover-lift shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-2 border-primary/30 pl-4">
                        <h4 className="font-medium text-primary">Vellore Institute of Technology</h4>
                        <p className="text-sm text-muted-foreground">B.Tech in Computer Science Engineering</p>
                        <p className="text-sm text-muted-foreground">CGPA: 8.74</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            2021 - Present
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            Vellore, Tamil Nadu
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-l-2 border-secondary/30 pl-4">
                        <h4 className="font-medium">D.A.V. Public School Hehal</h4>
                        <p className="text-sm text-muted-foreground">Senior Secondary (XII) - 89.2%, Secondary (X) - 90%</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            2020, 2018
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            Ranchi, Jharkhand
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "JavaScript", "TypeScript", "HTML", "CSS"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind CSS", "Material-UI", "Bootstrap"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Backend & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "Django", "Flask", "MongoDB", "MySQL", "AWS", "Docker", "Git"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">ML & Data Science</h4>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Streamlit"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;