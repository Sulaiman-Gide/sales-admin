import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState();

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome to My App</h1>
        <div className="w-full max-w-md">
        <PhoneInput
            international
            defaultCountry="US"
            value={phoneNumber}
            onChange={setPhoneNumber}
            placeholder="Enter phone number"
            inputStyle={{
                border: '1px solid #e5e7eb',
                margin: '8px',
                padding: '8px',
                borderRadius: '0.375rem',
                outline: 'none', // Removing the focus border
                boxShadow: 'none' // Removing the focus box shadow
            }}
        />
        </div>
      </div>
    </div>
  );
};

export default Login;
