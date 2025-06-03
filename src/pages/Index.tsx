
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
    // Update document title with SEO optimization
    document.title = "Legislator Link GPT - AI Tool for Connecting with Representatives | Free AI Tools by AIWEBTOOLS.AI";
    
    // Add meta description for better SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free AI tool to connect with your legislators. Find representatives, research legislation, draft professional emails with AI assistance. Part of AIWEBTOOLS.AI\'s suite of free AI tools for civic engagement.');
    }
    
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
      description: "Thank you for agreeing to our terms. You can now explore the full features of this free AI tool.",
      duration: 5000,
    });
  };
  
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      {/* SEO-friendly header structure */}
      <Header />
      
      <main>
        {/* Hidden SEO content for better keyword targeting */}
        <div className="sr-only">
          <h1>AIWEBTOOLS.AI - Free AI Tools for Everyone</h1>
          <p>Discover powerful free AI tools including Legislator Link GPT, legislation writing tools, and more AI web tools from AI WEB TOOLS LLC. Our suite of free AI tools helps with civic engagement, government communication, and legislative research.</p>
        </div>
        
        <HeroSection />
        
        {/* YouTube Video embed with SEO optimization */}
        <section className="container max-w-4xl mx-auto px-4 py-10" aria-label="Legislator Link GPT Demo Video">
          <h2 className="sr-only">How to Use Legislator Link GPT - Free AI Tool Demo</h2>
          <YoutubeEmbed 
            videoId="DbYKQ-JU5EI" 
            title="Legislator Link GPT Demo - Free AI Tool for Connecting with Representatives"
            autoplay={true}
          />
        </section>
        
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
