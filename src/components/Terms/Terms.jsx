import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="font-sans text-gray-700 max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <p className="mb-4 text-sm text-black">
        Welcome to MWNAM. By using our website, you agree to these Terms & Conditions. If you
        disagree, please do not use our site.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>1. Purpose of Website</h2>
      <p className="mb-2">Our website provides:</p>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-1">Information about health awareness and community initiatives</li>
        <li className="mb-1">Volunteer and donation participation opportunities</li>
        <li className="mb-1">Educational resources and mission updates</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>2. Eligibility</h2>
      <p className="mb-4">Users must be 18+ or have parental supervision to use this website.</p>

      <h2 className="text-2xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>3. Use of Content</h2>
      <p className="mb-2 font-semibold">All content is MWNAM property. You may:</p>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-1">View and download for personal use only</li>
        <li className="mb-1">Not reproduce without written permission</li>
      </ul>

      <h2 className=" text-2xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>4. Vending Machine Disclaimer</h2>
      <p className="mb-4 text-sm text-gray-500">Our vending machines promote public health anonymously. We're not liable for product misuse.</p>

      <h2 className="text-2xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>5. Donations</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-1">All donations are voluntary and non-refundable</li>
        <li className="mb-1">We use donations to best support our mission</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>6. Volunteer Participation</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-1">Provide accurate signup information</li>
        <li className="mb-1">Follow all safety guidelines provided</li>
        <li className="mb-1">Participate at your own risk</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>7. Third-Party Links</h2>
      <p className="mb-4 text-sm text-gray-500">We're not responsible for external website content, privacy policies, or practices.</p>

      <h2 className="text-2xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>8. Limitation of Liability</h2>
      <p className="mb-4 text-sm text-gray-500">We strive for accuracy but make no guarantees. We're not liable for damages from website use.</p>

      <h2 className="text-2xl font-bold text-[#1A2A6C] mt-8 mb-3"style={{ fontFamily: "'Merriweather', serif" }}>9. Changes to Terms</h2>
      <p className="mb-4 text-sm text-gray-500">We may update these terms anytime. Continued use means acceptance of changes.</p>

      <h2 className="text-2xl font-bold text-[#1A2A6C] mt-8 mb-3"style={{ fontFamily: "'Merriweather', serif" }}>10. Contact Us</h2>
      <p className="text-sm text-gray-500">For questions about these terms, contact MWNAM at Doimukh, Arunachal Pradesh or email <a href="mailto:support@mwnam.in" className="text-blue-600 hover:underline">support@mwnam.in</a>.</p>
    </div>
  );
};

export default TermsAndConditions;