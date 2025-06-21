import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Finance Solution",
      description: "Crafted and implemented a holistic Business Finance solution, integrating end-to-end purchase and sales invoicing capabilities catering to more than 20K customers and suppliers.",
      impact: "300% customer growth, 10+ finance products launched",
      technologies: ["Python", "SQL", "Microservices", "Cloud"],
      type: "Product Management",
      color: "bg-blue-500",
      metrics: {
        users: "20K+",
        growth: "300%",
        products: "10+"
      }
    },
    {
      title: "Intelligent Chatbot",
      description: "Achieved an impressive 90% conversational accuracy in chatbot development, employing Cornell movie dialogue data and glove6B50 embeddings with TensorFlow's Keras.",
      impact: "90% accuracy, Human-like responses",
      technologies: ["Python", "TensorFlow", "NLP", "Keras"],
      type: "AI/ML Project",
      color: "bg-green-500",
      metrics: {
        accuracy: "90%",
        model: "Cornell Data",
        framework: "TensorFlow"
      }
    },
    {
      title: "RPA Automation Suite",
      description: "Built RPA interpreter for inbound supplier emails with logistic details to streamline logistics and automate document uploads, achieving 60% manual work reduction.",
      impact: "60% work reduction, 93% data accuracy",
      technologies: ["RPA", "Python", "Automation", "Email Processing"],
      type: "Automation",
      color: "bg-purple-500",
      metrics: {
        reduction: "60%",
        accuracy: "93%",
        automation: "100%"
      }
    },
    {
      title: "IoT Home Automation",
      description: "Developed a 100% voice-controlled switching system to turn on/off home appliances using Arduino UNO, Bluetooth module, and Google Assistant integration.",
      impact: "100% voice control, IFTTT integration",
      technologies: ["Arduino", "IoT", "Bluetooth", "Google Assistant"],
      type: "IoT Project",
      color: "bg-orange-500",
      metrics: {
        control: "Voice",
        devices: "Multiple",
        platform: "Google"
      }
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing impactful solutions that drive business growth and user satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-green-500 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge className={`${project.color} text-white mb-3`}>
                      {project.type}
                    </Badge>
                    <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                  </div>
                  <TrendingUp className="h-6 w-6 text-green-400 group-hover:scale-110 transition-transform" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 font-semibold">Impact</span>
                  </div>
                  <p className="text-white font-medium">{project.impact}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="bg-gray-800 p-3 rounded-lg">
                      <div className="text-green-400 font-bold text-lg">{value}</div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white">
                    <Github className="mr-2 h-4 w-4" />
                    Source
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
