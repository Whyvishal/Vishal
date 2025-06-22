
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Suhas from "@/assets/img/Suhas.png";
import Retesh from "@/assets/img/Retesh.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Retesh Singh",
      role: "Senior Product Manager",
      company: "Cogoport Pvt Ltd",
      content: "Vishal worked as a Product Analyst in my team at Cogoport for approx. an year. His technical acumen as well as the ability to take independent charge for few product initiatives impressed me a lot. His work played a key role in delivering Cogoport's shipment orchestrator platform successfully.I have seen Vishal perform well both as an individual contributor and as a part of a broader team. His work ethics are good and I found his temperament to be positive.I highly recommend him for product roles across levels. He'll be a great hire in your team.",
      rating: 5,
      image: Retesh
    },
    {
      name: "Suhas Latelwar",
      role: "Senior Product Manager",
      company: "Cogoport Pvt Ltd",
      content: "I had the privilege of working closely with Vishal, where both of us were a part of the product team at cogoport. He displayed remarkable strategic foresight and exceptional execution skills. His ability to deeply understand user needs and translate them into actionable product roadmaps was truly impressive. His collaborative approach and focus on outcomes consistently boosted our team to deliver impactful solutions. A true asset to any organization, I highly recommend Vishal for his outstanding product skills and ability to drive results. Glad I got to work with him.",
      rating: 5,
      image: Suhas
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      company: "LogiFlow",
      content: "Vishal's expertise in logistics and automation saved us countless hours. The RPA solutions he implemented reduced our manual work by 60% while improving accuracy.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What People Say</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Testimonials from colleagues and clients who have experienced the impact of my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-green-500 transition-all duration-300">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-green-500 mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-green-400">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
