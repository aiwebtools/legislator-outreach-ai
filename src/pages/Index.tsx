
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import ConsentDialog from '@/components/ConsentDialog';
import { useToast } from "@/hooks/use-toast";
import YoutubeEmbed from '@/components/YoutubeEmbed';

const Index = () => {
  const { toast } = useToast();
  const [hasAgreed, setHasAgreed] = useState(false);
  
  useEffect(() => {
    // Update document title
    document.title = "Legislator Link GPT | Connect With Your Representatives";
    
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && link.origin === window.location.origin) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL
          history.pushState(null, '', link.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const handleConsent = () => {
    setHasAgreed(true);
    toast({
      title: "Welcome to Legislator Link GPT",
      description: "Thank you for agreeing to our terms. You can now explore the full features.",
      duration: 5000,
    });
  };
  
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Header />
      
      <main>
        <HeroSection />
        {/* YouTube Video embed */}
        <div className="container max-w-4xl mx-auto px-4 py-10">
          <YoutubeEmbed 
            videoId="DbYKQ-JU5EI" 
            title="Legislator Link GPT Demo"
            autoplay={true}
          />
        </div>
        <FeatureSection />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      
      <Footer />
      
      {/* Consent Dialog */}
      <ConsentDialog onAgree={handleConsent} />
    </div>
  );
};

export default Index;
