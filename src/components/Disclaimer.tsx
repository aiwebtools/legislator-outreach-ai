
const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-neon-glow z-0"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="cyber-text text-3xl md:text-4xl font-bold mb-4 cyber-heading">
            Legal Disclaimer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Important information about using Legislator Link GPT.
          </p>
        </div>
        
        <div className="cyber-card rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="p-8">
            <div className="space-y-6 text-gray-300 text-sm">
              <p>
                <strong className="cyber-text text-cyber-blue">General Information Only:</strong> Legislator Link GPT provides general information and assistance for contacting elected representatives. The information provided is not legal, political, or professional advice. Users should verify all information independently.
              </p>
              
              <p>
                <strong className="cyber-text text-cyber-blue">Accuracy:</strong> While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy, completeness, or currency of information provided. Contact details for representatives may change, and legislative information may be updated.
              </p>
              
              <p>
                <strong className="cyber-text text-cyber-blue">No Endorsement:</strong> Legislator Link GPT does not endorse any political party, candidate, or position. Our service is politically neutral and designed to assist citizens of all political affiliations in connecting with their elected representatives.
              </p>
              
              <p>
                <strong className="cyber-text text-cyber-blue">User Responsibility:</strong> Users are solely responsible for the content of any communications they send to representatives using information or drafts provided by Legislator Link GPT. Users should review and modify any AI-generated content before sending.
              </p>
              
              <p>
                <strong className="cyber-text text-cyber-blue">Privacy and Security:</strong> While we do not store personal information unnecessarily, the information you provide to find your representatives (such as your address) is processed by our AI system. Please review our <a href="https://openai.com/policies/privacy-policy/" className="cyber-link">Privacy Policy</a> for more details.
              </p>
              
              <p>
                <strong className="cyber-text text-cyber-blue">Third-Party Information:</strong> Legislator Link GPT uses web searches to gather information about representatives and legislation. We are not responsible for the content, accuracy, or practices of third-party sources.
              </p>
              
              <p>
                <strong className="cyber-text text-cyber-blue">Limitation of Liability:</strong> AI WEB TOOLS LLC and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of Legislator Link GPT.
              </p>
              
              <p>
                <strong className="cyber-text text-cyber-blue">Terms of Service:</strong> By using Legislator Link GPT, you agree to our <a href="https://aiwebtools.ai/terms-of-services" className="cyber-link">Terms of Service</a>, which include additional terms and conditions governing your use of the service.
              </p>
              
              <p>
                <strong className="cyber-text text-cyber-blue">Contact:</strong> If you have any questions about this disclaimer, please contact us at <a href="mailto:Contact@ai-webtools.com" className="cyber-link">Contact@ai-webtools.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
