import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, ExternalLink, Users, TrendingUp } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      verification: "cd642b547e7e4e079e329fb743537b09",
      description: "Demonstrated expertise in designing and deploying scalable, highly available systems on AWS platform.",
      icon: <Award className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1m7LkNVjVodUfVpmEYJIoWmF7_NRnVVEW/view?usp=sharing",
      color: "from-orange-500/20 to-red-500/20",
      skills: ["AWS", "Cloud Architecture", "Scalability", "System Design"]
    },
    {
      title: "Research Paper: Voice Interaction and Other Technologies",
      issuer: "Royal Book Publishing",
      year: "2022",
      description: "Authored chapter on 'Voice Assistants – Revolution of Interaction' focusing on emerging voice interaction technologies.",
      icon: <BookOpen className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1KR8qqvznIQdx2glbG6Ae9CwpYHqMO3PO/view?usp=sharing",
      color: "from-blue-500/20 to-purple-500/20",
      skills: ["Research", "Voice Technology", "AI", "Technical Writing"]
    }
  ];

  const leadership = [
    {
      title: "Finance and Outreach Head",
      organization: "Innovator's Quest",
      description: "Led financial strategies and spearheaded outreach initiatives, optimizing organizational growth and community engagement.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500/20 to-emerald-500/20",
      skills: ["Leadership", "Finance", "Strategy", "Community Engagement"]
    },
    {
      title: "Human Resources and Social Initiatives",
      organization: "F.E.P.S.I (NGO)",
      description: "Contributed to NGO F.E.P.S.I, specializing in Human Resources and supporting social initiatives within SOCH department.",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500/20 to-pink-500/20",
      skills: ["Human Resources", "Social Impact", "NGO Management", "Team Building"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Certifications & Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications, research contributions, and leadership roles that demonstrate 
            continuous learning and commitment to excellence.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Certifications & Research</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="animate-fade-up hover-lift group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-spotify transition-all duration-500 h-full overflow-hidden relative">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors flex-shrink-0">
                        {cert.icon}
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            {cert.issuer} {cert.year && `• ${cert.year}`}
                          </p>
                          {cert.verification && (
                            <p className="text-xs text-muted-foreground font-mono">
                              Verification: {cert.verification}
                            </p>
                          )}
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="secondary" 
                              className="bg-secondary/50 hover:bg-primary/20 transition-colors text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/30 hover:bg-primary/10 text-xs"
                          onClick={() => window.open(cert.link, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Leadership & Social Impact</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((role, index) => (
              <div 
                key={index}
                className="animate-fade-up hover-lift group"
                style={{ animationDelay: `${(index + 2) * 0.2}s` }}
              >
                <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-spotify transition-all duration-500 h-full overflow-hidden relative">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors flex-shrink-0">
                        {role.icon}
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary transition-colors">
                            {role.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            {role.organization}
                          </p>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {role.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill) => (
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
        </div>

        {/* More Certifications Link */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "1s" }}>
          <div className="p-6 rounded-xl bg-gradient-card border border-primary/20">
            <h4 className="text-lg font-semibold mb-3">More Certifications Available</h4>
            <p className="text-muted-foreground mb-4">
              Explore additional certifications and achievements in my certification portfolio.
            </p>
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => window.open('https://drive.google.com/drive/folders/1aN45igMdJnAKQQbFAPxHM6bSb-mwoBZZ?usp=sharing', '_blank')}
            >
              <Award className="w-4 h-4 mr-2" />
              View All Certifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;