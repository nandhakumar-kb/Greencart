import React, { useState } from 'react';
import { assets } from '../assets/assets';

const AddAddress = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const isValid = firstName && lastName && email && street && city && state && zipCode && country && phone;
    setIsFormValid(isValid);
  };

  const handleSaveAddress = () => {
    // Basic form validation before saving
    if (!isFormValid) {
      alert('Please fill in all the fields correctly.');
      return;
    }

    console.log({
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zipCode,
      country,
      phone,
    });
    alert('Address saved!');
  };

  // Effect to validate form whenever input changes
  React.useEffect(() => {
    validateForm();
  }, [firstName, lastName, email, street, city, state, zipCode, country, phone]);

  return (
    <div className="flex max-w-4xl mx-auto p-10 bg-gray-100 rounded-lg shadow-md items-center justify-between">
      <div className="flex-1 mr-10">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Add Shipping Address</h2>
        <div className="flex flex-col">
          <div className="flex gap-5 mb-5">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-green-500"
              aria-label="First Name"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-green-500"
              aria-label="Last Name"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-5 text-gray-700 focus:ring-2 focus:ring-green-500"
            aria-label="Email"
          />
          <input
            type="text"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-5 text-gray-700 focus:ring-2 focus:ring-green-500"
            aria-label="Street"
          />
          <div className="flex gap-5 mb-5">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-green-500"
              aria-label="City"
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-green-500"
              aria-label="State"
            />
          </div>
          <div className="flex gap-5 mb-5">
            <input
              type="text"
              placeholder="Zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-green-500"
              aria-label="Zip code"
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-green-500"
              aria-label="Country"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-5 text-gray-700 focus:ring-2 focus:ring-green-500"
            aria-label="Phone"
          />
          <button
            onClick={handleSaveAddress}
            disabled={!isFormValid}
            className={`bg-primary text-white p-4 rounded-md hover:bg-green-600 transition-colors ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            SAVE ADDRESS
          </button>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img src={assets.add_address_iamge} alt="Shipping Illustration" className="w-80 h-80" />
      </div>
    </div>
  );
};

export default AddAddress;
