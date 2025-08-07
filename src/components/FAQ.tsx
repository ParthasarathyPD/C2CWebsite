import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What workshop formats do you offer?",
      answer: "We offer flexible formats to suit your schedule: 1-day intensive workshops (₹25,000), 2-day comprehensive programs (₹50,000), and 5-day deep-dive experiences (₹125,000). Each format is designed to maximize learning outcomes within the time frame."
    },
    {
      question: "Who are your trainers?",
      answer: "Our trainers are distinguished graduates from IITs, BITS Pilani, and IIITs, all holding PhDs. They bring diverse experience from startups, MNCs, and academia, ensuring you get both theoretical depth and practical insights from industry leaders."
    },
    {
      question: "What makes your teaching methodology unique?",
      answer: "We focus on engaging Gen Z learners through active learning, gamification, AI tools, and inclusive design. Our workshops go beyond traditional CS education to include research methodology, ethics in tech, and creative coding approaches."
    },
    {
      question: "Which workshop track should I choose?",
      answer: "Choose based on your priorities: 'Engaging Gen Z Learners' for modern pedagogy, 'Getting Started with Research' for academic growth, 'AI Tools Deep Dive' for cutting-edge technology integration, or 'Inclusive Education' for accessibility-focused teaching."
    },
    {
      question: "Do you provide hands-on training with AI tools?",
      answer: "Absolutely! Our AI Tools Deep Dive track includes hands-on experience with 35+ generative AI tools, AutoML platforms, AI-powered teaching assistants, and tools for feedback and grading. You'll leave with practical skills you can implement immediately."
    },
    {
      question: "How do you support research-oriented faculty?",
      answer: "Our 'Getting Started with Research' track is perfect for non-PhD faculty and early researchers. We cover problem identification, grant writing, academic writing, publication strategies, and provide access to essential research tools like Zotero, Overleaf, and LaTeX."
    },
    {
      question: "What is included in the Learning Analytics workshop?",
      answer: "You'll learn to leverage LMS analytics, create dashboards, implement predictive modeling for at-risk students, design real-time feedback systems, and use code analysis tools - all while maintaining privacy compliance and ethical standards."
    },
    {
      question: "Do you offer workshops on teaching ethics in CS?",
      answer: "Yes! Our 'Teaching Ethics, Fairness, and Sustainability in Tech' track covers algorithmic fairness, data privacy ethics, environmental impact of computing, and frameworks like Responsible AI and Tech for Good through scenario-based learning."
    }
  ];

  return (
    <section id="programs" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our professional development workshops
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="gradient-card border border-border rounded-lg px-6 shadow-soft"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;