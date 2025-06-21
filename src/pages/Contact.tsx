
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let's discuss your next project or opportunity. I'm always open to new challenges and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-green-400" />
                    My Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Gurugram, Haryana, India 122009</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Mail className="h-6 w-6 text-green-400" />
                    Email Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">vishalchahar17@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Phone className="h-6 w-6 text-green-400" />
                    Call Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">+91 9991617552</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Github className="h-6 w-6 text-green-400" />
                    Social Profiles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/6adass" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/vishal-chahar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-500 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
