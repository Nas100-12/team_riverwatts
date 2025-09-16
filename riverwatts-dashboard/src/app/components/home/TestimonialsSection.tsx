'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Energy Director, GreenTech Solutions",
    content: "RiverWatts has transformed our energy infrastructure. The real-time analytics and predictive maintenance have reduced our downtime by 75%.",
    rating: 5,
    company: "GreenTech Solutions",
    image: "/testimonials/person1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Manager, AquaPower Inc.",
    content: "The dashboard provides incredible insights into our hydrokinetic systems. We've increased energy output by 30% since implementation.",
    rating: 5,
    company: "AquaPower Inc.",
    image: "/testimonials/person2.jpg"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Sustainability Officer, EcoMunicipality",
    content: "As a city, we've reduced our carbon footprint by 40% thanks to RiverWatts' innovative technology. The community impact has been tremendous.",
    rating: 5,
    company: "EcoMunicipality",
    image: "/testimonials/person3.jpg"
  }
];

export default function TestimonialsSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-700/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge variant="info" className="mb-4">
            TESTIMONIALS
          </Badge>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Trusted by industry leaders worldwide
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full hover:border-blue-300/50 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-700/5 to-blue-600/5 h-2 w-full"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-700 to-blue-600 border-2 border-blue-200/50 rounded-full w-16 h-16 flex items-center justify-center mr-4 overflow-hidden shadow-md">
                      <img 
                        src={imageErrors[testimonial.id] ? "/globe.svg" : testimonial.image} 
                        alt={`Portrait of ${testimonial.name}, ${testimonial.role}`} 
                        className="w-16 h-16 object-cover"
                        onError={() => handleImageError(testimonial.id)}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-blue-800">{testimonial.name}</CardTitle>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex" role="group" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-slate-600 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}