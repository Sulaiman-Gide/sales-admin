import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const PhoneNumberInput = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={onChange}
        placeholder="Enter phone number"
      />
    </div>
  );
};

export default PhoneNumberInput;

