
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar, MapPin, Briefcase } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Check My Resume</h1>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Professional Experience */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Professional Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="text-green-400 font-semibold text-lg">ASSOCIATE PRODUCT MANAGER</h3>
                    <p className="text-gray-400 flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      Sep 2022 - Dec 2023
                    </p>
                    <p className="text-white flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Cogoport Pvt Ltd, Gurugram, Haryana
                    </p>
                    <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
                      <li>Crafted and implemented a holistic Business Finance solution, integrating end-to-end purchase and sales invoicing capabilities catering to more than 20K customers and suppliers. Conceptualized and established more than 10 finance products including Invoice management, Audit function, Fraud management, Revenue Leakage, PayRuns module, settlements, customer outstanding balances, IRN generation, dunning protocols and payment gateway integration and formulated a GTM Strategy.</li>
                      <li>Worked closely with stakeholders to gather business requirements, define product roadmaps, create implementation business case.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="text-green-400 font-semibold text-lg">ASSOCIATE SOFTWARE ENGINEER</h3>
                    <p className="text-gray-400 flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      May 2022 - Sep 2022
                    </p>
                    <p className="text-white flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Cogoport Pvt Ltd, Gurugram, Haryana
                    </p>
                    <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
                      <li>Built RPA interpreter for inbound supplier emails with logistic details to streamline logistics and automate document uploads. Achieved 60% manual work reduction and 93% data accuracy improvement.</li>
                      <li>Integrated with Outlook mails to read and classify 100% incoming mails</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              
              {/* Skills Summary */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Core Competencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Product Management</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Product Strategy</li>
                        <li>• Roadmap Planning</li>
                        <li>• Stakeholder Management</li>
                        <li>• A/B Testing</li>
                        <li>• KPI Measurement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Technical Skills</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Python Programming</li>
                        <li>• SQL & Data Analysis</li>
                        <li>• RPA & Automation</li>
                        <li>• Cloud Technologies</li>
                        <li>• UI/UX Design</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Summary */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-400 pl-4">
                      <h3 className="text-green-400 font-semibold text-lg">VISHAL CHAHAR</h3>
                      <p className="text-gray-300 mt-2 italic">
                        Experience in Product Management, Strategy & Growth within SaaS, Logistics and FinTech sectors, 
                        backed by a strong technical background as a software engineer. I bring expertise in areas such as 
                        Product Strategy, Product Roadmap, Product-led growth, KPI Measurement, UI/UX, A/B Testing, Python, 
                        SQL and Team Management.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="text-green-400 font-semibold text-lg">B.TECH ELECTRICAL ENGINEERING</h3>
                    <p className="text-gray-400 flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      2018 - 2022
                    </p>
                    <p className="text-white mt-2">National Institute of Technology, Andhra</p>
                  </div>
                </CardContent>
              </Card>

              {/* Projects */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="text-green-400 font-semibold">CHAT BOT</h3>
                    <p className="text-gray-400 flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      Oct 2021
                    </p>
                    <p className="text-gray-300 mt-2">
                      Achieved an impressive 90% conversational accuracy in chatbot development, employing Cornell movie 
                      dialogue data and glove6B50 embeddings. Leveraged TensorFlow's Keras for training, enabling human-like responses.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="text-green-400 font-semibold">HOME AUTOMATION DEVICE</h3>
                    <p className="text-gray-400 flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      Oct 2020
                    </p>
                    <p className="text-gray-300 mt-2">
                      The project is a 100% voice-controlled switching system to turn on/off home appliances. 
                      Used the BOLT WiFi module and their cloud service and IFTTT to link it with my Google Assistant.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="text-green-400 font-semibold">PATH-FOLLOWING CAR PROJECT</h3>
                    <p className="text-gray-400 flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      Oct 2019
                    </p>
                    <p className="text-gray-300 mt-2">
                      Build a car that tracks a coloured path on a surface using Arduino UNO, Bluetooth module, 
                      IR sensor, and basic components.
                    </p>
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

export default Resume;
