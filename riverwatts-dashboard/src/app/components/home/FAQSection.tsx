'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does hydrokinetic power generation work?",
    answer: "Hydrokinetic power generation harnesses the kinetic energy of flowing water to generate electricity. Our proprietary turbines are designed to capture energy from rivers, streams, and tidal flows without the need for dams or major infrastructure changes."
  },
  {
    question: "What maintenance is required for the systems?",
    answer: "Our systems require minimal maintenance with quarterly inspections recommended. The predictive maintenance feature in our dashboard alerts you to any potential issues before they become problems, reducing unexpected downtime."
  },
  {
    question: "Can the systems be integrated with existing power grids?",
    answer: "Yes, our systems are designed for seamless integration with existing power infrastructure. Our engineering team works with you to ensure smooth connection to your current grid system with minimal disruption."
  },
  {
    question: "What is the typical ROI for a RiverWatts system?",
    answer: "Most customers see a return on investment within 3-5 years, depending on water flow conditions and energy needs. Many of our customers report significant cost savings thereafter, with systems designed to last 25+ years."
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-700/5 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge variant="info" className="mb-4">
            FAQ
          </Badge>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Everything you need to know about RiverWatts hydrokinetic power solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="mb-4 rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-blue-800 hover:no-underline py-6 px-6 rounded-2xl transition-colors duration-300 hover:bg-blue-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 px-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}