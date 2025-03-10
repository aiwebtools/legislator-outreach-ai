
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Portland, Oregon",
      text: "Legislator Link GPT helped me easily find and contact my representatives about a local environmental issue. The email it drafted was professional and persuasive - I received a response within days!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&crop=faces&q=60"
    },
    {
      name: "Marcus T.",
      location: "Atlanta, Georgia",
      text: "As a small business owner, I needed to voice concerns about pending legislation. This tool not only found all my representatives but helped me understand the laws that would affect my business.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=faces&q=60"
    },
    {
      name: "Elena R.",
      location: "Chicago, Illinois",
      text: "I used to feel intimidated about contacting elected officials. Legislator Link GPT made the process so straightforward and guided me through each step. Now I feel empowered to participate in local governance.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&crop=faces&q=60"
    },
    {
      name: "David W.",
      location: "Austin, Texas",
      text: "The step-by-step guidance was exactly what I needed. The tool found representatives I didn't even know I had! The email templates were professionally written while keeping my personal voice.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&crop=faces&q=60"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);
  
  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-cyber-darker to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyber-darker to-transparent z-0"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="cyber-text text-3xl md:text-4xl font-bold mb-4 cyber-heading">
            User Experiences
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how Legislator Link GPT has empowered people to connect with their representatives.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="cyber-card rounded-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden neon-border">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <div className="flex mb-2 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < testimonials[currentIndex].rating ? 'text-cyber-yellow fill-cyber-yellow' : 'text-gray-600'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div>
                    <h4 className="cyber-text text-cyber-blue text-lg font-bold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-cyber-blue w-6' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
