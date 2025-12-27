
import { useState } from 'react';
export default function Home() {
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' }
  ];
  const [language, setLanguage] = useState('en');
  const [step, setStep] = useState(0);

  const handleContinue = () => setStep(1);

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      {step === 0 && (
        <div>
          <h1>Welcome to BigNxt AG</h1>
          <p>Getting Together, Growing Together</p>
          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value=''>Select Language</option>
            {languages.map((l) => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
          <br /><br />
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
      {step === 1 && (
        <div>
          <h2>Farmer Registration</h2>
          <p>Language selected: {language}</p>
          <form id='farmerForm'>
            <input type='text' placeholder='Full Name' required /><br /><br />
            <input type='tel' placeholder='Mobile Number (+91)' required /><br /><br />
            <input type='text' placeholder='Farm Name' required /><br /><br />
            <input type='text' placeholder='District' required /><br /><br />
            <input type='text' placeholder='Taluk' required /><br /><br />
            <input type='number' placeholder='Total Area (acres)' required /><br /><br />
            <input type='text' placeholder='Current Crop' required /><br /><br />
            <input type='date' placeholder='Sowing Date' required /><br /><br />
            <input type='date' placeholder='Expected Harvest Date' required /><br /><br />
            <input type='number' placeholder='Expected Yield' required /><br /><br />
            <input type='file' accept='image/*' /><br /><br />
            <button type='submit' onClick={(e) => {
              e.preventDefault();
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                  (pos) => {
                    alert('Registration Complete! Your location: ' + pos.coords.latitude + ', ' + pos.coords.longitude);
                  },
                  () => { alert('GPS access is required to register.'); }
                );
              } else { alert('GPS not supported.'); }
            }}>Register</button>
          </form>
        </div>
      )}
    </div>
  );
}
