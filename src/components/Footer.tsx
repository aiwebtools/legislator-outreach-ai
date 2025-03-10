
import { Target } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'Legislator Link GPT', href: 'https://chatgpt.com/g/g-zbT522yTc-legislator-link-gpt' },
    { name: 'WRITE YOUR OWN LAWS WITH AI', href: 'https://legislationwritergpt.lovable.app/' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://www.aiwebtools.ai' },
  ];
  
  const legalLinks = [
    { name: 'Privacy Policy', href: 'https://openai.com/policies/privacy-policy/' },
    { name: 'Terms of Service', href: 'https://aiwebtools.ai/terms-of-services' },
  ];
  
  return (
    <footer className="bg-cyber-darker border-t border-cyber-blue/10 pt-12 pb-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-cyber-blue" />
              <div>
                <h3 className="cyber-text text-xl font-bold text-cyber-blue">
                  Legislator Link <span className="text-cyber-purple">GPT</span>
                </h3>
                <p className="text-xs text-gray-400">Presented by <a href="https://www.aiwebtools.ai" className="text-cyber-pink hover:text-cyber-purple transition-colors">AiWebTools.Ai</a></p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Connect with your local legislators easily. Research, draft emails, and make your voice heard with AI assistance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-cyber-blue">Email:</span>
                <a href="mailto:Contact@ai-webtools.com" className="cyber-link text-sm">
                  Contact@ai-webtools.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyber-blue">Phone:</span>
                <a href="tel:+14758008096" className="cyber-link text-sm">
                  (475) 800-8096
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="cyber-text text-lg text-cyber-purple mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="cyber-link text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="cyber-text text-lg text-cyber-purple mb-4">Legal</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="cyber-link text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* More AI Tools Button */}
            <a 
              href="https://www.aiwebtools.ai" 
              className="inline-block cyber-btn rounded-full overflow-hidden"
            >
              <span className="px-4 py-2 inline-block">More AI Tools</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-cyber-blue/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © 2025 <a href="https://www.aiwebtools.ai" className="cyber-link">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.aiwebtools.ai" className="text-cyber-blue hover:text-cyber-purple transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.aiwebtools.ai" className="text-cyber-blue hover:text-cyber-purple transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://www.aiwebtools.ai" className="text-cyber-blue hover:text-cyber-purple transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
