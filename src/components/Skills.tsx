
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: "📊",
      skills: [
        { name: "Product Strategy", level: 95 },
        { name: "Roadmap Planning", level: 92 },
        { name: "Stakeholder Management", level: 88 },
        { name: "A/B Testing", level: 85 },
        { name: "Market Research", level: 90 }
      ]
    },
    {
      title: "Technical Skills",
      icon: "💻",
      skills: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Data Analysis", level: 88 },
        { name: "RPA/Automation", level: 90 },
        { name: "Cloud Technologies", level: 75 }
      ]
    },
    {
      title: "Design & UX",
      icon: "🎨",
      skills: [
        { name: "User Research", level: 85 },
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 78 },
        { name: "User Journey Mapping", level: 82 },
        { name: "Design Systems", level: 75 }
      ]
    },
    {
      title: "Leadership",
      icon: "👥",
      skills: [
        { name: "Team Management", level: 90 },
        { name: "Cross-functional Collaboration", level: 95 },
        { name: "Communication", level: 92 },
        { name: "Strategic Thinking", level: 88 },
        { name: "Problem Solving", level: 93 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for modern product management and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-green-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-700"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
