
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Target } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);
  
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
        isScrolled ? 'py-2 sm:py-3 bg-cyber-darker/80 backdrop-blur shadow-lg' : 'py-3 sm:py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-blue animate-pulse" />
              <div className="absolute inset-0 border-2 border-cyber-blue/50 rounded-full animate-spin-slow"></div>
            </div>
            <div className="min-w-0">
              <h1 className="cyber-text text-base sm:text-xl font-bold text-cyber-blue truncate">
                Legislator Link <span className="text-cyber-purple">GPT</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-400 truncate">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="text-cyber-pink hover:text-cyber-purple transition-colors">AiWebTools.Ai</a></p>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {headerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="cyber-link text-xs xl:text-sm cyber-text tracking-wide whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-cyber-blue focus:outline-none p-2 -mr-2 touch-manipulation"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cyber-darker/95 backdrop-blur border-t border-cyber-blue/20">
          <div className="container mx-auto px-3 sm:px-4 py-3">
            <nav className="flex flex-col space-y-1">
              {headerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="cyber-link text-sm cyber-text py-3 px-3 tracking-wide rounded-lg hover:bg-cyber-blue/10 active:bg-cyber-blue/20 transition-colors touch-manipulation"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
