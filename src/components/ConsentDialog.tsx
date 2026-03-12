
import { useEffect, useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConsentDialogProps {
  onAgree: () => void;
}

const ConsentDialog = ({ onAgree }: ConsentDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already agreed
    const hasAgreed = localStorage.getItem("legislator-link-consent");
    
    if (!hasAgreed) {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    // Save to localStorage
    localStorage.setItem("legislator-link-consent", "true");
    setIsOpen(false);
    onAgree();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-cyber-dark border border-cyber-blue text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="cyber-text text-2xl font-bold text-cyber-blue">
            Disclaimer
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Before using Legislator Link GPT, please review our terms.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 text-gray-300 text-sm space-y-4">
          <p>
            Legislator Link GPT provides information to help you connect with your elected representatives. This service is provided "as-is" without any warranties.
          </p>
          <p>
            By continuing, you agree to our <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="cyber-link text-cyber-blue underline">Terms of Service</a> and acknowledge our <a href="https://openai.com/policies/privacy-policy/" className="cyber-link text-cyber-blue underline">Privacy Policy</a>.
          </p>
          <p>
            We are not affiliated with any government agency or political party. All information should be verified independently.
          </p>
        </div>
        
        <DialogFooter>
          <Button 
            onClick={handleAgree}
            className="w-full bg-cyber-blue hover:bg-cyber-blue/80 text-white font-bold py-2 px-4 border border-cyber-blue/50 shadow-[0_0_10px_rgba(14,165,233,0.5)]"
          >
            I AGREE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentDialog;
