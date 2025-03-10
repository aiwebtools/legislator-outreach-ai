
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update document title
    document.title = "Page Not Found | Legislator Link GPT";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyber-dark text-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="cyber-text text-9xl font-bold text-cyber-blue mb-4">404</div>
            <h1 className="cyber-text text-4xl font-bold mb-4 cyber-heading">Page Not Found</h1>
            <p className="text-gray-400 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <a 
              href="/" 
              className="cyber-btn inline-flex"
            >
              <span className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Return to Home
              </span>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
