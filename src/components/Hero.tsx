import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";

const Hero = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Name and title with animation */}
          <div className="space-y-4 animate-fade-up">
            <Badge variant="outline" className="bg-card/50 backdrop-blur-sm border-primary/30 text-primary font-medium px-4 py-2">
              Software Developer
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-glow">
              Pratyush Kaushal
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Full Stack Developer & ML Engineer
            </p>
          </div>

          {/* Description */}
          <div className="animate-fade-up space-y-6" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating seamless web experiences and intelligent solutions. 
              Currently pursuing B.Tech in Computer Science at VIT, with hands-on experience 
              in modern web technologies and machine learning.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                kaushalpratyush04@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <span>📱</span>
                +91 9060947477
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-spotify hover:bg-gradient-spotify/90 shadow-spotify hover-lift"
              onClick={() => handleScrollToSection('projects')}
            >
              View My Work
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:bg-primary/10 hover-lift"
              onClick={() => handleScrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a 
              href="https://github.com/smartinternz02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover-lift"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a 
              href="https://linkedin.com/in/pratyush-kaushal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover-lift"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover-lift"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;