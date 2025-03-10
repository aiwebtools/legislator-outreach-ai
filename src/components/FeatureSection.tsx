
import { useState } from 'react';
import { CheckCircle, Search, Mail, FileText, GanttChart, RefreshCw } from 'lucide-react';

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    {
      title: "Find Your Representatives",
      description: "Get a comprehensive list of all your local, state, and federal representatives based on your location. We provide complete contact information including phone numbers, emails, and addresses.",
      icon: <Search className="w-6 h-6" />,
      image: "bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center"
    },
    {
      title: "Research Legislation",
      description: "Stay informed about pending legislation that might affect you. Our AI helps you understand complex legal documents in simple terms and keeps you updated on the latest developments.",
      icon: <FileText className="w-6 h-6" />,
      image: "bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center"
    },
    {
      title: "Draft Professional Emails",
      description: "Create compelling, professional emails to your representatives. Our AI helps you articulate your thoughts clearly while maintaining your personal voice and including all your key points.",
      icon: <Mail className="w-6 h-6" />,
      image: "bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')] bg-cover bg-center"
    },
    {
      title: "Create Public Testimonies",
      description: "Prepare effective public testimonies for hearings and town halls. Our AI helps you craft persuasive arguments and organize your thoughts for maximum impact.",
      icon: <GanttChart className="w-6 h-6" />,
      image: "bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center"
    },
    {
      title: "Step-by-Step Guidance",
      description: "Never feel lost in the process. Our AI breaks down complex advocacy tasks into manageable steps, guiding you through each part of the process with clear instructions.",
      icon: <RefreshCw className="w-6 h-6" />,
      image: "bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center"
    }
  ];
  
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-neon-glow z-0"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="cyber-text text-3xl md:text-4xl font-bold mb-4 cyber-heading">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Legislator Link GPT provides all the tools you need to effectively connect with your representatives and make your voice heard.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="cyber-card rounded-lg overflow-hidden h-full">
              <div className="p-4">
                <h3 className="cyber-text text-xl font-bold mb-6 text-center text-cyber-blue">
                  Key Capabilities
                </h3>
                
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                        activeTab === index 
                          ? 'bg-cyber-blue/20 border border-cyber-blue/50' 
                          : 'hover:bg-white/5'
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      <div className={`${
                        activeTab === index ? 'text-cyber-blue' : 'text-gray-400'
                      }`}>
                        {feature.icon}
                      </div>
                      <span className={`cyber-text ${
                        activeTab === index ? 'text-cyber-blue' : 'text-gray-300'
                      }`}>
                        {feature.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="cyber-card rounded-lg overflow-hidden h-full">
              <div className={`h-48 ${features[activeTab].image}`}></div>
              <div className="p-6">
                <h3 className="cyber-text text-xl font-bold mb-3 text-cyber-blue">
                  {features[activeTab].title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {features[activeTab].description}
                </p>
                
                <div className="space-y-3">
                  {[
                    "Detailed and accurate information",
                    "Web research from multiple sources",
                    "Personalized assistance based on your needs",
                    "Step-by-step guidance through complex processes"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyber-blue shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-400">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
