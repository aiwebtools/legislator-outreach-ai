
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Share Your Location",
      description: "Tell us your state, county, and town. Optionally include your registered voting address for the most accurate results.",
      color: "cyber-blue"
    },
    {
      number: "02",
      title: "Get Your Representatives",
      description: "We'll search the web to find all your legislators with their contact information, party affiliation, and other relevant details.",
      color: "cyber-purple"
    },
    {
      number: "03",
      title: "Draft Your Message",
      description: "Use our AI assistance to craft professional emails or public testimonies that maintain your voice and include all your key points.",
      color: "cyber-pink"
    },
    {
      number: "04",
      title: "Make Your Voice Heard",
      description: "Send your message using the provided contact information and follow our guidance for effective follow-up.",
      color: "cyber-orange"
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid z-0 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-purple/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="cyber-text text-3xl md:text-4xl font-bold mb-4 cyber-heading">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connecting with your legislators is a simple, guided process with Legislator Link GPT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="cyber-card rounded-lg overflow-hidden group hover:border-cyber-blue/50 transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className={`text-${step.color} text-3xl font-bold cyber-text mb-4`}>
                  {step.number}
                </div>
                <h3 className="cyber-text text-xl font-bold mb-3 group-hover:text-cyber-blue transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm flex-grow">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center mt-6">
                    <ArrowRight className={`w-6 h-6 text-${step.color} group-hover:translate-x-2 transition-transform duration-300`} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-zbT522yTc-legislator-link-gpt" 
            className="cyber-btn group inline-flex"
          >
            <span className="flex items-center gap-2">
              Get Started Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
