
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqItems: FaqItem[] = [
    {
      question: "What is Legislator Link GPT?",
      answer: "Legislator Link GPT is an AI assistant that helps you connect with your elected representatives by finding their contact information, drafting professional emails, and guiding you through the process of making your voice heard on issues that matter to you."
    },
    {
      question: "How does Legislator Link GPT find my representatives?",
      answer: "When you provide your state, county, and town (and optionally your voting address), Legislator Link GPT performs web searches to find all representatives for your specific area, including their contact details, party affiliation, and other relevant information."
    },
    {
      question: "Is my personal information kept private?",
      answer: "Yes, your privacy is important. Any personal information you provide is used only to help find your representatives and is not stored or shared with third parties. For more details, please review our Privacy Policy."
    },
    {
      question: "Can Legislator Link GPT help with specific legislation?",
      answer: "Absolutely! Legislator Link GPT can research pending legislation that might affect you, break down complex legal language into simpler terms, and help you craft messages specifically addressing these laws."
    },
    {
      question: "How personalized are the emails and testimonies?",
      answer: "The emails and testimonies are highly personalized. Legislator Link GPT maintains your tone and voice while ensuring all your key points are articulated clearly and professionally. It incorporates all information you provide to create communications that truly represent you."
    },
    {
      question: "Can I use Legislator Link GPT for all levels of government?",
      answer: "Yes, Legislator Link GPT can help you connect with representatives at all levels - local, state, and federal. It will identify the appropriate officials based on the information you provide about where you live."
    },
    {
      question: "Is Legislator Link GPT politically biased?",
      answer: "No, Legislator Link GPT is designed to be politically neutral. It helps users of all political affiliations connect with their representatives effectively, regardless of party lines."
    },
    {
      question: "What if I don't know what to say to my representative?",
      answer: "Don't worry! Legislator Link GPT will ask you questions about your concerns and help you articulate your thoughts clearly. It can guide you through the process step by step, making it easy to express your views effectively."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid z-0 opacity-30"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="cyber-text text-3xl md:text-4xl font-bold mb-4 cyber-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about using Legislator Link GPT.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="cyber-card rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full text-left p-5 flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="cyber-text text-lg font-medium text-gray-200">
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-cyber-blue" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyber-blue" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-5 pt-0 border-t border-cyber-blue/20 animate-accordion-down">
                    <p className="text-gray-400">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
