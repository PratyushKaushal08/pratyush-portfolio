import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Vegam Solutions",
      role: "Web Development Intern",
      period: "Jun 25 - Present",
      type: "Internship",
      description: [
        "Developed and deployed company website using GenAI-powered tools like Lovable, Supabase, and Superhog",
        "Built responsive service-integrated CRM for lead tracking and ensured smooth hosting on AWS infrastructure",
        "Currently maintaining and enhancing the live product at auditing.com and contributing to the Vegam main website"
      ],
      skills: ["React", "Supabase", "AWS", "CRM", "GenAI"]
    },
    {
      company: "Soch Analytics Pvt Ltd (SALD)",
      role: "Software Development Intern",
      period: "Aug 23 - Sep 23",
      type: "Internship",
      description: [
        "Optimized digital reserve allocation system to improve coordination and reduce approval delays across departments",
        "Designed responsive web application to streamline workflows and enhance resource tracking with improved UI",
        "Enhanced data organization and accessibility features, resulting in improved transparency and user experience"
      ],
      skills: ["Web Development", "UI/UX", "Data Management", "System Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional journey in web development and software engineering, 
            building real-world solutions and contributing to innovative projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="animate-fade-up hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-spotify transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Company icon */}
                    <div className="flex-shrink-0">
                      <div className="p-4 rounded-xl bg-primary/20 hover:bg-primary/30 transition-colors">
                        <Building2 className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-medium text-foreground">
                            {exp.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-col md:items-end gap-2">
                          <Badge variant="outline" className="border-primary/30 text-primary w-fit">
                            {exp.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-3">
                        {exp.description.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-secondary/50 hover:bg-primary/20 transition-colors text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground mb-4">
            Interested in working together?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's connect
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;