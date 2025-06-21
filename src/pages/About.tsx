import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Phone, Mail, Globe, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Learn More About Me</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about transforming ideas into impactful products that users love
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Card className="bg-gray-900 border-gray-700 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍💼</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-green-400">Product Manager</h2>
                      <p className="text-gray-400">Transforming Vision into Reality</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-300">
                    <p className="leading-relaxed">
                      Experience in Product Management, Strategy & Growth within SaaS, Logistics and FinTech sectors, 
                      backed by a strong technical background as a software engineer. I bring expertise in areas such as 
                      Product Strategy, Product Roadmap, Product-led growth, KPI Measurement, UI/UX, A/B Testing, Python, 
                      SQL and Team Management.
                    </p>
                    <p className="leading-relaxed">
                      My journey spans from crafting holistic business solutions that serve thousands of customers to 
                      developing AI-powered systems with impressive accuracy rates. I believe in data-driven decision 
                      making and creating products that not only meet business objectives but also provide exceptional 
                      user experiences.
                    </p>
                    <p className="leading-relaxed">
                      When I'm not working on product strategies, you'll find me exploring the latest technologies, 
                      contributing to open-source projects, or mentoring aspiring product managers. I'm always eager 
                      to tackle new challenges and drive innovation in the products I work on.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Personal Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-green-400" />
                      <div>
                        <span className="text-gray-400">Birthday:</span>
                        <span className="text-white ml-2">15 Nov 1999</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-green-400" />
                      <div>
                        <span className="text-gray-400">Age:</span>
                        <span className="text-white ml-2">25</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-green-400" />
                      <div>
                        <span className="text-gray-400">Website:</span>
                        <span className="text-white ml-2">6adass.github.io/VishalPortfolio/</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-green-400" />
                      <div>
                        <span className="text-gray-400">Phone:</span>
                        <span className="text-white ml-2">+91 9991617552</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-green-400" />
                      <div>
                        <span className="text-gray-400">City:</span>
                        <span className="text-white ml-2">Charkhi Dadri, Haryana, India</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-green-400" />
                      <div>
                        <span className="text-gray-400">Email:</span>
                        <span className="text-white ml-2">vishalchahar17@gmail.com</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-green-400" />
                      <div>
                        <span className="text-gray-400">Freelance:</span>
                        <span className="text-green-400 ml-2">Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Education</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-green-400 pl-4">
                      <h4 className="text-green-400 font-semibold">B.Tech Electrical Engineering</h4>
                      <p className="text-gray-400">2018 - 2022</p>
                      <p className="text-white">National Institute of Technology, Andhra</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
