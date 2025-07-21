import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Database, Brain, Code2, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Jot-It-Down",
      description: "A comprehensive note-taking application with real-time collaboration features and advanced organization capabilities.",
      longDescription: [
        "Developed using JavaScript, HTML, CSS, Socket.io, and Node.js for seamless real-time collaboration",
        "Implemented Undo-Redo functionality using stack-based arrays and real-time synchronization with Socket.io",
        "Enabled seamless multi-user experience with consistent data synchronization and enhanced UI components"
      ],
      tech: ["JavaScript", "HTML", "CSS", "Socket.io", "Node.js"],
      icon: <Code2 className="w-6 h-6" />,
      github: "https://github.com/smartinternz02/SI-GuidedProject-594299-1697642990",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Stock Price Prediction",
      description: "Advanced machine learning model for stock price forecasting using LSTM neural networks with high accuracy.",
      longDescription: [
        "Constructed predictive model for stock price forecasting achieving 99.72% accuracy with LSTM neural networks",
        "Integrated advanced algorithms including Linear Regression, SVM, Random Forest, and multiclass LSTM layers",
        "Developed feature engineering techniques and data visualization for better insights into prediction accuracy and trends"
      ],
      tech: ["Python", "LSTM", "Scikit-learn", "Pandas", "TensorFlow"],
      icon: <TrendingUp className="w-6 h-6" />,
      github: "https://github.com/smartinternz02/SI-GuidedProject-594299-1697642990",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Early Detection of Disease using Nail Images",
      description: "AI-powered disease detection system using computer vision and deep learning for medical diagnosis through nail analysis.",
      longDescription: [
        "Built disease detection system using TensorFlow and VGG model to analyze nail images with 96.03% training accuracy",
        "Integrated Streamlit for intuitive frontend enabling seamless image uploads and achieving 98.91% testing accuracy",
        "Utilized advanced image preprocessing techniques and data augmentation to improve model robustness and generalization"
      ],
      tech: ["TensorFlow", "Streamlit", "VGG", "Computer Vision", "Python"],
      icon: <Brain className="w-6 h-6" />,
      github: "https://github.com/smartinternz02/SI-GuidedProject-594299-1697642990",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills and creative problem-solving through 
            real-world applications in web development and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-fade-up hover-lift group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-spotify transition-all duration-500 h-full overflow-hidden relative">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  {/* Detailed description */}
                  <div className="space-y-3">
                    {project.longDescription.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-secondary/50 hover:bg-primary/20 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      className="bg-gradient-spotify hover:bg-gradient-spotify/90 text-xs w-full"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-3 h-3 mr-2" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional projects section */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <div className="p-8 rounded-2xl bg-gradient-card border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and learning cutting-edge technologies. 
              Check back soon for more exciting developments!
            </p>
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => window.open('https://github.com/PratyushKaushal08', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;