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
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-float animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-bounce-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-bounce-slow" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Name and title with enhanced animation */}
          <div className="space-y-4 animate-slide-in-left">
            <Badge variant="outline" className="bg-card/50 backdrop-blur-sm border-primary/30 text-primary font-medium px-4 py-2 animate-pulse-glow">
              Full Stack Developer & ML Engineer
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-glow hover:scale-105 transition-transform duration-300">
              Pratyush Kaushal
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground font-light animate-fade-up">
              Software Developer
            </p>
          </div>

          {/* Description with enhanced animation */}
          <div className="animate-slide-in-right space-y-6" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed hover:text-foreground transition-colors duration-300">
              Passionate about creating seamless web experiences and intelligent solutions. 
              Currently pursuing B.Tech in Computer Science at VIT, with hands-on experience 
              in modern web technologies and machine learning.
            </p>

            {/* Contact info with hover effects */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300 cursor-default">
                <Mail className="w-4 h-4 animate-bounce-slow" />
                kaushalpratyush08@gmail.com
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300 cursor-default">
                <span className="animate-bounce-slow" style={{ animationDelay: "0.5s" }}>📱</span>
                +91 9006917477
              </div>
            </div>
          </div>

          {/* Action buttons with enhanced animations */}
          <div className="flex flex-wrap justify-center gap-4 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-spotify hover:bg-gradient-spotify/90 shadow-spotify hover-lift hover:scale-110 transition-all duration-300 animate-pulse-glow"
              onClick={() => handleScrollToSection('projects')}
            >
              View My Work
              <ExternalLink className="ml-2 w-4 h-4 animate-bounce-slow" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:bg-primary/10 hover-lift hover:scale-105 transition-all duration-300"
              onClick={() => handleScrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social links with staggered animations */}
          <div className="flex justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a 
              href="https://github.com/PratyushKaushal08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover-lift hover:rotate-12 hover:scale-110 animate-bounce-slow"
              style={{ animationDelay: "1s" }}
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/pratyush-kaushal-4724a224b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover-lift hover:rotate-12 hover:scale-110 animate-bounce-slow"
              style={{ animationDelay: "1.2s" }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1etIzbguOohfl6kcWMGvcVL6tM37xsojt/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover-lift hover:rotate-12 hover:scale-110 animate-bounce-slow"
              style={{ animationDelay: "1.4s" }}
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