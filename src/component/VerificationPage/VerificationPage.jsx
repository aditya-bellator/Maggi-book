import React, { useState } from 'react';
import './VerificationPage.css'; // Import the CSS file

const VerificationPage = () => {
  const [code, setCode] = useState(new Array(6).fill(''));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="verification-container">
      <img src="/path/to/logo.png" alt="AllPanel 777" className="logo" /> {/* Replace with your logo path */}
      <h2>Security Code Verification Using Telegram App</h2>
      <p>Enter 6-digit code from your telegram bot <span className="resend-code">Resend Code</span></p>
      <div className="code-inputs">
        {code.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        ))}
      </div>

    </div>
  );
};

export default VerificationPage;
