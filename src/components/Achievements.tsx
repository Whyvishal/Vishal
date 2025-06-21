
import { Award, TrendingUp, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: TrendingUp,
      number: "90%",
      label: "Conversational Accuracy",
      description: "Achieved in chatbot development using Cornell movie dialogue data"
    },
    {
      icon: Users,
      number: "20K+",
      label: "Users Impacted",
      description: "Finance solution serving customers and suppliers"
    },
    {
      icon: Target,
      number: "60%",
      label: "Work Reduction",
      description: "Manual work reduction through RPA automation"
    },
    {
      icon: Award,
      number: "93%",
      label: "Data Accuracy",
      description: "Improvement in data processing and classification"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Key Achievements</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Quantifiable impact delivered through strategic product management and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <achievement.icon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-green-400 mb-2">{achievement.label}</div>
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
