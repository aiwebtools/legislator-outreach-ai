
import { useState, useEffect } from 'react';
import { Menu, X, Target } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const headerLinks = [
    { name: 'Legislator Link GPT', href: 'https://chatgpt.com/g/g-zbT522yTc-legislator-link-gpt' },
    { name: 'WRITE YOUR OWN LAWS WITH AI', href: 'https://legislationwritergpt.lovable.app/' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://aiwebtools.lovable.app/?via=aiwebtools' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-cyber-darker/80 backdrop-blur shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Target className="w-8 h-8 text-cyber-blue animate-pulse" />
              <div className="absolute inset-0 border-2 border-cyber-blue/50 rounded-full animate-spin-slow"></div>
            </div>
            <div>
              <h1 className="cyber-text text-xl font-bold text-cyber-blue">
                Legislator Link <span className="text-cyber-purple">GPT</span>
              </h1>
              <p className="text-xs text-gray-400">Presented by <a href="https://www.aiwebtools.ai" className="text-cyber-pink hover:text-cyber-purple transition-colors">AiWebTools.Ai</a></p>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {headerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="cyber-link text-sm cyber-text tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyber-blue focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cyber-darker/90 backdrop-blur animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {headerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="cyber-link text-sm cyber-text py-2 tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
