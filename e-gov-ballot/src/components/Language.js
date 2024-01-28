import React, { useState } from 'react';
import "../styles/Lang.css";

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Language</option>
        <option value="en">English</option>
        <option value="fr">தமிழ்</option>
        <option value="es">हिंदी</option>
      </select>
    </div>
  );
}

export default LanguageDropdown;