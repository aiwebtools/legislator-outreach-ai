
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
              <p className="text-sm cyber-text text-cyber-blue">Free AI Tool by AIWEBTOOLS.AI</p>
            </div>
            
            <h1 className="cyber-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 cyber-heading">
              Connect With Your Legislators Using AI
            </h1>
            
            <h2 className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Free AI tool to research, draft emails, and effectively communicate with your representatives. Part of AIWEBTOOLS.AI's suite of powerful AI web tools for civic engagement.
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="https://chatgpt.com/g/g-zbT522yTc-legislator-link-gpt" 
                className="cyber-btn group"
                title="Use Legislator Link GPT - Free AI Tool"
              >
                <span className="flex items-center gap-2">
                  Use Free AI Tool
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#how-it-works" 
                className="text-gray-300 hover:text-cyber-blue transition-colors duration-300 flex items-center gap-1"
                title="Learn how this free AI tool works"
              >
                Learn More About This AI Tool
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* SEO-friendly content */}
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ Completely free AI tool</p>
              <p>✓ No registration required</p>
              <p>✓ Powered by advanced AI technology</p>
              <p>✓ Part of AIWEBTOOLS.AI ecosystem</p>
            </div>
          </div>
          
          <div className="relative">
            <YoutubeEmbed videoId="DbYKQ-JU5EI" title="Legislator Link GPT - Free AI Tool Demo" />
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 border border-cyber-blue/30 rounded-lg rotate-12"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 border border-cyber-purple/30 rounded-lg -rotate-12"></div>
          </div>
        </div>
        
        {/* Features Preview with SEO-friendly content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            {
              title: "Find Representatives with AI",
              description: "Our free AI tool discovers all your local legislators with their contact information instantly",
              icon: "⟁",
              color: "cyber-blue"
            },
            {
              title: "AI-Powered Research",
              description: "Get AI-assisted insights on pending laws and how they affect you using our free research tools",
              icon: "⌬",
              color: "cyber-purple"
            },
            {
              title: "AI Email Drafting",
              description: "Create professional emails and public testimonies with our free AI writing assistant",
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
