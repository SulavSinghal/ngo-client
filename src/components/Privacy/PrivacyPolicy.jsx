import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="font-sans text-gray-700 max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      <p className="mb-4 text-black" >
        MWNAM ("we," "us," "our") is committed to protecting the privacy and personal information of
        our visitors, volunteers, donors, and partners. This Privacy Policy outlines how we collect, use,
        store, and safeguard your data when you interact with our website and our initiatives, including
        public health projects, donation drives, plantation programs, and other community services.
      </p>

      <h2 className="text-2xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>1. Information We Collect</h2>
      <h3 className=" text-xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>a) Personal Information (provided voluntarily):</h3>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-1">Name, email address, phone number, postal address.</li>
        <li className="mb-1">Volunteer sign-ups (date, event, and service area).</li>
        <li className="mb-1">Donation records (amount, date, method – excluding sensitive banking details).</li>
      </ul>

      <h3 className=" text-xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>b) Automatically Collected Information:</h3>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-1">IP address, browser type, device information.</li>
        <li className="mb-1">Website usage statistics through cookies or similar technologies.</li>
      </ul>

      <h3 className=" text-xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>c) Sensitive Information:</h3>
      <p className="mb-4">
        We do not collect any medical history or personal sexual health records from vending machine users.
        Condom vending machines operate anonymously and without tracking.
      </p>

      <h2 className=" text-xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 mb-4" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        <li className="mb-1">Facilitate volunteer coordination and event management.</li>
        <li className="mb-1">Process and acknowledge donations.</li>
        <li className="mb-1">Share news and stories about our work and impact.</li>
        <li className="mb-1">Improve website functionality and user experience.</li>
        <li className="mb-1">Comply with legal and regulatory obligations.</li>
      </ul>

      <h2 className="text-xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>3. How We Share Your Information</h2>
      <p className="mb-2">We respect your privacy and do not sell or rent your data.</p>
      <p className="mb-4">We may share your information only:</p>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-1">With trusted service providers assisting in operations (under confidentiality agreements).</li>
        <li className="mb-1">When required by law or government authorities.</li>
        <li className="mb-1">With your explicit consent for specific collaborations.</li>
      </ul>

      <h2 className="text-xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>4. Data Security</h2>
      <p className="mb-4">
        We implement technical, administrative, and physical safeguards to protect your information from unauthorized
        access, loss, misuse, or alteration.
      </p>

      <h2 className="text-xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>5. Cookies & Tracking</h2>
      <p className="mb-4">
        Our website may use cookies to improve browsing experience and analyze site traffic. You may disable cookies
        in your browser settings, though some features may not function properly.
      </p>

      <h2 className="text-xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>6. Your Rights</h2>
      <p className="mb-2">You have the right to:</p>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-1">Access, correct, or delete your personal data.</li>
        <li className="mb-1">Withdraw consent for communications.</li>
        <li className="mb-1">Request information on how your data is processed.</li>
      </ul>
      <p className="mb-4">
        To exercise these rights, please contact us at: <a href="mailto:support@mwnam.in" className="text-[#1A2A6C] hover:underline">support@mwnam.in</a>
      </p>

      <h2 className="text-xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>7. Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. We are not responsible for their privacy practices and
        encourage you to review their policies.
      </p>

      <h2 className="text-xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised “Last
        Updated” date.
      </p>

      <h2 className="text-xl font-bold text-[#1A2A6C] mt-8 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>9. Contact Us</h2>
      <p className="mb-2">For any questions or concerns about this Privacy Policy or our data practices, please contact:</p>
      <p className="mb-4">
        MWNAM<br />
        Dobumukh, Arunachal Pradesh<br />
        Email: <a href="mailto:support@mwnam.in" className="text-[#1A2A6C] hover:underline">support@mwnam.in</a>
      </p>

      <p className="font-ibm-plex-sans text-sm text-gray-500 mt-8 text-right italic">Last Updated: August 2025</p>
    </div>
  );
};

export default PrivacyPolicy;