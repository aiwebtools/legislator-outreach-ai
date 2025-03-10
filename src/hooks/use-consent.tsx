
import { useState, useEffect } from 'react';

export const useConsent = () => {
  const [hasConsented, setHasConsented] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already agreed
    const hasAgreed = localStorage.getItem("legislator-link-consent");
    
    if (hasAgreed) {
      setHasConsented(true);
    }
    
    setIsLoading(false);
  }, []);

  const giveConsent = () => {
    localStorage.setItem("legislator-link-consent", "true");
    setHasConsented(true);
  };

  return {
    hasConsented,
    giveConsent,
    isLoading
  };
};
