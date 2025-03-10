
import { ArrowRight } from 'lucide-react';
import YoutubeEmbed from './YoutubeEmbed';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid z-0 opacity-30"></div>
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cyber-blue/20 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-cyber-purple/20 rounded-full filter blur-[100px] animate-pulse"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-3 px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full">
              <p className="text-sm cyber-text text-cyber-blue">AI-Powered Legislative Outreach</p>
            </div>
            
            <h1 className="cyber-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 cyber-heading">
              Connect With Your Legislators
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Research, draft emails, and effectively communicate with your representatives using advanced AI assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="https://chatgpt.com/g/g-zbT522yTc-legislator-link-gpt" 
                className="cyber-btn group"
              >
                <span className="flex items-center gap-2">
                  Use Legislator Link GPT
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#how-it-works" 
                className="text-gray-300 hover:text-cyber-blue transition-colors duration-300 flex items-center gap-1"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <YoutubeEmbed videoId="DbYKQ-JU5EI" />
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 border border-cyber-blue/30 rounded-lg rotate-12"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 border border-cyber-purple/30 rounded-lg -rotate-12"></div>
          </div>
        </div>
        
        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            {
              title: "Find Representatives",
              description: "Discover all your local legislators with their contact information",
              icon: "⟁",
              color: "cyber-blue"
            },
            {
              title: "Research Legislation",
              description: "Get insights on pending laws and how they affect you",
              icon: "⌬",
              color: "cyber-purple"
            },
            {
              title: "Draft Communications",
              description: "Create professional emails and public testimonies that represent you",
              icon: "⊡",
              color: "cyber-pink"
            }
          ].map((feature, index) => (
            <div key={index} className="cyber-card p-6 rounded-lg group hover:border-cyber-blue/50 transition-all duration-300">
              <div className={`text-${feature.color} text-3xl mb-4 cyber-text`}>{feature.icon}</div>
              <h3 className="cyber-text text-xl font-bold mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
